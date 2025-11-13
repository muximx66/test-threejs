import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(300,300,300);
directionalLight.lookAt(0,0,0);

export const light = directionalLight;
export const lightHelper = new THREE.DirectionalLightHelper(directionalLight,100);

const gui = new GUI();
gui.add(light.position,'x').min(10).max(10000);
gui.add(light.position,'y').min(10).max(10000);
gui.add(light.position,'z').min(10).max(10000);
gui.add(light,'intensity').min(1).max(10).step(5);