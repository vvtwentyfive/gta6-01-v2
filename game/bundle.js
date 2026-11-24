"use strict";(()=>{var Dc=0,ol=1,Lc=2;var ks=1,Jr=2,ji=3,Ln=0,Lt=1,Nt=2,Mn=0,hi=1,Mi=2,ll=3,cl=4,Nc=5,Yn=100,Fc=101,Uc=102,Oc=103,Bc=104,zc=200,kc=201,Hc=202,Vc=203,Ar=204,Rr=205,Gc=206,Wc=207,Xc=208,qc=209,Yc=210,Zc=211,$c=212,Jc=213,Kc=214,Kr=0,Qr=1,jr=2,ui=3,ea=4,ta=5,na=6,ia=7,hl=0,Qc=1,jc=2,fn=0,ul=1,dl=2,fl=3,Hs=4,pl=5,ml=6,gl=7;var xl=300,Qn=301,bi=302,sa=303,ra=304,Vs=306,di=1e3,_n=1001,Cr=1002,It=1003,eh=1004;var Gs=1005;var Dt=1006,aa=1007;var jn=1008;var Yt=1009,_l=1010,vl=1011,es=1012,oa=1013,pn=1014,on=1015,bn=1016,la=1017,ca=1018,ts=1020,yl=35902,Ml=35899,bl=1021,Sl=1022,ln=1023,vn=1026,ei=1027,ha=1028,ua=1029,Si=1030,da=1031;var fa=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,pa=35840,ma=35841,ga=35842,xa=35843,_a=36196,va=37492,ya=37496,Ma=37488,ba=37489,Sa=37490,Ea=37491,Ta=37808,wa=37809,Aa=37810,Ra=37811,Ca=37812,Ia=37813,Pa=37814,Da=37815,La=37816,Na=37817,Fa=37818,Ua=37819,Oa=37820,Ba=37821,za=36492,ka=36494,Ha=36495,Va=36283,Ga=36284,Wa=36285,Xa=36286;var gs=2300,Ir=2301,wr=2302,Ko=2400,Qo=2401,jo=2402;var th=3200;var El=0,nh=1,On="",Ot="srgb",fi="srgb-linear",xs="linear",tt="srgb";var ci=7680;var el=519,ih=512,sh=513,rh=514,qa=515,ah=516,oh=517,Ya=518,lh=519,tl=35044;var Tl="300 es",dn=2e3,_s=2001;function wl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ch(){let s=vs("canvas");return s.style.display="block",s}var cc={},Xi=null;function Al(...s){let e="THREE."+s.shift();Xi?Xi("log",e,...s):console.log(e,...s)}function De(...s){let e="THREE."+s.shift();Xi?Xi("warn",e,...s):console.warn(e,...s)}function Ie(...s){let e="THREE."+s.shift();Xi?Xi("error",e,...s):console.error(e,...s)}function qi(...s){let e=s.join(" ");e in cc||(cc[e]=!0,De(...s))}function hh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ao=Math.PI/180,ys=180/Math.PI;function Zs(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function _u(s,e){return(s%e+e)%e}function Ro(s,e,t){return(1-t)*s+t*e}function cs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Xe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],x=r[a+2],_=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==x){let m=c*d+l*p+h*x+u*_;m<0&&(d=-d,p=-p,x=-x,_=-_,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),T=Math.sin(S);f=Math.sin(f*S)/T,o=Math.sin(o*S)/T,c=c*f+d*o,l=l*f+p*o,h=h*f+x*o,u=u*f+_*o}else{c=c*f+d*o,l=l*f+p*o,h=h*f+x*o,u=u*f+_*o;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*u+c*p-l*d,e[t+1]=c*x+h*d+l*u-o*p,e[t+2]=l*x+h*p+o*d-c*u,e[t+3]=h*x-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),p=c(i/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"YZX":this._x=d*h*u+l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u-d*p*x;break;case"XZY":this._x=d*h*u-l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u+d*p*x;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new C,hc=new St,ze=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],_=i[0],m=i[3],f=i[6],S=i[1],T=i[4],E=i[7],A=i[2],w=i[5],R=i[8];return r[0]=a*_+o*S+c*A,r[3]=a*m+o*T+c*w,r[6]=a*f+o*E+c*R,r[1]=l*_+h*S+u*A,r[4]=l*m+h*T+u*w,r[7]=l*f+h*E+u*R,r[2]=d*_+p*S+x*A,r[5]=d*m+p*T+x*w,r[8]=d*f+p*E+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,x=t*u+n*d+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Io=new ze,uc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vu(){let s={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?xs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[fi]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),s}var Je=vu();function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Pi,Pr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=vs("canvas")),Pi.width=e.width,Pi.height=e.height;let i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yu=0,Yi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Po(i[a].image)):r.push(Po(i[a]))}else r=Po(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Po(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Mu=0,Do=new C,Ht=class s extends Nn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=_n,i=_n,r=Dt,a=jn,o=ln,c=Yt,l=s.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Zs(),this.name="",this.source=new Yi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=xl;Ht.DEFAULT_ANISOTROPY=1;var pt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],x=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,E=(p+1)/2,A=(f+1)/2,w=(h+d)/4,R=(u+_)/4,N=(x+m)/4;return T>E&&T>A?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=R/n):E>A?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=w/i,r=N/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=N/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dr=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Ht(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Dr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ms=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),ar.subVectors(this.max,hs),Di.subVectors(e.a,hs),Li.subVectors(e.b,hs),Ni.subVectors(e.c,hs),kn.subVectors(Li,Di),Hn.subVectors(Ni,Li),ri.subVectors(Di,Ni);let t=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!Lo(t,Di,Li,Ni,ar)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Di,Li,Ni,ar))?!1:(or.crossVectors(kn,Hn),t=[or.x,or.y,or.z],Lo(t,Di,Li,Ni,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},An=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,rr=new yn,Di=new C,Li=new C,Ni=new C,kn=new C,Hn=new C,ri=new C,hs=new C,ar=new C,or=new C,ai=new C;function Lo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ai.fromArray(s,r);let o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),c=e.dot(ai),l=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var bu=new yn,us=new C,No=new C,Fn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);let t=us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(No)),this.expandByPoint(us.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rn=new C,Fo=new C,lr=new C,Vn=new C,Uo=new C,cr=new C,Oo=new C,bs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fo.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Fo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(lr),o=Vn.dot(this.direction),c=-Vn.dot(lr),l=Vn.lengthSq(),h=Math.abs(1-a*a),u,d,p,x;if(h>0)if(u=a*c-o,d=a*o-c,x=r*h,u>=0)if(d>=-x)if(d<=x){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fo).addScaledVector(lr,d),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,r){Uo.subVectors(t,e),cr.subVectors(n,e),Oo.crossVectors(Uo,cr);let a=this.direction.dot(Oo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);let c=o*this.direction.dot(cr.crossVectors(Vn,cr));if(c<0)return null;let l=o*this.direction.dot(Uo.cross(Vn));if(l<0||c+l>a)return null;let h=-o*Vn.dot(Oo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,p,x,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,p,x,_,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,p,x,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+x*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,x=l*h,_=l*u;t[0]=d+_*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,x=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=x*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=x*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+x,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,p=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Su,e,Eu)}lookAt(e,t,n){let i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Gn.crossVectors(n,Jt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Gn.crossVectors(n,Jt)),Gn.normalize(),hr.crossVectors(Jt,Gn),i[0]=Gn.x,i[4]=hr.x,i[8]=Jt.x,i[1]=Gn.y,i[5]=hr.y,i[9]=Jt.y,i[2]=Gn.z,i[6]=hr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],_=n[6],m=n[10],f=n[14],S=n[3],T=n[7],E=n[11],A=n[15],w=i[0],R=i[4],N=i[8],v=i[12],b=i[1],D=i[5],z=i[9],U=i[13],W=i[2],$=i[6],G=i[10],Y=i[14],Q=i[3],de=i[7],ae=i[11],he=i[15];return r[0]=a*w+o*b+c*W+l*Q,r[4]=a*R+o*D+c*$+l*de,r[8]=a*N+o*z+c*G+l*ae,r[12]=a*v+o*U+c*Y+l*he,r[1]=h*w+u*b+d*W+p*Q,r[5]=h*R+u*D+d*$+p*de,r[9]=h*N+u*z+d*G+p*ae,r[13]=h*v+u*U+d*Y+p*he,r[2]=x*w+_*b+m*W+f*Q,r[6]=x*R+_*D+m*$+f*de,r[10]=x*N+_*z+m*G+f*ae,r[14]=x*v+_*U+m*Y+f*he,r[3]=S*w+T*b+E*W+A*Q,r[7]=S*R+T*D+E*$+A*de,r[11]=S*N+T*z+E*G+A*ae,r[15]=S*v+T*U+E*Y+A*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],x=e[3],_=e[7],m=e[11],f=e[15],S=c*p-l*d,T=o*p-l*u,E=o*d-c*u,A=a*p-l*h,w=a*d-c*h,R=a*u-o*h;return t*(_*S-m*T+f*E)-n*(x*S-m*A+f*w)+i*(x*T-_*A+f*R)-r*(x*E-_*w+m*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],x=e[12],_=e[13],m=e[14],f=e[15],S=u*m*l-_*d*l+_*c*p-o*m*p-u*c*f+o*d*f,T=x*d*l-h*m*l-x*c*p+a*m*p+h*c*f-a*d*f,E=h*_*l-x*u*l+x*o*p-a*_*p-h*o*f+a*u*f,A=x*u*c-h*_*c-x*o*d+a*_*d+h*o*m-a*u*m,w=t*S+n*T+i*E+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=S*R,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*R,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*R,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*p-n*c*p)*R,e[4]=T*R,e[5]=(h*m*r-x*d*r+x*i*p-t*m*p-h*i*f+t*d*f)*R,e[6]=(x*c*r-a*m*r-x*i*l+t*m*l+a*i*f-t*c*f)*R,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*p+t*c*p)*R,e[8]=E*R,e[9]=(x*u*r-h*_*r-x*n*p+t*_*p+h*n*f-t*u*f)*R,e[10]=(a*_*r-x*o*r+x*n*l-t*_*l-a*n*f+t*o*f)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(h*_*i-x*u*i+x*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(x*o*i-a*_*i-x*n*c+t*_*c+a*n*m-t*o*m)*R,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,x=r*u,_=a*h,m=a*u,f=o*u,S=c*l,T=c*h,E=c*u,A=n.x,w=n.y,R=n.z;return i[0]=(1-(_+f))*A,i[1]=(p+E)*A,i[2]=(x-T)*A,i[3]=0,i[4]=(p-E)*w,i[5]=(1-(d+f))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(x+T)*R,i[9]=(m-S)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Fi.set(i[0],i[1],i[2]).length(),a=Fi.set(i[4],i[5],i[6]).length(),o=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),hn.copy(this);let l=1/r,h=1/a,u=1/o;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=dn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),x,_;if(c)x=r/(a-r),_=a*r/(a-r);else if(o===dn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_s)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=dn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),x,_;if(c)x=1/(a-r),_=a/(a-r);else if(o===dn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===_s)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Fi=new C,hn=new Ze,Su=new C(0,0,0),Eu=new C(1,1,1),Gn=new C,hr=new C,Jt=new C,fc=new Ze,pc=new St,jt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tu=0,mc=new C,Ui=new St,Cn=new Ze,ur=new C,ds=new C,wu=new C,Au=new St,gc=new C(1,0,0),xc=new C(0,1,0),_c=new C(0,0,1),vc={type:"added"},Ru={type:"removed"},Oi={type:"childadded",child:null},Bo={type:"childremoved",child:null},Et=class s extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new C,t=new jt,n=new St,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ze}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(xc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(xc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ds,ur,this.up):Cn.lookAt(ur,ds,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Et.DEFAULT_UP=new C(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new C,In=new C,zo=new C,Pn=new C,Bi=new C,zi=new C,yc=new C,ko=new C,Ho=new C,Vo=new C,Go=new pt,Wo=new pt,Xo=new pt,qn=class s{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),In.subVectors(n,t),zo.subVectors(e,t);let a=un.dot(un),o=un.dot(In),c=un.dot(zo),l=In.dot(In),h=In.dot(zo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),In.subVectors(e,t),un.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Bi.subVectors(i,n),zi.subVectors(r,n),ko.subVectors(e,n);let c=Bi.dot(ko),l=zi.dot(ko);if(c<=0&&l<=0)return t.copy(n);Ho.subVectors(e,i);let h=Bi.dot(Ho),u=zi.dot(Ho);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Bi,a);Vo.subVectors(e,r);let p=Bi.dot(Vo),x=zi.dot(Vo);if(x>=0&&p<=x)return t.copy(r);let _=p*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(zi,o);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return yc.subVectors(r,i),o=(u-h)/(u-h+(p-x)),t.copy(i).addScaledVector(yc,o);let f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function qo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=_u(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qo(a,r,e+1/3),this.g=qo(a,r,e),this.b=qo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Je.workingToColorSpace(Ut.copy(this),e),Math.round(Ye(Ut.r*255,0,255))*65536+Math.round(Ye(Ut.g*255,0,255))*256+Math.round(Ye(Ut.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Ut.copy(this),t);let n=Ut.r,i=Ut.g,r=Ut.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ot){Je.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,i=Ut.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(dr);let n=Ro(Wn.h,dr.h,t),i=Ro(Wn.s,dr.s,t),r=Ro(Wn.l,dr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Re;Re.NAMES=uh;var Cu=0,Un=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=hi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ar,this.blendDst=Rr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ar&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==el&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new C,fr=new Xe,Iu=0,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}};var Es=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ts=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pu=0,an=new Ze,Yo=new Et,ki=new C,Kt=new yn,fs=new yn,Rt=new C,vt=class s extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wl(e)?Ts:Es)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Kt.min,fs.min),Kt.expandByPoint(Rt),Rt.addVectors(Kt.max,fs.max),Kt.expandByPoint(Rt)):(Kt.expandByPoint(fs.min),Kt.expandByPoint(fs.max))}Kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Rt.fromBufferAttribute(o,l),c&&(ki.fromBufferAttribute(e,l),Rt.add(ki)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new C,c[N]=new C;let l=new C,h=new C,u=new C,d=new Xe,p=new Xe,x=new Xe,_=new C,m=new C;function f(N,v,b){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,v),x.fromBufferAttribute(r,b),h.sub(l),u.sub(l),p.sub(d),x.sub(d);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(D),o[N].add(_),o[v].add(_),o[b].add(_),c[N].add(m),c[v].add(m),c[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,v=S.length;N<v;++N){let b=S[N],D=b.start,z=b.count;for(let U=D,W=D+z;U<W;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let T=new C,E=new C,A=new C,w=new C;function R(N){A.fromBufferAttribute(i,N),w.copy(A);let v=o[N];T.copy(v),T.sub(A.multiplyScalar(A.dot(v))).normalize(),E.crossVectors(w,v);let D=E.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,v=S.length;N<v;++N){let b=S[N],D=b.start,z=b.count;for(let U=D,W=D+z;U<W;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,x=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)d[x++]=l[p++]}return new Pt(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mc=new Ze,oi=new bs,pr=new Fn,bc=new C,mr=new C,gr=new C,xr=new C,Zo=new C,_r=new C,Sc=new C,vr=new C,pe=class extends Et{constructor(e=new vt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Zo.fromBufferAttribute(u,e),a?_r.addScaledVector(Zo,h):_r.addScaledVector(Zo.sub(t),h))}t.add(_r)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(pr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(pr,bc)===null||oi.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){let m=d[x],f=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,A=T;E<A;E+=3){let w=o.getX(E),R=o.getX(E+1),N=o.getX(E+2);i=yr(this,f,e,n,l,h,u,w,R,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){let S=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);i=yr(this,a,e,n,l,h,u,S,T,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){let m=d[x],f=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,A=T;E<A;E+=3){let w=E,R=E+1,N=E+2;i=yr(this,f,e,n,l,h,u,w,R,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){let S=m,T=m+1,E=m+2;i=yr(this,a,e,n,l,h,u,S,T,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Du(s,e,t,n,i,r,a,o){let c;if(e.side===Lt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Ln,o),c===null)return null;vr.copy(o),vr.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(vr);return l<t.near||l>t.far?null:{distance:l,point:vr.clone(),object:s}}function yr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,mr),s.getVertexPosition(c,gr),s.getVertexPosition(l,xr);let h=Du(s,e,t,n,mr,gr,xr,Sc);if(h){let u=new C;qn.getBarycoord(Sc,mr,gr,xr,u),i&&(h.uv=qn.getInterpolatedAttribute(i,o,c,l,u,new Xe)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,c,l,u,new Xe)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};qn.getNormal(mr,gr,xr,d.normal),h.face=d,h.barycoord=u}return h}var qe=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function x(_,m,f,S,T,E,A,w,R,N,v){let b=E/R,D=A/N,z=E/2,U=A/2,W=w/2,$=R+1,G=N+1,Y=0,Q=0,de=new C;for(let ae=0;ae<G;ae++){let he=ae*D-U;for(let Le=0;Le<$;Le++){let Ne=Le*b-z;de[_]=Ne*S,de[m]=he*T,de[f]=W,l.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[f]=w>0?1:-1,h.push(de.x,de.y,de.z),u.push(Le/R),u.push(1-ae/N),Y+=1}}for(let ae=0;ae<N;ae++)for(let he=0;he<R;he++){let Le=d+he+$*ae,Ne=d+he+$*(ae+1),ut=d+(he+1)+$*(ae+1),rt=d+(he+1)+$*ae;c.push(Le,Ne,rt),c.push(Ne,ut,rt),Q+=6}o.addGroup(p,Q,v),p+=Q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ei(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){let e={};for(let t=0;t<s.length;t++){let n=Ei(s[t]);for(let i in n)e[i]=n[i]}return e}function Lu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rl(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var dh={clone:Ei,merge:zt},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ws=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new C,Ec=new Xe,Tc=new Xe,Ct=class extends ws{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Tc),t.subVectors(Tc,Ec)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hi=-90,Vi=1,Nr=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ct(Hi,Vi,e,t);i.layers=this.layers,this.add(i);let r=new Ct(Hi,Vi,e,t);r.layers=this.layers,this.add(r);let a=new Ct(Hi,Vi,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Hi,Vi,e,t);o.layers=this.layers,this.add(o);let c=new Ct(Hi,Vi,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Hi,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},As=class extends Ht{constructor(e=[],t=Qn,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rs=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new As(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qe(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Mn});r.uniforms.tEquirect.value=t;let a=new pe(i,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Dt),new Nr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},ft=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uu={type:"move"},Zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Cs=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ps=class extends Ht{constructor(e=null,t=1,n=1,i,r,a,o,c,l=It,h=It,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ds=class extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gi=new Ze,wc=new Ze,Mr=[],Ac=new yn,Ou=new Ze,ps=new pe,ms=new Fn,Gt=class extends pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ou)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Ac.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Ac)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),ms.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),e.ray.intersectsSphere(ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gi),wc.multiplyMatrices(n,Gi),ps.matrixWorld=wc,ps.raycast(e,Mr);for(let a=0,o=Mr.length;a<o;a++){let c=Mr[a];c.instanceId=r,c.object=this,t.push(c)}Mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(i*this.count),i,this.count,ha,on));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$o=new C,Bu=new C,zu=new ze,xn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=$o.subVectors(n,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zu.getNormalMatrix(e),i=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new Fn,ku=new Xe(.5,.5),br=new C,$i=class{constructor(e=new xn,t=new xn,n=new xn,i=new xn,r=new xn,a=new xn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],x=r[8],_=r[9],m=r[10],f=r[11],S=r[12],T=r[13],E=r[14],A=r[15];if(i[0].setComponents(l-a,p-h,f-x,A-S).normalize(),i[1].setComponents(l+a,p+h,f+x,A+S).normalize(),i[2].setComponents(l+o,p+u,f+_,A+T).normalize(),i[3].setComponents(l-o,p-u,f-_,A-T).normalize(),n)i[4].setComponents(c,d,m,E).normalize(),i[5].setComponents(l-c,p-d,f-m,A-E).normalize();else if(i[4].setComponents(l-c,p-d,f-m,A-E).normalize(),t===dn)i[5].setComponents(l+c,p+d,f+m,A+E).normalize();else if(t===_s)i[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let t=ku.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(br.x=i.normal.x>0?e.max.x:e.min.x,br.y=i.normal.y>0?e.max.y:e.min.y,br.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rc=new Ze,nl=new bs,Sr=new Fn,Er=new C,mi=class extends Et{constructor(e=new vt,t=new pi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;Rc.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Rc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=d,_=p;x<_;x++){let m=l.getX(x);Er.fromBufferAttribute(u,m),Cc(Er,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=d,_=p;x<_;x++)Er.fromBufferAttribute(u,x),Cc(Er,x,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cc(s,e,t,n,i,r,a){let o=nl.distanceSqToPoint(s);if(o<t){let c=new C;nl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zn=class extends Ht{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class extends Ht{constructor(e,t,n=pn,i,r,a,o=It,c=It,l,h=vn,u=1){if(h!==vn&&h!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fr=class extends $n{constructor(e,t=pn,n=Qn,i,r,a=It,o=It,c,l=vn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ls=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ji=class s extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new C,h=new Xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class s extends vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],x=0,_=[],m=n/2,f=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(p,2));function S(){let E=new C,A=new C,w=0,R=(t-e)/n;for(let N=0;N<=r;N++){let v=[],b=N/r,D=b*(t-e)+e;for(let z=0;z<=i;z++){let U=z/i,W=U*c+o,$=Math.sin(W),G=Math.cos(W);A.x=D*$,A.y=-b*n+m,A.z=D*G,u.push(A.x,A.y,A.z),E.set($,R,G).normalize(),d.push(E.x,E.y,E.z),p.push(U,1-b),v.push(x++)}_.push(v)}for(let N=0;N<i;N++)for(let v=0;v<r;v++){let b=_[v][N],D=_[v+1][N],z=_[v+1][N+1],U=_[v][N+1];(e>0||v!==0)&&(h.push(b,D,U),w+=3),(t>0||v!==r-1)&&(h.push(D,z,U),w+=3)}l.addGroup(f,w,0),f+=w}function T(E){let A=x,w=new Xe,R=new C,N=0,v=E===!0?e:t,b=E===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),x++;let D=x;for(let z=0;z<=i;z++){let W=z/i*c+o,$=Math.cos(W),G=Math.sin(W);R.x=v*G,R.y=m*b,R.z=v*$,u.push(R.x,R.y,R.z),d.push(0,b,0),w.x=$*.5+.5,w.y=G*.5*b+.5,p.push(w.x,w.y),x++}for(let z=0;z<i;z++){let U=A+z,W=D+z;E===!0?h.push(W,W+1,U):h.push(W+1,W,U),N+=3}l.addGroup(f,N,E===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class s extends Tt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ur=class s extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let T=new C,E=new C,A=new C;for(let w=0;w<t.length;w+=3)p(t[w+0],T),p(t[w+1],E),p(t[w+2],A),c(T,E,A,S)}function c(S,T,E,A){let w=A+1,R=[];for(let N=0;N<=w;N++){R[N]=[];let v=S.clone().lerp(E,N/w),b=T.clone().lerp(E,N/w),D=w-N;for(let z=0;z<=D;z++)z===0&&N===w?R[N][z]=v:R[N][z]=v.clone().lerp(b,z/D)}for(let N=0;N<w;N++)for(let v=0;v<2*(w-N)-1;v++){let b=Math.floor(v/2);v%2===0?(d(R[N][b+1]),d(R[N+1][b]),d(R[N][b])):(d(R[N][b+1]),d(R[N+1][b+1]),d(R[N+1][b]))}}function l(S){let T=new C;for(let E=0;E<r.length;E+=3)T.x=r[E+0],T.y=r[E+1],T.z=r[E+2],T.normalize().multiplyScalar(S),r[E+0]=T.x,r[E+1]=T.y,r[E+2]=T.z}function h(){let S=new C;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let E=m(S)/2/Math.PI+.5,A=f(S)/Math.PI+.5;a.push(E,1-A)}x(),u()}function u(){for(let S=0;S<a.length;S+=6){let T=a[S+0],E=a[S+2],A=a[S+4],w=Math.max(T,E,A),R=Math.min(T,E,A);w>.9&&R<.1&&(T<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,T){let E=S*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function x(){let S=new C,T=new C,E=new C,A=new C,w=new Xe,R=new Xe,N=new Xe;for(let v=0,b=0;v<r.length;v+=9,b+=6){S.set(r[v+0],r[v+1],r[v+2]),T.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),w.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),N.set(a[b+4],a[b+5]),A.copy(S).add(T).add(E).divideScalar(3);let D=m(A);_(w,b+0,S,D),_(R,b+2,T,D),_(N,b+4,E,D)}}function _(S,T,E,A){A<0&&S.x===1&&(a[T]=S.x-1),E.x===0&&E.z===0&&(a[T]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var gi=class s extends Ur{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},en=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],x=[],_=[],m=[];for(let f=0;f<h;f++){let S=f*d-a;for(let T=0;T<l;T++){let E=T*u-r;x.push(E,-S,0),_.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){let T=S+l*f,E=S+l*(f+1),A=S+1+l*(f+1),w=S+1+l*f;p.push(T,E,w),p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new Ke(x,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},xi=class s extends vt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/i,p=new C,x=new Xe;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let f=0;f<n;f++){let S=f+m,T=S,E=S+n+1,A=S+n+2,w=S+1;o.push(T,E,w),o.push(E,A,w)}}this.setIndex(o),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var tn=class s extends vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,d=new C,p=[],x=[],_=[],m=[];for(let f=0;f<=n;f++){let S=[],T=f/n,E=0;f===0&&a===0?E=.5/t:f===n&&c===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let w=A/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+T*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+E,1-T),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let T=h[f][S+1],E=h[f][S],A=h[f+1][S],w=h[f+1][S+1];(f!==0||a>0)&&p.push(T,E,w),(f!==n-1||c<Math.PI)&&p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new Ke(x,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fs=class s extends vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let x=0;x<=i;x++){let _=x/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=i;x++){let _=(i+1)*p+x-1,m=(i+1)*(p-1)+x-1,f=(i+1)*(p-1)+x,S=(i+1)*p+x;a.push(_,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Or=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ae=class extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Br=class extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zr=class extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var _i=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kr=class extends _i{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qo:r=e,o=2*t-n;break;case jo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qo:a=e,c=2*n-t;break;case jo:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),_=x*x,m=_*x,f=-d*m+2*d*_-d*x,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*x+1,T=(-1-p)*m+(1.5+p)*_+.5*x,E=p*m-p*_;for(let A=0;A!==o;++A)r[A]=f*a[h+A]+S*a[l+A]+T*a[c+A]+E*a[u+A];return r}},Hr=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Vr=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},nn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case wr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return wr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ie("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ie("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&xu(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[d+x]||_!==t[p+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Ir;var Jn=class extends nn{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=gs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}};Gr.prototype.ValueTypeName="color";var Wr=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}};Wr.prototype.ValueTypeName="number";var Xr=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)St.slerpFlat(r,0,a,l-o,a,l,c);return r}},Us=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends nn{constructor(e,t,n){super(e,t,n)}};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=gs;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}};qr.prototype.ValueTypeName="vector";var Yr=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],x=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fh=new Yr,Zr=class{constructor(e){this.manager=e!==void 0?e:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Os=class extends vi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jo=new Ze,Ic=new C,Pc=new C,Bs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pc),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},il=class extends Bs{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ys*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},zs=class extends vi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new il}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},sl=class extends Bs{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0}},yi=class extends vi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ki=class extends ws{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rl=class extends Bs{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends vi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new rl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $r=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Cl="\\[\\]\\.:\\/",Hu=new RegExp("["+Cl+"]","g"),Il="[^"+Cl+"]",Vu="[^"+Cl.replace("\\.","")+"]",Gu=/((?:WC+[\/:])*)/.source.replace("WC",Il),Wu=/(WCOD+)?/.source.replace("WCOD",Vu),Xu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),qu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),Yu=new RegExp("^"+Gu+Wu+Xu+qu+"$"),Zu=["material","materials","bones","map"],al=class{constructor(e,t,n){let i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hu,"")}static parseTrackName(e){let t=Yu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Zu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=al;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t0=new Float32Array(1);function Pl(s,e,t,n){let i=$u(n);switch(t){case bl:return s*e;case ha:return s*e/i.components*i.byteLength;case ua:return s*e/i.components*i.byteLength;case Si:return s*e*2/i.components*i.byteLength;case da:return s*e*2/i.components*i.byteLength;case Sl:return s*e*3/i.components*i.byteLength;case ln:return s*e*4/i.components*i.byteLength;case fa:return s*e*4/i.components*i.byteLength;case Ws:case Xs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qs:case Ys:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ma:case xa:return Math.max(s,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(s,8)*Math.max(e,8)/2;case _a:case va:case Ma:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ya:case Sa:case Ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Da:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Na:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case za:case ka:case Ha:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Va:case Ga:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $u(s){switch(s){case Yt:case _l:return{byteLength:1,components:1};case es:case vl:case bn:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case pn:case oa:case on:return{byteLength:4,components:1};case yl:case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Uh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ju(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){let x=u[d],_=u[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){let _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Td=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:ed,alphahash_pars_fragment:td,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:dd,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:xd,clipping_planes_vertex:_d,color_fragment:vd,color_pars_fragment:yd,color_pars_vertex:Md,color_vertex:bd,common:Sd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Td,displacementmap_pars_vertex:wd,displacementmap_vertex:Ad,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Id,colorspace_pars_fragment:Pd,envmap_fragment:Dd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:qd,envmap_vertex:Ud,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:zd,fog_pars_fragment:kd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Zd,lights_phong_fragment:$d,lights_phong_pars_fragment:Jd,lights_physical_fragment:Kd,lights_physical_pars_fragment:Qd,lights_fragment_begin:jd,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:xf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:yf,normal_pars_vertex:Mf,normal_vertex:bf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Af,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:If,project_vertex:Pf,dithering_fragment:Df,dithering_pars_fragment:Lf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Hf,skinning_vertex:Vf,skinnormal_vertex:Gf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:qf,tonemapping_pars_fragment:Yf,transmission_fragment:Zf,transmission_pars_fragment:$f,uv_pars_fragment:Jf,uv_pars_vertex:Kf,uv_vertex:Qf,worldpos_vertex:jf,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:rp,depth_vert:ap,depth_frag:op,distance_vert:lp,distance_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:xp,meshmatcap_vert:_p,meshmatcap_frag:vp,meshnormal_vert:yp,meshnormal_frag:Mp,meshphong_vert:bp,meshphong_frag:Sp,meshphysical_vert:Ep,meshphysical_frag:Tp,meshtoon_vert:wp,meshtoon_frag:Ap,points_vert:Rp,points_frag:Cp,shadow_vert:Ip,shadow_frag:Pp,sprite_vert:Dp,sprite_frag:Lp},ce={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},En={basic:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:zt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:zt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:zt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:zt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:zt([ce.lights,ce.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};En.physical={uniforms:zt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Za={r:0,b:0,g:0},Ti=new jt,Np=new Ze;function Fp(s,e,t,n,i,r,a){let o=new Re(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function x(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function _(T){let E=!1,A=x(T);A===null?f(o,c):A&&A.isColor&&(f(A,1),E=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,E){let A=x(E);A&&(A.isCubeTexture||A.mapping===Vs)?(h===void 0&&(h=new pe(new qe(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Ei(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ti.copy(E.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(Ti)),h.material.toneMapped=Je.getTransfer(A.colorSpace)!==tt,(u!==A||d!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new pe(new en(2,2),new Bt({name:"BackgroundMaterial",uniforms:Ei(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Je.getTransfer(A.colorSpace)!==tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,E){T.getRGB(Za,Rl(s)),n.buffers.color.setClear(Za.r,Za.g,Za.b,E,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(o,c)},render:_,addToRenderList:m,dispose:S}}function Up(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(b,D,z,U,W){let $=!1,G=u(U,z,D);r!==G&&(r=G,l(r.object)),$=p(b,U,z,W),$&&x(b,U,z,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(b,D,z,U),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,D,z){let U=z.wireframe===!0,W=n[b.id];W===void 0&&(W={},n[b.id]=W);let $=W[D.id];$===void 0&&($={},W[D.id]=$);let G=$[U];return G===void 0&&(G=d(c()),$[U]=G),G}function d(b){let D=[],z=[],U=[];for(let W=0;W<t;W++)D[W]=0,z[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:U,object:b,attributes:{},index:null}}function p(b,D,z,U){let W=r.attributes,$=D.attributes,G=0,Y=z.getAttributes();for(let Q in Y)if(Y[Q].location>=0){let ae=W[Q],he=$[Q];if(he===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function x(b,D,z,U){let W={},$=D.attributes,G=0,Y=z.getAttributes();for(let Q in Y)if(Y[Q].location>=0){let ae=$[Q];ae===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));let he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),W[Q]=he,G++}r.attributes=W,r.attributesNum=G,r.index=U}function _(){let b=r.newAttributes;for(let D=0,z=b.length;D<z;D++)b[D]=0}function m(b){f(b,0)}function f(b,D){let z=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;z[b]=1,U[b]===0&&(s.enableVertexAttribArray(b),U[b]=1),W[b]!==D&&(s.vertexAttribDivisor(b,D),W[b]=D)}function S(){let b=r.newAttributes,D=r.enabledAttributes;for(let z=0,U=D.length;z<U;z++)D[z]!==b[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function T(b,D,z,U,W,$,G){G===!0?s.vertexAttribIPointer(b,D,z,W,$):s.vertexAttribPointer(b,D,z,U,W,$)}function E(b,D,z,U){_();let W=U.attributes,$=z.getAttributes(),G=D.defaultAttributeValues;for(let Y in $){let Q=$[Y];if(Q.location>=0){let de=W[Y];if(de===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){let ae=de.normalized,he=de.itemSize,Le=e.get(de);if(Le===void 0)continue;let Ne=Le.buffer,ut=Le.type,rt=Le.bytesPerElement,J=ut===s.INT||ut===s.UNSIGNED_INT||de.gpuType===oa;if(de.isInterleavedBufferAttribute){let j=de.data,ge=j.stride,Ue=de.offset;if(j.isInstancedInterleavedBuffer){for(let ve=0;ve<Q.locationSize;ve++)f(Q.location+ve,j.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<Q.locationSize;ve++)m(Q.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ve=0;ve<Q.locationSize;ve++)T(Q.location+ve,he/Q.locationSize,ut,ae,ge*rt,(Ue+he/Q.locationSize*ve)*rt,J)}else{if(de.isInstancedBufferAttribute){for(let j=0;j<Q.locationSize;j++)f(Q.location+j,de.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let j=0;j<Q.locationSize;j++)m(Q.location+j);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let j=0;j<Q.locationSize;j++)T(Q.location+j,he/Q.locationSize,ut,ae,he*rt,he/Q.locationSize*j*rt,J)}}else if(G!==void 0){let ae=G[Y];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(Q.location,ae);break;case 3:s.vertexAttrib3fv(Q.location,ae);break;case 4:s.vertexAttrib4fv(Q.location,ae);break;default:s.vertexAttrib1fv(Q.location,ae)}}}}S()}function A(){N();for(let b in n){let D=n[b];for(let z in D){let U=D[z];for(let W in U)h(U[W].object),delete U[W];delete D[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let D=n[b.id];for(let z in D){let U=D[z];for(let W in U)h(U[W].object),delete U[W];delete D[z]}delete n[b.id]}function R(b){for(let D in n){let z=n[D];if(z[b.id]===void 0)continue;let U=z[b.id];for(let W in U)h(U[W].object),delete U[W];delete z[b.id]}}function N(){v(),a=!0,r!==i&&(r=i,l(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Op(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*d[_];t.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Bp(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==ln&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let N=R===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==on&&!N)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:E,maxSamples:A,samples:w}}function zp(s){let e=this,t=null,n=0,i=!1,r=!1,a=new xn,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,T=S*4,E=f.clippingState||null;c.value=E,E=h(x,d,T,p);for(let A=0;A!==T;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,x){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,x!==!0||m===null){let f=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,E=p;T!==_;++T,E+=4)a.copy(u[T]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function kp(s){let e=new WeakMap;function t(a,o){return o===sa?a.mapping=Qn:o===ra&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===sa||o===ra)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Rs(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ti=4,ph=[.125,.215,.35,.446,.526,.582],Ai=20,Hp=256,$s=new Ki,mh=new Re,Dl=null,Ll=0,Nl=0,Fl=!1,Vp=new C,Ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Vp}=r;Dl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Ll,Nl),this._renderer.xr.enabled=Fl,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:bn,format:ln,colorSpace:fi,depthBuffer:!1},i=gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gp(r)),this._blurMaterial=Xp(r,e,t),this._ggxMaterial=Wp(r,e,t)}return i}_compileMaterial(e){let t=new pe(new vt,e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,n,i,r){let c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(mh),u.toneMapping=fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new qe,new Vt({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(mh),f=!0);for(let T=0;T<6;T++){let E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let A=this._cubeSize;ns(i,E*A,T>2?A:0,A,A),u.setRenderTarget(i),f&&u.render(_,c),u.render(e,c)}u.toneMapping=p,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Qn||e.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ns(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$s)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,p=u*d,{_lodMax:x}=this,_=this._sizeLods[n],m=3*_*(n>x-ti?n-x+ti:0),f=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,ns(r,m,f,3*_,2*_),i.setRenderTarget(r),i.render(o,$s),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,ns(e,m,f,3*_,2*_),i.setRenderTarget(e),i.render(o,$s)}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ie("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=l;let d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):Ai;m>Ai&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let f=[],S=0;for(let R=0;R<Ai;++R){let N=R/_,v=Math.exp(-N*N/2);f.push(v),R===0?S+=v:R<m&&(S+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-n;let E=this._sizeLods[i],A=3*E*(i>T-ti?i-T+ti:0),w=4*(this._cubeSize-E);ns(t,A,w,3*E,2*E),c.setRenderTarget(t),c.render(u,$s)}};function Gp(s){let e=[],t=[],n=[],i=s,r=s-ti+1+ph.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ti?c=ph[a-s+ti-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,f=1,S=new Float32Array(_*x*p),T=new Float32Array(m*x*p),E=new Float32Array(f*x*p);for(let w=0;w<p;w++){let R=w%3*2/3-1,N=w>2?0:-1,v=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];S.set(v,_*x*w),T.set(d,m*x*w);let b=[w,w,w,w,w,w];E.set(b,f*x*w)}let A=new vt;A.setAttribute("position",new Pt(S,_)),A.setAttribute("uv",new Pt(T,m)),A.setAttribute("faceIndex",new Pt(E,f)),n.push(new pe(A,null)),i>ti&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function gh(s,e,t){let n=new Qt(s,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Wp(s,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Xp(s,e,t){let n=new Float32Array(Ai),i=new C(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function xh(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function _h(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===sa||c===ra,h=c===Qn||c===bi;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ja(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ja(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yp(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&qi("WebGLRenderer: "+n+" extension not supported."),i}}}function Zp(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],s.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,x=u.attributes.position,_=0;if(p!==null){let S=p.array;_=p.version;for(let T=0,E=S.length;T<E;T+=3){let A=S[T+0],w=S[T+1],R=S[T+2];d.push(A,w,w,R,R,A)}}else if(x!==void 0){let S=x.array;_=x.version;for(let T=0,E=S.length/3-1;T<E;T+=3){let A=T+0,w=T+1,R=T+2;d.push(A,w,w,R,R,A)}}else return;let m=new(wl(d)?Ts:Es)(d,1);m.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $p(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,x){x!==0&&(s.drawElementsInstanced(n,p,r,d*a,x),t.update(p,n,x))}function h(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];t.update(m,n,1)}function u(d,p,x,_){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,x);let f=0;for(let S=0;S<x;S++)f+=p[S]*_[S];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jp(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kp(s,e,t){let n=new WeakMap,i=new pt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;p===!0&&(T=1),x===!0&&(T=2),_===!0&&(T=3);let E=o.attributes.position.count*T,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let w=new Float32Array(E*A*4*u),R=new Ms(w,E,A,u);R.type=on,R.needsUpdate=!0;let N=T*4;for(let b=0;b<u;b++){let D=m[b],z=f[b],U=S[b],W=E*A*4*b;for(let $=0;$<D.count;$++){let G=$*N;p===!0&&(i.fromBufferAttribute(D,$),w[W+G+0]=i.x,w[W+G+1]=i.y,w[W+G+2]=i.z,w[W+G+3]=0),x===!0&&(i.fromBufferAttribute(z,$),w[W+G+4]=i.x,w[W+G+5]=i.y,w[W+G+6]=i.z,w[W+G+7]=0),_===!0&&(i.fromBufferAttribute(U,$),w[W+G+8]=i.x,w[W+G+9]=i.y,w[W+G+10]=i.z,w[W+G+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Xe(E,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Qp(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var jp={[ul]:"LINEAR_TONE_MAPPING",[dl]:"REINHARD_TONE_MAPPING",[fl]:"CINEON_TONE_MAPPING",[Hs]:"ACES_FILMIC_TONE_MAPPING",[ml]:"AGX_TONE_MAPPING",[gl]:"NEUTRAL_TONE_MAPPING",[pl]:"CUSTOM_TONE_MAPPING"};function em(s,e,t,n,i){let r=new Qt(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Qt(e,t,{type:bn,depthBuffer:!1,stencilBuffer:!1}),o=new vt;o.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let c=new Or({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new pe(o,c),h=new Ki(-1,1,1,-1,0,1),u=null,d=null,p=!1,x,_=null,m=[],f=!1;this.setSize=function(S,T){r.setSize(S,T),a.setSize(S,T);for(let E=0;E<m.length;E++){let A=m[E];A.setSize&&A.setSize(S,T)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;let T=r.width,E=r.height;for(let A=0;A<m.length;A++){let w=m[A];w.setSize&&w.setSize(T,E)}},this.begin=function(S,T){if(p||S.toneMapping===fn&&m.length===0)return!1;if(_=T,T!==null){let E=T.width,A=T.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return f===!1&&S.setRenderTarget(r),x=S.toneMapping,S.toneMapping=fn,!0},this.hasRenderPass=function(){return f},this.end=function(S,T){S.toneMapping=x,p=!0;let E=r,A=a;for(let w=0;w<m.length;w++){let R=m[w];if(R.enabled!==!1&&(R.render(S,A,E,T),R.needsSwap!==!1)){let N=E;E=A,A=N}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,c.defines={},Je.getTransfer(u)===tt&&(c.defines.SRGB_TRANSFER="");let w=jp[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(_),S.render(l,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}var Oh=new Ht,Bl=new $n(1,1),Bh=new Ms,zh=new Lr,kh=new As,vh=[],yh=[],Mh=new Float32Array(16),bh=new Float32Array(9),Sh=new Float32Array(4);function ss(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=vh[i];if(r===void 0&&(r=new Float32Array(i),vh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ja(s,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function tm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function im(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function sm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function rm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Sh.set(n),s.uniformMatrix2fv(this.addr,!1,Sh),At(t,n)}}function am(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;bh.set(n),s.uniformMatrix3fv(this.addr,!1,bh),At(t,n)}}function om(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Mh.set(n),s.uniformMatrix4fv(this.addr,!1,Mh),At(t,n)}}function lm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function hm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function um(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function dm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function pm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function mm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function gm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Bl.compareFunction=t.isReversedDepthBuffer()?Ya:qa,r=Bl):r=Oh,t.setTexture2D(e||r,i)}function xm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zh,i)}function _m(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kh,i)}function vm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bh,i)}function ym(s){switch(s){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return vm}}function Mm(s,e){s.uniform1fv(this.addr,e)}function bm(s,e){let t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function Sm(s,e){let t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function Em(s,e){let t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function Tm(s,e){let t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wm(s,e){let t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Am(s,e){let t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Rm(s,e){s.uniform1iv(this.addr,e)}function Cm(s,e){s.uniform2iv(this.addr,e)}function Im(s,e){s.uniform3iv(this.addr,e)}function Pm(s,e){s.uniform4iv(this.addr,e)}function Dm(s,e){s.uniform1uiv(this.addr,e)}function Lm(s,e){s.uniform2uiv(this.addr,e)}function Nm(s,e){s.uniform3uiv(this.addr,e)}function Fm(s,e){s.uniform4uiv(this.addr,e)}function Um(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Bl:a=Oh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Om(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zh,r[a])}function Bm(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||kh,r[a])}function zm(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bh,r[a])}function km(s){switch(s){case 5126:return Mm;case 35664:return bm;case 35665:return Sm;case 35666:return Em;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Im;case 35669:case 35673:return Pm;case 5125:return Dm;case 36294:return Lm;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}var zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ym(t.type)}},kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=km(t.type)}},Hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ul=/(\w+)(\])?(\[|\.)?/g;function Eh(s,e){s.seq.push(e),s.map[e.id]=e}function Hm(s,e,t){let n=s.name,i=n.length;for(Ul.lastIndex=0;;){let r=Ul.exec(n),a=Ul.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Eh(t,l===void 0?new zl(o,s,e):new kl(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Hl(o),Eh(t,u)),t=u}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Hm(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Th(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Vm=37297,Gm=0;function Wm(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var wh=new ze;function Xm(s){Je._getMatrix(wh,Je.workingColorSpace,s);let e=`mat3( ${wh.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case xs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ah(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Wm(s.getShaderSource(e),o)}else return r}function qm(s,e){let t=Xm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ym={[ul]:"Linear",[dl]:"Reinhard",[fl]:"Cineon",[Hs]:"ACESFilmic",[ml]:"AgX",[gl]:"Neutral",[pl]:"Custom"};function Zm(s,e){let t=Ym[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $a=new C;function $m(){Je.getLuminanceCoefficients($a);let s=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Km(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qm(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ks(s){return s!==""}function Rh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(s){return s.replace(jm,tg)}var eg=new Map;function tg(s,e){let t=He[e];if(t===void 0){let n=eg.get(e);if(n!==void 0)t=He[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}var ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(s){return s.replace(ng,ig)}function ig(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ph(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var sg={[ks]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function rg(s){return sg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ag={[Qn]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function og(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ag[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var lg={[bi]:"ENVMAP_MODE_REFRACTION"};function cg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hg={[hl]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[jc]:"ENVMAP_BLENDING_ADD"};function ug(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hg[s.combine]||"ENVMAP_BLENDING_NONE"}function dg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fg(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=rg(t),l=og(t),h=cg(t),u=ug(t),d=dg(t),p=Jm(t),x=Km(r),_=i.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ks).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ks).join(`
`),f.length>0&&(f+=`
`)):(m=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),f=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?He.tonemapping_pars_fragment:"",t.toneMapping!==fn?Zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,qm("linearToOutputTexel",t.outputColorSpace),$m(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Vl(a),a=Rh(a,t),a=Ch(a,t),o=Vl(o),o=Rh(o,t),o=Ch(o,t),a=Ih(a),o=Ih(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=S+m+a,E=S+f+o,A=Th(i,i.VERTEX_SHADER,T),w=Th(i,i.FRAGMENT_SHADER,E);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(A)||"",W=i.getShaderInfoLog(w)||"",$=z.trim(),G=U.trim(),Y=W.trim(),Q=!0,de=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{let ae=Ah(i,A,"vertex"),he=Ah(i,w,"fragment");Ie("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+ae+`
`+he)}else $!==""?De("WebGLProgram: Program Info Log:",$):(G===""||Y==="")&&(de=!1);de&&(D.diagnostics={runnable:Q,programLog:$,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(A),i.deleteShader(w),N=new is(i,_),v=Qm(i,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Vm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var pg=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wl(e),t.set(e,n)),n}},Wl=class{constructor(e){this.id=pg++,this.code=e,this.usedTimes=0}};function mg(s,e,t,n,i,r,a){let o=new Ss,c=new Gl,l=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer,p=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,D,z,U){let W=z.fog,$=U.geometry,G=v.isMeshStandardMaterial?z.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),Q=Y&&Y.mapping===Vs?Y.image.height:null,de=x[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,he=ae!==void 0?ae.length:0,Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ne,ut,rt,J;if(de){let it=En[de];Ne=it.vertexShader,ut=it.fragmentShader}else Ne=v.vertexShader,ut=v.fragmentShader,c.update(v),rt=c.getVertexShaderID(v),J=c.getFragmentShaderID(v);let j=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,ve=U.isBatchedMesh===!0,$e=!!v.map,yt=!!v.matcap,ke=!!Y,et=!!v.aoMap,nt=!!v.lightMap,Oe=!!v.bumpMap,at=!!v.normalMap,P=!!v.displacementMap,gt=!!v.emissiveMap,Qe=!!v.metalnessMap,X=!!v.roughnessMap,Z=v.anisotropy>0,M=v.clearcoat>0,g=v.dispersion>0,I=v.iridescence>0,B=v.sheen>0,q=v.transmission>0,H=Z&&!!v.anisotropyMap,xe=M&&!!v.clearcoatMap,se=M&&!!v.clearcoatNormalMap,be=M&&!!v.clearcoatRoughnessMap,Pe=I&&!!v.iridescenceMap,te=I&&!!v.iridescenceThicknessMap,oe=B&&!!v.sheenColorMap,Me=B&&!!v.sheenRoughnessMap,Se=!!v.specularMap,re=!!v.specularColorMap,Ve=!!v.specularIntensityMap,L=q&&!!v.transmissionMap,fe=q&&!!v.thicknessMap,ne=!!v.gradientMap,me=!!v.alphaMap,ee=v.alphaTest>0,K=!!v.alphaHash,ie=!!v.extensions,Fe=fn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=s.toneMapping);let ct={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:ut,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ve,batchingColor:ve&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:fi,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:yt,envMap:ke,envMapMode:ke&&Y.mapping,envMapCubeUVHeight:Q,aoMap:et,lightMap:nt,bumpMap:Oe,normalMap:at,displacementMap:P,emissiveMap:gt,normalMapObjectSpace:at&&v.normalMapType===nh,normalMapTangentSpace:at&&v.normalMapType===El,metalnessMap:Qe,roughnessMap:X,anisotropy:Z,anisotropyMap:H,clearcoat:M,clearcoatMap:xe,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:g,iridescence:I,iridescenceMap:Pe,iridescenceThicknessMap:te,sheen:B,sheenColorMap:oe,sheenRoughnessMap:Me,specularMap:Se,specularColorMap:re,specularIntensityMap:Ve,transmission:q,transmissionMap:L,thicknessMap:fe,gradientMap:ne,opaque:v.transparent===!1&&v.blending===hi&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:K,combine:v.combine,mapUv:$e&&_(v.map.channel),aoMapUv:et&&_(v.aoMap.channel),lightMapUv:nt&&_(v.lightMap.channel),bumpMapUv:Oe&&_(v.bumpMap.channel),normalMapUv:at&&_(v.normalMap.channel),displacementMapUv:P&&_(v.displacementMap.channel),emissiveMapUv:gt&&_(v.emissiveMap.channel),metalnessMapUv:Qe&&_(v.metalnessMap.channel),roughnessMapUv:X&&_(v.roughnessMap.channel),anisotropyMapUv:H&&_(v.anisotropyMap.channel),clearcoatMapUv:xe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(v.sheenRoughnessMap.channel),specularMapUv:Se&&_(v.specularMap.channel),specularColorMapUv:re&&_(v.specularColorMap.channel),specularIntensityMapUv:Ve&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:fe&&_(v.thicknessMap.channel),alphaMapUv:me&&_(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(at||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&($e||me),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===tt,decodeVideoTextureEmissive:gt&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nt,flipSided:v.side===Lt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function f(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(S(b,v),T(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function T(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){let b=x[v.type],D;if(b){let z=En[b];D=dh.clone(z.uniforms)}else D=v.uniforms;return D}function A(v,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new fg(s,b,v,r),h.push(D),u.set(b,D)),D}function w(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){c.remove(v)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:N}}function gg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function xg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lh(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,x,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,x,_,m){let f=a(u,d,p,x,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,x,_,m){let f=a(u,d,p,x,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||xg),n.length>1&&n.sort(d||Dh),i.length>1&&i.sort(d||Dh)}function h(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function _g(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Lh,s.set(n,[a])):i>=r.length?(a=new Lh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function vg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Re};break;case"SpotLight":t={position:new C,direction:new C,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function yg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Mg=0;function bg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Sg(s){let e=new vg,t=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let i=new C,r=new Ze,a=new Ze;function o(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,x=0,_=0,m=0,f=0,S=0,T=0,E=0,A=0,w=0,R=0;l.sort(bg);for(let v=0,b=l.length;v<b;v++){let D=l[v],z=D.color,U=D.intensity,W=D.distance,$=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Si?$=D.shadow.map.texture:$=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*U,u+=z.g*U,d+=z.b*U;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],U);R++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=G,p++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(z).multiplyScalar(U),G.distance=W,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[_]=G;let Y=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,Y.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=$,E++}_++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(z).multiplyScalar(U),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=G,m++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=D.shadow.matrix,T++}n.point[x]=G,x++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(U),G.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==S||N.numPointShadows!==T||N.numSpotShadows!==E||N.numSpotMaps!==A||N.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,N.directionalLength=p,N.pointLength=x,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=S,N.numPointShadows=T,N.numSpotShadows=E,N.numSpotMaps=A,N.numLightProbes=R,n.version=Mg++)}function c(l,h){let u=0,d=0,p=0,x=0,_=0,m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let T=l[f];if(T.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),u++}else if(T.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let E=n.hemi[_];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Nh(s){let e=new Sg(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Eg(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Nh(s),e.set(i,[o])):r>=a.length?(o=new Nh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ag=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Rg=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Fh=new Ze,Js=new C,Ol=new C;function Cg(s,e,t){let n=new $i,i=new Xe,r=new Xe,a=new pt,o=new Br,c=new zr,l={},h=t.maxTextureSize,u={[Ln]:Lt,[Lt]:Ln,[Nt]:Nt},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Tg,fragmentShader:wg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new vt;x.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let f=this.type;this.render=function(w,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Jr&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=ks);let v=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Mn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let U=f!==this.type;U&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach($=>$.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,$=w.length;W<$;W++){let G=w[W],Y=G.shadow;if(Y===void 0){De("WebGLShadowMap:",G,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let Q=Y.getFrameExtents();if(i.multiply(Q),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,Y.mapSize.y=r.y)),Y.map===null||U===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ji){if(G.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Qt(i.x,i.y,{format:Si,type:bn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),Y.map.texture.name=G.name+".shadowMap",Y.map.depthTexture=new $n(i.x,i.y,on),Y.map.depthTexture.name=G.name+".shadowMapDepth",Y.map.depthTexture.format=vn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It}else{G.isPointLight?(Y.map=new Rs(i.x),Y.map.depthTexture=new Fr(i.x,pn)):(Y.map=new Qt(i.x,i.y),Y.map.depthTexture=new $n(i.x,i.y,pn)),Y.map.depthTexture.name=G.name+".shadowMap",Y.map.depthTexture.format=vn;let ae=s.state.buffers.depth.getReversed();this.type===ks?(Y.map.depthTexture.compareFunction=ae?Ya:qa,Y.map.depthTexture.minFilter=Dt,Y.map.depthTexture.magFilter=Dt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It)}Y.camera.updateProjectionMatrix()}let de=Y.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<de;ae++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(Y.map),s.clear());let he=Y.getViewport(ae);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),z.viewport(a)}if(G.isPointLight){let he=Y.camera,Le=Y.matrix,Ne=G.distance||he.far;Ne!==he.far&&(he.far=Ne,he.updateProjectionMatrix()),Js.setFromMatrixPosition(G.matrixWorld),he.position.copy(Js),Ol.copy(he.position),Ol.add(Ag[ae]),he.up.copy(Rg[ae]),he.lookAt(Ol),he.updateMatrixWorld(),Le.makeTranslation(-Js.x,-Js.y,-Js.z),Fh.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Fh,he.coordinateSystem,he.reversedDepth)}else Y.updateMatrices(G);n=Y.getFrustum(),E(R,N,Y.camera,G,this.type)}Y.isPointLightShadow!==!0&&this.type===ji&&S(Y,N),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,b,D)};function S(w,R){let N=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qt(i.x,i.y,{format:Si,type:bn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,N,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,N,p,_,null)}function T(w,R,N,v){let b=null,D=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=N.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=b.uuid,U=R.uuid,W=l[z];W===void 0&&(W={},l[z]=W);let $=W[U];$===void 0&&($=b.clone(),W[U]=$,R.addEventListener("dispose",A)),b=$}if(b.visible=R.visible,b.wireframe=R.wireframe,v===ji?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=s.properties.get(b);z.light=N}return b}function E(w,R,N,v,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ji)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);let U=e.update(w),W=w.material;if(Array.isArray(W)){let $=U.groups;for(let G=0,Y=$.length;G<Y;G++){let Q=$[G],de=W[Q.materialIndex];if(de&&de.visible){let ae=T(w,de,v,b);w.onBeforeShadow(s,w,R,N,U,ae,Q),s.renderBufferDirect(N,null,U,ae,w,Q),w.onAfterShadow(s,w,R,N,U,ae,Q)}}}else if(W.visible){let $=T(w,W,v,b);w.onBeforeShadow(s,w,R,N,U,$,null),s.renderBufferDirect(N,null,U,$,w,null),w.onAfterShadow(s,w,R,N,U,$,null)}}let z=w.children;for(let U=0,W=z.length;U<W;U++)E(z[U],R,N,v,b)}function A(w){w.target.removeEventListener("dispose",A);for(let N in l){let v=l[N],b=w.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}var Ig={[Kr]:Qr,[jr]:na,[ea]:ia,[ui]:ta,[Qr]:Kr,[na]:jr,[ia]:ea,[ta]:ui};function Pg(s,e){function t(){let L=!1,fe=new pt,ne=null,me=new pt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!L&&(s.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){L=ee},setClear:function(ee,K,ie,Fe,ct){ct===!0&&(ee*=Fe,K*=Fe,ie*=Fe),fe.set(ee,K,ie,Fe),me.equals(fe)===!1&&(s.clearColor(ee,K,ie,Fe),me.copy(fe))},reset:function(){L=!1,ne=null,me.set(-1,0,0,0)}}}function n(){let L=!1,fe=!1,ne=null,me=null,ee=null;return{setReversed:function(K){if(fe!==K){let ie=e.get("EXT_clip_control");K?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),fe=K;let Fe=ee;ee=null,this.setClear(Fe)}},getReversed:function(){return fe},setTest:function(K){K?j(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(K){ne!==K&&!L&&(s.depthMask(K),ne=K)},setFunc:function(K){if(fe&&(K=Ig[K]),me!==K){switch(K){case Kr:s.depthFunc(s.NEVER);break;case Qr:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case ui:s.depthFunc(s.LEQUAL);break;case ea:s.depthFunc(s.EQUAL);break;case ta:s.depthFunc(s.GEQUAL);break;case na:s.depthFunc(s.GREATER);break;case ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=K}},setLocked:function(K){L=K},setClear:function(K){ee!==K&&(fe&&(K=1-K),s.clearDepth(K),ee=K)},reset:function(){L=!1,ne=null,me=null,ee=null,fe=!1}}}function i(){let L=!1,fe=null,ne=null,me=null,ee=null,K=null,ie=null,Fe=null,ct=null;return{setTest:function(it){L||(it?j(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(it){fe!==it&&!L&&(s.stencilMask(it),fe=it)},setFunc:function(it,gn,wn){(ne!==it||me!==gn||ee!==wn)&&(s.stencilFunc(it,gn,wn),ne=it,me=gn,ee=wn)},setOp:function(it,gn,wn){(K!==it||ie!==gn||Fe!==wn)&&(s.stencilOp(it,gn,wn),K=it,ie=gn,Fe=wn)},setLocked:function(it){L=it},setClear:function(it){ct!==it&&(s.clearStencil(it),ct=it)},reset:function(){L=!1,fe=null,ne=null,me=null,ee=null,K=null,ie=null,Fe=null,ct=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],x=null,_=!1,m=null,f=null,S=null,T=null,E=null,A=null,w=null,R=new Re(0,0,0),N=0,v=!1,b=null,D=null,z=null,U=null,W=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Y=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=Y>=2);let de=null,ae={},he=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Ne=new pt().fromArray(he),ut=new pt().fromArray(Le);function rt(L,fe,ne,me){let ee=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ne;ie++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(fe+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return K}let J={};J[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(ui),Oe(!1),at(ol),j(s.CULL_FACE),et(Mn);function j(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function ge(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ue(L,fe){return u[L]!==fe?(s.bindFramebuffer(L,fe),u[L]=fe,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=fe),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function ve(L,fe){let ne=p,me=!1;if(L){ne=d.get(fe),ne===void 0&&(ne=[],d.set(fe,ne));let ee=L.textures;if(ne.length!==ee.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ie=ee.length;K<ie;K++)ne[K]=s.COLOR_ATTACHMENT0+K;ne.length=ee.length,me=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,me=!0);me&&s.drawBuffers(ne)}function $e(L){return x!==L?(s.useProgram(L),x=L,!0):!1}let yt={[Yn]:s.FUNC_ADD,[Fc]:s.FUNC_SUBTRACT,[Uc]:s.FUNC_REVERSE_SUBTRACT};yt[Oc]=s.MIN,yt[Bc]=s.MAX;let ke={[zc]:s.ZERO,[kc]:s.ONE,[Hc]:s.SRC_COLOR,[Ar]:s.SRC_ALPHA,[Yc]:s.SRC_ALPHA_SATURATE,[Xc]:s.DST_COLOR,[Gc]:s.DST_ALPHA,[Vc]:s.ONE_MINUS_SRC_COLOR,[Rr]:s.ONE_MINUS_SRC_ALPHA,[qc]:s.ONE_MINUS_DST_COLOR,[Wc]:s.ONE_MINUS_DST_ALPHA,[Zc]:s.CONSTANT_COLOR,[$c]:s.ONE_MINUS_CONSTANT_COLOR,[Jc]:s.CONSTANT_ALPHA,[Kc]:s.ONE_MINUS_CONSTANT_ALPHA};function et(L,fe,ne,me,ee,K,ie,Fe,ct,it){if(L===Mn){_===!0&&(ge(s.BLEND),_=!1);return}if(_===!1&&(j(s.BLEND),_=!0),L!==Nc){if(L!==m||it!==v){if((f!==Yn||E!==Yn)&&(s.blendEquation(s.FUNC_ADD),f=Yn,E=Yn),it)switch(L){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFunc(s.ONE,s.ONE);break;case ll:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ie("WebGLState: Invalid blending: ",L);break}else switch(L){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ll:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",L);break}S=null,T=null,A=null,w=null,R.set(0,0,0),N=0,m=L,v=it}return}ee=ee||fe,K=K||ne,ie=ie||me,(fe!==f||ee!==E)&&(s.blendEquationSeparate(yt[fe],yt[ee]),f=fe,E=ee),(ne!==S||me!==T||K!==A||ie!==w)&&(s.blendFuncSeparate(ke[ne],ke[me],ke[K],ke[ie]),S=ne,T=me,A=K,w=ie),(Fe.equals(R)===!1||ct!==N)&&(s.blendColor(Fe.r,Fe.g,Fe.b,ct),R.copy(Fe),N=ct),m=L,v=!1}function nt(L,fe){L.side===Nt?ge(s.CULL_FACE):j(s.CULL_FACE);let ne=L.side===Lt;fe&&(ne=!ne),Oe(ne),L.blending===hi&&L.transparent===!1?et(Mn):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),gt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){b!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),b=L)}function at(L){L!==Dc?(j(s.CULL_FACE),L!==D&&(L===ol?s.cullFace(s.BACK):L===Lc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),D=L}function P(L){L!==z&&(G&&s.lineWidth(L),z=L)}function gt(L,fe,ne){L?(j(s.POLYGON_OFFSET_FILL),(U!==fe||W!==ne)&&(s.polygonOffset(fe,ne),U=fe,W=ne)):ge(s.POLYGON_OFFSET_FILL)}function Qe(L){L?j(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function X(L){L===void 0&&(L=s.TEXTURE0+$-1),de!==L&&(s.activeTexture(L),de=L)}function Z(L,fe,ne){ne===void 0&&(de===null?ne=s.TEXTURE0+$-1:ne=de);let me=ae[ne];me===void 0&&(me={type:void 0,texture:void 0},ae[ne]=me),(me.type!==L||me.texture!==fe)&&(de!==ne&&(s.activeTexture(ne),de=ne),s.bindTexture(L,fe||J[L]),me.type=L,me.texture=fe)}function M(){let L=ae[de];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{s.compressedTexImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function B(){try{s.texSubImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function q(){try{s.texSubImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function se(){try{s.texStorage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function be(){try{s.texStorage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function Pe(){try{s.texImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function te(){try{s.texImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function oe(L){Ne.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ne.copy(L))}function Me(L){ut.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ut.copy(L))}function Se(L,fe){let ne=l.get(fe);ne===void 0&&(ne=new WeakMap,l.set(fe,ne));let me=ne.get(L);me===void 0&&(me=s.getUniformBlockIndex(fe,L.name),ne.set(L,me))}function re(L,fe){let me=l.get(fe).get(L);c.get(fe)!==me&&(s.uniformBlockBinding(fe,me,L.__bindingPointIndex),c.set(fe,me))}function Ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},de=null,ae={},u={},d=new WeakMap,p=[],x=null,_=!1,m=null,f=null,S=null,T=null,E=null,A=null,w=null,R=new Re(0,0,0),N=0,v=!1,b=null,D=null,z=null,U=null,W=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ge,bindFramebuffer:Ue,drawBuffers:ve,useProgram:$e,setBlending:et,setMaterial:nt,setFlipSided:Oe,setCullFace:at,setLineWidth:P,setPolygonOffset:gt,setScissorTest:Qe,activeTexture:X,bindTexture:Z,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Pe,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:re,texStorage2D:se,texStorage3D:be,texSubImage2D:B,texSubImage3D:q,compressedTexSubImage2D:H,compressedTexSubImage3D:xe,scissor:oe,viewport:Me,reset:Ve}}function Dg(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,g){return p?new OffscreenCanvas(M,g):vs("canvas")}function _(M,g,I){let B=1,q=Z(M);if((q.width>I||q.height>I)&&(B=I/Math.max(q.width,q.height)),B<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let H=Math.floor(B*q.width),xe=Math.floor(B*q.height);u===void 0&&(u=x(H,xe));let se=g?x(H,xe):u;return se.width=H,se.height=xe,se.getContext("2d").drawImage(M,0,0,H,xe),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+H+"x"+xe+")."),se}else return"data"in M&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){s.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?s.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(M,g,I,B,q=!1){if(M!==null){if(s[M]!==void 0)return s[M];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let H=g;if(g===s.RED&&(I===s.FLOAT&&(H=s.R32F),I===s.HALF_FLOAT&&(H=s.R16F),I===s.UNSIGNED_BYTE&&(H=s.R8)),g===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.R8UI),I===s.UNSIGNED_SHORT&&(H=s.R16UI),I===s.UNSIGNED_INT&&(H=s.R32UI),I===s.BYTE&&(H=s.R8I),I===s.SHORT&&(H=s.R16I),I===s.INT&&(H=s.R32I)),g===s.RG&&(I===s.FLOAT&&(H=s.RG32F),I===s.HALF_FLOAT&&(H=s.RG16F),I===s.UNSIGNED_BYTE&&(H=s.RG8)),g===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.RG8UI),I===s.UNSIGNED_SHORT&&(H=s.RG16UI),I===s.UNSIGNED_INT&&(H=s.RG32UI),I===s.BYTE&&(H=s.RG8I),I===s.SHORT&&(H=s.RG16I),I===s.INT&&(H=s.RG32I)),g===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.RGB8UI),I===s.UNSIGNED_SHORT&&(H=s.RGB16UI),I===s.UNSIGNED_INT&&(H=s.RGB32UI),I===s.BYTE&&(H=s.RGB8I),I===s.SHORT&&(H=s.RGB16I),I===s.INT&&(H=s.RGB32I)),g===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),I===s.UNSIGNED_INT&&(H=s.RGBA32UI),I===s.BYTE&&(H=s.RGBA8I),I===s.SHORT&&(H=s.RGBA16I),I===s.INT&&(H=s.RGBA32I)),g===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),g===s.RGBA){let xe=q?xs:Je.getTransfer(B);I===s.FLOAT&&(H=s.RGBA32F),I===s.HALF_FLOAT&&(H=s.RGBA16F),I===s.UNSIGNED_BYTE&&(H=xe===tt?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(M,g){let I;return M?g===null||g===pn||g===ts?I=s.DEPTH24_STENCIL8:g===on?I=s.DEPTH32F_STENCIL8:g===es&&(I=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pn||g===ts?I=s.DEPTH_COMPONENT24:g===on?I=s.DEPTH_COMPONENT32F:g===es&&(I=s.DEPTH_COMPONENT16),I}function A(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==It&&M.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function w(M){let g=M.target;g.removeEventListener("dispose",w),N(g),g.isVideoTexture&&h.delete(g)}function R(M){let g=M.target;g.removeEventListener("dispose",R),b(g)}function N(M){let g=n.get(M);if(g.__webglInit===void 0)return;let I=M.source,B=d.get(I);if(B){let q=B[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&v(M),Object.keys(B).length===0&&d.delete(I)}n.remove(M)}function v(M){let g=n.get(M);s.deleteTexture(g.__webglTexture);let I=M.source,B=d.get(I);delete B[g.__cacheKey],a.memory.textures--}function b(M){let g=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let q=0;q<g.__webglFramebuffer[B].length;q++)s.deleteFramebuffer(g.__webglFramebuffer[B][q]);else s.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)s.deleteFramebuffer(g.__webglFramebuffer[B]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let I=M.textures;for(let B=0,q=I.length;B<q;B++){let H=n.get(I[B]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(I[B])}n.remove(M)}let D=0;function z(){D=0}function U(){let M=D;return M>=i.maxTextures&&De("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),D+=1,M}function W(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function $(M,g){let I=n.get(M);if(M.isVideoTexture&&Qe(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&I.__version!==M.version){let B=M.image;if(B===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{J(I,M,g);return}}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+g)}function G(M,g){let I=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){J(I,M,g);return}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+g)}function Y(M,g){let I=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){J(I,M,g);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+g)}function Q(M,g){let I=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&I.__version!==M.version){j(I,M,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+g)}let de={[di]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Cr]:s.MIRRORED_REPEAT},ae={[It]:s.NEAREST,[eh]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Dt]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},he={[ih]:s.NEVER,[lh]:s.ALWAYS,[sh]:s.LESS,[qa]:s.LEQUAL,[rh]:s.EQUAL,[Ya]:s.GEQUAL,[ah]:s.GREATER,[oh]:s.NOTEQUAL};function Le(M,g){if(g.type===on&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dt||g.magFilter===aa||g.magFilter===Gs||g.magFilter===jn||g.minFilter===Dt||g.minFilter===aa||g.minFilter===Gs||g.minFilter===jn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(M,s.TEXTURE_WRAP_S,de[g.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,de[g.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,de[g.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,ae[g.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,he[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===It||g.minFilter!==Gs&&g.minFilter!==jn||g.type===on&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ne(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",w));let B=g.source,q=d.get(B);q===void 0&&(q={},d.set(B,q));let H=W(g);if(H!==M.__cacheKey){q[H]===void 0&&(q[H]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,I=!0),q[H].usedTimes++;let xe=q[M.__cacheKey];xe!==void 0&&(q[M.__cacheKey].usedTimes--,xe.usedTimes===0&&v(g)),M.__cacheKey=H,M.__webglTexture=q[H].texture}return I}function ut(M,g,I){return Math.floor(Math.floor(M/I)/g)}function rt(M,g,I,B){let H=M.updateRanges;if(H.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,I,B,g.data);else{H.sort((te,oe)=>te.start-oe.start);let xe=0;for(let te=1;te<H.length;te++){let oe=H[xe],Me=H[te],Se=oe.start+oe.count,re=ut(Me.start,g.width,4),Ve=ut(oe.start,g.width,4);Me.start<=Se+1&&re===Ve&&ut(Me.start+Me.count-1,g.width,4)===re?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++xe,H[xe]=Me)}H.length=xe+1;let se=s.getParameter(s.UNPACK_ROW_LENGTH),be=s.getParameter(s.UNPACK_SKIP_PIXELS),Pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let te=0,oe=H.length;te<oe;te++){let Me=H[te],Se=Math.floor(Me.start/4),re=Math.ceil(Me.count/4),Ve=Se%g.width,L=Math.floor(Se/g.width),fe=re,ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ve,L,fe,ne,I,B,g.data)}M.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,be),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function J(M,g,I){let B=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=s.TEXTURE_3D);let q=Ne(M,g),H=g.source;t.bindTexture(B,M.__webglTexture,s.TEXTURE0+I);let xe=n.get(H);if(H.version!==xe.__version||q===!0){t.activeTexture(s.TEXTURE0+I);let se=Je.getPrimaries(Je.workingColorSpace),be=g.colorSpace===On?null:Je.getPrimaries(g.colorSpace),Pe=g.colorSpace===On||se===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let te=_(g.image,!1,i.maxTextureSize);te=X(g,te);let oe=r.convert(g.format,g.colorSpace),Me=r.convert(g.type),Se=T(g.internalFormat,oe,Me,g.colorSpace,g.isVideoTexture);Le(B,g);let re,Ve=g.mipmaps,L=g.isVideoTexture!==!0,fe=xe.__version===void 0||q===!0,ne=H.dataReady,me=A(g,te);if(g.isDepthTexture)Se=E(g.format===ei,g.type),fe&&(L?t.texStorage2D(s.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Se,te.width,te.height,0,oe,Me,null));else if(g.isDataTexture)if(Ve.length>0){L&&fe&&t.texStorage2D(s.TEXTURE_2D,me,Se,Ve[0].width,Ve[0].height);for(let ee=0,K=Ve.length;ee<K;ee++)re=Ve[ee],L?ne&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,re.width,re.height,oe,Me,re.data):t.texImage2D(s.TEXTURE_2D,ee,Se,re.width,re.height,0,oe,Me,re.data);g.generateMipmaps=!1}else L?(fe&&t.texStorage2D(s.TEXTURE_2D,me,Se,te.width,te.height),ne&&rt(g,te,oe,Me)):t.texImage2D(s.TEXTURE_2D,0,Se,te.width,te.height,0,oe,Me,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Se,Ve[0].width,Ve[0].height,te.depth);for(let ee=0,K=Ve.length;ee<K;ee++)if(re=Ve[ee],g.format!==ln)if(oe!==null)if(L){if(ne)if(g.layerUpdates.size>0){let ie=Pl(re.width,re.height,g.format,g.type);for(let Fe of g.layerUpdates){let ct=re.data.subarray(Fe*ie/re.data.BYTES_PER_ELEMENT,(Fe+1)*ie/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Fe,re.width,re.height,1,oe,ct)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,te.depth,oe,re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Se,re.width,re.height,te.depth,0,re.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,te.depth,oe,Me,re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Se,re.width,re.height,te.depth,0,oe,Me,re.data)}else{L&&fe&&t.texStorage2D(s.TEXTURE_2D,me,Se,Ve[0].width,Ve[0].height);for(let ee=0,K=Ve.length;ee<K;ee++)re=Ve[ee],g.format!==ln?oe!==null?L?ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Se,re.width,re.height,0,re.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,re.width,re.height,oe,Me,re.data):t.texImage2D(s.TEXTURE_2D,ee,Se,re.width,re.height,0,oe,Me,re.data)}else if(g.isDataArrayTexture)if(L){if(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Se,te.width,te.height,te.depth),ne)if(g.layerUpdates.size>0){let ee=Pl(te.width,te.height,g.format,g.type);for(let K of g.layerUpdates){let ie=te.data.subarray(K*ee/te.data.BYTES_PER_ELEMENT,(K+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,oe,Me,ie)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Me,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,oe,Me,te.data);else if(g.isData3DTexture)L?(fe&&t.texStorage3D(s.TEXTURE_3D,me,Se,te.width,te.height,te.depth),ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Me,te.data)):t.texImage3D(s.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,oe,Me,te.data);else if(g.isFramebufferTexture){if(fe)if(L)t.texStorage2D(s.TEXTURE_2D,me,Se,te.width,te.height);else{let ee=te.width,K=te.height;for(let ie=0;ie<me;ie++)t.texImage2D(s.TEXTURE_2D,ie,Se,ee,K,0,oe,Me,null),ee>>=1,K>>=1}}else if(Ve.length>0){if(L&&fe){let ee=Z(Ve[0]);t.texStorage2D(s.TEXTURE_2D,me,Se,ee.width,ee.height)}for(let ee=0,K=Ve.length;ee<K;ee++)re=Ve[ee],L?ne&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,oe,Me,re):t.texImage2D(s.TEXTURE_2D,ee,Se,oe,Me,re);g.generateMipmaps=!1}else if(L){if(fe){let ee=Z(te);t.texStorage2D(s.TEXTURE_2D,me,Se,ee.width,ee.height)}ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Me,te)}else t.texImage2D(s.TEXTURE_2D,0,Se,oe,Me,te);m(g)&&f(B),xe.__version=H.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function j(M,g,I){if(g.image.length!==6)return;let B=Ne(M,g),q=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+I);let H=n.get(q);if(q.version!==H.__version||B===!0){t.activeTexture(s.TEXTURE0+I);let xe=Je.getPrimaries(Je.workingColorSpace),se=g.colorSpace===On?null:Je.getPrimaries(g.colorSpace),be=g.colorSpace===On||xe===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Pe=g.isCompressedTexture||g.image[0].isCompressedTexture,te=g.image[0]&&g.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Pe&&!te?oe[K]=_(g.image[K],!0,i.maxCubemapSize):oe[K]=te?g.image[K].image:g.image[K],oe[K]=X(g,oe[K]);let Me=oe[0],Se=r.convert(g.format,g.colorSpace),re=r.convert(g.type),Ve=T(g.internalFormat,Se,re,g.colorSpace),L=g.isVideoTexture!==!0,fe=H.__version===void 0||B===!0,ne=q.dataReady,me=A(g,Me);Le(s.TEXTURE_CUBE_MAP,g);let ee;if(Pe){L&&fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ve,Me.width,Me.height);for(let K=0;K<6;K++){ee=oe[K].mipmaps;for(let ie=0;ie<ee.length;ie++){let Fe=ee[ie];g.format!==ln?Se!==null?L?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Fe.width,Fe.height,Se,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ve,Fe.width,Fe.height,0,Fe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Fe.width,Fe.height,Se,re,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ve,Fe.width,Fe.height,0,Se,re,Fe.data)}}}else{if(ee=g.mipmaps,L&&fe){ee.length>0&&me++;let K=Z(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(te){L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,Se,re,oe[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,oe[K].width,oe[K].height,0,Se,re,oe[K].data);for(let ie=0;ie<ee.length;ie++){let ct=ee[ie].image[K].image;L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ct.width,ct.height,Se,re,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ve,ct.width,ct.height,0,Se,re,ct.data)}}else{L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,re,oe[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,Se,re,oe[K]);for(let ie=0;ie<ee.length;ie++){let Fe=ee[ie];L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Se,re,Fe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ve,Se,re,Fe.image[K])}}}m(g)&&f(s.TEXTURE_CUBE_MAP),H.__version=q.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ge(M,g,I,B,q,H){let xe=r.convert(I.format,I.colorSpace),se=r.convert(I.type),be=T(I.internalFormat,xe,se,I.colorSpace),Pe=n.get(g),te=n.get(I);if(te.__renderTarget=g,!Pe.__hasExternalTextures){let oe=Math.max(1,g.width>>H),Me=Math.max(1,g.height>>H);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,H,be,oe,Me,g.depth,0,xe,se,null):t.texImage2D(q,H,be,oe,Me,0,xe,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,M),gt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,B,q,te.__webglTexture,0,P(g)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,B,q,te.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(M,g,I){if(s.bindRenderbuffer(s.RENDERBUFFER,M),g.depthBuffer){let B=g.depthTexture,q=B&&B.isDepthTexture?B.type:null,H=E(g.stencilBuffer,q),xe=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),H,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),H,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,H,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,M)}else{let B=g.textures;for(let q=0;q<B.length;q++){let H=B[q],xe=r.convert(H.format,H.colorSpace),se=r.convert(H.type),be=T(H.internalFormat,xe,se,H.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),be,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),be,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,be,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(M,g,I){let B=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),B){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Le(s.TEXTURE_CUBE_MAP,g.depthTexture);let Pe=r.convert(g.depthTexture.format),te=r.convert(g.depthTexture.type),oe;g.depthTexture.format===vn?oe=s.DEPTH_COMPONENT24:g.depthTexture.format===ei&&(oe=s.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,g.width,g.height,0,Pe,te,null)}}else $(g.depthTexture,0);let H=q.__webglTexture,xe=P(g),se=B?s.TEXTURE_CUBE_MAP_POSITIVE_X+I:s.TEXTURE_2D,be=g.depthTexture.format===ei?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===vn)gt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,se,H,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,be,se,H,0);else if(g.depthTexture.format===ei)gt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,se,H,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,be,se,H,0);else throw new Error("Unknown depthTexture format")}function $e(M){let g=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let B=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",q)};B.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=B}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let B=0;B<6;B++)ve(g.__webglFramebuffer[B],M,B);else{let B=M.texture.mipmaps;B&&B.length>0?ve(g.__webglFramebuffer[0],M,0):ve(g.__webglFramebuffer,M,0)}else if(I){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=s.createRenderbuffer(),Ue(g.__webglDepthbuffer[B],M,!1);else{let q=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[B];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,H)}}else{let B=M.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Ue(g.__webglDepthbuffer,M,!1);else{let q=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,H)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(M,g,I){let B=n.get(M);g!==void 0&&ge(B.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&$e(M)}function ke(M){let g=M.texture,I=n.get(M),B=n.get(g);M.addEventListener("dispose",R);let q=M.textures,H=M.isWebGLCubeRenderTarget===!0,xe=q.length>1;if(xe||(B.__webglTexture===void 0&&(B.__webglTexture=s.createTexture()),B.__version=g.version,a.memory.textures++),H){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let be=0;be<g.mipmaps.length;be++)I.__webglFramebuffer[se][be]=s.createFramebuffer()}else I.__webglFramebuffer[se]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)I.__webglFramebuffer[se]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(xe)for(let se=0,be=q.length;se<be;se++){let Pe=n.get(q[se]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(M.samples>0&&gt(M)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let se=0;se<q.length;se++){let be=q[se];I.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[se]);let Pe=r.convert(be.format,be.colorSpace),te=r.convert(be.type),oe=T(be.internalFormat,Pe,te,be.colorSpace,M.isXRRenderTarget===!0),Me=P(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,oe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,I.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture),Le(s.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)ge(I.__webglFramebuffer[se][be],M,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be);else ge(I.__webglFramebuffer[se],M,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(g)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,be=q.length;se<be;se++){let Pe=q[se],te=n.get(Pe),oe=s.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(oe=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),Le(oe,Pe),ge(I.__webglFramebuffer,M,Pe,s.COLOR_ATTACHMENT0+se,oe,0),m(Pe)&&f(oe)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(se=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,B.__webglTexture),Le(se,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)ge(I.__webglFramebuffer[be],M,g,s.COLOR_ATTACHMENT0,se,be);else ge(I.__webglFramebuffer,M,g,s.COLOR_ATTACHMENT0,se,0);m(g)&&f(se),t.unbindTexture()}M.depthBuffer&&$e(M)}function et(M){let g=M.textures;for(let I=0,B=g.length;I<B;I++){let q=g[I];if(m(q)){let H=S(M),xe=n.get(q).__webglTexture;t.bindTexture(H,xe),f(H),t.unbindTexture()}}}let nt=[],Oe=[];function at(M){if(M.samples>0){if(gt(M)===!1){let g=M.textures,I=M.width,B=M.height,q=s.COLOR_BUFFER_BIT,H=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(M),se=g.length>1;if(se)for(let Pe=0;Pe<g.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let be=M.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Pe=0;Pe<g.length;Pe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);let te=n.get(g[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,I,B,0,0,I,B,q,s.NEAREST),c===!0&&(nt.length=0,Oe.length=0,nt.push(s.COLOR_ATTACHMENT0+Pe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(nt.push(H),Oe.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Pe=0;Pe<g.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);let te=n.get(g[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let g=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function P(M){return Math.min(i.maxSamples,M.samples)}function gt(M){let g=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Qe(M){let g=a.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function X(M,g){let I=M.colorSpace,B=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==fi&&I!==On&&(Je.getTransfer(I)===tt?(B!==ln||q!==Yt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",I)),g}function Z(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=yt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lg(s,e){function t(n,i=On){let r,a=Je.getTransfer(i);if(n===Yt)return s.UNSIGNED_BYTE;if(n===la)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_l)return s.BYTE;if(n===vl)return s.SHORT;if(n===es)return s.UNSIGNED_SHORT;if(n===oa)return s.INT;if(n===pn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===bn)return s.HALF_FLOAT;if(n===bl)return s.ALPHA;if(n===Sl)return s.RGB;if(n===ln)return s.RGBA;if(n===vn)return s.DEPTH_COMPONENT;if(n===ei)return s.DEPTH_STENCIL;if(n===ha)return s.RED;if(n===ua)return s.RED_INTEGER;if(n===Si)return s.RG;if(n===da)return s.RG_INTEGER;if(n===fa)return s.RGBA_INTEGER;if(n===Ws||n===Xs||n===qs||n===Ys)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===va||n===ya||n===Ma||n===ba||n===Sa||n===Ea)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===va)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ma)return r.COMPRESSED_R11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===Da||n===La||n===Na||n===Fa||n===Ua||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===ka||n===Ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===za)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ls(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends Nn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,x=null,_=typeof XRWebGLBinding<"u",m=new Xl,f={},S=t.getContextAttributes(),T=null,E=null,A=[],w=[],R=new Xe,N=null,v=new Ct;v.viewport=new pt;let b=new Ct;b.viewport=new pt;let D=[v,b],z=new $r,U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=A[J];return j===void 0&&(j=new Zi,A[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=A[J];return j===void 0&&(j=new Zi,A[J]=j),j.getGripSpace()},this.getHand=function(J){let j=A[J];return j===void 0&&(j=new Zi,A[J]=j),j.getHandSpace()};function $(J){let j=w.indexOf(J.inputSource);if(j===-1)return;let ge=A[j];ge!==void 0&&(ge.update(J.inputSource,J.frame,l||a),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let J=0;J<A.length;J++){let j=w[J];j!==null&&(w[J]=null,A[J].disconnect(j))}U=null,W=null,m.reset();for(let J in f)delete f[J];e.setRenderTarget(T),p=null,d=null,u=null,i=null,E=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ue=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?ei:vn,Ue=S.stencil?ts:pn);let $e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Qt(d.textureWidth,d.textureHeight,{format:ln,type:Yt,depthTexture:new $n(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Qt(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(J){for(let j=0;j<J.removed.length;j++){let ge=J.removed[j],Ue=w.indexOf(ge);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(ge))}for(let j=0;j<J.added.length;j++){let ge=J.added[j],Ue=w.indexOf(ge);if(Ue===-1){for(let $e=0;$e<A.length;$e++)if($e>=w.length){w.push(ge),Ue=$e;break}else if(w[$e]===null){w[$e]=ge,Ue=$e;break}if(Ue===-1)break}let ve=A[Ue];ve&&ve.connect(ge)}}let Q=new C,de=new C;function ae(J,j,ge){Q.setFromMatrixPosition(j.matrixWorld),de.setFromMatrixPosition(ge.matrixWorld);let Ue=Q.distanceTo(de),ve=j.projectionMatrix.elements,$e=ge.projectionMatrix.elements,yt=ve[14]/(ve[10]-1),ke=ve[14]/(ve[10]+1),et=(ve[9]+1)/ve[5],nt=(ve[9]-1)/ve[5],Oe=(ve[8]-1)/ve[0],at=($e[8]+1)/$e[0],P=yt*Oe,gt=yt*at,Qe=Ue/(-Oe+at),X=Qe*-Oe;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(X),J.translateZ(Qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Z=yt+Qe,M=ke+Qe,g=P-X,I=gt+(Ue-X),B=et*ke/M*Z,q=nt*ke/M*Z;J.projectionMatrix.makePerspective(g,I,B,q,Z,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function he(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let j=J.near,ge=J.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),z.near=b.near=v.near=j,z.far=b.far=v.far=ge,(U!==z.near||W!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),U=z.near,W=z.far),z.layers.mask=J.layers.mask|6,v.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;let Ue=J.parent,ve=z.cameras;he(z,Ue);for(let $e=0;$e<ve.length;$e++)he(ve[$e],Ue);ve.length===2?ae(z,v,b):z.projectionMatrix.copy(v.projectionMatrix),Le(J,z,Ue)};function Le(J,j,ge){ge===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ys*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return f[J]};let Ne=null;function ut(J,j){if(h=j.getViewerPose(l||a),x=j,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ue=!1;ge.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let ke=0;ke<ge.length;ke++){let et=ge[ke],nt=null;if(p!==null)nt=p.getViewport(et);else{let at=u.getViewSubImage(d,et);nt=at.viewport,ke===0&&(e.setRenderTargetTextures(E,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(E))}let Oe=D[ke];Oe===void 0&&(Oe=new Ct,Oe.layers.enable(ke),Oe.viewport=new pt,D[ke]=Oe),Oe.matrix.fromArray(et.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(et.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(nt.x,nt.y,nt.width,nt.height),ke===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(Oe)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let ke=u.getDepthInformation(ge[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,i.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ke=0;ke<ge.length;ke++){let et=ge[ke].camera;if(et){let nt=f[et];nt||(nt=new Ls,f[et]=nt);let Oe=u.getCameraImage(et);nt.sourceTexture=Oe}}}}for(let ge=0;ge<A.length;ge++){let Ue=w[ge],ve=A[ge];Ue!==null&&ve!==void 0&&ve.update(Ue,j,l||a)}Ne&&Ne(J,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let rt=new Uh;rt.setAnimationLoop(ut),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}},wi=new jt,Ug=new Ze;function Og(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Rl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,T,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Lt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Lt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),T=S.envMap,E=S.envMapRotation;T&&(m.envMap.value=T,wi.copy(E),wi.x*=-1,wi.y*=-1,wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(wi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bg(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){let E=T.program;n.uniformBlockBinding(S,E)}function l(S,T){let E=i[S.id];E===void 0&&(x(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(S,A);let w=e.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){let T=u();S.__bindingPointIndex=T;let E=s.createBuffer(),A=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,E),E}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let T=i[S.id],E=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,R=E.length;w<R;w++){let N=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,b=N.length;v<b;v++){let D=N[v];if(p(D,w,v,A)===!0){let z=D.__offset,U=Array.isArray(D.value)?D.value:[D.value],W=0;for(let $=0;$<U.length;$++){let G=U[$],Y=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,z+W,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,T,E,A){let w=S.value,R=T+"_"+E;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{let N=A[R];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return A[R]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function x(S){let T=S.uniforms,E=0,A=16;for(let R=0,N=T.length;R<N;R++){let v=Array.isArray(T[R])?T[R]:[T[R]];for(let b=0,D=v.length;b<D;b++){let z=v[b],U=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=U.length;W<$;W++){let G=U[W],Y=_(G),Q=E%A,de=Q%Y.boundary,ae=Q+de;E+=de,ae!==0&&A-ae<Y.storage&&(E+=A-ae),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Y.storage}}}let w=E%A;return w>0&&(E+=A-w),S.__size=E,S.__cache={},this}function _(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){let T=S.target;T.removeEventListener("dispose",m);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function f(){for(let S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}var zg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function kg(){return Sn===null&&(Sn=new Ps(zg,16,16,Si,bn),Sn.name="DFG_LUT",Sn.minFilter=Dt,Sn.magFilter=Dt,Sn.wrapS=_n,Sn.wrapT=_n,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var Ka=class{constructor(e={}){let{canvas:t=ch(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Yt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let _=p,m=new Set([fa,da,ua]),f=new Set([Yt,pn,es,ts,la,ca]),S=new Uint32Array(4),T=new Int32Array(4),E=null,A=null,w=[],R=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,b=!1;this._outputColorSpace=Ot;let D=0,z=0,U=null,W=-1,$=null,G=new pt,Y=new pt,Q=null,de=new Re(0),ae=0,he=t.width,Le=t.height,Ne=1,ut=null,rt=null,J=new pt(0,0,he,Le),j=new pt(0,0,he,Le),ge=!1,Ue=new $i,ve=!1,$e=!1,yt=new Ze,ke=new C,et=new pt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function at(){return U===null?Ne:1}let P=n;function gt(y,F){return t.getContext(y,F)}try{let y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",it,!1),P===null){let F="webgl2";if(P=gt(F,y),P===null)throw gt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ie("WebGLRenderer: "+y.message),y}let Qe,X,Z,M,g,I,B,q,H,xe,se,be,Pe,te,oe,Me,Se,re,Ve,L,fe,ne,me,ee;function K(){Qe=new Yp(P),Qe.init(),ne=new Lg(P,Qe),X=new Bp(P,Qe,e,ne),Z=new Pg(P,Qe),X.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),M=new Jp(P),g=new gg,I=new Dg(P,Qe,Z,g,X,ne,M),B=new kp(v),q=new qp(v),H=new ju(P),me=new Up(P,H),xe=new Zp(P,H,M,me),se=new Qp(P,xe,H,M),Ve=new Kp(P,X,I),Me=new zp(g),be=new mg(v,B,q,Qe,X,me,Me),Pe=new Og(v,g),te=new _g,oe=new Eg(Qe),re=new Fp(v,B,q,Z,se,x,c),Se=new Cg(v,se,X),ee=new Bg(P,M,X,Z),L=new Op(P,Qe,M),fe=new $p(P,Qe,M),M.programs=be.programs,v.capabilities=X,v.extensions=Qe,v.properties=g,v.renderLists=te,v.shadowMap=Se,v.state=Z,v.info=M}K(),_!==Yt&&(N=new em(_,t.width,t.height,i,r));let ie=new ql(v,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=Qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(y){y!==void 0&&(Ne=y,this.setSize(he,Le,!1))},this.getSize=function(y){return y.set(he,Le)},this.setSize=function(y,F,V=!0){if(ie.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}he=y,Le=F,t.width=Math.floor(y*Ne),t.height=Math.floor(F*Ne),V===!0&&(t.style.width=y+"px",t.style.height=F+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(he*Ne,Le*Ne).floor()},this.setDrawingBufferSize=function(y,F,V){he=y,Le=F,Ne=V,t.width=Math.floor(y*V),t.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(_===Yt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(G)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,F,V,k){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,F,V,k),Z.viewport(G.copy(J).multiplyScalar(Ne).round())},this.getScissor=function(y){return y.copy(j)},this.setScissor=function(y,F,V,k){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,F,V,k),Z.scissor(Y.copy(j).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(y){Z.setScissorTest(ge=y)},this.setOpaqueSort=function(y){ut=y},this.setTransparentSort=function(y){rt=y},this.getClearColor=function(y){return y.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,V=!0){let k=0;if(y){let O=!1;if(U!==null){let le=U.texture.format;O=m.has(le)}if(O){let le=U.texture.type,_e=f.has(le),ue=re.getClearColor(),ye=re.getClearAlpha(),Ee=ue.r,Ce=ue.g,Te=ue.b;_e?(S[0]=Ee,S[1]=Ce,S[2]=Te,S[3]=ye,P.clearBufferuiv(P.COLOR,0,S)):(T[0]=Ee,T[1]=Ce,T[2]=Te,T[3]=ye,P.clearBufferiv(P.COLOR,0,T))}else k|=P.COLOR_BUFFER_BIT}F&&(k|=P.DEPTH_BUFFER_BIT),V&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",it,!1),re.dispose(),te.dispose(),oe.dispose(),g.dispose(),B.dispose(),q.dispose(),se.dispose(),me.dispose(),ee.dispose(),be.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",nc),ie.removeEventListener("sessionend",ic),ii.stop()};function Fe(y){y.preventDefault(),Al("WebGLRenderer: Context Lost."),b=!0}function ct(){Al("WebGLRenderer: Context Restored."),b=!1;let y=M.autoReset,F=Se.enabled,V=Se.autoUpdate,k=Se.needsUpdate,O=Se.type;K(),M.autoReset=y,Se.enabled=F,Se.autoUpdate=V,Se.needsUpdate=k,Se.type=O}function it(y){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function gn(y){let F=y.target;F.removeEventListener("dispose",gn),wn(F)}function wn(y){cu(y),g.remove(y)}function cu(y){let F=g.get(y).programs;F!==void 0&&(F.forEach(function(V){be.releaseProgram(V)}),y.isShaderMaterial&&be.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,k,O,le){F===null&&(F=nt);let _e=O.isMesh&&O.matrixWorld.determinant()<0,ue=uu(y,F,V,k,O);Z.setMaterial(k,_e);let ye=V.index,Ee=1;if(k.wireframe===!0){if(ye=xe.getWireframeAttribute(V),ye===void 0)return;Ee=2}let Ce=V.drawRange,Te=V.attributes.position,We=Ce.start*Ee,ot=(Ce.start+Ce.count)*Ee;le!==null&&(We=Math.max(We,le.start*Ee),ot=Math.min(ot,(le.start+le.count)*Ee)),ye!==null?(We=Math.max(We,0),ot=Math.min(ot,ye.count)):Te!=null&&(We=Math.max(We,0),ot=Math.min(ot,Te.count));let xt=ot-We;if(xt<0||xt===1/0)return;me.setup(O,k,ue,V,ye);let _t,lt=L;if(ye!==null&&(_t=H.get(ye),lt=fe,lt.setIndex(_t)),O.isMesh)k.wireframe===!0?(Z.setLineWidth(k.wireframeLinewidth*at()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(O.isLine){let we=k.linewidth;we===void 0&&(we=1),Z.setLineWidth(we*at()),O.isLineSegments?lt.setMode(P.LINES):O.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else O.isPoints?lt.setMode(P.POINTS):O.isSprite&&lt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let we=O._multiDrawStarts,st=O._multiDrawCounts,je=O._multiDrawCount,Zt=ye?H.get(ye).bytesPerElement:1,Ii=g.get(k).currentProgram.getUniforms();for(let $t=0;$t<je;$t++)Ii.setValue(P,"_gl_DrawID",$t),lt.render(we[$t]/Zt,st[$t])}else if(O.isInstancedMesh)lt.renderInstances(We,xt,O.count);else if(V.isInstancedBufferGeometry){let we=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,st=Math.min(V.instanceCount,we);lt.renderInstances(We,xt,st)}else lt.render(We,xt)};function tc(y,F,V){y.transparent===!0&&y.side===Nt&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,sr(y,F,V),y.side=Ln,y.needsUpdate=!0,sr(y,F,V),y.side=Nt):sr(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),A=oe.get(V),A.init(F),R.push(A),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),y!==V&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();let k=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let le=O.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){let ue=le[_e];tc(ue,V,O),k.add(ue)}else tc(le,V,O),k.add(le)}),A=R.pop(),k},this.compileAsync=function(y,F,V=null){let k=this.compile(y,F,V);return new Promise(O=>{function le(){if(k.forEach(function(_e){g.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){O(y);return}setTimeout(le,10)}Qe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Eo=null;function hu(y){Eo&&Eo(y)}function nc(){ii.stop()}function ic(){ii.start()}let ii=new Uh;ii.setAnimationLoop(hu),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(y){Eo=y,ie.setAnimationLoop(y),y===null?ii.stop():ii.start()},ie.addEventListener("sessionstart",nc),ie.addEventListener("sessionend",ic),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let V=ie.enabled===!0&&ie.isPresenting===!0,k=N!==null&&(U===null||V)&&N.begin(v,U);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,F,U),A=oe.get(y,R.length),A.init(F),R.push(A),yt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ue.setFromProjectionMatrix(yt,dn,F.reversedDepth),$e=this.localClippingEnabled,ve=Me.init(this.clippingPlanes,$e),E=te.get(y,w.length),E.init(),w.push(E),ie.enabled===!0&&ie.isPresenting===!0){let _e=v.xr.getDepthSensingMesh();_e!==null&&To(_e,F,-1/0,v.sortObjects)}To(y,F,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(ut,rt),Oe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Oe&&re.addToRenderList(E,y),this.info.render.frame++,ve===!0&&Me.beginShadows();let O=A.state.shadowsArray;if(Se.render(O,y,F),ve===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&N.hasRenderPass())===!1){let _e=E.opaque,ue=E.transmissive;if(A.setupLights(),F.isArrayCamera){let ye=F.cameras;if(ue.length>0)for(let Ee=0,Ce=ye.length;Ee<Ce;Ee++){let Te=ye[Ee];rc(_e,ue,y,Te)}Oe&&re.render(y);for(let Ee=0,Ce=ye.length;Ee<Ce;Ee++){let Te=ye[Ee];sc(E,y,Te,Te.viewport)}}else ue.length>0&&rc(_e,ue,y,F),Oe&&re.render(y),sc(E,y,F)}U!==null&&z===0&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),k&&N.end(v),y.isScene===!0&&y.onAfterRender(v,y,F),me.resetDefaultState(),W=-1,$=null,R.pop(),R.length>0?(A=R[R.length-1],ve===!0&&Me.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function To(y,F,V,k){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ue.intersectsSprite(y)){k&&et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(yt);let _e=se.update(y),ue=y.material;ue.visible&&E.push(y,_e,ue,V,et.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ue.intersectsObject(y))){let _e=se.update(y),ue=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),et.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),et.copy(_e.boundingSphere.center)),et.applyMatrix4(y.matrixWorld).applyMatrix4(yt)),Array.isArray(ue)){let ye=_e.groups;for(let Ee=0,Ce=ye.length;Ee<Ce;Ee++){let Te=ye[Ee],We=ue[Te.materialIndex];We&&We.visible&&E.push(y,_e,We,V,et.z,Te)}}else ue.visible&&E.push(y,_e,ue,V,et.z,null)}}let le=y.children;for(let _e=0,ue=le.length;_e<ue;_e++)To(le[_e],F,V,k)}function sc(y,F,V,k){let{opaque:O,transmissive:le,transparent:_e}=y;A.setupLightsView(V),ve===!0&&Me.setGlobalState(v.clippingPlanes,V),k&&Z.viewport(G.copy(k)),O.length>0&&ir(O,F,V),le.length>0&&ir(le,F,V),_e.length>0&&ir(_e,F,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function rc(y,F,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){let We=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new Qt(1,1,{generateMipmaps:!0,type:We?bn:Yt,minFilter:jn,samples:X.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let le=A.state.transmissionRenderTarget[k.id],_e=k.viewport||G;le.setSize(_e.z*v.transmissionResolutionScale,_e.w*v.transmissionResolutionScale);let ue=v.getRenderTarget(),ye=v.getActiveCubeFace(),Ee=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(de),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&re.render(V);let Ce=v.toneMapping;v.toneMapping=fn;let Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),ve===!0&&Me.setGlobalState(v.clippingPlanes,k),ir(y,V,k),I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ot=0,xt=F.length;ot<xt;ot++){let _t=F[ot],{object:lt,geometry:we,material:st,group:je}=_t;if(st.side===Nt&&lt.layers.test(k.layers)){let Zt=st.side;st.side=Lt,st.needsUpdate=!0,ac(lt,V,k,we,st,je),st.side=Zt,st.needsUpdate=!0,We=!0}}We===!0&&(I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le))}v.setRenderTarget(ue,ye,Ee),v.setClearColor(de,ae),Te!==void 0&&(k.viewport=Te),v.toneMapping=Ce}function ir(y,F,V){let k=F.isScene===!0?F.overrideMaterial:null;for(let O=0,le=y.length;O<le;O++){let _e=y[O],{object:ue,geometry:ye,group:Ee}=_e,Ce=_e.material;Ce.allowOverride===!0&&k!==null&&(Ce=k),ue.layers.test(V.layers)&&ac(ue,F,V,ye,Ce,Ee)}}function ac(y,F,V,k,O,le){y.onBeforeRender(v,F,V,k,O,le),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(v,F,V,k,y,le),O.transparent===!0&&O.side===Nt&&O.forceSinglePass===!1?(O.side=Lt,O.needsUpdate=!0,v.renderBufferDirect(V,F,k,O,y,le),O.side=Ln,O.needsUpdate=!0,v.renderBufferDirect(V,F,k,O,y,le),O.side=Nt):v.renderBufferDirect(V,F,k,O,y,le),y.onAfterRender(v,F,V,k,O,le)}function sr(y,F,V){F.isScene!==!0&&(F=nt);let k=g.get(y),O=A.state.lights,le=A.state.shadowsArray,_e=O.state.version,ue=be.getParameters(y,O.state,le,F,V),ye=be.getProgramCacheKey(ue),Ee=k.programs;k.environment=y.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(y.isMeshStandardMaterial?q:B).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ee===void 0&&(y.addEventListener("dispose",gn),Ee=new Map,k.programs=Ee);let Ce=Ee.get(ye);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===_e)return lc(y,ue),Ce}else ue.uniforms=be.getUniforms(y),y.onBeforeCompile(ue,v),Ce=be.acquireProgram(ue,ye),Ee.set(ye,Ce),k.uniforms=ue.uniforms;let Te=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=Me.uniform),lc(y,ue),k.needsLights=fu(y),k.lightsStateVersion=_e,k.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function oc(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=is.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function lc(y,F){let V=g.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function uu(y,F,V,k,O){F.isScene!==!0&&(F=nt),I.resetTextureUnits();let le=F.fog,_e=k.isMeshStandardMaterial?F.environment:null,ue=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:fi,ye=(k.isMeshStandardMaterial?q:B).get(k.envMap||_e),Ee=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ce=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!V.morphAttributes.position,We=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color,xt=fn;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=v.toneMapping);let _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=_t!==void 0?_t.length:0,we=g.get(k),st=A.state.lights;if(ve===!0&&($e===!0||y!==$)){let kt=y===$&&k.id===W;Me.setState(k,y,kt)}let je=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==st.state.version||we.outputColorSpace!==ue||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==ye||k.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Me.numPlanes||we.numIntersection!==Me.numIntersection)||we.vertexAlphas!==Ee||we.vertexTangents!==Ce||we.morphTargets!==Te||we.morphNormals!==We||we.morphColors!==ot||we.toneMapping!==xt||we.morphTargetsCount!==lt)&&(je=!0):(je=!0,we.__version=k.version);let Zt=we.currentProgram;je===!0&&(Zt=sr(k,F,O));let Ii=!1,$t=!1,ls=!1,ht=Zt.getUniforms(),Wt=we.uniforms;if(Z.useProgram(Zt.program)&&(Ii=!0,$t=!0,ls=!0),k.id!==W&&(W=k.id,$t=!0),Ii||$!==y){Z.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",y.projectionMatrix),ht.setValue(P,"viewMatrix",y.matrixWorldInverse);let Xt=ht.map.cameraPosition;Xt!==void 0&&Xt.setValue(P,ke.setFromMatrixPosition(y.matrixWorld)),X.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,$t=!0,ls=!0)}if(we.needsLights&&(st.state.directionalShadowMap.length>0&&ht.setValue(P,"directionalShadowMap",st.state.directionalShadowMap,I),st.state.spotShadowMap.length>0&&ht.setValue(P,"spotShadowMap",st.state.spotShadowMap,I),st.state.pointShadowMap.length>0&&ht.setValue(P,"pointShadowMap",st.state.pointShadowMap,I)),O.isSkinnedMesh){ht.setOptional(P,O,"bindMatrix"),ht.setOptional(P,O,"bindMatrixInverse");let kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ht.setValue(P,"boneTexture",kt.boneTexture,I))}O.isBatchedMesh&&(ht.setOptional(P,O,"batchingTexture"),ht.setValue(P,"batchingTexture",O._matricesTexture,I),ht.setOptional(P,O,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",O._indirectTexture,I),ht.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",O._colorsTexture,I));let rn=V.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Ve.update(O,V,Zt),($t||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,ht.setValue(P,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wt.envMap.value=ye,Wt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(Wt.envMapIntensity.value=F.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=kg()),$t&&(ht.setValue(P,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&du(Wt,ls),le&&k.fog===!0&&Pe.refreshFogUniforms(Wt,le),Pe.refreshMaterialUniforms(Wt,k,Ne,Le,A.state.transmissionRenderTarget[y.id]),is.upload(P,oc(we),Wt,I)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(is.upload(P,oc(we),Wt,I),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(P,"center",O.center),ht.setValue(P,"modelViewMatrix",O.modelViewMatrix),ht.setValue(P,"normalMatrix",O.normalMatrix),ht.setValue(P,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let kt=k.uniformsGroups;for(let Xt=0,wo=kt.length;Xt<wo;Xt++){let si=kt[Xt];ee.update(si,Zt),ee.bind(si,Zt)}}return Zt}function du(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function fu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,F,V){let k=g.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),g.get(y.texture).__webglTexture=F,g.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){let V=g.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};let pu=P.createFramebuffer();this.setRenderTarget=function(y,F=0,V=0){U=y,D=F,z=V;let k=null,O=!1,le=!1;if(y){let ue=g.get(y);if(ue.__useDefaultFramebuffer!==void 0){Z.bindFramebuffer(P.FRAMEBUFFER,ue.__webglFramebuffer),G.copy(y.viewport),Y.copy(y.scissor),Q=y.scissorTest,Z.viewport(G),Z.scissor(Y),Z.setScissorTest(Q),W=-1;return}else if(ue.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(ue.__hasExternalTextures)I.rebindTextures(y,g.get(y.texture).__webglTexture,g.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ce=y.depthTexture;if(ue.__boundDepthTexture!==Ce){if(Ce!==null&&g.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}let ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(le=!0);let Ee=g.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?k=Ee[F][V]:k=Ee[F],O=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?k=g.get(y).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[V]:k=Ee,G.copy(y.viewport),Y.copy(y.scissor),Q=y.scissorTest}else G.copy(J).multiplyScalar(Ne).floor(),Y.copy(j).multiplyScalar(Ne).floor(),Q=ge;if(V!==0&&(k=pu),Z.bindFramebuffer(P.FRAMEBUFFER,k)&&Z.drawBuffers(y,k),Z.viewport(G),Z.scissor(Y),Z.setScissorTest(Q),O){let ue=g.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ue.__webglTexture,V)}else if(le){let ue=F;for(let ye=0;ye<y.textures.length;ye++){let Ee=g.get(y.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,Ee.__webglTexture,V,ue)}}else if(y!==null&&V!==0){let ue=g.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,V)}W=-1},this.readRenderTargetPixels=function(y,F,V,k,O,le,_e,ue=0){if(!(y&&y.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Z.bindFramebuffer(P.FRAMEBUFFER,ye);try{let Ee=y.textures[ue],Ce=Ee.format,Te=Ee.type;if(!X.textureFormatReadable(Ce)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(Te)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-k&&V>=0&&V<=y.height-O&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(F,V,k,O,ne.convert(Ce),ne.convert(Te),le))}finally{let Ee=U!==null?g.get(U).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,k,O,le,_e,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye)if(F>=0&&F<=y.width-k&&V>=0&&V<=y.height-O){Z.bindFramebuffer(P.FRAMEBUFFER,ye);let Ee=y.textures[ue],Ce=Ee.format,Te=Ee.type;if(!X.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(F,V,k,O,ne.convert(Ce),ne.convert(Te),0);let ot=U!==null?g.get(U).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,ot);let xt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await hh(P,xt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(We),P.deleteSync(xt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,V=0){let k=Math.pow(2,-V),O=Math.floor(y.image.width*k),le=Math.floor(y.image.height*k),_e=F!==null?F.x:0,ue=F!==null?F.y:0;I.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,_e,ue,O,le),Z.unbindTexture()};let mu=P.createFramebuffer(),gu=P.createFramebuffer();this.copyTextureToTexture=function(y,F,V=null,k=null,O=0,le=null){le===null&&(O!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=O,O=0):le=0);let _e,ue,ye,Ee,Ce,Te,We,ot,xt,_t=y.isCompressedTexture?y.mipmaps[le]:y.image;if(V!==null)_e=V.max.x-V.min.x,ue=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Ee=V.min.x,Ce=V.min.y,Te=V.isBox3?V.min.z:0;else{let rn=Math.pow(2,-O);_e=Math.floor(_t.width*rn),ue=Math.floor(_t.height*rn),y.isDataArrayTexture?ye=_t.depth:y.isData3DTexture?ye=Math.floor(_t.depth*rn):ye=1,Ee=0,Ce=0,Te=0}k!==null?(We=k.x,ot=k.y,xt=k.z):(We=0,ot=0,xt=0);let lt=ne.convert(F.format),we=ne.convert(F.type),st;F.isData3DTexture?(I.setTexture3D(F,0),st=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),st=P.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),st=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let je=P.getParameter(P.UNPACK_ROW_LENGTH),Zt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ii=P.getParameter(P.UNPACK_SKIP_PIXELS),$t=P.getParameter(P.UNPACK_SKIP_ROWS),ls=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);let ht=y.isDataArrayTexture||y.isData3DTexture,Wt=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){let rn=g.get(y),kt=g.get(F),Xt=g.get(rn.__renderTarget),wo=g.get(kt.__renderTarget);Z.bindFramebuffer(P.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Z.bindFramebuffer(P.DRAW_FRAMEBUFFER,wo.__webglFramebuffer);for(let si=0;si<ye;si++)ht&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(y).__webglTexture,O,Te+si),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(F).__webglTexture,le,xt+si)),P.blitFramebuffer(Ee,Ce,_e,ue,We,ot,_e,ue,P.DEPTH_BUFFER_BIT,P.NEAREST);Z.bindFramebuffer(P.READ_FRAMEBUFFER,null),Z.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||g.has(y)){let rn=g.get(y),kt=g.get(F);Z.bindFramebuffer(P.READ_FRAMEBUFFER,mu),Z.bindFramebuffer(P.DRAW_FRAMEBUFFER,gu);for(let Xt=0;Xt<ye;Xt++)ht?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,rn.__webglTexture,O,Te+Xt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,rn.__webglTexture,O),Wt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,le,xt+Xt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,le),O!==0?P.blitFramebuffer(Ee,Ce,_e,ue,We,ot,_e,ue,P.COLOR_BUFFER_BIT,P.NEAREST):Wt?P.copyTexSubImage3D(st,le,We,ot,xt+Xt,Ee,Ce,_e,ue):P.copyTexSubImage2D(st,le,We,ot,Ee,Ce,_e,ue);Z.bindFramebuffer(P.READ_FRAMEBUFFER,null),Z.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Wt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(st,le,We,ot,xt,_e,ue,ye,lt,we,_t.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(st,le,We,ot,xt,_e,ue,ye,lt,_t.data):P.texSubImage3D(st,le,We,ot,xt,_e,ue,ye,lt,we,_t):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,We,ot,_e,ue,lt,we,_t.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,We,ot,_t.width,_t.height,lt,_t.data):P.texSubImage2D(P.TEXTURE_2D,le,We,ot,_e,ue,lt,we,_t);P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Zt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ii),P.pixelStorei(P.UNPACK_SKIP_ROWS,$t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ls),le===0&&F.generateMipmaps&&P.generateMipmap(st),Z.unbindTexture()},this.initRenderTarget=function(y){g.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),Z.unbindTexture()},this.resetState=function(){D=0,z=0,U=null,Z.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var vv=Math.PI*2;function Ge(s,e,t){return s<e?e:s>t?t:s}function rs(s,e,t){return s+(e-s)*t}function mn(s,e,t,n){return rs(s,e,1-Math.exp(-t*n))}var bt=class{constructor(e){this.s=e>>>0||1}next(){this.s=this.s+1831565813|0;let e=Math.imul(this.s^this.s>>>15,1|this.s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}};function Hh(s,e,t,n){let i=Ge(s,n.minX,n.maxX),r=Ge(e,n.minZ,n.maxZ),a=s-i,o=e-r;return a*a+o*o<t*t}var eo=class{constructor(e=16){this.map=new Map;this.where=new Map;this.cell=e}key(e,t){return`${Math.floor(e/this.cell)},${Math.floor(t/this.cell)}`}add(e,t,n){let i=this.key(t,n),r=this.map.get(i);r||(r=new Set,this.map.set(i,r)),r.add(e),this.where.set(e,i)}move(e,t,n){let i=this.key(t,n),r=this.where.get(e);if(r!==i){if(r){let a=this.map.get(r);a&&a.delete(e)}this.add(e,t,n)}}remove(e){let t=this.where.get(e);if(t){let n=this.map.get(t);n&&n.delete(e),this.where.delete(e)}}clear(){this.map.clear(),this.where.clear()}query(e,t,n,i){let r=this.cell,a=Math.floor((e-n)/r),o=Math.floor((e+n)/r),c=Math.floor((t-n)/r),l=Math.floor((t+n)/r);for(let h=a;h<=o;h++)for(let u=c;u<=l;u++){let d=this.map.get(`${h},${u}`);d&&d.forEach(i)}}};function Vh(s){let e=Math.round(s),t=e<0?"-":"",n=Math.abs(e).toString(),i="";for(let r=0;r<n.length;r++)r>0&&(n.length-r)%3===0&&(i+=","),i+=n[r];return`${t}$${i}`}function Yl(s){let e=Math.floor(s)%24,t=Math.floor(s%1*60),n=e<10?`0${e}`:`${e}`,i=t<10?`0${t}`:`${t}`;return`${n}:${i}`}function Bn(s,e=0){return Number.isFinite(s)?s:e}var Be={half:480,roadEvery:80,roadWidth:14,sidewalk:5,block:80,waterX:452,islandX:560,islandZ:0,islandHalf:110},sn={downtownHalf:170,park:{x0:-400,x1:-240,z0:-80,z1:80},stadium:{x:0,z:360,w:150,d:110},harbor:{x0:400,x1:452,z0:-320,z1:320}},to={asphalt:3355454,asphaltLight:3026490,sidewalk:9276822,curb:7303032,grass:3107636,water:932437,sand:13217923,buildingGlass:1713206,lampGlow:16761963,neonPink:16735370,neonCyan:3663615,neonAmber:16756796,sunDusk:16751164,skyDuskTop:2759501,skyDuskBot:16742972,skyNightTop:328976,skyNightBot:921648,skyDayTop:7321599,skyDayBot:13625599},Ri={defaultStart:17.8,duskEnd:19.67,nightHemi:.5,moonIntensity:.55,sunMinElevation:.04},Zl={walkSpeed:6,sprintSpeed:10,accel:40,friction:10,gravity:24,jumpSpeed:9},Gh={sedan:{kind:"sedan",label:"Sedan",len:4.6,wid:2,accel:14,brake:26,topSpeed:34,reverseSpeed:10,steer:1.9,grip:.9,hp:100,colors:[9082792,3951196,11025468,3963466,13224393,2236966]},sports:{kind:"sports",label:"Sports",len:4.4,wid:2,accel:22,brake:30,topSpeed:46,reverseSpeed:12,steer:2.2,grip:.95,hp:80,colors:[16722517,16756796,3663615,8006399,16119285]},suv:{kind:"suv",label:"SUV",len:5,wid:2.1,accel:12,brake:24,topSpeed:30,reverseSpeed:9,steer:1.7,grip:.9,hp:130,colors:[2894896,6044186,1718876,7043676]},truck:{kind:"truck",label:"Truck",len:6.4,wid:2.4,accel:9,brake:20,topSpeed:26,reverseSpeed:8,steer:1.4,grip:.9,hp:170,colors:[9071402,4873323,7829367]},bus:{kind:"bus",label:"Bus",len:9,wid:2.6,accel:8,brake:18,topSpeed:24,reverseSpeed:7,steer:1.2,grip:.9,hp:200,colors:[2783882,14196796,9054780]},police:{kind:"police",label:"Police Cruiser",len:4.8,wid:2,accel:20,brake:30,topSpeed:42,reverseSpeed:11,steer:2.1,grip:.95,hp:120,colors:[1053720]},bike:{kind:"bike",label:"Motorcycle",len:2.4,wid:.9,accel:24,brake:32,topSpeed:48,reverseSpeed:0,steer:2.6,grip:.85,hp:50,colors:[16722517,2236966,3663615]}},zn={fist:{kind:"fist",label:"Fists",damage:12,rate:.45,range:2.4,spread:0,mag:-1,reload:0,auto:!1,pellets:1},pistol:{kind:"pistol",label:"Pistol",damage:26,rate:.28,range:70,spread:.012,mag:12,reload:1.1,auto:!1,pellets:1},smg:{kind:"smg",label:"SMG",damage:14,rate:.085,range:55,spread:.045,mag:30,reload:1.4,auto:!0,pellets:1},shotgun:{kind:"shotgun",label:"Shotgun",damage:11,rate:.85,range:30,spread:.09,mag:6,reload:2,auto:!1,pellets:7},grenade:{kind:"grenade",label:"Grenade",damage:120,rate:1.2,range:45,spread:0,mag:5,reload:.6,auto:!1,pellets:1}},Wh=["fist","pistol","smg","shotgun","grenade"],no=[{id:1,name:"First Keys",giver:"Vera Kwan",brief:"Steal a sedan and bring it to my garage.",reward:200,par:"Steal a sedan and deliver it to the garage"},{id:2,name:"Hot Delivery",giver:"Vera Kwan",brief:"A package for the docks. Fast. No questions.",reward:350,par:"Deliver the package to the harbor docks in time"},{id:3,name:"Lose the Heat",giver:"Silas Vane",brief:"The law is on you. Shake them off and come back clean.",reward:300,par:"Lose your wanted level"},{id:4,name:"Loud Message",giver:"Silas Vane",brief:"The Dusk Vipers need a reminder. Hit their corner hard.",reward:500,par:"Take out the Vipers on their corner"},{id:5,name:"Hotel Forecourt",giver:"Vera Kwan",brief:"Clear the hotel forecourt. Nobody walks out of that deal.",reward:600,par:"Clear the hotel forecourt of Vipers"},{id:6,name:"Bank Vault",giver:"Silas Vane",brief:"The Harbor Bank vault. In, out, and gone before the sirens.",reward:1200,par:"Rob the bank vault and reach the getaway marker"},{id:7,name:"Ferris Finale",giver:"Silas Vane",brief:"Vane is done talking. End it at the ferris wheel.",reward:2e3,par:"Defeat Silas Vane at the ferris wheel"}];var Ci={default:17.8,chase:17.8,street:17.9,mission:18.5,map:22,night:22},Qs="neon-harbor-save-v1";var as=[{name:"NEON FM",genre:"synthwave"},{name:"HARBOR 92",genre:"hiphop"},{name:"PIER JAZZ",genre:"jazz"}];function Xh(s){let e=new Ka({canvas:s,antialias:!0,powerPreference:"high-performance"});return e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=Jr,e.toneMapping=Hs,e.toneMappingExposure=1.05,e}var ni=[{h:0,sun:0,hemi:.5,top:328976,hor:1315884,fog:657944,lamp:1,stars:1},{h:5,sun:0,hemi:.5,top:328976,hor:1710643,fog:657944,lamp:1,stars:1},{h:7,sun:1.4,hemi:.85,top:4876954,hor:16757611,fog:13150346,lamp:.4,stars:.1},{h:10,sun:2.6,hemi:1,top:4029401,hor:12573166,fog:13162728,lamp:0,stars:0},{h:16,sun:2.4,hemi:.95,top:4029401,hor:14214382,fog:13162728,lamp:0,stars:0},{h:17.8,sun:2.1,hemi:.9,top:2763349,hor:16747068,fog:10119762,lamp:.7,stars:.2},{h:18.5,sun:1.6,hemi:.8,top:1842240,hor:16738858,fog:6965826,lamp:.9,stars:.5},{h:19.67,sun:0,hemi:.5,top:328976,hor:1710643,fog:657944,lamp:1,stars:1},{h:20,sun:0,hemi:.5,top:328976,hor:1710643,fog:657944,lamp:1,stars:1},{h:24,sun:0,hemi:.5,top:328976,hor:1315884,fog:657944,lamp:1,stars:1}];function Hg(s){let e=(s%24+24)%24,t=ni[0],n=ni[ni.length-1];for(let o=0;o<ni.length-1;o++)if(e>=ni[o].h&&e<=ni[o+1].h){t=ni[o],n=ni[o+1];break}let i=n.h-t.h||1,r=Ge((e-t.h)/i,0,1),a=(o,c)=>{let l=new Re(o),h=new Re(c);return l.lerp(h,r).getHex()};return{h:e,sun:rs(t.sun,n.sun,r),hemi:rs(t.hemi,n.hemi,r),top:a(t.top,n.top),hor:a(t.hor,n.hor),fog:a(t.fog,n.fog),lamp:rs(t.lamp,n.lamp,r),stars:rs(t.stars,n.stars,r)}}var $l=2048,js=120,io=class{constructor(e,t){this.scene=e;this.sunDir=new C(0,.2,-1);this.timeOfDay=Ri.defaultStart;this.lampLevel=.7;this.skyMat=new Bt({side:Lt,depthWrite:!1,uniforms:{topColor:{value:new Re(2763349)},horizonColor:{value:new Re(16747068)},sunDir:{value:new C(0,.2,-1)},sunColor:{value:new Re(16757611)}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 sunDir; uniform vec3 sunColor;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.1, 1.0);
          vec3 col = mix(horizonColor, topColor, pow(max(h, 0.0), 0.55));
          float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
          col += sunColor * (pow(s, 220.0) * 1.4 + pow(s, 8.0) * 0.22);
          gl_FragColor = vec4(col, 1.0);
        }`});let n=new pe(new tn(800,24,16),this.skyMat);n.frustumCulled=!1,e.add(n),e.fog=new Cs(10119762,120,520);let i=new Float32Array(600*3);for(let o=0;o<600;o++){let c=t.next()*Math.PI*2,l=t.range(.1,1.4);i[o*3]=Math.cos(c)*Math.cos(l)*750,i[o*3+1]=Math.sin(l)*750,i[o*3+2]=Math.sin(c)*Math.cos(l)*750}let r=new vt;r.setAttribute("position",new Pt(i,3)),this.starMat=new pi({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.2,depthWrite:!1}),this.stars=new mi(r,this.starMat),this.stars.frustumCulled=!1,e.add(this.stars),this.sun=new Qi(16757611,2.1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set($l,$l);let a=this.sun.shadow.camera;a.left=-js,a.right=js,a.top=js,a.bottom=-js,a.near=1,a.far=500,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,e.add(this.sun),e.add(this.sun.target),this.moon=new Qi(9414911,0),this.moon.position.set(-60,120,-40),e.add(this.moon),e.add(this.moon.target),this.hemi=new Os(9075354,2760472,.9),e.add(this.hemi),this.setTimeOfDay(this.timeOfDay)}sunDirection(e){let t=Ri.duskEnd-6,n=Ge((e-6)/t,0,1),i=Math.max(Math.sin(Math.PI*n),Ri.sunMinElevation),r=Math.PI*(1-n);return new C(Math.cos(r)*Math.cos(i),Math.sin(i),.35*Math.cos(i)).normalize()}setTimeOfDay(e){this.timeOfDay=(e%24+24)%24;let t=Hg(this.timeOfDay),n=this.sunDirection(this.timeOfDay);this.sunDir.copy(n),this.sun.intensity=t.sun,this.sun.color.setHex(t.sun>.4?16757611:16747082),this.hemi.intensity=t.hemi;let i=t.sun<=0?1:0;this.moon.intensity=i*Ri.moonIntensity,this.lampLevel=t.lamp,this.starMat.opacity=t.stars;let r=this.skyMat.uniforms;r.topColor.value.setHex(t.top),r.horizonColor.value.setHex(t.hor),r.sunDir.value.copy(n),r.sunColor.value.setHex(t.sun>.4?16757611:16747082),this.scene.fog&&this.scene.fog.color.setHex(t.fog)}get time(){return this.timeOfDay}updateSunFollow(e,t){let n=js*2/$l,i=Math.round(e/n)*n,r=Math.round(t/n)*n,a=this.sunDir;this.sun.position.set(i+a.x*220,a.y*220,r+a.z*220),this.sun.target.position.set(i,0,r),this.sun.target.updateMatrixWorld(),this.moon.position.set(i-60,120,r-40),this.moon.target.position.set(i,0,r),this.moon.target.updateMatrixWorld()}};function Vg(){let s=document.createElement("canvas");s.width=64,s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,1,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Zn(s)}var so=class{constructor(e,t){this.particles=[];this.MAX=400;this.shakeAmt=0;this.rain=null;this.rainVel=null;this.rainCount=0;this.rainOn=!1;this.scene=e,this.rng=t,this.dotTex=Vg(),this.geo=new vt,this.posAttr=new Ke(new Float32Array(this.MAX*3),3),this.colAttr=new Ke(new Float32Array(this.MAX*3),3),this.sizeAttr=new Ke(new Float32Array(this.MAX),1),this.geo.setAttribute("position",this.posAttr),this.geo.setAttribute("color",this.colAttr),this.geo.setAttribute("aSize",this.sizeAttr);let n=new Bt({uniforms:{map:{value:this.dotTex}},vertexShader:`
        attribute float aSize;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (220.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D map;
        varying vec3 vColor;
        void main() {
          vec4 tex = texture2D(map, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a);
          if (gl_FragColor.a < 0.02) discard;
        }`,transparent:!0,depthWrite:!1,blending:Mi,vertexColors:!0});this.points=new mi(this.geo,n),this.points.frustumCulled=!1,this.scene.add(this.points)}get dotTexture(){return this.dotTex}spawn(e){this.particles.length>=this.MAX&&this.particles.shift(),this.particles.push(e)}burst(e,t,n,i=6,r=.6,a=1.6){for(let o=0;o<t;o++){let c=this.rng.next()*Math.PI*2,l=(this.rng.next()-.3)*Math.PI;this.spawn({pos:e.clone(),vel:new C(Math.cos(c)*Math.cos(l),Math.sin(l)+.4,Math.sin(c)*Math.cos(l)).multiplyScalar(i*this.rng.range(.4,1)),life:r*this.rng.range(.6,1.2),maxLife:r,size:a*this.rng.range(.7,1.4),color:new Re(n).offsetHSL(0,0,this.rng.range(-.1,.1)),gravity:6,drag:1.5})}}sparks(e,t=8){this.burst(e,t,16765562,9,.35,1.1)}smoke(e,t=3){for(let n=0;n<t;n++)this.spawn({pos:e.clone().add(new C(this.rng.range(-.4,.4),this.rng.range(0,.6),this.rng.range(-.4,.4))),vel:new C(this.rng.range(-.4,.4),this.rng.range(1,2.4),this.rng.range(-.4,.4)),life:this.rng.range(.8,1.6),maxLife:1.6,size:this.rng.range(2.5,4.5),color:new Re(6710903),gravity:-1.5,drag:.5})}explosion(e,t=!1){let n=e.clone().add(new C(0,1,0));this.burst(n,t?60:30,16742938,t?16:11,.9,3.2),this.burst(n,t?30:14,16765562,t?10:7,.6,2.4),this.smoke(n,t?14:8),this.shake(t?.9:.5);let i=new yi(16747050,400,40,1.8);i.position.copy(e).add(new C(0,3,0)),this.scene.add(i),setTimeout(()=>this.scene.remove(i),220)}shake(e){this.shakeAmt=Math.max(this.shakeAmt,e)}shakeOffset(e){if(this.shakeAmt<=.001)return{x:0,y:0};this.shakeAmt=Math.max(0,this.shakeAmt-e*2.2);let t=this.shakeAmt*.35;return{x:(this.rng.next()-.5)*t,y:(this.rng.next()-.5)*t}}setRain(e){if(e!==this.rainOn){if(this.rainOn=e,e&&!this.rain){this.rainCount=1200;let t=new Float32Array(this.rainCount*3);this.rainVel=new Float32Array(this.rainCount);for(let r=0;r<this.rainCount;r++)t[r*3]=this.rng.range(-50,50),t[r*3+1]=this.rng.range(0,40),t[r*3+2]=this.rng.range(-50,50),this.rainVel[r]=this.rng.range(28,38);let n=new vt;n.setAttribute("position",new Pt(t,3));let i=new pi({color:11191517,size:.14,transparent:!0,opacity:.55,sizeAttenuation:!0});this.rain=new mi(n,i),this.rain.frustumCulled=!1,this.scene.add(this.rain)}this.rain&&(this.rain.visible=e)}}get raining(){return this.rainOn}update(e,t,n){for(let r=this.particles.length-1;r>=0;r--){let a=this.particles[r];if(a.life-=e,a.life<=0){this.particles.splice(r,1);continue}a.vel.y-=a.gravity*e,a.vel.multiplyScalar(Math.max(0,1-a.drag*e)),a.pos.addScaledVector(a.vel,e),a.pos.y<.05&&(a.pos.y=.05,a.vel.y*=-.3)}let i=this.particles.length;for(let r=0;r<this.MAX;r++)if(r<i){let a=this.particles[r],o=Ge(a.life/a.maxLife,0,1);this.posAttr.setXYZ(r,a.pos.x,a.pos.y,a.pos.z),this.colAttr.setXYZ(r,a.color.r*o,a.color.g*o,a.color.b*o),this.sizeAttr.setX(r,a.size*(.5+o*.5))}else this.posAttr.setXYZ(r,0,-100,0),this.colAttr.setXYZ(r,0,0,0),this.sizeAttr.setX(r,0);if(this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0,this.geo.setDrawRange(0,this.MAX),this.rain&&this.rain.visible&&this.rainVel){let r=this.rain.geometry.getAttribute("position"),a=r.array;for(let o=0;o<this.rainCount;o++)a[o*3+1]-=this.rainVel[o]*e,a[o*3+1]<0&&(a[o*3]=t+this.rng.range(-50,50),a[o*3+1]=this.rng.range(30,40),a[o*3+2]=n+this.rng.range(-50,50));r.needsUpdate=!0}}};var ro=class{constructor(e,t=Math.PI,n=.12,i=9){this.camera=e;this.camPos=new C(0,8,52);this.lookTarget=new C;this.obstacles=[];this.yaw=t,this.pitch=n,this.distance=i}setObstacles(e){this.obstacles=e}offset(e){return new C(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch)+.35,Math.cos(this.yaw)*Math.cos(this.pitch)).multiplyScalar(e)}clearDistance(e){let t=this.distance;for(let n=0;n<8&&t>2.5;n++){let i=e.clone().add(this.offset(t)).add(new C(0,1.2,0)),r=!1;for(let a of this.obstacles)if(Hh(i.x,i.z,.6,a)){r=!0;break}if(!r)return t;t*=.8}return Math.max(t,2.5)}snap(e){let t=this.clearDistance(e);this.camPos.copy(e).add(this.offset(t)).add(new C(0,1.2,0)),this.camera.position.copy(this.camPos),this.lookTarget.copy(e).add(new C(0,2,0)),this.camera.lookAt(this.lookTarget)}update(e,t,n=0,i=0){let r=this.clearDistance(t),a=t.clone().add(this.offset(r)).add(new C(0,1.2,0)),o=mn(0,1,8,e);this.camPos.lerp(a,o),this.camera.position.set(this.camPos.x+n,this.camPos.y+i,this.camPos.z),this.lookTarget.lerp(t.clone().add(new C(0,2,0)),mn(0,1,12,e)),this.camera.lookAt(this.lookTarget)}clampPitch(){this.pitch=Ge(this.pitch,-.1,.9)}};var ao=class{constructor(e,t={}){this.canvas=e;this.cb=t;this.keys=new Set;this.dragging=!1;this.dragMoved=!1;this.shooting=!1;this.lastMX=0;this.lastMY=0;this.dragDX=0;this.dragDY=0}attach(){window.addEventListener("keydown",e=>this.onKeyDown(e)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),this.canvas.addEventListener("pointerdown",e=>{this.cb.onUnlockAudio?.(),this.dragging=!0,this.dragMoved=!1,this.shooting=!0,this.lastMX=e.clientX,this.lastMY=e.clientY}),window.addEventListener("pointermove",e=>{if(!this.dragging)return;let t=e.clientX-this.lastMX,n=e.clientY-this.lastMY;Math.abs(e.clientX-this.lastMX)+Math.abs(e.clientY-this.lastMY)>6&&(this.dragMoved=!0),this.dragDX+=t,this.dragDY+=n,this.lastMX=e.clientX,this.lastMY=e.clientY}),window.addEventListener("pointerup",()=>{this.dragging=!1,this.shooting=!1})}onKeyDown(e){if(e.code==="F3"){e.preventDefault(),this.cb.onDebugToggle?.();return}this.cb.onUnlockAudio?.(),this.keys.add(e.code),!e.repeat&&(e.code==="Enter"?this.cb.onEnterTitle?.():e.code==="Escape"||e.code==="KeyP"?this.cb.onPauseToggle?.():e.code==="KeyM"?this.cb.onMapToggle?.():this.cb.onAction?.(e.code))}has(e){return this.keys.has(e)}get fwd(){return(this.has("KeyW")||this.has("ArrowUp")?1:0)-(this.has("KeyS")||this.has("ArrowDown")?1:0)}get strafe(){return(this.has("KeyD")||this.has("ArrowRight")?1:0)-(this.has("KeyA")||this.has("ArrowLeft")?1:0)}get sprint(){return this.has("ShiftLeft")||this.has("ShiftRight")}get jump(){return this.has("Space")}get handbrake(){return this.has("Space")}get firing(){return this.shooting&&!this.dragMoved}get isDragging(){return this.dragging}consumeDrag(){let e={dx:this.dragDX,dy:this.dragDY};return this.dragDX=0,this.dragDY=0,e}clear(){this.keys.clear()}};var oo=.016666666666666666,lo=class{constructor(e){this.cb=e;this.acc=0;this.lastT=0;this.frameCount=0;this.fpsT=0;this.fpsValue=60;this.disposed=!1;this.steps=0}start(){this.lastT=performance.now()/1e3,requestAnimationFrame(()=>this.tick())}stop(){this.disposed=!0}get fps(){return this.fpsValue}get totalSteps(){return this.steps}step(e){for(let t=0;t<e;t++)this.cb.update(oo),this.steps++}tick(){if(this.disposed)return;requestAnimationFrame(()=>this.tick());let e=performance.now()/1e3,t=e-this.lastT;this.lastT=e,t>.25&&(t=.25),t<0&&(t=0),this.frameCount++,this.fpsT+=t,this.fpsT>=.5&&(this.fpsValue=this.frameCount/this.fpsT,this.frameCount=0,this.fpsT=0),this.acc+=t;let n=0;for(;this.acc>=oo&&n<5;)this.cb.update(oo),this.steps++,this.acc-=oo,n++;n===5&&(this.acc=0),this.cb.render()}};function Gg(s){let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d");t.fillStyle="#232a3a",t.fillRect(0,0,128,256);for(let i=8;i<248;i+=16)for(let r=8;r<120;r+=14)s.next()<.42?(t.fillStyle=s.chance(.6)?"#ffd88a":"#9ad8ff",t.globalAlpha=.75+s.next()*.25):(t.fillStyle="#0c1220",t.globalAlpha=1),t.fillRect(r,i,8,10);t.globalAlpha=1;let n=new Zn(e);return n.colorSpace=Ot,n}function Wg(s){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle="#14608a",t.fillRect(0,0,256,256),t.strokeStyle="rgba(120,200,255,0.25)",t.lineWidth=2;for(let i=0;i<40;i++){let r=s.next()*256,a=s.next()*256;t.beginPath(),t.moveTo(a,r),t.lineTo(a+40,r+(s.next()*8-4)),t.stroke()}let n=new Zn(e);return n.wrapS=di,n.wrapT=di,n.repeat.set(6,10),n.colorSpace=Ot,n}var co=class{constructor(e,t){this.colliders=[];this.roadLines=[];this.buildingCount=0;this.ferris=null;this.beacon=null;this.buildingChunks=[];this.lightPhase=new Map;this.scene=e,this.rng=new bt(t);let n=this.rng;for(let X=-5;X<=5;X++)this.roadLines.push(X*Be.roadEvery);let i=new pe(new en(Be.half*2+420,Be.half*2),new Ae({color:2764584,roughness:1}));i.rotation.x=-Math.PI/2,i.position.set(90,0,0),i.receiveShadow=!0,e.add(i),this.waterTex=Wg(n),this.waterMat=new Ae({map:this.waterTex,color:10474751,roughness:.55,metalness:.1,transparent:!0,opacity:.94});let r=new pe(new en(240,Be.half*2),this.waterMat);r.rotation.x=-Math.PI/2,r.position.set(Be.waterX+120,.02,0),r.receiveShadow=!0,e.add(r);let a=new pe(new qe(Be.islandHalf*2,.2,Be.islandHalf*2),new Ae({color:10127978,roughness:1}));a.position.set(Be.islandX,.1,Be.islandZ),a.receiveShadow=!0,e.add(a);let o=new pe(new qe(90,.2,18),new Ae({color:5592415,roughness:.9}));o.position.set(440,.1,0),o.receiveShadow=!0,e.add(o);for(let X of[-1,1]){let Z=new pe(new qe(90,1.1,.5),new Ae({color:3663615,roughness:.4,metalness:.4}));Z.position.set(440,1,X*8.6),e.add(Z)}let c=new Ae({color:to.asphalt,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(let X of this.roadLines){let Z=new pe(new en(Be.roadWidth,Be.half*2),c);Z.rotation.x=-Math.PI/2,Z.position.set(X,.02,0),Z.receiveShadow=!0,e.add(Z)}for(let X of this.roadLines){let Z=new pe(new en(Be.half*2,Be.roadWidth),c);Z.rotation.x=-Math.PI/2,Z.position.set(0,.03,X),Z.receiveShadow=!0,e.add(Z)}let l=new en(.5,3.2),h=new Vt({color:14203196}),u=new Gt(l,h,this.roadLines.length*2*22);{let X=new Ze,Z=new St,M=new C(1,1,1),g=0;for(let I of this.roadLines)for(let B=-440;B<=440;B+=40)this.roadLines.includes(B)||(X.compose(new C(I,.045,B),Z,M),u.setMatrixAt(g++,X));for(let I of this.roadLines)for(let B=-440;B<=440;B+=40)this.roadLines.includes(B)||(X.compose(new C(B,.045,I),Z,M),u.setMatrixAt(g++,X));u.count=g,u.instanceMatrix.needsUpdate=!0}e.add(u);let d=new en(1.1,5.5),p=new Vt({color:10132130}),x=new Gt(d,p,484*5);{let X=new Ze,Z=new St,M=new St().setFromEuler(new jt(0,Math.PI/2,0)),g=new C(1,1,1),I=0;for(let B of this.roadLines)for(let q of this.roadLines)for(let H=-2;H<=2;H++)X.compose(new C(B+H*2.2,.05,q-9.5),Z,g),x.setMatrixAt(I++,X),X.compose(new C(B+H*2.2,.05,q+9.5),Z,g),x.setMatrixAt(I++,X),X.compose(new C(B-9.5,.05,q+H*2.2),M,g),x.setMatrixAt(I++,X),X.compose(new C(B+9.5,.05,q+H*2.2),M,g),x.setMatrixAt(I++,X);x.count=I,x.instanceMatrix.needsUpdate=!0}e.add(x);let _=new qe(66,.3,66),m=new Ae({color:to.sidewalk,roughness:1}),f=new Gt(_,m,100);{let X=new Ze,Z=new St,M=new C(1,1,1),g=0;for(let I=-4;I<=5;I++)for(let B=-4;B<=5;B++)X.compose(new C(I*80-40,.15,B*80-40),Z,M),f.setMatrixAt(g++,X);f.count=g,f.instanceMatrix.needsUpdate=!0}f.receiveShadow=!0,e.add(f);let S=Gg(n);this.buildingMat=new Ae({map:S,emissiveMap:S,emissive:16761963,emissiveIntensity:.55,roughness:.85,metalness:.08});let T=new qe(1,1,1);T.translate(0,.5,0);let E=[],A=[[],[],[],[],[]],w=(X,Z)=>Math.abs(X)<=sn.downtownHalf&&Math.abs(Z)<=sn.downtownHalf?4:(X>=0?1:0)+(Z>=0?2:0),R=X=>{A[w(X.x,X.z)].push(X),E.push({x:X.x,z:X.z,w:X.w,d:X.d,color:X.color}),this.colliders.push({minX:X.x-X.w/2,maxX:X.x+X.w/2,minZ:X.z-X.d/2,maxZ:X.z+X.d/2}),this.buildingCount++};for(let X=-4;X<=5;X++)for(let Z=-4;Z<=5;Z++){let M=X*80-40,g=Z*80-40;if(this.inPark(M,g)||Math.abs(M-sn.stadium.x)<90&&Math.abs(g-sn.stadium.z)<70)continue;if(M>360){R({x:M,z:g,w:n.range(24,40),d:n.range(16,26),h:n.range(9,15),color:n.pick([6056826,8022858,7031370,4873323])});continue}if(Math.abs(M)<=sn.downtownHalf&&Math.abs(g)<=sn.downtownHalf)R({x:M,z:g,w:n.range(22,34),d:n.range(22,34),h:n.range(38,92),color:n.pick([2897232,3812432,2373706,4864604,2902588])});else{let B=n.int(1,3);for(let q=0;q<B;q++)R({x:M+n.range(-18,18),z:g+n.range(-18,18),w:n.range(11,22),d:n.range(11,22),h:n.range(8,22),color:n.pick([4866104,6048314,3820124,7035978,4476990])})}}for(let X=0;X<5;X++){let Z=A[X],M=new Gt(T,this.buildingMat,Math.max(1,Z.length)),g=new Ze,I=new St,B=new Re;Z.forEach((q,H)=>{g.compose(new C(q.x,.3,q.z),I,new C(q.w,q.h,q.d)),M.setMatrixAt(H,g),M.setColorAt(H,B.setHex(q.color))}),M.count=Z.length,M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),M.castShadow=!0,M.receiveShadow=!0,e.add(M),this.buildingChunks.push(M)}let N=new pe(new qe(26,130,26),new Ae({map:S,emissiveMap:S,emissive:16761963,emissiveIntensity:.7,roughness:.8}));N.position.set(80,.3,-80),N.castShadow=!0,e.add(N);let v=new pe(new Tt(.6,2.5,26,8),new Ae({color:8947848,roughness:.4,metalness:.7}));v.position.set(80,143,-80),e.add(v),this.beacon=new pe(new tn(1.6,12,8),new Vt({color:16722492})),this.beacon.position.set(80,158,-80),e.add(this.beacon),this.colliders.push({minX:67,maxX:93,minZ:-93,maxZ:-67}),this.buildingCount++;let b=new ft,D=new pe(new Tt(62,68,16,24,1,!0),new Ae({color:9080728,roughness:.9,side:Nt}));D.position.y=8,b.add(D);let z=new pe(new Ji(52,24),new Ae({color:3111476,roughness:1}));z.rotation.x=-Math.PI/2,z.position.y=.35,b.add(z);for(let X=0;X<4;X++){let Z=X/4*Math.PI*2+Math.PI/4,M=new pe(new Tt(.8,.8,30,6),new Ae({color:5592405,roughness:.6,metalness:.5}));M.position.set(Math.cos(Z)*66,15,Math.sin(Z)*66),b.add(M);let g=new pe(new qe(8,3,1),new Ae({color:16777215,emissive:16773832,emissiveIntensity:1.2}));g.position.set(Math.cos(Z)*66,30,Math.sin(Z)*66),g.lookAt(0,0,0),b.add(g)}b.position.set(sn.stadium.x,0,sn.stadium.z),b.traverse(X=>{X instanceof pe&&(X.castShadow=!0)}),e.add(b),this.colliders.push({minX:-68,maxX:68,minZ:292,maxZ:428});let U=sn.park,W=new pe(new en(U.x1-U.x0,U.z1-U.z0),new Ae({color:to.grass,roughness:1}));W.rotation.x=-Math.PI/2,W.position.set((U.x0+U.x1)/2,.06,(U.z0+U.z1)/2),W.receiveShadow=!0,e.add(W);let $=new pe(new Ji(26,20),new Ae({color:1727114,roughness:.25,metalness:.2}));$.rotation.x=-Math.PI/2,$.position.set(-320,.08,0),e.add($),this.colliders.push({minX:-346,maxX:-294,minZ:-26,maxZ:26});let G=[];for(let X=0;X<70;X++)G.push({x:n.range(U.x0+8,U.x1-8),z:n.range(U.z0+8,U.z1-8)});for(let X=0;X<60;X++){let Z=n.pick(this.roadLines),M=n.pick(this.roadLines);G.push({x:Z+n.range(-30,30),z:M+34})}let Y=new Tt(.35,.5,2.4,6),Q=new Ae({color:6045736,roughness:1}),de=new Ns(2.6,6.5,8),ae=new Ae({color:3111476,roughness:1}),he=new Gt(Y,Q,G.length),Le=new Gt(de,ae,G.length);{let X=new Ze,Z=new St,M=new Re;G.forEach((g,I)=>{let B=n.range(.8,1.5);X.compose(new C(g.x,1.2*B,g.z),Z,new C(B,B,B)),he.setMatrixAt(I,X),X.compose(new C(g.x,(2.4+3)*B,g.z),Z,new C(B,B,B)),Le.setMatrixAt(I,X),Le.setColorAt(I,M.setHSL(.32+n.next()*.06,.5,.3+n.next()*.12))}),he.instanceMatrix.needsUpdate=!0,Le.instanceMatrix.needsUpdate=!0,Le.instanceColor&&(Le.instanceColor.needsUpdate=!0)}he.castShadow=!0,Le.castShadow=!0,e.add(he),e.add(Le);let Ne=[];for(let X of this.roadLines)for(let Z of this.roadLines)Ne.push({x:X+9,z:Z+9});let ut=new Tt(.18,.24,6.5,6),rt=new Ae({color:2894900,roughness:.7,metalness:.5}),J=new Gt(ut,rt,Ne.length),j=new tn(.55,8,6);this.lampMat=new Ae({color:16761963,emissive:16761963,emissiveIntensity:2.2});let ge=new Gt(j,this.lampMat,Ne.length);{let X=new Ze,Z=new St,M=new C(1,1,1);Ne.forEach((g,I)=>{X.compose(new C(g.x,3.25,g.z),Z,M),J.setMatrixAt(I,X),X.compose(new C(g.x,6.6,g.z),Z,M),ge.setMatrixAt(I,X)}),J.instanceMatrix.needsUpdate=!0,ge.instanceMatrix.needsUpdate=!0}e.add(J),e.add(ge);let Ue=new Tt(.16,.2,5.5,6),ve=new Gt(Ue,rt,121),$e=new tn(.42,8,6),yt=new Ae({color:2236962,emissive:16777215,emissiveIntensity:1.4}),ke=new Gt($e,yt,363);{let X=new Ze,Z=new St,M=new C(1,1,1),g=new Re,I=0,B=0;for(let q of this.roadLines)for(let H of this.roadLines){X.compose(new C(q-9,2.75,H-9),Z,M),ve.setMatrixAt(I++,X);for(let xe=0;xe<3;xe++)X.compose(new C(q-9,4.6+xe*.9,H-9),Z,M),ke.setMatrixAt(B,X),ke.setColorAt(B,g.setHex(xe===0?16722474:xe===1?16761898:2817884)),B++;this.lightPhase.set(`${q},${H}`,n.next()*12)}ve.count=I,ke.count=B,ve.instanceMatrix.needsUpdate=!0,ke.instanceMatrix.needsUpdate=!0,ke.instanceColor&&(ke.instanceColor.needsUpdate=!0)}e.add(ve),e.add(ke);let et=new qe(6,2.6,2.6),nt=new Ae({roughness:.8,metalness:.2}),Oe=[];for(let X=0;X<36;X++){let Z=n.range(408,446),M=n.range(-300,300);for(;this.roadLines.some(g=>Math.abs(M-g)<8);)M+=20;Oe.push({x:Z,z:M,color:n.pick([9054762,2780042,9071402,3836490,6052971])}),this.colliders.push({minX:Z-3,maxX:Z+3,minZ:M-1.3,maxZ:M+1.3})}let at=new Gt(et,nt,Oe.length);{let X=new Ze,Z=new St,M=new Re;Oe.forEach((g,I)=>{X.compose(new C(g.x,1.3,g.z),Z,new C(1,1,1)),at.setMatrixAt(I,X),at.setColorAt(I,M.setHex(g.color))}),at.instanceMatrix.needsUpdate=!0,at.instanceColor&&(at.instanceColor.needsUpdate=!0)}at.castShadow=!0,e.add(at);for(let X=0;X<3;X++){let Z=-200+X*160,M=new ft,g=new Ae({color:14196796,roughness:.6,metalness:.4});for(let[q,H]of[[-3,-3],[3,-3],[-3,3],[3,3]]){let xe=new pe(new qe(1.2,26,1.2),g);xe.position.set(q,13,H),M.add(xe)}let I=new pe(new qe(2,1.6,34),g);I.position.set(0,26,8),M.add(I);let B=new pe(new qe(2.4,2.4,2.4),new Ae({color:3355443}));B.position.set(0,18,20),M.add(B),M.position.set(430,0,Z),M.traverse(q=>{q instanceof pe&&(q.castShadow=!0)}),e.add(M),this.colliders.push({minX:426,maxX:434,minZ:Z-4,maxZ:Z+4})}let P=new ft,gt=new pe(new Fs(26,1.1,10,32),new Ae({color:16735370,emissive:16735370,emissiveIntensity:.7,roughness:.4}));P.add(gt);for(let X=0;X<8;X++){let Z=X/8*Math.PI*2,M=new pe(new qe(.8,52,.8),new Ae({color:14211298,roughness:.5,metalness:.5}));M.rotation.z=Z+Math.PI/2,P.add(M);let g=new pe(new qe(3.4,3,3),new Ae({color:X%2?3663615:16756796,emissive:3351040,roughness:.5}));g.position.set(Math.cos(Z)*26,Math.sin(Z)*26,0),P.add(g)}let Qe=new pe(new Tt(2,2,3,12),new Ae({color:8947848,metalness:.6,roughness:.4}));Qe.rotation.x=Math.PI/2,P.add(Qe),P.position.set(Be.islandX,34,Be.islandZ),e.add(P),this.ferris=P;for(let X of[-1,1]){let Z=new pe(new qe(2,34,2),new Ae({color:7829367,roughness:.6,metalness:.4}));Z.position.set(Be.islandX+X*7,17,Be.islandZ),Z.rotation.z=-X*.22,e.add(Z)}this.colliders.push({minX:Be.islandX-10,maxX:Be.islandX+10,minZ:-4,maxZ:4}),this.mapData={roads:[...this.roadLines],blocks:E.map(X=>({x:X.x,z:X.z,w:X.w,d:X.d,color:X.color})),water:{x0:Be.waterX,x1:Be.waterX+240,z0:-Be.half,z1:Be.half},park:{x0:U.x0,x1:U.x1,z0:U.z0,z1:U.z1},island:{x:Be.islandX,z:Be.islandZ,half:Be.islandHalf},landmarks:[{x:80,z:-80,kind:"tower"},{x:sn.stadium.x,z:sn.stadium.z,kind:"stadium"},{x:Be.islandX,z:Be.islandZ,kind:"ferris"},{x:430,z:0,kind:"harbor"}]}}inPark(e,t){let n=sn.park;return e>=n.x0&&e<=n.x1&&t>=n.z0&&t<=n.z1}isWater(e,t){return!(e<Be.waterX||Math.abs(t)<=9&&e>=400&&e<=480||Math.abs(e-Be.islandX)<=Be.islandHalf&&Math.abs(t-Be.islandZ)<=Be.islandHalf)}isBlocked(e,t,n){if(this.isWater(e,t))return!0;for(let i of this.colliders)if(e+n>i.minX&&e-n<i.maxX&&t+n>i.minZ&&t-n<i.maxZ)return!0;return!1}collideCircle(e,t){let n=!1;for(let i of this.colliders)if(e.x+t>i.minX&&e.x-t<i.maxX&&e.z+t>i.minZ&&e.z-t<i.maxZ){let r=Ge(e.x,i.minX,i.maxX),a=Ge(e.z,i.minZ,i.maxZ),o=e.x-r,c=e.z-a,l=o*o+c*c;if(l>1e-8){let h=Math.sqrt(l),u=(t-h)/h;e.x+=o*u,e.z+=c*u}else{let h=e.x-i.minX,u=i.maxX-e.x,d=e.z-i.minZ,p=i.maxZ-e.z,x=Math.min(h,u,d,p);x===h?e.x=i.minX-t:x===u?e.x=i.maxX+t:x===d?e.z=i.minZ-t:e.z=i.maxZ+t}n=!0}return this.isWater(e.x,e.z)&&(e.x=Math.min(e.x,Be.waterX-t),n=!0),e.x=Ge(e.x,-Be.half,Be.waterX+Be.islandHalf*2),e.z=Ge(e.z,-Be.half,Be.half),n}onRoad(e,t){let n=Be.roadWidth/2;for(let i of this.roadLines)if(Math.abs(e-i)<=n||Math.abs(t-i)<=n)return!0;return!1}nearestRoad(e,t){let n=this.roadLines[0],i=this.roadLines[0],r=1/0;for(let a of this.roadLines){let o=Math.abs(e-a);o<r&&(r=o,n=a)}r=1/0;for(let a of this.roadLines){let o=Math.abs(t-a);o<r&&(r=o,i=a)}return Math.abs(e-n)<Math.abs(t-i)?{x:n,z:t}:{x:e,z:i}}randomRoadPoint(e){return e.chance(.5)?{x:e.range(-400,400),z:e.pick(this.roadLines),heading:e.chance(.5)?Math.PI/2:-Math.PI/2}:{x:e.pick(this.roadLines),z:e.range(-400,400),heading:e.chance(.5)?0:Math.PI}}randomSidewalkPoint(e){for(let t=0;t<20;t++){let n=e.range(-400,400),i=e.range(-400,400),r=this.nearestRoad(n,i),a=9.5,o=Math.abs(n-r.x)<Math.abs(i-r.z)?{x:r.x+(e.chance(.5)?a:-a),z:r.z+e.range(-30,30)}:{x:r.x+e.range(-30,30),z:r.z+(e.chance(.5)?a:-a)};if(!this.isBlocked(o.x,o.z,1))return o}return{x:0,z:40}}roadSpawnPoints(e,t){let n=[],i=0;for(;n.length<e&&i++<e*30;){let r=this.randomRoadPoint(t),a=Math.abs(Math.sin(r.heading))>.5,o=t.chance(.5)?3.5:-3.5,c=r.x+(a?0:o),l=r.z+(a?o:0);this.isBlocked(c,l,2)||n.some(h=>Math.hypot(h.x-c,h.z-l)<40)||n.push({x:c,z:l,heading:r.heading})}return n}lightState(e,t,n){let i=this.lightPhase.get(`${e},${t}`)??0;return(n+i)%12<6?"ns":"ew"}setNight(e){this.lampMat.emissiveIntensity=.3+e*2.4,this.buildingMat.emissiveIntensity=.35+e*.5}update(e,t,n,i){this.ferris&&(this.ferris.rotation.z+=e*.05),this.beacon&&this.beacon.material.color.setHex(Math.sin(i*2.4)>0?16722492:8917282),this.waterTex.offset.x+=e*.004,this.waterTex.offset.y+=e*.002;for(let r=0;r<this.buildingChunks.length;r++){let a=this.buildingChunks[r],o=r===4?0:r%2===0?-240:240,c=r===4?0:r<2?-240:240,l=Math.hypot(t-o,n-c);a.visible=l<620}}};function mt(s,e,t,n,i=0,r=0,a=0,o={}){let c=new pe(new qe(s,e,t),new Ae({color:n,roughness:o.roughness??.7,metalness:o.metalness??.2,emissive:o.emissive??0,emissiveIntensity:o.emissiveIntensity??1}));return c.position.set(i,r,a),c.castShadow=!0,c}var os=class{constructor(e,t,n=13208932,i=2236962){this.group=new ft;let r=l=>new Ae({color:l,roughness:.85});this.torso=new pe(new qe(.52,.62,.3),r(e)),this.torso.position.y=1.16,this.torso.castShadow=!0;let a=new pe(new qe(.3,.32,.3),r(n));a.position.y=1.66,a.castShadow=!0;let o=new pe(new qe(.32,.12,.32),r(i));o.position.y=1.84;let c=(l,h,u,d,p)=>{let x=new ft;x.position.set(d,p,0);let _=new pe(new qe(l,h,l),r(u));return _.position.y=-h/2,_.castShadow=!0,x.add(_),x};this.armL=c(.15,.62,e,-.34,1.42),this.armR=c(.15,.62,e,.34,1.42),this.legL=c(.19,.78,t,-.13,.86),this.legR=c(.19,.78,t,.13,.86),this.group.add(this.torso,a,o,this.armL,this.armR,this.legL,this.legR)}setPose(e,t){let n=Math.sin(t),i=Math.cos(t);if(e==="fall"){this.group.rotation.x=-Math.PI/2+.15,this.armL.rotation.x=.4,this.armR.rotation.x=-.3,this.legL.rotation.x=.2,this.legR.rotation.x=-.15;return}if(this.group.rotation.x=0,e==="idle")this.armL.rotation.x=n*.06,this.armR.rotation.x=-n*.06,this.legL.rotation.x=0,this.legR.rotation.x=0,this.torso.position.y=1.16+Math.sin(t*.5)*.01;else if(e==="shoot")this.armR.rotation.x=-Math.PI/2+.08,this.armL.rotation.x=-Math.PI/2+.35,this.legL.rotation.x=.25,this.legR.rotation.x=-.25;else if(e==="panic")this.armL.rotation.z=2.6,this.armR.rotation.z=-2.6,this.armL.rotation.x=n*.5,this.armR.rotation.x=-n*.5,this.legL.rotation.x=n*.9,this.legR.rotation.x=i*.9;else{let r=e==="run"?.95:.55;this.armL.rotation.x=n*r,this.armR.rotation.x=-n*r,this.legL.rotation.x=-n*r,this.legR.rotation.x=n*r,this.armL.rotation.z=0,this.armR.rotation.z=0,this.group.rotation.x=e==="run"?.12:.03}}},ho=class ho{constructor(e,t,n=!1,i=!1){this.group=new ft;this.pos=new C;this.heading=0;this.speed=0;this.steerAngle=0;this.hasDriver=!1;this.isPolice=!1;this.isTaxi=!1;this.isWreck=!1;this.smoking=!1;this.wheels=[];this.sirenL=null;this.sirenR=null;this.brakeL=null;this.brakeR=null;this.slide=0;this.bouncePhase=0;this.def=e,this.id=ho.nextId++,this.hp=e.hp,this.isPolice=n,this.isTaxi=i,this.body=this.buildMesh(e,t,n,i),this.group.add(this.body),this.group.traverse(r=>{r instanceof pe&&(r.castShadow=!0)})}buildMesh(e,t,n,i){let r=new ft,a=e.len,o=e.wid,c=1581614,l=m=>(r.add(m),m);if(e.kind==="bike"){l(mt(.5,.5,1.6,t,0,.55,0)),l(mt(.4,.45,.5,c,0,.85,-.3)),l(mt(.16,.5,.5,2236966,0,.75,.55));let m=new Tt(.36,.36,.16,12),f=new Ae({color:1118481,roughness:.9});for(let S of[-.85,.85]){let T=new pe(m,f);T.rotation.z=Math.PI/2,T.position.set(0,.36,S),T.castShadow=!0,r.add(T),this.wheels.push(T)}return this.brakeL=l(mt(.2,.12,.06,16722474,0,.6,a/2,{emissive:16722474,emissiveIntensity:.6})),l(mt(.2,.12,.06,16773832,0,.6,-a/2,{emissive:16773832,emissiveIntensity:1.4})),r}let h=e.kind==="bus"?1.5:e.kind==="truck"?1:.62,u=e.kind==="bus"?1.15:.62;if(l(mt(o,h,a,t,0,u,0,{metalness:.45,roughness:.35})),e.kind==="bus"){l(mt(o-.2,.9,a-1.2,c,0,2,0,{roughness:.2,metalness:.4}));for(let m=0;m<5;m++)l(mt(.06,.7,1.1,14211298,-o/2+.02,2,-3+m*1.5)),l(mt(.06,.7,1.1,14211298,o/2-.02,2,-3+m*1.5))}else if(e.kind==="truck")l(mt(o-.3,.85,1.4,t,0,1.35,-a/2+.9,{metalness:.4,roughness:.4})),l(mt(o-.5,.6,1.1,c,0,1.3,-a/2+.85,{roughness:.2,metalness:.4})),l(mt(o-.2,1.3,a-2.4,7035978,0,1,.8,{roughness:.9}));else{let m=a*(e.kind==="suv"?.62:.45);l(mt(o-.3,.55,m,c,0,u+h/2+.24,e.kind==="suv"?.1:.15,{roughness:.15,metalness:.5})),l(mt(o-.1,.08,m+.1,t,0,u+h/2+.55,e.kind==="suv"?.1:.15,{metalness:.4,roughness:.35}))}l(mt(o+.1,.22,.3,2236966,0,.32,-a/2+.05)),l(mt(o+.1,.22,.3,2236966,0,.32,a/2-.05));let d=new Ae({color:16773832,emissive:16773832,emissiveIntensity:2});for(let m of[-1,1]){let f=new pe(new qe(.42,.18,.08),d);f.position.set(m*(o/2-.35),.68,-a/2-.01),r.add(f);let S=new pe(new qe(.42,.16,.08),new Ae({color:16722474,emissive:16722474,emissiveIntensity:.7}));S.position.set(m*(o/2-.35),.68,a/2+.01),r.add(S),m===-1?this.brakeL=S:this.brakeR=S}i&&(l(mt(.9,.28,.4,16761898,0,1.55,.1,{emissive:16761898,emissiveIntensity:1.6})),l(mt(o+.02,.24,a*.4,2236966,0,.7,0))),n&&(l(mt(o+.02,.3,a*.5,15921906,0,.72,0)),l(mt(o+.04,.22,.5,1053720,0,.95,-a/2+.6)),l(mt(1.3,.12,.4,2236966,0,1.55,-.1)),this.sirenL=l(mt(.55,.22,.36,16722474,-.33,1.68,-.1,{emissive:16722474,emissiveIntensity:2.5})),this.sirenR=l(mt(.55,.22,.36,2780159,.33,1.68,-.1,{emissive:2780159,emissiveIntensity:2.5})));let p=new Tt(.38,.38,.3,12),x=new Ae({color:1118481,roughness:.9}),_=e.kind==="bus"?[-3.2,-1.2,1.6,3.2]:[-a/2+.9,a/2-.9];for(let m of _)for(let f of[-1,1]){let S=new pe(p,x);S.rotation.z=Math.PI/2,S.position.set(f*(o/2-.15),.38,m),S.castShadow=!0,r.add(S),this.wheels.push(S)}return r}containsPoint(e,t,n=0){let i=e-this.pos.x,r=t-this.pos.z,a=Math.cos(-this.heading),o=Math.sin(-this.heading),c=i*a-r*o,l=i*o+r*a;return Math.abs(c)<this.def.wid/2+n&&Math.abs(l)<this.def.len/2+n}overlapsVehicle(e){let t=e.pos.x-this.pos.x,n=e.pos.z-this.pos.z;return!(Math.hypot(t,n)>(this.def.len+e.def.len)/2+1||!this.containsPoint(e.pos.x,e.pos.z,(e.def.len+e.def.wid)/4)&&!e.containsPoint(this.pos.x,this.pos.z,(this.def.len+this.def.wid)/4))}damage(e,t){this.isWreck||(this.hp-=e,this.hp<=40&&(this.smoking=!0),this.hp<=0&&(this.hp=0,this.isWreck=!0,t(this)))}setSiren(e,t){if(!this.sirenL||!this.sirenR)return;let n=Math.floor(t*6)%2===0,i=(r,a)=>{let o=r.material;o.emissiveIntensity=a&&e?3.5:.25};i(this.sirenL,n),i(this.sirenR,!n)}setBraking(e){for(let t of[this.brakeL,this.brakeR]){if(!t)continue;let n=t.material;n.emissiveIntensity=e?3:.7}}update(e,t,n,i){let r=this.def;if(this.isWreck)this.speed=mn(this.speed,0,4,e);else if(t){let p=Ge(Math.abs(this.speed)/r.topSpeed,0,1);t.throttle>0?this.speed+=r.accel*(1-p*.85)*e:t.throttle<0?this.speed>.5?this.speed-=r.brake*e:this.speed-=r.accel*.55*e:this.speed=mn(this.speed,0,.6,e),this.speed=Ge(this.speed,-r.reverseSpeed,r.topSpeed);let x=t.steer*r.steer*(1-p*.55);this.steerAngle=mn(this.steerAngle,x,8,e);let _=t.handbrake?r.grip*.45:r.grip,m=this.steerAngle*Ge(Math.abs(this.speed)/6,0,1)*(this.speed>=0?1:-1)*_;this.heading+=m*e,t.handbrake&&Math.abs(this.speed)>8?this.slide=Ge(this.slide+t.steer*6*e,-6,6):this.slide=mn(this.slide,0,3,e)}else this.speed=mn(this.speed,0,1.2,e);let a=-Math.sin(this.heading),o=-Math.cos(this.heading);this.pos.x+=(a*this.speed+Math.cos(this.heading)*this.slide)*e,this.pos.z+=(o*this.speed-Math.sin(this.heading)*this.slide)*e;let c=Math.max(r.len,r.wid)/2,l={x:this.pos.x,z:this.pos.z};if(n.collideCircle(l,c*.72)){let p=Math.abs(this.speed);this.pos.x=l.x,this.pos.z=l.z,p>12&&this.damage(p*.7,()=>{}),this.speed*=.45,this.slide*=.4}this.bouncePhase+=e*(4+Math.abs(this.speed)*.55);let h=Ge(-this.steerAngle*Ge(Math.abs(this.speed)/r.topSpeed,0,1)*.12,-.1,.1),u=Ge((t?t.throttle:0)*.02,-.03,.03),d=Math.sin(this.bouncePhase)*.02*Ge(Math.abs(this.speed)/20,0,1);this.body.rotation.z=h,this.body.rotation.x=u,this.body.position.y=d;for(let p of this.wheels)p.rotation.x+=this.speed/.38*e;this.group.position.copy(this.pos),this.group.position.y=0,this.group.rotation.y=this.heading,this.setSiren(this.isPolice,i),this.setBraking(t?t.throttle<0:!1),this.pos.x=Bn(this.pos.x),this.pos.z=Bn(this.pos.z),this.speed=Bn(this.speed)}};ho.nextId=1;var Jl=ho;function er(s,e,t,n,i,r={}){let a=Gh[e],o=new bt(Math.floor(Math.abs(t*13+n*7+e.length*101))+1),c=r.taxi?16761898:a.colors[Math.floor(o.next()*a.colors.length)],l=new Jl(a,c,r.police??e==="police",r.taxi??!1);return l.pos.set(t,0,n),l.heading=i,l.hasDriver=r.driver??!1,l.group.position.copy(l.pos),l.group.rotation.y=i,s.add(l.group),l}function qh(s,e,t,n){let i=[],r=["sedan","sedan","sports","suv","truck","sedan","sports"],a=0;for(;i.length<n&&a++<n*12;){let o=e.randomRoadPoint(t),c=Math.abs(Math.sin(o.heading))>.5,l=5.2,h=o.x+(c?0:t.chance(.5)?l:-l),u=o.z+(c?t.chance(.5)?l:-l:0),d=!e.isBlocked(h,u,3);if(d){for(let x of i)if(Math.hypot(x.pos.x-h,x.pos.z-u)<8){d=!1;break}}if(!d)continue;let p=r[Math.floor(t.next()*r.length)];i.push(er(s,p,h,u,o.heading,{driver:!1}))}return i}function Yh(s,e,t,n=4.5){let i=null,r=n;for(let a of s){if(a.isWreck)continue;let o=Math.hypot(a.pos.x-e,a.pos.z-t);o<r&&(r=o,i=a)}return i}function Zh(s){let e=Math.cos(s.heading),t=-Math.sin(s.heading);return{x:s.pos.x+e*2.2,z:s.pos.z+t*2.2,heading:s.heading}}var $h=["sedan","sedan","sports","suv","truck","bus"],uo=class{constructor(e,t,n,i){this.cars=[];this.shotMode=!1;this.spawnTimer=0;this.scene=e,this.city=t,this.rng=n,this.onHorn=i??null}get count(){return this.cars.length}vehicles(){return this.cars.map(e=>e.v)}detachCar(e){let t=this.cars.findIndex(n=>n.v===e);return t<0?!1:(this.cars.splice(t,1),!0)}pickDestination(e,t){let n=this.rng.pick(this.city.roadLines),i=this.rng.pick(this.city.roadLines);return Math.hypot(n-e,i-t)<120?this.pickDestination(e,t):{x:n,z:i}}laneOffset(e){let t=Math.cos(e),n=-Math.sin(e);return{x:t*3.5,z:n*3.5}}spawnOne(e,t){let n=this.city.randomRoadPoint(this.rng),i=this.laneOffset(n.heading),r=n.x+i.x,a=n.z+i.z;if(Math.hypot(r-e,a-t)<90)return;for(let l of this.cars)if(Math.hypot(l.v.pos.x-r,l.v.pos.z-a)<10)return;let o=$h[Math.floor(this.rng.next()*$h.length)],c=er(this.scene,o,r,a,n.heading,{driver:!0});c.speed=this.rng.range(8,14),this.cars.push({v:c,target:this.pickDestination(r,a),wait:0,stuck:0,honkAt:0})}driveCar(e,t,n,i,r,a){let o=e.v,c=e.target.x-o.pos.x,l=e.target.z-o.pos.z;if(Math.hypot(c,l)<12){e.target=this.pickDestination(o.pos.x,o.pos.z);return}let u;Math.abs(c)>Math.abs(l)?u=c>0?-Math.PI/2:Math.PI/2:u=l>0?Math.PI:0;let d=u-o.heading;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;let p=Ge(d*1.6,-1,1),x=.7;Math.abs(d)>.6&&(x=.25);let _=o.pos.x+Math.sin(o.heading)*-14,m=o.pos.z+Math.cos(o.heading)*-14,f=this.city.roadLines.reduce((w,R)=>Math.abs(R-_)<Math.abs(w-_)?R:w),S=this.city.roadLines.reduce((w,R)=>Math.abs(R-m)<Math.abs(w-m)?R:w);if(Math.abs(_-f)<10&&Math.abs(m-S)<10){let w=this.city.lightState(f,S,r),R=Math.abs(c)>Math.abs(l);(R&&w==="ns"||!R&&w==="ew")&&(x=-1)}let E=1/0,A=(w,R)=>{let N=-w*Math.sin(o.heading)-R*Math.cos(o.heading),v=Math.abs(w*Math.cos(o.heading)-R*Math.sin(o.heading));N>0&&N<16&&v<3.5&&(E=Math.min(E,N))};for(let w of this.cars)w!==e&&A(w.v.pos.x-o.pos.x,w.v.pos.z-o.pos.z);if(a&&a!==o&&A(a.pos.x-o.pos.x,a.pos.z-o.pos.z),E<14&&(x=-.6),this.shotMode){let w=n-o.pos.x,R=i-o.pos.z,N=-w*Math.sin(o.heading)-R*Math.cos(o.heading);N>-40&&N<70&&Math.abs(w*Math.cos(o.heading)-R*Math.sin(o.heading))<8&&(x=.35)}o.update(t,{throttle:x,steer:p,handbrake:!1},this.city,r),Math.abs(o.speed)<.5&&x>0?e.stuck+=t:e.stuck=0,e.stuck>4&&(e.target=this.pickDestination(o.pos.x,o.pos.z),e.stuck=0),E<8&&r>e.honkAt&&(e.honkAt=r+3+this.rng.next()*2,this.onHorn&&this.onHorn())}update(e,t,n,i,r){this.spawnTimer-=e,this.cars.length<14&&this.spawnTimer<=0&&(this.spawnOne(t,n),this.spawnTimer=.5);for(let a=this.cars.length-1;a>=0;a--){let o=this.cars[a];if(Math.hypot(o.v.pos.x-t,o.v.pos.z-n)>300){this.scene.remove(o.v.group),this.cars.splice(a,1);continue}try{this.driveCar(o,e,t,n,i,r)}catch{o.target=this.pickDestination(o.v.pos.x,o.v.pos.z)}for(let l of this.cars)if(l!==o&&o.v.overlapsVehicle(l.v)){let h=o.v.pos.x-l.v.pos.x,u=o.v.pos.z-l.v.pos.z,d=Math.hypot(h,u)||.01,p=(6-d)/2;o.v.pos.x+=h/d*p,o.v.pos.z+=u/d*p,o.v.speed*=.6}if(r&&o.v.overlapsVehicle(r)){let l=o.v.pos.x-r.pos.x,h=o.v.pos.z-r.pos.z,u=Math.hypot(l,h)||.01,d=(6-u)/2;o.v.pos.x+=l/u*d,o.v.pos.z+=h/u*d,o.v.speed*=.6}}}};var Jh=[14211298,9054780,2780042,7047722,14196796,6048378,3947588],Kh=[2897232,3815994,6048314,2372682],fo=class{constructor(e,t,n){this.list=[];this.spawnTimer=0;this.scene=e,this.city=t,this.rng=n}get count(){return this.list.length}spawnOne(e,t){let n=this.city.randomSidewalkPoint(this.rng);if(Math.hypot(n.x-e,n.z-t)<60)return;let i=Jh[Math.floor(this.rng.next()*Jh.length)],r=Kh[Math.floor(this.rng.next()*Kh.length)],a=new os(i,r),o=this.rng.range(.92,1.08);a.group.scale.setScalar(o),a.group.position.set(n.x,0,n.z),this.scene.add(a.group);let c=this.city.randomSidewalkPoint(this.rng);this.list.push({h:a,pos:new C(n.x,0,n.z),heading:this.rng.next()*Math.PI*2,speed:this.rng.range(1.2,2.2),target:c,state:"walk",phase:this.rng.next()*6,panicT:0,downT:0,color:i})}scare(e,t,n){for(let i of this.list){if(i.state==="down")continue;if(Math.hypot(i.pos.x-e,i.pos.z-t)<n){i.state="panic",i.panicT=2.5+this.rng.next()*2;let a=Math.atan2(i.pos.x-e,i.pos.z-t);i.target={x:i.pos.x+Math.sin(a)*60,z:i.pos.z+Math.cos(a)*60}}}}knockDown(e,t,n){let i=[];for(let r of this.list)r.state!=="down"&&Math.hypot(r.pos.x-e,r.pos.z-t)<n&&(r.state="down",r.downT=6,i.push(r));return i}update(e,t,n){this.spawnTimer-=e,this.list.length<24&&this.spawnTimer<=0&&(this.spawnOne(t,n),this.spawnTimer=.4);for(let i=this.list.length-1;i>=0;i--){let r=this.list[i];if(Math.hypot(r.pos.x-t,r.pos.z-n)>280){this.scene.remove(r.h.group),this.list.splice(i,1);continue}if(r.state==="down"){r.downT-=e,r.h.setPose("fall",r.phase),r.downT<=0&&(r.state="walk",r.target=this.city.randomSidewalkPoint(this.rng));continue}let a=r.target.x-r.pos.x,o=r.target.z-r.pos.z;if(Math.hypot(a,o)<3){r.target=this.city.randomSidewalkPoint(this.rng),r.state==="panic"&&(r.state="walk");continue}let h=Math.atan2(a,o)-r.heading;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;r.heading+=Ge(h,-2.4*e,2.4*e);let u=r.state==="panic"?5.2:r.speed,d=r.pos.x+Math.sin(r.heading)*u*e,p=r.pos.z+Math.cos(r.heading)*u*e;this.city.isBlocked(d,p,.6)?r.target=this.city.randomSidewalkPoint(this.rng):(r.pos.x=d,r.pos.z=p),r.phase+=e*(r.state==="panic"?14:9),r.h.setPose(r.state==="panic"?"panic":"walk",r.phase),r.h.group.position.copy(r.pos),r.h.group.rotation.y=r.heading,r.state==="panic"&&(r.panicT-=e,r.panicT<=0&&(r.state="walk",r.target=this.city.randomSidewalkPoint(this.rng)))}}};var Qh={synthwave:104,hiphop:92,jazz:132},Xg={synthwave:[0,-1,0,-1,3,-1,0,-1,5,-1,3,-1,7,-1,5,3],hiphop:[0,-1,-1,0,-1,-1,0,-1,-1,-1,5,-1,-1,3,-1,-1],jazz:[0,-1,7,-1,5,-1,3,-1,0,-1,10,-1,7,-1,5,3]},qg={synthwave:[[0,3,7],[0,3,7],[-4,0,3],[-2,2,5]],hiphop:[[0,3,7],[0,3,7],[0,3,7],[-2,3,8]],jazz:[[0,4,7,10],[0,4,7,10],[-4,0,3,7],[-2,2,5,9]]},jh=[110,87.31,130.81,98],po=class{constructor(){this.muted=!1;this.stationName=as[0].name;this.stationIdx=0;this.actx=null;this.master=null;this.radioGain=null;this.sfxGain=null;this.engineGain=null;this.engineOsc=null;this.engineOsc2=null;this.engineFilter=null;this.sirenOsc=null;this.sirenGain=null;this.sirenLfo=null;this.noiseBuf=null;this.radioOn=!1;this.step=0;this.bar=0;this.nextStepTime=0;this.stepDur=60/Qh.synthwave/4}unlock(){try{if(!this.actx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.actx=new e,this.master=this.actx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.actx.destination),this.radioGain=this.actx.createGain(),this.radioGain.gain.value=.16,this.radioGain.connect(this.master),this.sfxGain=this.actx.createGain(),this.sfxGain.gain.value=.5,this.sfxGain.connect(this.master),this.engineGain=this.actx.createGain(),this.engineGain.gain.value=0,this.engineGain.connect(this.master),this.engineFilter=this.actx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=420,this.engineFilter.connect(this.engineGain),this.engineOsc=this.actx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=55,this.engineOsc.connect(this.engineFilter),this.engineOsc.start(),this.engineOsc2=this.actx.createOscillator(),this.engineOsc2.type="sawtooth",this.engineOsc2.frequency.value=82.5,this.engineOsc2.connect(this.engineFilter),this.engineOsc2.start();let t=this.actx.sampleRate;this.noiseBuf=this.actx.createBuffer(1,t,this.actx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.nextStepTime=this.actx.currentTime+.1}this.actx.state==="suspended"&&this.actx.resume()}catch{}}setMuted(e){this.muted=e,this.master&&this.actx&&this.master.gain.setTargetAtTime(e?0:.55,this.actx.currentTime,.05)}setRadioOn(e){this.radioOn=e}cycleStation(){this.stationIdx=(this.stationIdx+1)%as.length,this.stationName=as[this.stationIdx].name;let e=as[this.stationIdx].genre;return this.stepDur=60/Qh[e]/4,this.uiClick(),this.stationName}engine(e,t){if(!(!this.actx||!this.engineOsc||!this.engineOsc2||!this.engineGain||!this.engineFilter))try{let n=this.actx.currentTime,i=t?.05+e*.075:0;this.engineGain.gain.setTargetAtTime(i,n,.08);let r=48+e*95;this.engineOsc.frequency.setTargetAtTime(r,n,.06),this.engineOsc2.frequency.setTargetAtTime(r*1.494,n,.06),this.engineFilter.frequency.setTargetAtTime(320+e*1400,n,.1)}catch{}}siren(e){if(!(!this.actx||!this.master))try{if(e&&!this.sirenOsc){this.sirenGain=this.actx.createGain(),this.sirenGain.gain.value=.045,this.sirenGain.connect(this.master),this.sirenOsc=this.actx.createOscillator(),this.sirenOsc.type="triangle",this.sirenOsc.frequency.value=720,this.sirenLfo=this.actx.createOscillator(),this.sirenLfo.type="square",this.sirenLfo.frequency.value=.55;let t=this.actx.createGain();t.gain.value=190,this.sirenLfo.connect(t),t.connect(this.sirenOsc.frequency),this.sirenOsc.connect(this.sirenGain),this.sirenOsc.start(),this.sirenLfo.start()}else if(!e&&this.sirenOsc){let t=this.sirenOsc,n=this.sirenLfo,i=this.sirenGain;this.sirenOsc=null,this.sirenLfo=null,this.sirenGain=null,i?.gain.setTargetAtTime(0,this.actx.currentTime,.1),window.setTimeout(()=>{try{t.stop(),n?.stop(),i?.disconnect()}catch{}},400)}}catch{}}tone(e,t,n,i,r,a){if(!this.actx)return;let o=this.actx.createOscillator();o.type=i,o.frequency.value=e;let c=this.actx.createGain();c.gain.setValueAtTime(r,t),c.gain.exponentialRampToValueAtTime(1e-4,t+n),o.connect(c),c.connect(a??this.sfxGain??this.actx.destination),o.start(t),o.stop(t+n+.02)}noise(e,t,n,i,r="lowpass"){if(!this.actx||!this.noiseBuf)return;let a=this.actx.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let o=this.actx.createBiquadFilter();o.type=r,o.frequency.value=n;let c=this.actx.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o),o.connect(c),c.connect(this.sfxGain??this.actx.destination),a.start(e),a.stop(e+t+.02)}now(){return this.actx?this.actx.currentTime:0}shot(e){if(!(!this.actx||this.muted))try{let t=this.now();e==="shotgun"?(this.noise(t,.28,1400,.9),this.tone(140,t,.18,"square",.4)):e==="smg"?(this.noise(t,.08,3200,.5,"highpass"),this.tone(220,t,.06,"square",.25)):e==="grenade"?this.tone(90,t,.3,"sine",.5):(this.noise(t,.12,2400,.7,"bandpass"),this.tone(180,t,.09,"square",.3))}catch{}}melee(){if(!(!this.actx||this.muted))try{this.noise(this.now(),.09,900,.4)}catch{}}horn(){if(!(!this.actx||this.muted))try{let e=this.now();this.tone(370,e,.32,"square",.16),this.tone(466,e,.32,"square",.16)}catch{}}reload(){if(!(!this.actx||this.muted))try{let e=this.now();this.tone(1200,e,.04,"square",.2),this.tone(800,e+.12,.04,"square",.2)}catch{}}pickup(){if(!(!this.actx||this.muted))try{let e=this.now();this.tone(660,e,.09,"sine",.3),this.tone(880,e+.08,.09,"sine",.3),this.tone(1320,e+.16,.14,"sine",.3)}catch{}}explosion(){if(!(!this.actx||this.muted))try{let e=this.now();this.noise(e,.9,320,1),this.tone(55,e,.7,"sine",.7)}catch{}}wasted(){if(!(!this.actx||this.muted))try{let e=this.now();[392,311,233,175].forEach((n,i)=>this.tone(n,e+i*.22,.3,"triangle",.35))}catch{}}busted(){if(!(!this.actx||this.muted))try{let e=this.now();this.tone(220,e,.25,"square",.25),this.tone(220,e+.3,.4,"square",.25)}catch{}}missionComplete(){if(!(!this.actx||this.muted))try{let e=this.now();[523,659,784,1047].forEach((t,n)=>this.tone(t,e+n*.1,.22,"triangle",.3))}catch{}}missionFail(){if(!(!this.actx||this.muted))try{let e=this.now();this.tone(311,e,.25,"triangle",.3),this.tone(233,e+.22,.4,"triangle",.3)}catch{}}uiClick(){if(!(!this.actx||this.muted))try{this.tone(950,this.now(),.05,"square",.14)}catch{}}update(e){if(!(!this.actx||!this.radioGain||!this.radioOn||this.muted))try{let t=as[this.stationIdx].genre,n=this.actx.currentTime+.25;for(;this.nextStepTime<n;)this.scheduleStep(t,this.step,this.bar,this.nextStepTime),this.nextStepTime+=this.stepDur,this.step=(this.step+1)%16,this.step===0&&(this.bar=(this.bar+1)%jh.length)}catch{}}scheduleStep(e,t,n,i){if(!this.actx||!this.radioGain)return;let r=jh[n],a=l=>r*Math.pow(2,l/12),o=Xg[e][t];if(o>=0&&this.tone(a(o),i,this.stepDur*1.8,e==="jazz"?"sine":"sawtooth",.5,this.radioGain),t%4===0){let l=qg[e][t/4|0];for(let h of l)this.tone(a(h)*2,i,this.stepDur*3.2,"triangle",.12,this.radioGain)}if((e==="synthwave"?[0,4,8,12]:e==="hiphop"?[0,7,8]:[0,8]).includes(t)&&this.tone(120,i,.12,"sine",.8,this.radioGain),t%2===0&&this.noise(i,.03,8e3,.1,"highpass"),e==="synthwave"&&t%2===1){let l=[0,3,7,12,7,3];this.tone(a(l[t/2|0]??0)*4,i,this.stepDur*.9,"square",.05,this.radioGain)}}};var Yg=6040202,Zg=1842210,mo=class{constructor(e,t=1337){this.isReloading=!1;this.gang=[];this.cooldown=0;this.reloadT=0;this.grenades=[];this.muzzle=null;this.muzzleT=0;this.scene=e,this.rng=new bt(t+71),this.muzzle=new yi(16761963,0,14,1.6),this.scene.add(this.muzzle)}spawnGang(e,t,n,i={}){let r=[];for(let a=0;a<n;a++){let o=!!i.boss&&a===0,c=o?9050650:Yg,l=new os(c,Zg),h=e+(a%3-1)*3,u=t+Math.floor(a/3)*3-2;l.group.position.set(h,0,u),this.scene.add(l.group);let d=o?300:i.hp??60,p={h:l,pos:new C(h,0,u),heading:Math.PI,hp:d,maxHp:d,isBoss:o,state:"idle",phase:a*1.7,shootT:1+a*.4,deadT:0,speed:o?3.4:3};this.gang.push(p),r.push(p)}return r}aliveGang(){return this.gang.filter(e=>e.state!=="dead")}gangCount(){return this.aliveGang().length}clearGang(){for(let e of this.gang)this.scene.remove(e.h.group);this.gang=[]}aim(e,t){let n=e.pos.clone();n.y=e.inCar?1.4:1.5;let i=new C(-Math.sin(t),0,-Math.cos(t)).normalize();return{origin:n,dir:i}}firePlayerShot(e,t){if(this.cooldown>0||this.isReloading||e.dead)return;let n=zn[e.currentWeapon];this.cooldown=n.rate;let{origin:i,dir:r}=this.aim(e,t.yaw);if(e.currentWeapon==="fist"){t.audio.melee();for(let o of this.aliveGang()){if(Math.hypot(o.pos.x-e.pos.x,o.pos.z-e.pos.z)>n.range)continue;let h=Math.atan2(o.pos.x-e.pos.x,o.pos.z-e.pos.z)-Math.atan2(r.x,r.z);for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;Math.abs(h)<1.1&&this.damageGang(o,n.damage,t)}t.peds.scare(e.pos.x,e.pos.z,8);return}let a=e.ammo();if(n.mag>0&&a.ammo<=0){this.reload(e);return}n.mag>0&&e.giveWeapon(e.currentWeapon,a.ammo-1,a.reserve),t.audio.shot(e.currentWeapon),this.flashMuzzle(i),t.fx.sparks(i.clone().addScaledVector(r,1.2),4),t.fx.shake(e.currentWeapon==="shotgun"?.16:.06);for(let o=0;o<n.pellets;o++){let c=(this.rng.next()-.5)*2*n.spread,l=r.x+Math.cos(Math.atan2(r.x,r.z))*c,h=r.z-Math.sin(Math.atan2(r.x,r.z))*c,u=Math.hypot(l,h)||1,d={x:l/u,z:h/u},p=null,x=n.range;for(let _ of this.aliveGang()){let m=_.pos.x-i.x,f=_.pos.z-i.z,S=m*d.x+f*d.z;if(S<0||S>x)continue;Math.abs(m*d.z-f*d.x)<1.1&&(p=_,x=S)}if(p){let _=x>n.range*.6?.6:1;this.damageGang(p,n.damage*_,t),t.fx.burst(p.pos.clone().add(new C(0,1.2,0)),6,12595248,5,.4,1.2)}else{let _=i.clone().add(new C(d.x,0,d.z).multiplyScalar(Math.min(x,n.range)));_.y=.4,t.fx.sparks(_,2)}}t.police.addHeat(e.currentWeapon==="shotgun"?.12:.06),t.peds.scare(e.pos.x,e.pos.z,26)}damageGang(e,t,n){e.hp-=t,e.state="chase",e.hp<=0&&(e.hp=0,e.state="dead",e.deadT=0,e.h.setPose("fall",0),n.fx.burst(e.pos.clone().add(new C(0,1,0)),10,12595248,6,.5,1.4))}reload(e){let t=zn[e.currentWeapon];if(this.isReloading||t.mag<0)return;let n=e.ammo();n.ammo>=t.mag||n.reserve<=0||(this.isReloading=!0,this.reloadT=t.reload)}throwGrenade(e,t){if(this.cooldown>0||e.dead||e.currentWeapon!=="grenade")return;let n=e.ammo();if(n.ammo<=0)return;e.giveWeapon("grenade",n.ammo-1,n.reserve),this.cooldown=zn.grenade.rate;let{dir:i}=this.aim(e,t.yaw),r=e.pos.x+i.x*14,a=e.pos.z+i.z*14;this.grenades.push({x:r,z:a,fuse:.7}),t.audio.shot("grenade"),t.peds.scare(r,a,20)}flashMuzzle(e){this.muzzle&&(this.muzzle.position.copy(e),this.muzzle.intensity=60,this.muzzleT=.06)}update(e,t){if(this.cooldown=Math.max(0,this.cooldown-e),this.muzzleT>0&&(this.muzzleT-=e,this.muzzleT<=0&&this.muzzle&&(this.muzzle.intensity=0)),this.isReloading&&(this.reloadT-=e,this.reloadT<=0)){this.isReloading=!1;let i=t.player,r=zn[i.currentWeapon],a=i.ammo(),o=r.mag-a.ammo,c=Math.min(o,a.reserve);i.giveWeapon(i.currentWeapon,a.ammo+c,a.reserve-c),t.audio.reload()}for(let i=this.grenades.length-1;i>=0;i--){let r=this.grenades[i];r.fuse-=e,r.fuse<=0&&(this.grenades.splice(i,1),this.detonate(r.x,r.z,t))}let n=t.player;for(let i=this.gang.length-1;i>=0;i--){let r=this.gang[i];if(r.state==="dead"){r.deadT+=e,r.deadT>6&&(this.scene.remove(r.h.group),this.gang.splice(i,1));continue}let a=Math.hypot(n.pos.x-r.pos.x,n.pos.z-r.pos.z);if(a<55&&!n.dead&&(r.state="chase"),r.state==="chase"&&!n.dead){let l=Math.atan2(n.pos.x-r.pos.x,n.pos.z-r.pos.z)-r.heading;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;if(r.heading+=Ge(l,-3*e,3*e),a>9){let h=r.pos.x+Math.sin(r.heading)*r.speed*e,u=r.pos.z+Math.cos(r.heading)*r.speed*e;t.city.isBlocked(h,u,.6)||(r.pos.x=h,r.pos.z=u)}if(r.phase+=e*9,r.h.setPose(a>9?"run":"shoot",r.phase),r.shootT-=e,a<26&&r.shootT<=0){r.shootT=r.isBoss?.9:1.5,t.audio.shot("pistol"),t.fx.sparks(r.pos.clone().add(new C(0,1.4,0)),3);let h=a<12?.55:.3;if(this.rng.next()<h){let u=r.isBoss?14:8;t.damagePlayer(u)}}}else r.phase+=e*2,r.h.setPose("idle",r.phase);r.h.group.position.copy(r.pos),r.h.group.rotation.y=r.heading}}detonate(e,t,n){let i=new C(e,0,t);n.fx.explosion(i,!0),n.audio.explosion(),n.police.addHeat(.5);for(let o of this.aliveGang()){let c=Math.hypot(o.pos.x-e,o.pos.z-t);c<11&&this.damageGang(o,c<5?140:70,n)}n.peds.knockDown(e,t,9).length>0&&n.police.addHeat(.3),n.peds.scare(e,t,40),Math.hypot(n.player.pos.x-e,n.player.pos.z-t)<8&&!n.player.dead&&n.damagePlayer(35)}dampHeading(e,t,n){return mn(e,t,8,n)}};var tr=5,nr=1,go=class{constructor(e=1337){this.wanted=0;this.policeCars=[];this.heliActive=!1;this.heat=0;this.pinned=null;this.spawnT=0;this.bustT=0;this.heli=null;this.heliLight=null;this.heliAngle=0;this.sirenOn=!1;this.rng=new bt(e+91)}addWanted(e){this.pinned===null&&(this.heat=Ge(this.heat+e*nr,0,tr*nr),this.syncWanted())}addHeat(e){this.pinned===null&&(this.heat=Ge(this.heat+e,0,tr*nr),this.syncWanted())}setWanted(e){this.pinned=null,this.heat=Ge(e,0,tr)*nr,this.syncWanted()}clearWanted(){this.pinned=null,this.heat=0,this.syncWanted()}pinStars(e){this.pinned=e===null?null:Ge(e,0,tr),this.pinned!==null?(this.wanted=this.pinned,this.heat=this.pinned*nr):this.syncWanted()}syncWanted(){let e=Math.floor(this.heat+1e-4);e!==this.wanted&&(this.wanted=Ge(e,0,tr))}spawnCruiser(e){let t=e.player.pos,n=t.x,i=t.z;for(let a=0;a<8;a++){let o=e.city.randomRoadPoint(this.rng),c=Math.hypot(o.x-t.x,o.z-t.z);if(c>55&&c<130){n=o.x,i=o.z;break}}let r=er(e.scene,"police",n,i,this.rng.next()*Math.PI*2,{police:!0,driver:!0});r.hp=120,this.policeCars.push({v:r,state:"chase",stuckT:0,ramT:0})}removeCruiser(e,t){let n=this.policeCars[e];t.scene.remove(n.v.group),this.policeCars.splice(e,1)}ensureHeli(e){if(this.heli)return;let t=new ft,n=new Ae({color:1713206,roughness:.4,metalness:.6}),i=new pe(new qe(4.4,1.6,2.2),n);t.add(i);let r=new pe(new qe(4.2,.5,.5),n);r.position.set(3.6,.2,0),t.add(r);let a=new pe(new qe(9,.08,.5),new Ae({color:2236966,roughness:.6}));a.position.y=1.1,a.name="rotor",t.add(a);let o=new pe(new tn(.3,8,8),new Ae({color:16773832,emissive:16771488,emissiveIntensity:2}));o.position.set(0,-.9,0),t.add(o),this.heliLight=new zs(16773832,900,120,.32,.45,1.4),this.heliLight.position.set(0,-.9,0),t.add(this.heliLight),this.heliLight.target.position.set(0,-40,0),t.add(this.heliLight.target),t.position.set(e.player.pos.x,42,e.player.pos.z),e.scene.add(t),this.heli=t}removeHeli(e){this.heli&&(e.scene.remove(this.heli),this.heli=null,this.heliLight=null)}update(e,t){let n=t.player;if(this.pinned===null&&this.wanted>0){let c=this.nearestCruiserDist(n)>60?.09:.03;this.heat=Math.max(0,this.heat-c*e),this.syncWanted()}let i=this.wanted;for(this.spawnT-=e,this.policeCars.length<i&&this.spawnT<=0&&(this.spawnCruiser(t),this.spawnT=1.2);this.policeCars.length>i;)this.removeCruiser(this.policeCars.length-1,t);for(let o=this.policeCars.length-1;o>=0;o--){let c=this.policeCars[o],l=c.v,h=Math.hypot(n.pos.x-l.pos.x,n.pos.z-l.pos.z);if(h>260){this.removeCruiser(o,t);continue}let d=Math.atan2(n.pos.x-l.pos.x,n.pos.z-l.pos.z)-l.heading;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;let p=Ge(d*1.4,-1,1),x=h>6?1:.4;if(l.update(e,{throttle:x,steer:p,handbrake:!1},t.city,t.time),h<7?(c.ramT+=e,c.ramT>.5&&(c.ramT=0,n.inCar?(n.inCar.hp-=6,t.fx.sparks(n.pos.clone().add(new C(0,1,0)),6),t.fx.shake(.25),n.inCar.hp<=0&&(n.inCar.isWreck=!0)):t.damagePlayer(6))):c.ramT=0,Math.abs(l.speed)<.5&&h>12){if(c.stuckT+=e,c.stuckT>4){let _=t.city.randomRoadPoint(this.rng);l.pos.set(_.x,0,_.z),l.heading=this.rng.next()*Math.PI*2,l.group.position.copy(l.pos),c.stuckT=0}}else c.stuckT=0}let r=this.wanted>=3;if(r&&!this.heliActive?(this.heliActive=!0,this.ensureHeli(t)):!r&&this.heliActive&&(this.heliActive=!1,this.removeHeli(t)),this.heli){this.heliAngle+=e*.35;let o=n.pos.x+Math.cos(this.heliAngle)*26,c=n.pos.z+Math.sin(this.heliAngle)*26;this.heli.position.set(o,42,c),this.heli.rotation.y=Math.atan2(n.pos.x-o,n.pos.z-c);let l=this.heli.getObjectByName("rotor");l&&(l.rotation.y+=e*22),this.heliLight&&(this.heliLight.target.position.set(n.pos.x-o,-42,n.pos.z-c),this.heliLight.target.updateMatrixWorld())}let a=this.policeCars.length>0;a!==this.sirenOn&&(this.sirenOn=a,t.audio.siren(a)),this.wanted>0&&!n.inCar&&!n.dead?this.nearestCruiserDist(n)<4&&Math.abs(n.speed)<1.5?(this.bustT+=e,this.bustT>1.6&&(this.bustT=0,this.clearWanted(),t.audio.busted(),t.onBusted())):this.bustT=0:this.bustT=0}nearestCruiserDist(e){let t=1/0;for(let n of this.policeCars){let i=Math.hypot(e.pos.x-n.v.pos.x,e.pos.z-n.v.pos.z);i<t&&(t=i)}return t}};var eu={x:-80,z:160},tu={x:0,z:-80},nu={x:400,z:0},iu={x:80,z:80},su={x:-160,z:80},xo={x:160,z:-80},ru={x:-240,z:-160},au={x:560,z:0},_o=[{x:0,z:160},{x:160,z:160},{x:160,z:-160}];function $g(s){switch(s){case 1:return[{type:"enter",kind:"sedan",text:"Steal a sedan (press E near one)"},{type:"go",x:eu.x,z:eu.z,text:"Deliver the sedan to Vera's garage"}];case 2:return[{type:"go",x:tu.x,z:tu.z,text:"Pick up the package downtown"},{type:"timed",x:nu.x,z:nu.z,seconds:120,text:"Deliver to the harbor docks \u2014 fast"}];case 3:return[{type:"lose",text:"Lose the cops \u2014 get your wanted level to zero"}];case 4:return[{type:"kill",x:iu.x,z:iu.z,count:4,text:"Take out the Vipers on their corner"}];case 5:return[{type:"kill",x:su.x,z:su.z,count:6,text:"Clear the hotel forecourt"}];case 6:return[{type:"go",x:xo.x,z:xo.z,text:"Reach the Harbor Bank"},{type:"crack",x:xo.x,z:xo.z,seconds:5,text:"Cracking the vault \u2014 stay close"},{type:"go",x:ru.x,z:ru.z,text:"Reach the getaway marker"}];case 7:return[{type:"boss",x:au.x,z:au.z,text:"Defeat Silas Vane at the ferris wheel"}];default:return[{type:"go",x:0,z:0,text:"Reach the marker"}]}}var Jg={1:["Vera Kwan: Rook. You need wheels and a name.","Vera Kwan: Steal a sedan. Bring it to my garage."],2:["Vera Kwan: Package for the docks. Fast. No questions.","Vera Kwan: The clock is already running."],3:["Silas Vane: The law is on you, kid.","Silas Vane: Shake them off and come back clean."],4:["Silas Vane: The Dusk Vipers need a reminder.","Silas Vane: Hit their corner hard."],5:["Vera Kwan: Clear the hotel forecourt.","Vera Kwan: Nobody walks out of that deal."],6:["Silas Vane: The Harbor Bank vault. In, out, gone.","Silas Vane: Before the sirens. Understood?"],7:["Silas Vane: So it ends at the ferris wheel.","Silas Vane: Come and take the city, Rook."]},vo=class{constructor(e,t=1337){this.active=!1;this.activeId=null;this.objectiveText="";this.dialogue=null;this.missionName="";this.marker=null;this.missionDone=0;this.coinsCollected=0;this.taxiDone=0;this.shotMode=!1;this.completed=[];this.stages=[];this.stageIdx=0;this.stageT=0;this.stageSpawned=!1;this.dialogueLines=[];this.dialogueT=0;this.markerGroup=null;this.markerBeam=null;this.markerRing=null;this.markerGem=null;this.taxiActive=!1;this.taxiTarget=null;this.taxiFares=0;this.raceActive=!1;this.raceIdx=0;this.raceT=0;this.scene=e,this.rng=new bt(t+113)}buildMarker(){let e=new ft,t=new Vt({color:16761898,transparent:!0,opacity:.28,blending:Mi,depthWrite:!1,side:Nt}),n=new pe(new Tt(1.4,1.4,34,12,1,!0),t);n.position.y=17,e.add(n);let i=new pe(new xi(2.2,3.2,32),new Vt({color:16761898,transparent:!0,opacity:.9,side:Nt}));i.rotation.x=-Math.PI/2,i.position.y=.15,e.add(i);let r=new pe(new gi(1.1),new Vt({color:16766827,transparent:!0,opacity:.95}));r.position.y=6,e.add(r),e.visible=!1,this.scene.add(e),this.markerGroup=e,this.markerBeam=n,this.markerRing=i,this.markerGem=r}setMarker(e,t){if(this.markerGroup||this.buildMarker(),e===null||t===null||!this.markerGroup){this.markerGroup&&(this.markerGroup.visible=!1),this.marker=null;return}this.markerGroup.position.set(e,0,t),this.markerGroup.visible=!0,this.marker={x:e,z:t}}say(e){this.dialogueLines=[...e],this.dialogueT=0,this.dialogue=this.dialogueLines[0]??null}start(e,t){let n=no.find(i=>i.id===e);n&&(this.active&&this.failMission(t,"Mission abandoned"),this.active=!0,this.activeId=e,this.missionName=n.name,this.stages=$g(e),this.stageIdx=0,this.stageT=0,this.stageSpawned=!1,this.say(Jg[e]??[n.brief]),t.setBanner(`${n.name} \u2014 ${n.giver}`),t.setMessage(`Mission started: ${n.name} ($${n.reward})`),e===3&&t.police.addWanted(2),this.enterStage(t))}startNext(e){if(this.active){e.setMessage(`Mission in progress: ${this.missionName}`);return}let t=no.find(n=>!this.completed.includes(n.id));if(!t){e.setMessage("All missions complete \u2014 Neon Harbor is yours, Rook.");return}this.start(t.id,e)}enterStage(e){let t=this.stages[this.stageIdx];if(!t){this.completeMission(e);return}this.stageSpawned=!1,this.stageT=t.type==="timed"||t.type==="crack"?t.seconds:0,this.objectiveText=t.text,t.type==="go"||t.type==="timed"||t.type==="crack"?this.setMarker(t.x,t.z):t.type==="kill"||t.type==="boss"?this.setMarker(t.x,t.z):this.setMarker(null,null)}advanceStage(e){this.stageIdx++,this.stageIdx>=this.stages.length?this.completeMission(e):this.enterStage(e)}completeMission(e){let t=no.find(i=>i.id===this.activeId),n=t?.reward??0;e.player.money+=n,this.activeId!==null&&(this.completed.push(this.activeId),this.missionDone=this.completed.length),this.active=!1,this.activeId=null,this.objectiveText=t?`Completed: ${t.name} (+$${n})`:"",this.setMarker(null,null),e.combat.clearGang(),e.setBanner(`MISSION COMPLETE  +$${n}`),e.audio.missionComplete(),e.setMessage(`Mission complete: ${t?.name??""} \u2014 $${n} earned`)}failMission(e,t){this.active&&(this.active=!1,this.activeId=null,this.objectiveText=`Mission failed: ${t}`,this.setMarker(null,null),e.combat.clearGang(),e.setBanner("MISSION FAILED"),e.audio.missionFail(),e.setMessage(`Mission failed: ${t}`))}startTaxi(e){if(this.active){e.setMessage("Finish the current mission first.");return}if(this.taxiActive){e.setMessage("Taxi fare already running.");return}this.taxiActive=!0,this.taxiFares=0,this.nextFare(e),e.setMessage("Taxi: pick up the fare at the marker.")}nextFare(e){let t=e.city.randomRoadPoint(this.rng);this.taxiTarget={x:t.x,z:t.z},this.setMarker(t.x,t.z),this.objectiveText=`Taxi fare ${this.taxiFares+1}/3 \u2014 reach the pickup marker`}startRace(e){if(this.active){e.setMessage("Finish the current mission first.");return}if(this.raceActive){e.setMessage("Race already running.");return}this.raceActive=!0,this.raceIdx=0,this.raceT=90;let t=_o[0];this.setMarker(t.x,t.z),this.objectiveText="Race: checkpoint 1/3 \u2014 90s",e.setBanner("STREET RACE"),e.setMessage("Race started \u2014 hit all 3 checkpoints in 90 seconds.")}update(e,t){if(this.dialogue&&(this.dialogueT+=e,this.dialogueT>5&&(this.dialogueT=0,this.dialogueLines.shift(),this.dialogue=this.dialogueLines[0]??null)),this.markerGroup?.visible){let r=t.time;if(this.markerGem&&(this.markerGem.rotation.y=r*1.6,this.markerGem.position.y=6+Math.sin(r*2)*.5),this.markerRing){let a=1+Math.sin(r*3)*.12;this.markerRing.scale.set(a,a,1)}if(this.markerBeam){let a=this.markerBeam.material;a.opacity=.22+Math.sin(r*3)*.08}}if(this.taxiActive&&this.taxiTarget&&Math.hypot(t.player.pos.x-this.taxiTarget.x,t.player.pos.z-this.taxiTarget.z)<8){this.taxiFares++,this.taxiDone=this.taxiFares;let a=40+this.taxiFares*20;t.player.money+=a,t.audio.pickup(),t.setMessage(`Fare complete +$${a}`),this.taxiFares>=3?(this.taxiActive=!1,this.taxiTarget=null,this.setMarker(null,null),this.objectiveText="Taxi shift done \u2014 $180 earned"):this.nextFare(t)}if(this.raceActive){if(this.raceT-=e,this.raceT<=0){this.raceActive=!1,this.setMarker(null,null),this.objectiveText="Race failed \u2014 out of time",t.setBanner("RACE FAILED"),t.audio.missionFail();return}let r=_o[this.raceIdx],a=Math.hypot(t.player.pos.x-r.x,t.player.pos.z-r.z);if(this.objectiveText=`Race: checkpoint ${this.raceIdx+1}/3 \u2014 ${Math.ceil(this.raceT)}s`,a<9)if(this.raceIdx++,this.raceIdx>=_o.length)this.raceActive=!1,t.player.money+=250,this.setMarker(null,null),this.objectiveText="Race won! +$250",t.setBanner("RACE WON  +$250"),t.audio.missionComplete();else{let o=_o[this.raceIdx];this.setMarker(o.x,o.z),t.audio.pickup()}}if(!this.active)return;let n=this.stages[this.stageIdx];if(!n)return;let i=t.player;switch(n.type){case"go":{let r=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);this.objectiveText=`${n.text} (${Math.round(r)}m)`,r<8&&this.advanceStage(t);break}case"enter":{i.inCar&&i.inCar.def.kind===n.kind&&this.advanceStage(t);break}case"timed":{this.stageT-=e;let r=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);this.objectiveText=`${n.text} \u2014 ${Math.ceil(this.stageT)}s (${Math.round(r)}m)`,r<8?this.advanceStage(t):this.stageT<=0&&this.failMission(t,"Out of time");break}case"lose":{this.objectiveText=`${n.text} \u2014 wanted ${t.police.wanted}\u2605`,t.police.wanted<=0&&this.advanceStage(t);break}case"kill":{this.stageSpawned||(this.stageSpawned=!0,t.combat.spawnGang(n.x,n.z,n.count));let r=t.combat.gangCount();this.objectiveText=`${n.text} \u2014 ${r} left`,r<=0&&this.advanceStage(t);break}case"crack":{Math.hypot(i.pos.x-n.x,i.pos.z-n.z)<10?(this.stageT-=e,this.objectiveText=`${n.text} \u2014 ${Math.ceil(this.stageT)}s`,this.stageT<=0&&(t.police.addWanted(2),t.setMessage("Vault cracked \u2014 the alarm is up. Run!"),this.advanceStage(t))):this.objectiveText=`${n.text} (get to the bank)`;break}case"boss":{this.stageSpawned||(this.stageSpawned=!0,t.combat.spawnGang(n.x,n.z,4,{boss:!0}));let r=t.combat.aliveGang(),a=r.some(o=>o.isBoss);this.objectiveText=a?`${n.text} \u2014 take down Silas Vane`:`${n.text} \u2014 mop up ${r.length} Viper(s)`,!a&&r.length===0&&this.advanceStage(t);break}}}};var Kg=[{x:-80,z:-80,name:"Neon Surplus \u2014 Downtown"},{x:240,z:160,name:"Neon Surplus \u2014 Harbor"}],Kl=150,Ql=50,Qg=20,jg={cash:2817914,health:16730714,armor:3645695,ammo:16761898},yo=class{constructor(e,t=1337){this.stats={missionsDone:0,carsStolen:0,fares:0,distance:0,wantedMax:0};this.collectiblesFound=0;this.shopPrompt=null;this.pickups=[];this.coins=[];this.nearShop=null;this.lastX=0;this.lastZ=0;this.started=!1;this.scene=e,this.rng=new bt(t+131),this.spawnWorldItems()}makePickupMesh(e){let t=new ft,n=jg[e];if(e==="cash"){let r=new pe(new qe(.7,.25,.5),new Ae({color:n,emissive:n,emissiveIntensity:.7}));r.position.y=.5,t.add(r)}else{let r=new pe(new gi(.45),new Ae({color:n,emissive:n,emissiveIntensity:.9}));r.position.y=.8,t.add(r)}let i=new pe(new xi(.7,.9,24),new Vt({color:n,transparent:!0,opacity:.6,side:Nt}));return i.rotation.x=-Math.PI/2,i.position.y=.08,t.add(i),t}spawnWorldItems(){let e=["cash","cash","health","armor","ammo","cash","health","ammo","cash","armor"];for(let t of e){let n=this.spawnPoint(),i=this.makePickupMesh(t);i.position.set(n.x,0,n.z),this.scene.add(i),this.pickups.push({kind:t,mesh:i,pos:new C(n.x,0,n.z),phase:this.rng.next()*6})}for(let t=0;t<Qg;t++){let n=this.spawnPoint(),i=new ft,r=new pe(new Tt(.55,.55,.12,20),new Ae({color:16761898,emissive:11040768,emissiveIntensity:.8,metalness:.8,roughness:.25}));r.rotation.x=Math.PI/2,r.position.y=.9,i.add(r),i.position.set(n.x,0,n.z),this.scene.add(i),this.coins.push({kind:"cash",mesh:i,pos:new C(n.x,0,n.z),phase:this.rng.next()*6})}}spawnPoint(){let e=[-400,-320,-240,-160,-80,0,80,160,240,320,400],t=e[Math.floor(this.rng.next()*e.length)],n=e[Math.floor(this.rng.next()*e.length)];return this.rng.next()<.5?{x:t,z:n+(this.rng.next()*40-20)}:{x:t+(this.rng.next()*40-20),z:n}}buyAtShop(e,t){if(!this.nearShop)return"No shop nearby";if(e.inCar)return"Step out of the car to shop";if(e.armor<100&&e.money>=Kl)return e.money-=Kl,e.armor=100,t.audio.pickup(),`Body armor bought \u2014 $${Kl}`;if(e.money>=Ql){e.money-=Ql;let n=e.currentWeapon,i=e.ammo();return e.giveWeapon(n,i.ammo,i.reserve+60),t.audio.pickup(),`Ammo bought \u2014 $${Ql} (+60 reserve)`}return"Not enough cash (armor $150 / ammo $50)"}applyWasted(e){let t=Math.min(e.money,200);return e.money-=t,t}applyBusted(e){let t=Math.min(e.money,150);return e.money-=t,t}hasSave(){try{return window.localStorage.getItem(Qs)!==null}catch{return!1}}save(e){try{let t={version:1,cash:Math.floor(e.player.money),missionsDone:e.missionsDone,missionsCompleted:[...e.missionsCompleted],stats:{missionsDone:e.missionsDone,carsStolen:this.stats.carsStolen,fares:this.stats.fares,distance:Math.round(this.stats.distance),wantedMax:this.stats.wantedMax},collectibles:e.collectibles,clockMin:Math.round(e.timeOfDay*60),savedAt:Math.floor(e.elapsed)};return window.localStorage.setItem(Qs,JSON.stringify(t)),!0}catch{return!1}}load(){try{let e=window.localStorage.getItem(Qs);if(!e)return null;let t=JSON.parse(e);return!t||typeof t!="object"||t.version!==1?null:t}catch{return null}}clearSave(){try{return window.localStorage.removeItem(Qs),!0}catch{return!1}}update(e,t){let n=t.player;this.started||(this.started=!0,this.lastX=n.pos.x,this.lastZ=n.pos.z);let i=Math.hypot(n.pos.x-this.lastX,n.pos.z-this.lastZ);this.stats.distance+=i,this.lastX=n.pos.x,this.lastZ=n.pos.z,n.wanted>this.stats.wantedMax&&(this.stats.wantedMax=n.wanted),this.stats.fares=t.missions.taxiDone,this.stats.missionsDone=t.missions.missionDone;for(let r=this.pickups.length-1;r>=0;r--){let a=this.pickups[r];a.phase+=e*2,a.mesh.rotation.y+=e*1.5,a.mesh.children[0].position.y=.6+Math.sin(a.phase)*.15,Math.hypot(n.pos.x-a.pos.x,n.pos.z-a.pos.z)<2.5&&(this.applyPickup(a.kind,n,t),this.scene.remove(a.mesh),this.pickups.splice(r,1))}for(let r=this.coins.length-1;r>=0;r--){let a=this.coins[r];a.phase+=e*2,a.mesh.rotation.y+=e*2,a.mesh.children[0].position.y=.9+Math.sin(a.phase)*.12,Math.hypot(n.pos.x-a.pos.x,n.pos.z-a.pos.z)<2.5&&(this.collectiblesFound++,t.missions.coinsCollected=this.collectiblesFound,n.money+=50,t.audio.pickup(),this.scene.remove(a.mesh),this.coins.splice(r,1))}if(this.nearShop=null,this.shopPrompt=null,!n.inCar){for(let r of Kg)if(Math.hypot(n.pos.x-r.x,n.pos.z-r.z)<6){this.nearShop=r,this.shopPrompt=`${r.name} \u2014 press B: armor $150 / ammo $50`;break}}}applyPickup(e,t,n){if(n.audio.pickup(),e==="cash"){let i=25+Math.floor(this.rng.next()*4)*25;t.money+=i}else if(e==="health")t.hp=Math.min(100,t.hp+40);else if(e==="armor")t.armor=Math.min(100,t.armor+50);else{let i=t.ammo();t.giveWeapon(t.currentWeapon,i.ammo,i.reserve+60)}}};var e0=[{x:0,z:-40,label:"DOWNTOWN"},{x:430,z:0,label:"HARBOR"},{x:-320,z:0,label:"PARK"},{x:0,z:360,label:"STADIUM"},{x:560,z:0,label:"PIER ISLAND"},{x:80,z:-80,label:"SPIRE"}],Mo=class{constructor(){this.bannerT=0;this.toastT=0;this.lastToast="";let e=document.createElement("div");e.id="hud",e.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:5;font-family:"Segoe UI",system-ui,sans-serif;color:#fff;',document.body.appendChild(e),this.root=e;let t=document.createElement("div");t.style.cssText="position:absolute;top:12px;left:12px;display:flex;flex-direction:column;gap:6px;",this.hpBar=document.createElement("div"),this.hpBar.style.cssText="width:220px;height:14px;background:rgba(0,0,0,0.55);border:1px solid rgba(255,255,255,0.35);border-radius:3px;overflow:hidden;",this.hpFill=document.createElement("div"),this.hpFill.style.cssText="height:100%;width:100%;background:linear-gradient(90deg,#ff4a5a,#ff7a5a);",this.hpBar.appendChild(this.hpFill);let n=document.createElement("div");n.style.cssText="width:220px;height:8px;background:rgba(0,0,0,0.55);border:1px solid rgba(255,255,255,0.35);border-radius:3px;overflow:hidden;",this.armorFill=document.createElement("div"),this.armorFill.style.cssText="height:100%;width:0%;background:#37a0ff;",n.appendChild(this.armorFill),this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText="font-size:20px;font-weight:700;text-shadow:0 2px 4px #000;",this.starsEl=document.createElement("div"),this.starsEl.style.cssText="font-size:22px;letter-spacing:2px;color:#ffd76b;text-shadow:0 2px 4px #000;",t.append(this.hpBar,n,this.moneyEl,this.starsEl),e.appendChild(t),this.mapWrap=document.createElement("div"),this.mapWrap.style.cssText="position:absolute;top:12px;right:12px;",this.minimap=document.createElement("canvas"),this.minimap.width=200,this.minimap.height=200,this.minimap.style.cssText="width:200px;height:200px;border:2px solid rgba(255,255,255,0.4);border-radius:4px;background:#0c1420;",this.mapWrap.appendChild(this.minimap),e.appendChild(this.mapWrap);let i=document.createElement("div");i.style.cssText="position:absolute;left:12px;bottom:12px;max-width:460px;display:flex;flex-direction:column;gap:6px;",this.objectiveEl=document.createElement("div"),this.objectiveEl.style.cssText="background:rgba(0,0,0,0.55);padding:8px 12px;border-left:4px solid #ffc42a;font-size:15px;border-radius:3px;text-shadow:0 1px 2px #000;",this.dialogueEl=document.createElement("div"),this.dialogueEl.style.cssText="background:rgba(10,10,30,0.75);padding:8px 12px;font-size:14px;font-style:italic;border-radius:3px;display:none;",i.append(this.objectiveEl,this.dialogueEl),e.appendChild(i),this.weaponEl=document.createElement("div"),this.weaponEl.style.cssText="position:absolute;right:12px;bottom:12px;text-align:right;font-size:18px;font-weight:600;text-shadow:0 2px 4px #000;background:rgba(0,0,0,0.45);padding:6px 12px;border-radius:3px;",e.appendChild(this.weaponEl),this.toastEl=document.createElement("div"),this.toastEl.style.cssText="position:absolute;top:18%;left:50%;transform:translateX(-50%);font-size:17px;background:rgba(0,0,0,0.6);padding:6px 16px;border-radius:4px;display:none;white-space:nowrap;",e.appendChild(this.toastEl),this.bannerEl=document.createElement("div"),this.bannerEl.style.cssText="position:absolute;top:38%;left:50%;transform:translate(-50%,-50%);font-size:64px;font-weight:900;letter-spacing:6px;color:#ff4a5a;text-shadow:0 4px 0 #600,0 8px 24px #000;display:none;text-align:center;",e.appendChild(this.bannerEl),this.bigmap=document.createElement("canvas"),this.bigmap.width=900,this.bigmap.height=900,this.bigmap.style.cssText="position:absolute;inset:0;margin:auto;width:min(92vmin,900px);height:min(92vmin,900px);border:2px solid rgba(255,255,255,0.5);border-radius:6px;background:#0c1420;display:none;",e.appendChild(this.bigmap),this.promptEl=document.createElement("div"),this.promptEl.style.cssText="position:absolute;bottom:64px;left:50%;transform:translateX(-50%);font-size:14px;background:rgba(0,0,0,0.65);padding:5px 12px;border-radius:3px;display:none;",e.appendChild(this.promptEl)}setBanner(e){e?(this.bannerEl.textContent=e,this.bannerEl.style.display="block",this.bannerT=2.6):(this.bannerEl.style.display="none",this.bannerT=0)}update(e,t){let n=t.player;this.hpFill.style.width=`${Math.max(0,Math.min(100,n.hp))}%`,this.armorFill.style.width=`${Math.max(0,Math.min(100,n.armor))}%`,this.moneyEl.textContent=`${Vh(Math.floor(n.money))}  \xB7  ${Yl(t.timeOfDay)}`;let i=t.police.wanted;this.starsEl.textContent="\u2605".repeat(i)+"\u2606".repeat(5-i),this.starsEl.style.visibility=i>0?"visible":"hidden";let r=n.currentWeapon,a=n.ammo(),o=zn[r],c=o.mag<0?"\u221E":`${a.ammo} / ${a.reserve}`;this.weaponEl.textContent=`${o.label}  ${c}${t.combat.isReloading?"  \u2014 RELOADING":""}`;let l=t.missions.objectiveText||(t.missions.active?t.missions.missionName:"Press N for the next mission \xB7 T taxi \xB7 C race \xB7 M map");this.objectiveEl.textContent=l,t.missions.dialogue?(this.dialogueEl.style.display="block",this.dialogueEl.textContent=t.missions.dialogue):this.dialogueEl.style.display="none",t.message&&t.message!==this.lastToast&&(this.lastToast=t.message,this.toastEl.textContent=t.message,this.toastEl.style.display="block",this.toastT=3),this.toastT>0&&(this.toastT-=e,this.toastT<=0&&(this.toastEl.style.display="none")),this.bannerT>0&&(this.bannerT-=e,this.bannerT<=0&&(this.bannerEl.style.display="none")),t.economy.shopPrompt?(this.promptEl.textContent=t.economy.shopPrompt,this.promptEl.style.display="block"):this.promptEl.style.display="none";let h=t.state==="map";this.bigmap.style.display=h?"block":"none",this.mapWrap.style.display=h?"none":"block",this.root.style.display=t.state==="title"?"none":"block",t.state!=="title"&&(this.drawMap(this.minimap,t,!1),h&&this.drawMap(this.bigmap,t,!0))}drawMap(e,t,n){let i=e.getContext("2d");if(!i)return;let r=e.width,a=Be.half+120,o=_=>(_+a)/(a*2)*r,c=_=>(_+a)/(a*2)*r,l=t.city.mapData;i.clearRect(0,0,r,r),i.fillStyle="#0e3a55",i.fillRect(o(l.water.x0),c(l.water.z0),o(l.water.x1)-o(l.water.x0),c(l.water.z1)-c(l.water.z0)),i.fillStyle="#1d4a24",i.fillRect(o(l.park.x0),c(l.park.z0),o(l.park.x1)-o(l.park.x0),c(l.park.z1)-c(l.park.z0)),i.fillStyle="#2c3a4a",i.fillRect(o(l.island.x-l.island.half),c(l.island.z-l.island.half),o(l.island.x+l.island.half)-o(l.island.x-l.island.half),c(l.island.z+l.island.half)-c(l.island.z-l.island.half));for(let _ of l.blocks)i.fillStyle="#232c3d",i.fillRect(o(_.x-_.w/2),c(_.z-_.d/2),_.w/(a*2)*r,_.d/(a*2)*r);i.strokeStyle="#4a4a58",i.lineWidth=n?5:2;for(let _ of l.roads)i.beginPath(),i.moveTo(o(_),c(-a)),i.lineTo(o(_),c(a)),i.stroke(),i.beginPath(),i.moveTo(o(-a),c(_)),i.lineTo(o(a),c(_)),i.stroke();for(let _ of l.landmarks)i.fillStyle="#ffc42a",i.beginPath(),i.arc(o(_.x),c(_.z),n?6:3,0,Math.PI*2),i.fill();let h=t.missions.marker,u=t.player.pos.x,d=t.player.pos.z;if(h){i.strokeStyle="#ffc42a",i.lineWidth=n?3:1.5,i.setLineDash([6,5]),i.beginPath(),i.moveTo(o(u),c(d)),i.lineTo(o(h.x),c(d)),i.lineTo(o(h.x),c(h.z)),i.stroke(),i.setLineDash([]);let _=4+Math.sin(Date.now()/300)*1.5;i.fillStyle="#ffd76b",i.save(),i.translate(o(h.x),c(h.z)),i.rotate(Math.PI/4),i.fillRect(-_,-_,_*2,_*2),i.restore()}i.fillStyle="#37a0ff";for(let _ of t.police.policeCars)i.beginPath(),i.arc(o(_.v.pos.x),c(_.v.pos.z),n?5:2.5,0,Math.PI*2),i.fill();t.police.heliActive&&(i.fillStyle="#ffffff",i.font=`${n?16:10}px sans-serif`,i.fillText("H",o(u+30)-3,c(d-30)));let p=o(u),x=c(d);if(i.save(),i.translate(p,x),i.rotate(Math.PI-t.player.heading),i.fillStyle=t.player.inCar?"#37e6ff":"#ffffff",i.beginPath(),i.moveTo(0,n?-9:-7),i.lineTo(n?6:5,n?7:5),i.lineTo(0,n?3:2),i.lineTo(n?-6:-5,n?7:5),i.closePath(),i.fill(),i.restore(),n){i.font="bold 15px sans-serif",i.fillStyle="rgba(255,255,255,0.85)",i.textAlign="center";for(let _ of e0)i.fillText(_.label,o(_.x),c(_.z));i.textAlign="left",i.font="13px sans-serif",i.fillStyle="#ffc42a",i.fillText("\u25C6 Mission waypoint",16,r-52),i.fillStyle="#37a0ff",i.fillText("\u25CF Police",16,r-32),i.fillStyle="#ffffff",i.fillText("\u25B2 You",16,r-12),i.fillStyle="rgba(255,255,255,0.85)",i.font="bold 20px sans-serif",i.fillText(`NEON HARBOR \u2014 ${Yl(t.timeOfDay)}`,16,30)}}};var ou={x:0,z:80},So={x:0,z:40},jl=class{constructor(){this.pos=new C(So.x,0,So.z);this.heading=Math.PI;this.hp=100;this.armor=0;this.money=0;this.wanted=0;this.speed=0;this.dead=!1;this.inCar=null;this.currentWeapon="fist";this.owned=new Map;this.mesh=new ft;let e=new pe(new qe(.6,1.1,.35),new Ae({color:2771594,roughness:.8}));e.position.y=.95,e.castShadow=!0;let t=new pe(new tn(.22,12,10),new Ae({color:14196855,roughness:.7}));t.position.y=1.75,t.castShadow=!0,this.mesh.add(e,t),this.mesh.position.copy(this.pos),this.giveWeapon("fist",-1,0)}hasWeapon(e){return this.owned.has(e)}giveWeapon(e,t,n){this.owned.set(e,{ammo:t,reserve:n})}ammo(){return this.owned.get(this.currentWeapon)??{ammo:0,reserve:0}}update(e,t,n,i,r){let a=-Math.sin(r),o=-Math.cos(r),c=Math.cos(r),l=-Math.sin(r),h=a*t+c*n,u=o*t+l*n,d=Math.hypot(h,u);if(d>.01){h/=d,u/=d;let p=i?Zl.sprintSpeed:Zl.walkSpeed;this.pos.x+=h*p*e,this.pos.z+=u*p*e,this.pos.x=Ge(this.pos.x,-480,480),this.pos.z=Ge(this.pos.z,-480,480),this.heading=Math.atan2(h,u),this.speed=p}else this.speed=0;this.mesh.position.copy(this.pos),this.mesh.rotation.y=this.heading}},ec=class{constructor(e){this.scene=new Is;this.parked=[];this.grid=new eo(16);this.state="title";this.seed=1337;this.timeOfDay=Ri.defaultStart;this.fps=60;this.debug=!1;this.debugEl=null;this.time=0;this.errorLog=[];this.deadT=0;this.bustedT=0;this.message=null;this.renderer=Xh(e),this.camera=new Ct(70,window.innerWidth/window.innerHeight,.1,900),this.sky=new io(this.scene,new bt(1338)),this.fx=new so(this.scene,new bt(1339)),this.rig=new ro(this.camera),this.sky.setTimeOfDay(this.timeOfDay);let n=new URLSearchParams(window.location.search).get("seed"),i=n===null?NaN:Number(n);this.seed=Number.isFinite(i)?i|0:1337,this.city=new co(this.scene,this.seed);for(let r of this.city.colliders)this.grid.add(r,(r.minX+r.maxX)/2,(r.minZ+r.maxZ)/2);this.rig.setObstacles(this.city.colliders),this.traffic=new uo(this.scene,this.city,new bt(this.seed+11)),this.peds=new fo(this.scene,this.city,new bt(this.seed+23)),this.parked=qh(this.scene,this.city,new bt(this.seed+37),18),this.player=new jl,this.scene.add(this.player.mesh),this.audio=new po,this.combat=new mo(this.scene,this.seed),this.police=new go(this.seed),this.missions=new vo(this.scene,this.seed),this.economy=new yo(this.scene,this.seed),this.hud=new Mo,this.input=new ao(e,{onUnlockAudio:()=>this.audio.unlock(),onDebugToggle:()=>this.toggleDebug(),onEnterTitle:()=>{this.state==="title"&&this.start()},onPauseToggle:()=>{this.state==="map"?this.state="playing":this.state==="playing"?this.state="paused":this.state==="paused"&&(this.state="playing")},onMapToggle:()=>{this.state==="playing"?this.state="map":this.state==="map"&&(this.state="playing")},onAction:r=>this.onActionKey(r)}),this.input.attach(),window.addEventListener("resize",()=>this.onResize()),this.rig.snap(this.player.pos),this.installHooks(),this.loop=new lo({update:r=>this.update(r),render:()=>{try{this.renderer.render(this.scene,this.camera)}catch(r){this.logError("render",r)}}}),this.loop.start()}ctx(){return{scene:this.scene,city:this.city,fx:this.fx,peds:this.peds,traffic:this.traffic,parked:this.parked,audio:this.audio,police:this.police,missions:this.missions,combat:this.combat,economy:this.economy,player:this.player,time:this.time,timeOfDay:this.timeOfDay,yaw:this.rig.yaw,damagePlayer:e=>this.hurt(e),onBusted:()=>{this.state==="playing"&&(this.state="busted",this.bustedT=0,this.hud.setBanner("BUSTED"),this.setStatus("BUSTED"))},setBanner:e=>this.hud.setBanner(e),setMessage:e=>{this.message=e}}}onActionKey(e){if(this.state!=="playing")return;let t=this.ctx();if(e==="KeyN")this.missions.startNext(t);else if(e==="KeyT")this.missions.startTaxi(t);else if(e==="KeyC")this.missions.startRace(t);else if(e==="KeyE")this.enterCar();else if(e==="KeyR")this.combat.reload(this.player);else if(e==="KeyQ")this.message=`Radio: ${this.audio.cycleStation()}`;else if(e==="KeyG")this.combat.throwGrenade(this.player,t);else if(e==="KeyB")this.message=this.economy.buyAtShop(this.player,t);else if(e.startsWith("Digit")){let n=Number(e.slice(5))-1,i=Wh[n];i&&this.player.hasWeapon(i)&&(this.player.currentWeapon=i,this.audio.uiClick())}}onResize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}toggleDebug(){if(this.debug=!this.debug,this.debug&&!this.debugEl){let e=document.createElement("div");e.id="debug-overlay",e.style.cssText="position:fixed;top:8px;left:8px;z-index:10;background:rgba(0,0,0,0.6);color:#0f0;font:12px monospace;padding:8px;white-space:pre;pointer-events:none;",document.body.appendChild(e),this.debugEl=e}this.debugEl&&(this.debugEl.style.display=this.debug?"block":"none")}refreshDebug(){if(!this.debug||!this.debugEl)return;let e=this.player.pos;this.debugEl.textContent=`fps ${this.fps.toFixed(1)} steps ${this.loop.totalSteps}
pos ${e.x.toFixed(1)}, ${e.z.toFixed(1)} hp ${Math.floor(this.player.hp)}
time ${this.timeOfDay.toFixed(2)} wanted ${this.player.wanted} state ${this.state}
errors ${this.errorLog.length?this.errorLog[this.errorLog.length-1]:"none"}`}logError(e,t){let n=`${e}: ${t instanceof Error?t.message:String(t)}`;this.errorLog.push(n),this.errorLog.length>20&&this.errorLog.shift()}start(){(this.state==="title"||this.state==="dead"||this.state==="busted")&&(this.audio.unlock(),this.state="playing",this.hud.setBanner(null),this.player.hasWeapon("pistol")||this.player.giveWeapon("pistol",12,48),this.setStatus("Playing \u2014 Neon Harbor"))}setTimeOfDay(e){this.timeOfDay=(e%24+24)%24,this.sky.setTimeOfDay(this.timeOfDay)}respawn(){this.player.inCar&&(this.player.inCar=null,this.player.mesh.visible=!0),this.player.dead=!1,this.player.hp=100,this.player.pos.set(ou.x,0,ou.z),this.player.heading=Math.PI,this.police.setWanted(0),this.state="playing",this.hud.setBanner(null),this.rig.distance=9,this.rig.snap(this.player.pos)}vehicles(){return[...this.parked,...this.traffic.vehicles()].map(e=>({kind:e.def.kind,x:e.pos.x,z:e.pos.z,heading:e.heading}))}enterCar(){if(this.state!=="playing")return;if(this.player.inCar){let n=this.player.inCar,i=Zh(n);this.player.inCar=null,this.player.pos.set(i.x,0,i.z),this.player.heading=i.heading,this.player.speed=0,this.player.mesh.visible=!0,this.player.mesh.position.copy(this.player.pos),this.player.mesh.rotation.y=this.player.heading,this.message="Exited vehicle";return}let e=[...this.parked,...this.traffic.vehicles()],t=Yh(e,this.player.pos.x,this.player.pos.z,4.5);if(!t){this.message="No vehicle nearby";return}this.traffic.detachCar(t),t.hasDriver=!1,this.player.inCar=t,this.player.pos.copy(t.pos),this.player.heading=t.heading,this.player.speed=t.speed,this.player.mesh.visible=!1,this.message=`Entered ${t.def.label}`}hurt(e){let t=e;if(this.player.armor>0){let n=Math.min(this.player.armor,t);this.player.armor-=n,t-=n}return this.player.hp=Ge(this.player.hp-t,0,100),this.player.hp<=0&&this.state==="playing"&&(this.state="dead",this.player.dead=!0,this.deadT=0,this.hud.setBanner("WASTED"),this.audio.wasted(),this.setStatus("WASTED")),this.player.hp}saveGame(){let e=this.economy.save({player:this.player,timeOfDay:this.timeOfDay,missionsDone:this.missions.missionDone,missionsCompleted:this.missions.completed,collectibles:this.missions.coinsCollected,elapsed:this.time});return this.message=e?"Game saved":"Save failed",e}loadGame(){let e=this.economy.load();return e?(this.player.money=e.cash,this.player.hp=100,this.player.armor=0,this.missions.completed=[...e.missionsCompleted],this.missions.missionDone=e.missionsDone,this.missions.coinsCollected=e.collectibles,this.economy.collectiblesFound=e.collectibles,this.economy.stats.missionsDone=e.stats.missionsDone,this.economy.stats.carsStolen=e.stats.carsStolen,this.economy.stats.fares=e.stats.fares,this.economy.stats.distance=e.stats.distance,this.economy.stats.wantedMax=e.stats.wantedMax,this.setTimeOfDay(e.clockMin/60),this.police.clearWanted(),this.state="playing",this.message="Game loaded",!0):(this.message="No save found",!1)}teleport(e,t){this.player.pos.set(Bn(e),0,Bn(t)),this.player.inCar&&(this.player.inCar.pos.set(Bn(e),0,Bn(t)),this.player.inCar.group.position.copy(this.player.inCar.pos)),this.rig.snap(this.player.pos)}applyShot(e){let t={chase:{x:0,z:120,time:Ci.chase},street:{x:0,z:40,time:Ci.street},mission:{x:-40,z:0,time:Ci.mission},map:{x:0,z:0,time:Ci.map},night:{x:0,z:40,time:Ci.night},title:{x:0,z:40,time:Ci.default}},n=t[e]??t.street;this.setTimeOfDay(n.time),this.teleport(n.x,n.z);let i=e==="chase"||e==="street"||e==="mission"||e==="night";this.missions.shotMode=i,this.traffic.shotMode=e==="chase"||e==="street"||e==="mission",e==="chase"?this.police.pinStars(3):e==="mission"?this.police.pinStars(5):this.police.pinStars(null),e==="map"?this.state="map":e==="title"?this.state="title":this.state="playing"}setStatus(e){let t=document.getElementById("status");t&&(t.textContent=e)}update(e){this.time+=e,this.fps=this.loop.fps;try{let t=this.input.consumeDrag();if((t.dx!==0||t.dy!==0)&&(this.rig.yaw-=t.dx*.004,this.rig.pitch+=t.dy*.003,this.rig.clampPitch()),this.state==="playing")if(this.player.inCar){let n=this.player.inCar;n.update(e,{throttle:this.input.fwd,steer:this.input.strafe,handbrake:this.input.handbrake},this.city,this.time),this.player.pos.copy(n.pos),this.player.heading=n.heading,this.player.speed=Math.abs(n.speed)}else this.player.update(e,this.input.fwd,this.input.strafe,this.input.sprint,this.rig.yaw),this.city.collideCircle(this.player.pos,.6);else this.player.speed=0}catch(t){this.logError("player",t)}try{this.city.update(e,this.player.pos.x,this.player.pos.z,this.time),this.city.setNight(this.sky.lampLevel)}catch(t){this.logError("city",t)}try{this.traffic.update(e,this.player.pos.x,this.player.pos.z,this.time,this.player.inCar)}catch(t){this.logError("traffic",t)}try{this.peds.update(e,this.player.pos.x,this.player.pos.z)}catch(t){this.logError("peds",t)}if(this.state==="dead"){if(this.deadT+=e,this.deadT>2.5){let t=this.economy.applyWasted(this.player);this.message=`WASTED \u2014 hospital bill -$${t}`,this.respawn()}}else if(this.state==="busted"&&(this.bustedT+=e,this.bustedT>2.5)){let t=this.economy.applyBusted(this.player);this.message=`BUSTED \u2014 fine -$${t}`,this.hud.setBanner(null),this.player.pos.set(So.x,0,So.z),this.player.heading=Math.PI,this.state="playing",this.rig.snap(this.player.pos)}if(this.state==="playing"){let t=this.ctx();try{this.combat.update(e,t)}catch(n){this.logError("combat",n)}try{this.police.update(e,t),this.player.wanted=this.police.wanted}catch(n){this.logError("police",n)}try{this.missions.update(e,t)}catch(n){this.logError("missions",n)}try{this.economy.update(e,t)}catch(n){this.logError("economy",n)}try{this.input.firing&&this.combat.firePlayerShot(this.player,t);let n=this.player.inCar;this.audio.engine(n?Math.abs(n.speed)/n.def.topSpeed:0,n!==null)}catch(n){this.logError("shoot",n)}}try{this.setTimeOfDay(this.timeOfDay+e/60)}catch(t){this.logError("clock",t)}try{this.fx.update(e,this.player.pos.x,this.player.pos.z)}catch(t){this.logError("fx",t)}try{let t=this.fx.shakeOffset(e);this.rig.update(e,this.player.pos,t.x,t.y)}catch(t){this.logError("camera",t)}try{this.sky.updateSunFollow(this.player.pos.x,this.player.pos.z)}catch(t){this.logError("sky",t)}try{this.audio.setRadioOn(this.state==="playing"||this.state==="title"),this.audio.update(e)}catch(t){this.logError("audio",t)}try{this.hud.update(e,{player:this.player,police:this.police,missions:this.missions,combat:this.combat,economy:this.economy,audio:this.audio,city:this.city,state:this.state,timeOfDay:this.timeOfDay,message:this.message,fps:this.fps}),this.message=null}catch(t){this.logError("hud",t)}this.refreshDebug()}installHooks(){let e={state:()=>({state:this.state,money:Math.floor(this.player.money),hp:Math.floor(this.player.hp),wanted:this.police.wanted,mission:this.missions.activeId||null,missionActive:this.missions.active,objective:this.missions.objectiveText,pos:[Number(this.player.pos.x.toFixed(1)),Number(this.player.pos.z.toFixed(1))],speed:Number(this.player.speed.toFixed(1)),inCar:this.player.inCar!==null,weapon:this.player.currentWeapon,weaponLabel:zn[this.player.currentWeapon].label,ammo:this.player.ammo().ammo,timeOfDay:Number(this.timeOfDay.toFixed(2)),traffic:this.traffic?this.traffic.count:0,peds:this.peds?this.peds.count:0,vehicles:this.vehicles().length,fps:Number(this.fps.toFixed(1)),steps:this.loop.totalSteps,errors:this.errorLog.slice(-5),heli:this.police.heliActive,gang:this.combat.aliveGang().length,coins:this.missions.coinsCollected,station:this.audio.stationName,muted:this.audio.muted,marker:this.missions.marker,message:this.message}),teleport:(t,n)=>this.teleport(t,n),setTimeOfDay:t=>this.setTimeOfDay(t),shot:t=>this.applyShot(t),start:()=>this.start(),respawn:()=>this.respawn(),vehicles:()=>this.vehicles(),hurt:t=>this.hurt(t),shoot:()=>this.combat.firePlayerShot(this.player,this.ctx()),missionStart:t=>this.missions.start(t,this.ctx()),missionNext:()=>this.missions.startNext(this.ctx()),enterCar:()=>this.enterCar(),giveWeapon:(t,n,i)=>this.player.giveWeapon(t,n,i),setWanted:t=>this.police.setWanted(t),save:()=>this.saveGame(),load:()=>this.loadGame(),startTaxi:()=>this.missions.startTaxi(this.ctx()),startRace:()=>this.missions.startRace(this.ctx()),throwGrenade:()=>this.combat.throwGrenade(this.player,this.ctx()),step:t=>{this.loop.step(t)},errors:()=>this.errorLog.slice()};window.__game=e}dispose(){this.loop.stop()}},lu=document.getElementById("game");if(lu){let s=new ec(lu);window.__gameInstance=s;let e=new URLSearchParams(window.location.search),t=e.get("time");t&&s.setTimeOfDay(Number(t));let n=e.get("shot");n&&s.applyShot(n)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
