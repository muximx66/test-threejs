import * as THREE from 'three';

const shapeVectors = [
    new THREE.Vector2(0,0),
    new THREE.Vector2(50,10),
    new THREE.Vector2(100,0),
    new THREE.Vector2(50,100),
    new THREE.Vector2(0,100)
];

const shapeGeometry = new THREE.ShapeGeometry(new THREE.Shape(shapeVectors));
const shapeMaterial = new THREE.MeshBasicMaterial({
    color:new THREE.Color('lightgreen')
});


const shapeVectors2 = new THREE.Shape();
shapeVectors2.moveTo(0,0);
shapeVectors2.lineTo(100,0);
shapeVectors2.lineTo(50,100),
shapeVectors2.lineTo(0,100);
const circleCurve = new THREE.Path();
const circle = circleCurve.arc(50,50,10);
shapeVectors2.holes.push(circle);
const shapeGeometry2 = new THREE.ShapeGeometry(shapeVectors2);

export const shape = new THREE.Mesh(shapeGeometry,shapeMaterial);
export const shape2 = new THREE.Mesh(shapeGeometry2,shapeMaterial);
export const extrude = new THREE.Mesh(
    new THREE.ExtrudeGeometry( shapeVectors2,{depth:100}),
    shapeMaterial
);