import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mesh } from './plane-texture.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const pointLight = new THREE.PointLight(0xffffff,10000);
pointLight.position.set(200,200,200);

const scene = new THREE.Scene();
scene.add(mesh,pointLight);

const camera = new THREE.PerspectiveCamera(60,aspect(),1,50000);
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

// scene.add(new THREE.AxesHelper(150));
new OrbitControls(camera,renderer.domElement);
