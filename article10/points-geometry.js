import * as THREE from 'three';

const bufferGeometry = new THREE.BufferGeometry();
const position = new THREE.BufferAttribute(
    new Float32Array([
        0,0,0,
        100,0,0,
        100,100,0,
        0,100,0
    ]),
    3
)
const index = new THREE.BufferAttribute(
    new Uint16Array([
        0,1,2,
        3,1,2,
    ]),
    1
)
bufferGeometry.attributes.position = position;
bufferGeometry.index = index;

const material = new THREE.PointsMaterial({
    color:new THREE.Color('pink'),
    size:10,
});

export const point = new THREE.Points(bufferGeometry,material);
