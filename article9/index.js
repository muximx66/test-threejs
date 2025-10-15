import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import { updatePosition } from './update-position.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const geometry = new THREE.PlaneGeometry(300,300,30,30);
const material = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink'),
    wireframe:true,
});
const mesh = new THREE.Mesh(geometry,material);
mesh.position.set(0,0,0);
mesh.rotateX(Math.PI/2);

const scene = new THREE.Scene();
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(90,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    updatePosition(geometry.attributes.position);
    // mesh.rotateZ(0.003);
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

new OrbitControls(camera,renderer.domElement);