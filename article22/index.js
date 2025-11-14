import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mesh } from './mesh.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const scene = new THREE.Scene();
scene.add(mesh);

const light = new THREE.DirectionalLight(0xffffff,2);
light.position.set(500,500,500);
light.lookAt(0,0,0);
scene.add(light)

const axesHelper = new THREE.AxesHelper(1000)
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(60,aspect(),1,10000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer= new THREE.WebGLRenderer();
renderer.setSize(width(),height());

const render = ()=>{
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

new OrbitControls(camera,renderer.domElement);