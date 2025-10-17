import * as THREE from 'three';
import { LineGeometry,LineMaterial,Line2 } from 'three/addons/Addons.js';

const _group = new THREE.Group();
const color = new THREE.Color('lightblue');

const ellipseCurve = new THREE.EllipseCurve(0,0,30,30);
const ellipseCurvePoints = ellipseCurve.getPoints(30);
const lineGeometry = new LineGeometry();
lineGeometry.setFromPoints(ellipseCurvePoints);
const lineMaterial = new LineMaterial({
    color:color,
    linewidth:5
});
const ellipseLine = new Line2(lineGeometry,lineMaterial);

const ellipseCurve2 = new THREE.EllipseCurve(0,0,33,33);
const ellipseCurve2Points = ellipseCurve2.getPoints(30);
const lineGeometry2 = new LineGeometry();
lineGeometry2.setFromPoints(ellipseCurve2Points);
const lineMaterial2 = new LineMaterial({
    color:color
});
const ellipseLine2 = new Line2(lineGeometry2,lineMaterial2);

const ellipseCurve3 = new THREE.EllipseCurve(0,0,40,40);
const ellipseCurve3Points = ellipseCurve3.getPoints(30);
const lineGeometry3 = new LineGeometry();
lineGeometry2.setFromPoints(ellipseCurve3Points);
const lineMaterial3 = new LineMaterial({
    color:color
});
const ellipseLine3 = new Line2(lineGeometry3,lineMaterial3);


const circleGroup = new THREE.Group();
const circleR = 35;
const getCircle = (x,y)=>{
    const circleCurve = new THREE.EllipseCurve(x,y,5,5);
    const circleCurvePoints = circleCurve.getPoints(10);
    const circleGeometry = new THREE.BufferGeometry(circleCurve);
    circleGeometry.setFromPoints(circleCurvePoints);
    const circleMaterial = new THREE.LineBasicMaterial({
        color:color
    });
    return new THREE.Line(circleGeometry,circleMaterial)
}
for(let angle = 0;angle<=2*Math.PI;angle+=(2*Math.PI/12)){
    const x = circleR*Math.cos(angle);
    const y = circleR*Math.sin(angle);
    circleGroup.add(getCircle(x,y));
}

const cloudGroup = new THREE.Group();
const cloudR = 55;
const cloudVectors = [
    new THREE.Vector2(0,0),
    new THREE.Vector2(5,0),
    new THREE.Vector2(5,5),
    new THREE.Vector2(-5,5),
    new THREE.Vector2(-5,-5),
    new THREE.Vector2(10,-5),
    new THREE.Vector2(10,10),
    new THREE.Vector2(-10,10),
    new THREE.Vector2(-10,-5)
];
const getCloud = ()=>{
    const cloudGeometry = new THREE.BufferGeometry();
    cloudGeometry.setFromPoints(cloudVectors);
    const cloudMaterial = new THREE.LineBasicMaterial({
        color:color
    });
    return new THREE.Line(cloudGeometry,cloudMaterial)
}
for(let angle = 0;angle<=2*Math.PI;angle+=(2*Math.PI/12)){
    const x = cloudR*Math.cos(angle);
    const y = cloudR*Math.sin(angle);
    const cloud = getCloud();
    cloud.position.set(x,y,0);
    cloud.rotateZ(angle+Math.PI/2);
    cloudGroup.add(cloud);
}

const cloudGroup2 = new THREE.Group();
const cloudR2 = 75;
for(let angle = 0;angle<=2*Math.PI;angle+=(2*Math.PI/14)){
    const x = cloudR2*Math.cos(angle);
    const y = cloudR2*Math.sin(angle);
    const cloud = getCloud();
    cloud.position.set(x,y,0);
    cloud.rotateZ(angle+Math.PI/2);
    cloudGroup2.add(cloud);
}

_group.add(ellipseLine);
_group.add(ellipseLine2);
_group.add(ellipseLine3);
_group.add(circleGroup);
_group.add(cloudGroup);
_group.add(cloudGroup2);

export const group = _group;