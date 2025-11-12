import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const spotLight = new THREE.SpotLight(0xffffff,50000,1500,Math.PI/6);
spotLight.position.set(300,300,300);
spotLight.lookAt(0,0,0);

export const light = spotLight;
export const lightHelper =new THREE.SpotLightHelper(spotLight);

const gui = new GUI();
gui.add(light.position,'x').min(100).max(1000);
gui.add(light.position,'y').min(100).max(1000);
gui.add(light.position,'z').min(100).max(1000);
gui.add(light,'angle',{
    '30':Math.PI/6,
    '60':Math.PI/3
});
gui.add(light,'intensity')