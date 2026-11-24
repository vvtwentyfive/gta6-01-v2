// Neon Harbor (gta6-01) capture + playthrough harness.
// Usage: node scripts/capture.mjs [shots|play]
//   shots — 4 real renders at 1920x1080 into screenshots/ (1-chase, 2-street,
//           3-mission, 4-map), each under 256 KiB, adaptive JPEG quality.
//   play  — headless playthrough: load, start, move, enter a car, start a
//           mission, shoot, save; reports state, console errors and any
//           external (http/https) request.
// The game is opened offline from file:// — zero network by construction.
// The hook is window.__game (state/step/shot/teleport/vehicles/enterCar/
// missionStart/setWanted/shoot/save). There is no __shotReady.
import { createRequire } from 'node:module';
import { mkdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire('/home/hatch/workspace/tools/playwright/package.json');
const { chromium } = require('playwright');

const REPO = '/home/hatch/workspace/makefun/bounties/gta6-01';
const CHROME = '/home/hatch/workspace/tools/ms-playwright/chromium-1187/chrome-linux/chrome';
const SHOTS_DIR = join(REPO, 'screenshots');
const GAME = `file://${REPO}/game/index.html`;
const MODE = process.argv[2] || 'shots';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function newPage() {
  const browser = await chromium.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'],
  });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  const errors = [];
  const failedReqs = [];
  const externalReqs = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
  page.on('requestfailed', (r) => failedReqs.push(r.url() + ' ' + (r.failure()?.errorText || '')));
  page.on('response', (r) => { if (r.status() >= 400) failedReqs.push(r.url() + ' HTTP ' + r.status()); });
  page.on('request', (r) => {
    if (/^https?:/.test(r.url())) {
      externalReqs.push(r.url());
      // Abort anything that would leave the machine: the game is offline.
      void r.abort().catch(() => {});
    }
  });
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (/^https?:/.test(url)) return route.abort();
    return route.continue();
  });
  return { browser, page, errors, failedReqs, externalReqs };
}

function report(name, errors, failedReqs, externalReqs) {
  console.log(`--- ${name}: ${errors.length} console errors, ${failedReqs.length} failed requests, ${externalReqs.length} external requests`);
  for (const e of errors.slice(0, 10)) console.log('  ERR:', String(e).slice(0, 300));
  for (const f of failedReqs.slice(0, 10)) console.log('  REQ:', String(f).slice(0, 200));
  for (const h of externalReqs.slice(0, 10)) console.log('  EXT:', String(h).slice(0, 200));
}

const state = (page) => page.evaluate(() => window.__game.state());

async function waitGame(page) {
  await page.waitForFunction(() => window.__game && typeof window.__game.state === 'function', null, { timeout: 30000 });
  await sleep(2000); // let the first frames render and the city settle
}

/** Take a JPEG at 1920x1080; drop quality until it fits under 256 KiB. */
async function shoot(page, name) {
  const out = join(SHOTS_DIR, name);
  for (const q of [72, 58, 45, 32]) {
    await page.screenshot({ type: 'jpeg', quality: q, path: out });
    const bytes = statSync(out).size;
    console.log(`  ${name}: quality ${q} -> ${bytes} bytes`);
    if (bytes < 256 * 1024) return { name, bytes, quality: q };
  }
  const bytes = statSync(out).size;
  console.log(`  ${name}: STILL OVER 256 KiB at quality 32 (${bytes} bytes)`);
  return { name, bytes, quality: 32, over: true };
}

/** Teleport the player onto a parked car and get in. Returns the car kind. */
async function getInCar(page) {
  const v = await page.evaluate(() => {
    const list = window.__game.vehicles();
    const pick = list.find((x) => x.kind === 'sedan' || x.kind === 'sports')
      || list.find((x) => x.kind !== 'police') || list[0];
    window.__game.teleport(pick.x, pick.z);
    window.__game.enterCar();
    return pick;
  });
  await sleep(500);
  const s = await state(page);
  console.log(`  in car: ${s.inCar} (${v.kind} at ${v.x.toFixed(0)}, ${v.z.toFixed(0)})`);
  return s.inCar;
}

async function shots() {
  mkdirSync(SHOTS_DIR, { recursive: true });
  const results = [];

  // 1-chase: high-speed chase on the causeway, 3 stars, skyline + sunset.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=chase&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await getInCar(page);
    await page.evaluate(() => window.__game.teleport(440, 0)); // causeway
    await page.keyboard.down('KeyW');
    await sleep(2000); // build speed down the causeway
    await page.keyboard.up('KeyW');
    await sleep(4000); // let the cruisers close in
    console.log('  chase state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '1-chase.jpg'));
    report('1-chase', errors, failedReqs, externalReqs);
    await browser.close();
  }

  // 2-street: on foot in a busy street, mission beam, gang corner, 1 star.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=street&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await page.evaluate(() => {
      window.__game.missionStart(1); // First Keys: steal a sedan...
    });
    await getInCar(page); // ...stealing it completes stage 1, so the
    await page.evaluate(() => window.__game.enterCar()); // garage beam appears
    await page.evaluate(() => window.__game.setWanted(1)); // ...then step out, on foot
    await sleep(3000);
    console.log('  street state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '2-street.jpg'));
    report('2-street', errors, failedReqs, externalReqs);
    await browser.close();
  }

  // 3-mission: finale action at the ferris wheel, heli searchlight, 5 stars.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=mission&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await page.evaluate(() => {
      window.__game.missionStart(7); // Ferris Finale
      window.__game.teleport(520, -30); // pier island, ferris wheel ahead
    });
    await sleep(6000); // let the helicopter spawn and circle in
    console.log('  mission state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '3-mission.jpg'));
    report('3-mission', errors, failedReqs, externalReqs);
    await browser.close();
  }

  // 4-map: full-screen map with GPS route, waypoint and district labels.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await page.evaluate(() => {
      window.__game.start();
      window.__game.missionStart(2); // Hot Delivery: go-stage marker = waypoint + route
      window.__game.shot('map'); // state 'map', night, big map up
    });
    await sleep(2500);
    console.log('  map state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '4-map.jpg'));
    report('4-map', errors, failedReqs, externalReqs);
    await browser.close();
  }

  console.log('SHOTS DONE:', JSON.stringify(results));
  const bad = results.filter((r) => r.over);
  if (bad.length) { console.error('OVER-SIZE SHOTS:', JSON.stringify(bad)); process.exit(1); }
}

async function retake() {
  // Re-shoot 1-3 only (4-map was good). The headless sim runs ~50x slower
  // than real time under swiftshader, so real sleeps barely advance the
  // world (banners stay up, police never arrive): use the synchronous
  // __game.step(n) hook to fast-forward game time instead. The camera's
  // default yaw faces +z (south), so each scene puts the player NORTH of
  // its subject and lets the default framing do the work.
  mkdirSync(SHOTS_DIR, { recursive: true });
  const results = [];

  // 1-chase: same causeway setup, but fast-forward 15 game-seconds so the
  // three cruisers spawn and converge and the heli circles in.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=chase&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await getInCar(page);
    await page.evaluate(() => window.__game.teleport(440, 0)); // causeway
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.__game.step(300));
      console.log('  chase step:', JSON.stringify(await state(page)));
    }
    await sleep(1500);
    results.push(await shoot(page, '1-chase.jpg'));
    report('1-chase', errors, failedReqs, externalReqs);
    await browser.close();
  }

  // 2-street: bright afternoon, on foot north of the Vipers' corner —
  // mission beam + gang in frame looking south, 1 star set last so the
  // heat cannot decay below a star before the shutter.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=street&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await page.evaluate(() => {
      window.__game.setTimeOfDay(16.5); // bright afternoon street
      window.__game.missionStart(4); // Loud Message: Vipers on their corner
      window.__game.step(180); // spawn the gang, clear the banner
      window.__game.teleport(80, 30); // north of the corner (80, 80)
      window.__game.step(60);
    });
    await page.evaluate(() => window.__game.setWanted(1));
    await sleep(1200);
    console.log('  street state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '2-street.jpg'));
    report('2-street', errors, failedReqs, externalReqs);
    await browser.close();
  }

  // 3-mission: stand north of the ferris wheel so the whole wheel, the
  // boss gang and the heli fit the frame; fast-forward past the banner.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=mission&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await page.evaluate(() => {
      window.__game.missionStart(7); // Ferris Finale
      window.__game.teleport(560, -90); // pier island, wheel 90u south
      window.__game.step(300); // spawn gang, clear banner, heli circles in
    });
    await sleep(1500);
    console.log('  mission state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '3-mission.jpg'));
    report('3-mission', errors, failedReqs, externalReqs);
    await browser.close();
  }

  console.log('RETAKE DONE:', JSON.stringify(results));
  const bad = results.filter((r) => r.over);
  if (bad.length) { console.error('OVER-SIZE SHOTS:', JSON.stringify(bad)); process.exit(1); }
}

async function retake2() {
  // Second polish pass on 2-street and 3-mission only (1-chase and 4-map
  // are keepers). setWanted(2) lands on exactly 1 star: the first decay
  // step drops heat 2.0 -> 1.99, which floors to 1, and it holds there
  // for ~11 game-seconds; setWanted(1) falls to 0 on the first step.
  mkdirSync(SHOTS_DIR, { recursive: true });
  const results = [];

  // 2-street: closer to the corner so the player and the Vipers read
  // bigger, and a stable 1 star.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=street&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await page.evaluate(() => {
      window.__game.setTimeOfDay(16.5);
      window.__game.missionStart(4);
      window.__game.step(180); // spawn the gang, clear the banner
      window.__game.teleport(80, 55); // 25u north of the corner (80, 80)
      window.__game.step(120); // gang closes in, wanted settles
    });
    await page.evaluate(() => window.__game.setWanted(2)); // -> 1 star
    await page.evaluate(() => window.__game.step(30));
    await sleep(1200);
    console.log('  street state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '2-street.jpg'));
    report('2-street', errors, failedReqs, externalReqs);
    await browser.close();
  }

  // 3-mission: stand further back so the whole ferris wheel fits the
  // frame instead of cropping at the top.
  {
    const { browser, page, errors, failedReqs, externalReqs } = await newPage();
    await page.goto(`${GAME}?shot=mission&seed=1337`, { waitUntil: 'load' });
    await waitGame(page);
    await page.evaluate(() => {
      window.__game.missionStart(7);
      window.__game.teleport(560, -130); // pier island, wheel 130u south
      window.__game.step(300);
    });
    await sleep(1500);
    console.log('  mission state:', JSON.stringify(await state(page)));
    results.push(await shoot(page, '3-mission.jpg'));
    report('3-mission', errors, failedReqs, externalReqs);
    await browser.close();
  }

  console.log('RETAKE2 DONE:', JSON.stringify(results));
  const bad = results.filter((r) => r.over);
  if (bad.length) { console.error('OVER-SIZE SHOTS:', JSON.stringify(bad)); process.exit(1); }
}

async function retake3() {
  // 3-mission only: (560,-130) was in the water, so the city pushed the
  // player to the island's dark west edge. (560,-100) is on the island,
  // and an upward camera drag lowers the rig pitch so the whole wheel
  // fits the frame instead of cropping at the top.
  mkdirSync(SHOTS_DIR, { recursive: true });
  const { browser, page, errors, failedReqs, externalReqs } = await newPage();
  await page.goto(`${GAME}?shot=mission&seed=1337`, { waitUntil: 'load' });
  await waitGame(page);
  await page.evaluate(() => {
    window.__game.missionStart(7);
    window.__game.teleport(560, -100); // pier island, wheel 100u south
    window.__game.step(300);
  });
  await page.mouse.move(960, 540);
  await page.mouse.down();
  await page.mouse.move(960, 460, { steps: 12 }); // drag up: pitch down
  await page.mouse.up();
  await page.evaluate(() => window.__game.step(90)); // settle the camera
  await sleep(1500);
  console.log('  mission state:', JSON.stringify(await state(page)));
  const r = await shoot(page, '3-mission.jpg');
  report('3-mission', errors, failedReqs, externalReqs);
  await browser.close();
  console.log('RETAKE3 DONE:', JSON.stringify([r]));
  if (r.over) { console.error('OVER-SIZE SHOT'); process.exit(1); }
}

async function play() {
  const { browser, page, errors, failedReqs, externalReqs } = await newPage();
  await page.goto(`${GAME}?seed=1337`, { waitUntil: 'load' });
  await waitGame(page);
  const log = [];
  const s0 = await state(page);
  log.push(['load', `state=${s0.state} steps=${s0.steps} vehicles=${s0.vehicles} traffic=${s0.traffic} peds=${s0.peds} errors=${JSON.stringify(s0.errors)}`]);
  await page.evaluate(() => window.__game.start());
  await page.keyboard.down('KeyW');
  await sleep(1500);
  await page.keyboard.up('KeyW');
  const s1 = await state(page);
  log.push(['move', `state=${s1.state} pos=${s1.pos} speed=${s1.speed} steps=${s1.steps}`]);
  const inCar = await getInCar(page);
  await page.keyboard.down('KeyW');
  await sleep(1500);
  await page.keyboard.up('KeyW');
  const s2 = await state(page);
  log.push(['drive', `inCar=${s2.inCar} pos=${s2.pos} speed=${s2.speed}`]);
  await page.evaluate(() => window.__game.missionStart(1));
  await sleep(1000);
  const s3 = await state(page);
  log.push(['mission', `mission=${s3.mission} active=${s3.missionActive} objective="${s3.objective}" marker=${JSON.stringify(s3.marker)}`]);
  const shot0 = await page.evaluate(() => window.__game.state().ammo);
  await page.evaluate(() => window.__game.shoot());
  await sleep(300);
  const s4 = await state(page);
  log.push(['shoot', `weapon=${s4.weaponLabel} ammo ${shot0} -> ${s4.ammo} gangAlive=${s4.gang}`]);
  const saved = await page.evaluate(() => window.__game.save());
  const hp = await page.evaluate(() => window.__game.hurt(10));
  const s5 = await state(page);
  log.push(['save+hurt', `saved=${saved} hp=${hp} wanted=${s5.wanted} time=${s5.timeOfDay}`]);
  await page.evaluate(() => window.__game.step(120));
  const s6 = await state(page);
  log.push(['step120', `steps=${s6.steps} fps=${s6.fps} errors=${JSON.stringify(s6.errors)}`]);
  for (const [k, v] of log) console.log(`PLAY ${k}: ${v}`);
  const pass = s0.state === 'title' && s1.state === 'playing'
    && (s1.pos[0] !== s0.pos[0] || s1.pos[1] !== s0.pos[1])
    && inCar && s2.inCar && s3.missionActive && saved && s6.errors.length === 0;
  console.log(`PLAYTHROUGH: ${pass ? 'PASS' : 'FAIL'}`);
  report('playthrough', errors, failedReqs, externalReqs);
  await browser.close();
  if (!pass) process.exit(1);
}

if (MODE === 'play') await play();
else if (MODE === 'retake') await retake();
else if (MODE === 'retake2') await retake2();
else if (MODE === 'retake3') await retake3();
else await shots();
