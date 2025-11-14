import * as THREE from 'three';

const geometry = new THREE.BufferGeometry();
const points = new THREE.BufferAttribute(
    new Float32Array([
        0,0,0,
        100,0,0,
        0,100,0,
        100,100,-100   
    ]),
    3
);
const indexes = new THREE.BufferAttribute(
    new Uint16Array([
        0,1,2,
        2,1,3,
    ]),
    1
);
const normals = new THREE.BufferAttribute(
    new Float32Array([
        0,0,1,
        0,0,1,
        0,0,1,
        1,1,1,
        1,1,1,
        1,1,1,
        // 1,1,1,
        // 1,1,0,
        // 1,1,0,
        // 1,1,0,
    ]),
    3
);

geometry.attributes.position = points;
geometry.index = indexes;
// geometry.attributes.normal = normals;
geometry.computeVertexNormals();


const material = new THREE.MeshPhongMaterial({
    color:new THREE.Color('lightblue'),
    shininess:2000
});

console.log(geometry.attributes)

export const mesh = new THREE.Mesh(geometry,material);