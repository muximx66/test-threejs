import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/article15/stone.png');
texture.colorSpace = THREE.SRGBColorSpace;

const catmullRomCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(100,100,0),
    new THREE.Vector3(50,50,50),
    new THREE.Vector3(0,50,50),
    new THREE.Vector3(-50,100,-50),
    new THREE.Vector3(-100,100,0)
]);
const tubeGeometry = new THREE.TubeGeometry(catmullRomCurve,50,20);
const tubeMaterial = new THREE.MeshBasicMaterial({
    side:THREE.DoubleSide,
    map:texture,
    aoMap:texture,
});

export const tubePoints = catmullRomCurve.getSpacedPoints(500);
export const tube = new THREE.Mesh(tubeGeometry,tubeMaterial);