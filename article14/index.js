import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import { lathe,points } from './lathe-geometry.js'import {
// import { tube,curve } from './tube-geometry.js'
import { shape,shape2,extrude } from './shape-geometry.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const scene = new THREE.Scene();
// scene.add(tube);
// scene.add(shape2);
scene.add(extrude);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

scene.add(new THREE.AxesHelper(200));
new OrbitControls(camera,renderer.domElement);

const gui = new GUI();
const curveObj = {
    tubularSegments:4,
    radius:10,
    radialSegments:5,
};
const onChange = ()=>{
    tube.geometry = new THREE.TubeGeometry(
        curve,
        curveObj.tubularSegments,
        curveObj.radius,
        curveObj.radialSegments
    );
};
gui.add(curveObj,'tubularSegments').onChange(onChange);
gui.add(curveObj,'radius').onChange(onChange);
gui.add(curveObj,'radialSegments').onChange(onChange);