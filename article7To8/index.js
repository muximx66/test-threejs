import * as THREE from 'three'
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import { mesh } from './cylinder-geometry-segment.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>window.innerWidth/window.innerHeight;

mesh.position.set(0,0,0);

const pointLight = new THREE.PointLight(0xffffff,10000);
pointLight.position.set(100,100,100);

const scene = new THREE.Scene();
scene.add(mesh,pointLight);

const camera = new THREE.PerspectiveCamera(90,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();

const render = ()=>{
    camera.aspect = aspect();
    camera.updateProjectionMatrix();
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

window.document.body.appendChild(renderer.domElement);
render();


// 辅助线 
scene.add(new THREE.AxesHelper(200));
// 轨道
new OrbitControls(camera,renderer.domElement);