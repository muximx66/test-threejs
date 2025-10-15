import * as THREE from 'three';

const geometry = new THREE.CylinderGeometry(100,100,200,50,2);
const material = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink'),
    wireframe:true,
});

export const mesh = new THREE.Mesh(geometry,material)