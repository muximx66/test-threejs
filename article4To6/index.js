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

const camera = new THREE.PerspectiveCamera(60,aspect(),1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);

const scene = new THREE.Scene();
scene.add(mesh,pointLight);

const renderer = new THREE.WebGLRenderer();

window.document.body.appendChild(renderer.domElement);

const render = ()=>{
    camera.aspect=aspect();
    camera.updateProjectionMatrix();
    renderer.setSize(width(),height());
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();

// 添加辅助线
scene.add(new THREE.AxesHelper(250));

// 添加轨道控制
new OrbitControls(camera,renderer.domElement);

// 添加gui
const gui = new GUI();
// 立方体
const materialFolder = gui.addFolder('立方体');
materialFolder.addColor(mesh.material,'color');
materialFolder.add(mesh.position,'x').step(10);
materialFolder.add(mesh.position,'y').step(10);
materialFolder.add(mesh.position,'z').step(10);
// 灯光
const pointLightFolder = gui.addFolder('灯光');
pointLightFolder.addColor(pointLight,'color');
pointLightFolder.add(pointLight.position,'x').step(10);
pointLightFolder.add(pointLight.position,'y').step(10);
pointLightFolder.add(pointLight.position,'z').step(10);
pointLightFolder.add(pointLight,'intensity').step(1000);
// 其他
const otherFolder = gui.addFolder('其他');
const otherObject = {
    input:"123456",
    checkbox:false,
    slideBar:1,
    select:111,
    enum:'Bbb',
    fn:()=>{
        console.log('otherFolder.fn:');
    }
};
otherFolder.add(otherObject,'input').onChange((val)=>{
    console.log('otherFolder.input:',val)
});
otherFolder.add(otherObject,'checkbox');
otherFolder.add(otherObject,'slideBar').min(-10).max(10).step(1);
otherFolder.add(otherObject,'select',[111,222,333]);
otherFolder.add(otherObject,'enum',{
    Aaa:0.1,
    Bbb:0.2,
    Ccc:0.3
}).onChange((val)=>{
    console.log('otherFolder.enum:',val)
})
otherFolder.add(otherObject,'fn');