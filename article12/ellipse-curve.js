import * as THREE from 'three';

const ellipseCurve = new THREE.EllipseCurve(0,0,100,50);
const points = ellipseCurve.getPoints(20);

const bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.setFromPoints(points);

const pointsMaterial = new THREE.PointsMaterial({
    color:new THREE.Color('pink'),
    size:10
});

export const point = new THREE.Points(bufferGeometry,pointsMaterial);

