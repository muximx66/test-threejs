import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(100,100,100);
const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);
const lineDashedMaterial = new THREE.LineDashedMaterial({
    color:new THREE.Color('pink'),
    gapSize:10,
    dashSize:10
});
const _line = new THREE.Line(edgesGeometry,lineDashedMaterial);
_line.computeLineDistances();

export const line = _line;