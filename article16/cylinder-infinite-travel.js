import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/article16/storm.png');
// texture.repeat.set(1,2);
texture.wrapT = THREE.RepeatWrapping;
texture.colorSpace = THREE.SRGBColorSpace;

const cylinderGeometry = new THREE.CylinderGeometry(20,50,300,50,50,true);
const cylinderMaterial = new THREE.MeshBasicMaterial({
    map:texture,
    side:THREE.BackSide
});

export const cylinder = new THREE.Mesh(cylinderGeometry,cylinderMaterial);