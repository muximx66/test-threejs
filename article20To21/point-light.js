import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';


const pointLight = new THREE.PointLight(0xffffff,500000,1500);
pointLight.position.set(300,300,300);
pointLight.lookAt(0,0,0);

export const light = pointLight;
export const lightHelper = new THREE.PointLightHelper(pointLight,100);

const gui = new GUI();
gui.add(light.position,'x').min(10).max(10000);
gui.add(light.position,'y').min(10).max(10000);
gui.add(light.position,'z').min(10).max(10000);
gui.add(light,'intensity').min(1).max(1000000).step(5);