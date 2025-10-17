import * as THREE from 'three';

const vectors = [
  new THREE.Vector2(0,0),
  new THREE.Vector2(50,100),
  new THREE.Vector2(30,150),  
  new THREE.Vector2(0,200)
];
const latheGeometry = new THREE.LatheGeometry(vectors);
const latheMaterial = new THREE.MeshBasicMaterial({
    color:new THREE.Color('pink')
});

const pointsGeometry = new THREE.BufferGeometry();
pointsGeometry.setFromPoints(vectors);
const pointsMaterial = new THREE.PointsMaterial({
    color:new THREE.Color('lightblue'),
    size:10
});
export const points = new THREE.Points(pointsGeometry,pointsMaterial);

export const lathe = new THREE.Mesh(latheGeometry,latheMaterial);