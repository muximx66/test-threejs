import * as THREE from 'three';
import { tube,tubePoints } from './tube-catmull-rom.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const scene = new THREE.Scene();
scene.add(tube)

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
let i = 0;
const len = tubePoints.length;
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    if(i==len-1)i=0;
    camera.position.copy(tubePoints[i]);
    camera.lookAt(tubePoints[i+1]);
    i++;

    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();
