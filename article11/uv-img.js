import * as THREE from 'three';

const loader = new THREE.TextureLoader();
const texture = loader.load('/article11/bg.png');
texture.colorSpace = THREE.SRGBColorSpace;

const planeGeometry = new THREE.PlaneGeometry(200,100);
const basicMaterial = new THREE.MeshBasicMaterial({
    map:texture,
    aoMap:texture,
});

const uv = new THREE.BufferAttribute(
    new Float32Array([
        0,0.5,
        0.5,0.5,
        0,0,
        0.5,0,
    ]),
    2
)

planeGeometry.attributes.uv = uv;


export const mesh = new THREE.Mesh(planeGeometry,basicMaterial);


