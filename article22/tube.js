import * as THREE from 'three'

const curve = new THREE.CubicBezierCurve3(...[
    new THREE.Vector3(200,50,0),
    new THREE.Vector3(150,50,50),
    new THREE.Vector3(100,0,0),
    new THREE.Vector3(50,-50,-50),
])

const geometry = new THREE.TubeGeometry(curve,20,50,20)
const material = new THREE.MeshPhongMaterial({
    color:new THREE.Color('lightblue'),
    shininess:10000
})


material.side = THREE.DoubleSide

export const tube = new THREE.Mesh(geometry,material)
