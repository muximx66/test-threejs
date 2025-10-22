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
const render = ()=>{
    cylinder.material.map.offset.y += 0.01;
    cylinder.rotation.y += 0.01;
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
};

render();

new OrbitControls(camera,renderer.domElement);