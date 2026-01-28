import * as THREE from 'three'

const curve = new THREE.QuadraticBezierCurve(
    new THREE.Vector2(-100, 0),
    new THREE.Vector2(0, 200),
    new THREE.Vector2(100, 0),
);
const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(curve.getPoints(20));
const count = geometry.attributes.position.count
const orange = new THREE.Color('orange')
const blue = new THREE.Color('blue')
const colors = [];
for(let i = 0;i < count;i++){
    const color = orange.clone().lerp(blue,i/count)
    colors.push(color.r,color.g,color.b);
}
geometry.attributes.color = new THREE.BufferAttribute(new Float32Array(colors),3)
const material = new THREE.LineBasicMaterial({
    vertexColors:true
})
export const line = new THREE.Line(geometry,material)