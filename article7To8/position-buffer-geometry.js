import * as THREE from 'three'

const geometry = new THREE.BufferGeometry()
const material = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink')
});

geometry.attributes.position =  new THREE.BufferAttribute(
    new Float32Array(
        [
            0,0,0,
            100,0,0,
            0,100,0,

            100,0,0,
            100,100,0,
            0,100,0
        ]
    ),
    3
);

export const mesh = new THREE.Mesh(geometry,material);
