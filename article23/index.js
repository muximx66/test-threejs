import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { line } from './bezier.js'
import { line } from './bezier2.js'

const width = () => window.innerWidth;
const height = () => window.innerHeight;
const aspect = () => width() / height();

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(1000));
scene.add(line)

const camera = new THREE.PerspectiveCamera(60, aspect(), 1, 10000);
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
document.body.append(renderer.domElement);
const render = () => {
    renderer.setSize(width(), height());
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();

new OrbitControls(camera,renderer.domElement)