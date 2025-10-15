import * as THREE from 'three';

const bufferGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -100,-50,0,
    100,50,0,
    -100,50,0,
    -100,-50,0,
    100,-50,0,
    100,50,0,
]);

bufferGeometry.attributes.position = new THREE.BufferAttribute(vertices,3);

const material = new THREE.MeshBasicMaterial({
    wireframe:true
});


export const mesh = new THREE.Mesh(bufferGeometry,material);

