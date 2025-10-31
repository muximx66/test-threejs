import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { house } from './house.js'


const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

house.position.set(0,0,0);

const directionLight = new THREE.DirectionalLight(0xffffff);
directionLight.position.set(-3000,3000,3000);

const ambientLight = new THREE.AmbientLight(0xffffff);

const scene = new THREE.Scene();
scene.add(directionLight);
scene.add(ambientLight);
scene.add(house);

const camera = new THREE.PerspectiveCamera(30,aspect(),1,10000);
camera.position.set(3000,3000,3000);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

new OrbitControls(camera,renderer.domElement);