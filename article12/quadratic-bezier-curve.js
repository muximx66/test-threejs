import * as THREE from 'three';

const vectors = [
    new THREE.Vector2(0,0),
    new THREE.Vector2(100,100),
    new THREE.Vector2(100,0)
];
const curve = new THREE.QuadraticBezierCurve(...vectors);
const geometryPoints = curve.getPoints(20);

const bufferGeometry = new THREE.BufferGeometry(geometryPoints);
bufferGeometry.setFromPoints(geometryPoints);

const material = new THREE.LineBasicMaterial({
    color:new THREE.Color('pink'),
});

const bufferGeometry2 = new THREE.BufferGeometry();
bufferGeometry2.setFromPoints(vectors);

const pointMaterial2 = new THREE.PointsMaterial({
    color:new THREE.Color('lightblue'),
    size:10
});

const points2 = new THREE.Points(bufferGeometry2,pointMaterial2);
const line2 = new THREE.Line(bufferGeometry2,new THREE.LineBasicMaterial({
    color:new THREE.Color('red'),
}));

const _line = new THREE.Line(bufferGeometry,material);
_line.add(points2,line2);


export const line = _line;
