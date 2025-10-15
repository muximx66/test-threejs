import * as THREE from 'three';

const curveArr = [
    new THREE.Vector2(100,50),
    new THREE.Vector2(50,0),
    new THREE.Vector2(0,0),
    new THREE.Vector2(-100,100),
    new THREE.Vector2(-180,0),
]
const splineCurve = new THREE.SplineCurve(curveArr);
const geometryPoints = splineCurve.getPoints(20);

const bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.setFromPoints(geometryPoints);

const lineMaterial = new THREE.LineBasicMaterial({
    color:new THREE.Color('pink')
});

const pointsMaterial = new THREE.PointsMaterial({
    color:new THREE.Color('lightblue'),
    size:10
});
const points =new THREE.Points(bufferGeometry,pointsMaterial);

const bufferGeometry2 = new THREE.BufferGeometry();
bufferGeometry2.setFromPoints(curveArr);

const line2Material = new THREE.LineBasicMaterial({
    color:new THREE.Color('blue')
});
const line2 = new THREE.Line(bufferGeometry2,line2Material);

const _line = new THREE.Line(bufferGeometry,lineMaterial);
_line.add(points,line2);

export const line = _line;