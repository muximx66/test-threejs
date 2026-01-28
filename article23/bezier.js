import * as THREE from 'three'

const colorsArr = [];
const curve = new THREE.QuadraticBezierCurve(
    new THREE.Vector2(-100,0),
    new THREE.Vector2(0,200),
    new THREE.Vector2(100,0)
);
const points = curve.getPoints(20);
const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(points);
const positions = geometry.attributes.position
for(let i = 0;i < positions.count;i++){
    const percent = i/positions.count
    colorsArr.push(0,i/positions.count,1-percent);
}
geometry.attributes.color = new THREE.BufferAttribute(new Float32Array(colorsArr) ,3);
const material = new THREE.LineBasicMaterial({
    vertexColors:true
})


export const line = new THREE.Line(geometry,material)