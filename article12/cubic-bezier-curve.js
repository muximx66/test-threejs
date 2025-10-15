import * as THREE from 'three';

const vectors = [
    new THREE.Vector3(100,0,0),
    new THREE.Vector3(100,0,100),
    new THREE.Vector3(100,100,0),
    new THREE.Vector3(-100,0,0)
];
const cubicCurve = new THREE.CubicBezierCurve3(...vectors);
const bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.setFromPoints(cubicCurve.getPoints(20));

const lineMaterial = new THREE.LineBasicMaterial({
    color:new THREE.Color('pink')
});
const _line = new THREE.Line(bufferGeometry,lineMaterial);

const bufferGeometry2 = new THREE.BufferGeometry();
bufferGeometry2.setFromPoints(vectors);

_line.add(
    new THREE.Points(bufferGeometry2,new THREE.PointsMaterial({
        color:new THREE.Color('lightblue'),
        size:10
    })),
    new THREE.Line(bufferGeometry2,new THREE.LineBasicMaterial())
)

export const line = _line;