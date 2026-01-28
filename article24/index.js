import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { width , height ,aspect } from 'common'
import { create } from './axes.js'

const scene = new THREE.Scene();
scene.add(create(300,20,[10,200,50,100]))

const camera = new THREE.PerspectiveCamera(60,aspect(),1,10000);
camera.position.set(0,0,800);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
const render = () => {
    renderer.setSize(width(),height())
    renderer.render(scene,camera);
    requestAnimationFrame(render)
}
render();
document.body.append(renderer.domElement);
new OrbitControls(camera,renderer.domElement)