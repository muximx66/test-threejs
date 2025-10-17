import * as THREE from 'three';

const bazierCurveVectors = [
    new THREE.Vector3(200,0,0),
    new THREE.Vector3(100,100,-100),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(-100,0,-100)
];
const cubicBezierCurve = new THREE.CubicBezierCurve3(...bazierCurveVectors);
const tubeGeometry = new THREE.TubeGeometry(cubicBezierCurve,20,30,10);
const tubeMaterial = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink'),
    side:THREE.DoubleSide,
    wireframe:true
});

export const curve = cubicBezierCurve;
export const tube = new THREE.Mesh(tubeGeometry,tubeMaterial);