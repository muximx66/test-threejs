import * as THREE from 'three'

const geometry = new THREE.BufferGeometry();

geometry.attributes.position = new THREE.BufferAttribute(
    new Float32Array([
        0,0,0,
        100,0,0,
        100,100,0,
        0,100,0
    ]),
    3
);

geometry.index = new THREE.BufferAttribute(
    new Uint16Array([
        0,1,2,
        0,2,3
    ]),
    1
);

const material = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink')
});

export const mesh = new THREE.Mesh(geometry,material);