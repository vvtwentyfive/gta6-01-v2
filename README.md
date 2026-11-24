# Neon Harbor

[![make.fun](https://make.fun/badge/gta6-01.svg)](https://make.fun/bounty/gta6-01)
[![rank](https://make.fun/badge/gta6-01/vvtwentyfive/gta6-01-v2/rank.svg)](https://make.fun/bounty/gta6-01)
[![reward](https://make.fun/badge/gta6-01/vvtwentyfive/gta6-01-v2/reward.svg)](https://make.fun/bounty/gta6-01)

Neon Harbor is a 3D open-world crime game that runs entirely in your browser.
You are Rook Calloway, a small-time hustler in a seeded harbor city at dusk:
steal cars, outrun the police, and work your way through seven story missions
from fixer Vera Kwan and kingpin Silas Vane — from stealing your first sedan
to the showdown at the ferris wheel on the pier island.

## How to run

No install step, no build step, no network connection. The game is plain
static files under `game/` (one bundled classic script, `game/bundle.js`)
that load offline. Serve the folder with any static server and open it in
desktop Chrome, or open `game/index.html` directly:

```sh
node serve.ts
# then open http://localhost:8080
```

On the title screen, press **Enter** (or click) to start. Your first job —
"First Keys", steal a sedan and bring it to Vera's garage — is already live:
the current objective is always shown on the HUD, with a destination blip on
the minimap. Finish it and she pays $200 and hands you a pistol.

## Controls

| Key | Action |
| --- | --- |
| W / A / S / D or arrow keys | Move on foot / drive (S brakes and reverses while driving) |
| Shift | Sprint on foot |
| Space | Handbrake while driving |
| E | Enter or exit a car (steal a driven car to carjack it) |
| Mouse click / hold | Shoot (once you have a gun) |
| Mouse drag | Orbit the camera |
| 1–5 | Switch weapon (fists, pistol, SMG, shotgun, grenade) |
| R | Reload |
| G | Throw a grenade |
| N | Start the next story mission |
| T | Start a taxi fare |
| C | Start a street race |
| B | Buy at a shop |
| Q | Change radio station |
| M | Full-screen map (GPS route, waypoint, district labels) |
| P or Esc | Pause / resume |
| Enter | Start the game from the title screen |
| F3 | Debug overlay |

## Features

- **Open city, 3D:** a seeded harbor city — downtown towers, a park, a
  stadium, harbor docks, and a pier island with a ferris wheel reached by a
  causeway — with driveable streets, traffic, and pedestrians.
- **Cars to steal and drive:** seven vehicle kinds (sedan, sports, SUV,
  truck, bus, police cruiser, motorcycle), each with its own handling.
  Carjack a driven car and its driver flees.
- **Wanted system:** stealing a car or hurting someone raises your wanted
  level (stars on the HUD). Police cruisers give chase and ram you, set up
  roadblocks at three stars, and a helicopter with a searchlight circles
  overhead at high heat. Get busted and the run ends; get wasted and you
  wake up at the hospital $200 lighter.
- **Missions and story:** a chain of seven story jobs with objectives,
  on-screen dialogue, and a glowing destination beam — car theft, courier
  runs, losing the heat, gang hits, a bank vault, and the ferris-wheel
  finale. After the story, free roam continues with taxi fares, street
  races, hidden sun coins, and stunt jumps.
- **Combat:** five weapons with ammo, reloads, and grenades; gang members
  fight back on their corner.
- **Day and night:** the clock runs from dusk through night to day; at
  night the streets darken, lamps and neon glow, and headlights come on.
  Rain rolls in with wet streets.
- **HUD and maps:** wanted stars, clock, health and armor, cash, mission
  objective, dialogue, weapon and ammo, and a live minimap that tracks you,
  your destination, sun coins, fares, and police — plus a full-screen map
  with a GPS route to your waypoint.
- **Sound:** procedural WebAudio — engine hum, sirens, gunfire, and three
  radio stations (NEON FM, HARBOR 92, PIER JAZZ).
- **Save:** progress (cash, missions done, collectibles) is saved in the
  browser between visits.
- **Deterministic:** seed 1337 always builds the same city and the same
  traffic, so every run is reproducible.

## Tech

- Three.js, bundled with esbuild into one classic script (`game/bundle.js`,
  IIFE, minified) — no modules, no import maps, no CDN, no network.
- TypeScript sources under `game/src/`, one file per job: city, vehicles,
  traffic, peds, police, missions, combat, audio, economy, HUD, render,
  camera, input, loop.
- Node 22, standard library only. The entry program (`main.ts`) copies
  `game/` and `screenshots/` to the output directory and writes
  `dossier.json`. Nothing in the game makes a network request.
- Screenshots in `screenshots/` are real frames rendered by the game's own
  code at 1920×1080: each one plays the real rules forward from the fixed
  seed and is captured headless in Chromium.

## Screenshots

1. **1-chase.jpg** — a high-speed police chase on the causeway: three wanted
   stars, the helicopter, minimap, and mission objective on the HUD, with
   the skyline and sunset behind you.
2. **2-street.jpg** — on foot in a busy street: pedestrians, traffic, and
   stealable cars, with the first mission's destination beam and dialogue.
3. **3-mission.jpg** — mission action at the ferris wheel: five wanted
   stars, the police helicopter's searchlight, and the finale objective.
4. **4-map.jpg** — the full-screen map: GPS route, waypoint, and district
   labels across the whole city.

## License

MIT — see [LICENSE](LICENSE).

---

Play it, share it, and if you sign up through my link it supports this work:
https://make.fun/?ref=073t4skd
