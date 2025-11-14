import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'

const rectAreaLight = new THREE.RectAreaLight(new THREE.Color('red'),20,100,100);
rectAreaLight.position.set(300,300,300);
rectAreaLight.lookAt(0,0,0);

export const light = rectAreaLight;
export const lightHelper = new RectAreaLightHelper(rectAreaLight);

const gui = new GUI();
gui.add(rectAreaLight.position,'x').max(10,1000);
gui.add(rectAreaLight.position,'y').max(10,1000);
gui.add(rectAreaLight.position,'z').max(10,1000);
gui.add(rectAreaLight,'intensity').min(1).max(10000);
