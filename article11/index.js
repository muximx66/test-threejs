import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { mesh } from './uv-img.js';
// import { mesh } from './test-buffer.js'
import { mesh } from './sphere-uv.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const scene = new THREE.Scene();
scene.add(mesh);

console.log(mesh.geometry)

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    mesh.material.map.offset.y += 0.001;
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();


scene.add(new THREE.AxesHelper(200));
new OrbitControls(camera,renderer.domElement);