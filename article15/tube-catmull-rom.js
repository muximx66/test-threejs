import * as THREE from 'three';

const catmullRomCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(100,100,0),
    new THREE.Vector3(50,50,50),
    new THREE.Vector3(0,50,50),
    new THREE.Vector3(-50,100,-50),
    new THREE.Vector3(-100,100,0)
]);
const tubeGeometry = new THREE.TubeGeometry(catmullRomCurve,50,20);
const tubeMaterial = new THREE.MeshBasicMaterial({
    color:'lightblue',
    side:THREE.DoubleSide,
});

export const tubePoints = catmullRomCurve.getSpacedPoints(3000);
export const tube = new THREE.Mesh(tubeGeometry,tubeMaterial);