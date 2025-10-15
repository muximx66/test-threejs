import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { point } from './ellipse-curve.js';
// import { line } from './half-ellipse-curve.js';
// import { line } from './spline-curve.js';
// import { line } from './quadratic-bezier-curve.js';
// import { line } from './cubic-bezier-curve.js';
import { line } from './curve-path.js';

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const scene = new THREE.Scene();
scene.add(line);

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();

scene.add(new THREE.AxesHelper(200));
new OrbitControls(camera,renderer.domElement);