import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/article11/muxing.jpg');
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping;

const sphereGeometry = new THREE.SphereGeometry(60);
const material = new THREE.MeshBasicMaterial({
    map:texture,
    aoMap:texture,
});

export const mesh = new THREE.Mesh(sphereGeometry,material);