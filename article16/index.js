import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cylinder } from './cylinder-infinite-travel.js';

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const scene = new THREE.Scene();
cylinder.position.set(0,0,0);
scene.add(cylinder);

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(0,-150,0);
camera.lookAt(0,300,0);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const clock = new THREE.Clock();
let hslColor = 0.002;
const render = ()=>{
    const delta = clock.getDelta();
    // cylinder.material.map.offset.y += 0.01;
    cylinder.material.alphaMap.offset.y+= delta*0.5;
    cylinder.rotation.y += delta*0.5;
    cylinder.material.color.setHSL(hslColor+=0.002,0.5,0.5);
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
};

render();

new OrbitControls(camera,renderer.domElement);