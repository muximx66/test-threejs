import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const width = ()=>window.innerWidth;
const height= ()=>window.innerHeight;
const aspect = ()=>width()/height();

const scene = new THREE.Scene();

const group = new THREE.Group();
const boxGeometry = new THREE.BoxGeometry(100,100,100);
const boxMaterial = new THREE.MeshBasicMaterial({
    color:new THREE.Color('lightgreen'),
    opacity:0.5,
    transparent:true,
});
const boxMesh = new THREE.Mesh(boxGeometry,boxMaterial)
boxMesh.translateX(100);
group.translateZ(100);
group.translateX(100);
group.add(boxMesh);
scene.add(group);

const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const groupAxesHelper = new THREE.AxesHelper(500);
group.add(groupAxesHelper);

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(300,400,300);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
window.document.body.appendChild(renderer.domElement);
const render = ()=>{
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

new OrbitControls(camera,renderer.domElement);

const gui = new GUI();
const obj = {
    fn:()=>{
        const pos = new THREE.Vector3();
        boxMesh.getWorldPosition(pos);
        console.log(pos)
    },
    fn2:()=>{
        group.traverse((el)=>{
            if(el.isMesh){
                el.material.color = new THREE.Color('lightblue');
            }
        })
    }
};
gui.add(obj,'fn');
gui.add(obj,'fn2');