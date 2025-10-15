import * as THREE from 'three';

const ellipseCurve = new THREE.EllipseCurve(0,0,50,50,0,Math.PI/2);
const points = ellipseCurve.getPoints(10);

const bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.setFromPoints(points);

const lineBasicMaterial = new THREE.LineBasicMaterial({
    color:new THREE.Color('pink')
});

export const line = new THREE.Line(bufferGeometry,lineBasicMaterial);