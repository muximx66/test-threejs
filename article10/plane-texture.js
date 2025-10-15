import * as THREE from 'three';

const texture = new THREE.TextureLoader().load('/article10/zhuan.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(3,3);
texture.colorSpace = THREE.SRGBColorSpace;

const planeGeometry = new THREE.PlaneGeometry(100,100);
const meshBasicMaterial = new THREE.MeshBasicMaterial({
    map:texture,
    aoMap:texture,
})

export const mesh = new THREE.Mesh(planeGeometry,meshBasicMaterial)