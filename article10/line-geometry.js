import * as THREE from 'three';

const bufferGeometry = new THREE.BufferGeometry();
const position = new THREE.BufferAttribute(
    new Float32Array([
        0,0,0,
        100,0,0,
        100,100,100,
        0,100,100,
        -100,-100,0
    ]),
    3
)
bufferGeometry.attributes.position = position;

const material = new THREE.LineBasicMaterial({
    color:new THREE.Color('pink'),
});

/** 普通线模型 **/
export const line1 = new THREE.Line(bufferGeometry,material);
/** 闭合线模型 **/
export const line2 = new THREE.LineLoop(bufferGeometry,material);
/** 线段模型，每两组三维点位为一个线段 **/
export const line3 = new THREE.LineSegments(bufferGeometry,material);