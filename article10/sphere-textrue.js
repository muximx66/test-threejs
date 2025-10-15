import * as THREE from 'three';

const textrueLoader = new THREE.TextureLoader();
const texture =  textrueLoader.load('/article10/diqiu.jpg');
texture.colorSpace = THREE.SRGBColorSpace;

const sphereGeometry = new THREE.SphereGeometry(100);
const meshBasicMaterial = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink'),
    map:texture,
    aoMap:texture,
});

export const mesh = new THREE.Mesh(sphereGeometry,meshBasicMaterial);
