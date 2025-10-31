import * as THREE from 'three';

const _house = new THREE.Group();
const zhuanTexture = new THREE.TextureLoader().load('/article17/zhuan.jpg');
const shuiniTexture = new THREE.TextureLoader().load('/article17/shuini.png');
const wapianTexture = new THREE.TextureLoader().load('/article17/wapian.png');
const grassTexture = new THREE.TextureLoader().load('/article17/grass.png');
zhuanTexture.colorSpace = THREE.SRGBColorSpace;
zhuanTexture.wrapS = THREE.RepeatWrapping;
zhuanTexture.repeat.x = 4;
shuiniTexture.colorSpace = THREE.SRGBColorSpace;
shuiniTexture.wrapS = THREE.RepeatWrapping;
shuiniTexture.repeat.x = 4;
wapianTexture.colorSpace = THREE.SRGBColorSpace;
grassTexture.colorSpace = THREE.SRGBColorSpace;

const floorGeometry = new THREE.BoxGeometry(1000,500,100);
const floorMaterial = new THREE.MeshLambertMaterial({
    map:shuiniTexture,
    aoMap:shuiniTexture,
});
const floorMesh = new THREE.Mesh(floorGeometry,floorMaterial);
floorMesh.rotateX(Math.PI/2);
floorMesh.translateZ(500);

const sideWallShape = new THREE.Shape();
sideWallShape.holes.push()
sideWallShape.moveTo(-250,0);
sideWallShape.lineTo(250,0);
sideWallShape.lineTo(250,500);
sideWallShape.lineTo(0,750);
sideWallShape.lineTo(-250,500);
const sideWallWindowPath = new THREE.Path();
sideWallWindowPath.moveTo(-100,200);
sideWallWindowPath.lineTo(100,200);
sideWallWindowPath.lineTo(100,400);
sideWallWindowPath.lineTo(-100,400);
sideWallShape.holes.push(sideWallWindowPath);
const sideWallGeometry = new THREE.ExtrudeGeometry(sideWallShape,{depth:100});
const sideWallMaterial = new THREE.MeshLambertMaterial({map:zhuanTexture,aoMap:zhuanTexture});
const sideWallMesh = new THREE.Mesh(sideWallGeometry,sideWallMaterial);
const sideWallMesh2 = sideWallMesh.clone();
sideWallMesh.rotateY(Math.PI/2);
sideWallMesh.translateY(-450);
sideWallMesh.translateZ(-500);
sideWallMesh2.rotateY(Math.PI/2);
sideWallMesh2.translateY(-450);
sideWallMesh2.translateZ(400);

const behindWallShape = new THREE.Shape([
    new THREE.Vector2(-400,-250),
    new THREE.Vector2(400,-250),
    new THREE.Vector2(400,250),
    new THREE.Vector2(-400,250)
]);

const behindWallGeometry = new THREE.ExtrudeGeometry(behindWallShape,{depth:100});
const behindWallMaterial = new THREE.MeshLambertMaterial({map:zhuanTexture,aoMap:zhuanTexture});
const behindWallMesh = new THREE.Mesh(behindWallGeometry,behindWallMaterial);
behindWallMesh.translateY(-200);
behindWallMesh.translateZ(-250);

const frontWallShape = behindWallShape.clone();
const frontWallDoorPath = new THREE.Path([
    new THREE.Vector2(-300,-250),
    new THREE.Vector2(-100,-250),
    new THREE.Vector2(-100,150),
    new THREE.Vector2(-300,150),
]);
const frontWallWindowPath = new THREE.Path([
    new THREE.Vector2(200,-50),
    new THREE.Vector2(400,-50),
    new THREE.Vector2(400,150),
    new THREE.Vector2(200,150),
]);
frontWallShape.holes.push(frontWallDoorPath);
frontWallShape.holes.push(frontWallWindowPath);
const frontWallGeometry = new THREE.ExtrudeGeometry(frontWallShape,{depth:100});
const frontWallMaterial = new THREE.MeshLambertMaterial({map:zhuanTexture,aoMap:zhuanTexture});
const frontWallMesh = new THREE.Mesh(frontWallGeometry,frontWallMaterial);
frontWallMesh.translateY(-200);
frontWallMesh.translateZ(150);

const roofGeometry = new THREE.BoxGeometry(1100,450,50);
const roofMaterial = new THREE.MeshLambertMaterial({color:new THREE.Color('lightpink')});
const roofMesh = new THREE.Mesh(roofGeometry,roofMaterial);
const roofMesh2 = roofMesh.clone();
roofMesh.rotateX(Math.PI/4);
roofMesh.translateZ(-200);
roofMesh.translateY(20);
roofMesh2.rotateX(3*Math.PI/4);
roofMesh2.translateZ(-220);
roofMesh2.translateY(30);

const doorStepShape = new THREE.Shape([
    new THREE.Vector2(0,0),
    new THREE.Vector2(200,0),
    new THREE.Vector2(200,20),
    new THREE.Vector2(150,20),
    new THREE.Vector2(150,40),
    new THREE.Vector2(100,40),
    new THREE.Vector2(100,60),
    new THREE.Vector2(50,60),
    new THREE.Vector2(50,80),
    new THREE.Vector2(0,80),
]);
const doorStepGeometry = new THREE.ExtrudeGeometry(doorStepShape,{depth:200});
const doorStepMaterial = new THREE.MeshLambertMaterial({color:new THREE.Color('#555555')});
const doorStepMesh = new THREE.Mesh(doorStepGeometry,doorStepMaterial);
doorStepMesh.rotateY(1.5*Math.PI);
doorStepMesh.translateY(-550);
doorStepMesh.translateX(250);
doorStepMesh.translateZ(100);

_house.add(floorMesh);
_house.add(sideWallMesh);
_house.add(sideWallMesh2);
_house.add(behindWallMesh);
_house.add(frontWallMesh);
_house.add(roofMesh);
_house.add(roofMesh2);
_house.add(doorStepMesh);

export const house = _house;