import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ambientLight } from './ambient-light.js'
// import { light,lightHelper } from './directional-light.js'
// import { light,lightHelper } from './point-light.js'
// import { light,lightHelper } from './spot-light.js'
import { light,lightHelper } from './rectarea-light.js'
import { hemisphereLight,hemisphereHelper } from './hemisphere-light.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const planeGometry = new THREE.PlaneGeometry(1000,1000);
const planeMaterial = new THREE.MeshStandardMaterial({
    color:new THREE.Color('white')
});
const plane = new THREE.Mesh(planeGometry,planeMaterial);
plane.rotateX(-Math.PI/2);
plane.translateZ(-50);

const boxGeometry = new THREE.BoxGeometry(100,100,100);
const boxMaterial = new THREE.MeshStandardMaterial({
    color:new THREE.Color('white')
});
const box = new THREE.Mesh(boxGeometry,boxMaterial);

const box2 = box.clone();
box2.translateX(300);

const group = new THREE.Group();
group.add(box,box2);

// ambientLight && group.add(ambientLight);
light && group.add(light);
lightHelper && group.add(lightHelper);
hemisphereLight && group.add(hemisphereLight)
hemisphereHelper && group.add(hemisphereHelper);

const scene = new THREE.Scene();
scene.add(group);

// scene.add(new THREE.AxesHelper(500));
// scene.add(new THREE.GridHelper(
//     1000,
//     10,
//     new THREE.Color('green'),
//     new THREE.Color('blue'))
// );

const dir = new THREE.Vector3(-1,-2,0);
dir.normalize();
const origin = new THREE.Vector3(0,0,0);
scene.add(new THREE.ArrowHelper(dir,origin,300,new THREE.Color('yellow')));

scene.add(new THREE.PolarGridHelper(
    1000,
    10,
    3,
    20,
    new THREE.Color('pink'),
    new THREE.Color('lightgreen')
));

const camera2 = new THREE.PerspectiveCamera(60,16/9,100,1000);
camera2.position.set(-300,300,0);
camera2.lookAt(0,0,0);
scene.add(new THREE.CameraHelper(camera2));

const camera = new THREE.PerspectiveCamera(30,aspect(),1,3000);
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
