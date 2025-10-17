import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { group } from './mesh-group.js'

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>width()/height();

const scene = new THREE.Scene();
scene.add(group);

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    group.children.forEach((mesh,i)=>{
        const direction = i % 2 ? 1:-1;
        mesh.rotateZ(0.001*direction);
    })
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

scene.add(new THREE.AxesHelper(200));
new OrbitControls(camera,renderer.domElement);
