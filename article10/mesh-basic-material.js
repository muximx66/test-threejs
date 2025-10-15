import * as THREE from 'three';

const planeGeometry = new THREE.PlaneGeometry(100,100);
const meshBasicMaterial = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink'),
    transparent:true,
    opacity:0.3,
})

export const mesh = new THREE.Mesh(planeGeometry,meshBasicMaterial);