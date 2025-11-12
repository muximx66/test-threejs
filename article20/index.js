import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ambientLight } from './ambient-light.js'
// import { light,lightHelper } from './directional-light.js'
// import { light,lightHelper } from './point-light.js'
import { light,lightHelper } from './spot-light.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const planeGometry = new THREE.PlaneGeometry(1000,1000);
const planeMaterial = new THREE.MeshLambertMaterial({
    color:new THREE.Color('lightblue')
});
const plane = new THREE.Mesh(planeGometry,planeMaterial);
plane.rotateX(-Math.PI/2);
plane.translateZ(-50);

const boxGeometry = new THREE.BoxGeometry(100,100,100);
const boxMaterial = new THREE.MeshLambertMaterial({
    color:new THREE.Color('orange')
});
const box = new THREE.Mesh(boxGeometry,boxMaterial);

const box2 = box.clone();
box2.translateX(300);

const group = new THREE.Group();
group.add(plane,box,box2);

group.add(ambientLight);
group.add(light);
lightHelper && group.add(lightHelper);

const scene = new THREE.Scene();
scene.add(group);

scene.add(new THREE.AxesHelper(500));

const camera = new THREE.PerspectiveCamera(60,aspect(),1,2000);
camera.position.set(500,500,800);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
const render = ()=>{
    camera.aspect = aspect();
    camera.updateProjectionMatrix();
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

window.document.body.appendChild(renderer.domElement);
new OrbitControls(camera,renderer.domElement);
