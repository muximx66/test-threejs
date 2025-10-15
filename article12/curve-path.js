import * as THREE from 'three';

const curvePath = new THREE.CurvePath();
const line1 = new THREE.LineCurve(
    new THREE.Vector2(0,0),
    new THREE.Vector2(100,100)
);
const line2 = new THREE.LineCurve(
    new THREE.Vector2(-100,100),
    new THREE.Vector2(0,0)
);
const ellipse = new THREE.EllipseCurve(0,100,100,100,0,Math.PI);

curvePath.add(line1);
curvePath.add(ellipse);
curvePath.add(line2);

const bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.setFromPoints(curvePath.getPoints(20));

export const line = new THREE.Line(bufferGeometry,new THREE.LineBasicMaterial({
    color:new THREE.Color('pink')
}));


