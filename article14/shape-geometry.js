import * as THREE from 'three';

const shape = new THREE.Shape([
    new THREE.Vector2(0,0),
    new THREE.Vector2(50,20),
    new THREE.Vector2(100,0),
    new THREE.Vector2(80,100),
    new THREE.Vector2(0,100)
]);
const shapeGeometry = new THREE.ShapeGeometry(shape);
