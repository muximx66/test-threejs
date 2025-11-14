import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

export const hemisphereLight = new THREE.HemisphereLight(
    new THREE.Color('skyblue'),
    new THREE.Color('brown'),
    1
);
hemisphereLight.position.set(300,300,300);
hemisphereLight.lookAt(0,0,0);

export const hemisphereHelper = new THREE.HemisphereLightHelper(hemisphereLight,100);

// const gui = new GUI();
// gui.add(hemisphereLight.position,'x').min(10).max(1000);
// gui.add(hemisphereLight.position,'y').min(10).max(1000);
// gui.add(hemisphereLight.position,'z').min(10).max(1000);
// gui.add(hemisphereLight,'color');
// gui.add(hemisphereLight,'groundColor');
