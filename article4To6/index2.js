import * as THREE from 'three'
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import {
    GUI
} from 'three/addons/libs/lil-gui.module.min.js';

const width = ()=>window.innerWidth;
const height = ()=>window.innerHeight;
const aspect = ()=>window.innerWidth/window.innerHeight;

const geometry = new THREE.BoxGeometry(80,80,80);
const material = new THREE.MeshLambertMaterial({
    color:new THREE.Color('pink')
});

const mesh = new THREE.Mesh(geometry,material);
mesh.position.set(0,0,0);

const pointLight = new THREE.PointLight(0xffffff,10000);
pointLight.position.set(100,100,100);

const scene = new THREE.Scene();
scene.add(mesh,pointLight);

const camera = new THREE.PerspectiveCamera(30,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
const render = ()=>{
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
window.document.body.appendChild(renderer.domElement);
render();

new OrbitControls(camera,renderer.domElement);

// 创建gui
const gui = new GUI();
// 添加相机gui
const cameraFolder = gui.addFolder('相机')
const onCameraGuiChange = ()=>{
    camera.updateProjectionMatrix();
}
cameraFolder.add(camera,'fov',[30,60,120,180,360]).onChange(onCameraGuiChange);
cameraFolder.add(camera,'aspect',{
    '4/3':4/3,
    '16/9':16/9,
    '16/10':16/10,
    '21/9':21/9,
    '2.35/1':2.35/1
}).onChange(onCameraGuiChange);
cameraFolder.add(camera,'near').step(20).onChange(onCameraGuiChange);
cameraFolder.add(camera,'far').step(20).onChange(onCameraGuiChange);

// 添加相机助手gui
const camera2 = new THREE.PerspectiveCamera(20,aspect(),1,300);
const cameraHelper = new THREE.CameraHelper(camera2);
scene.add(cameraHelper);
const cameraHelperFolder = gui.addFolder('相机助手')
const onCameraHelperGuiChange = ()=>{
    camera2.updateProjectionMatrix();
    cameraHelper.update();
}
cameraHelperFolder.add(camera2,'fov',[30,60,120,180,360]).onChange(onCameraHelperGuiChange);
cameraHelperFolder.add(camera2,'aspect',{
    '4/3':4/3,
    '16/9':16/9,
    '16/10':16/10,
    '21/9':21/9,
    '2.35/1':2.35/1
}).onChange(onCameraGuiChange);
cameraHelperFolder.add(camera2,'near').step(20).onChange(onCameraHelperGuiChange);
cameraHelperFolder.add(camera2,'far').step(20).onChange(onCameraHelperGuiChange);
