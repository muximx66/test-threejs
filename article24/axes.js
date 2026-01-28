import * as THREE from 'three'

export const createAxes = (type,size)=>{
    const points = [
        new THREE.Vector3(0,0,0),
        {
            x:()=>new THREE.Vector3(size,0,0),
            y:()=>new THREE.Vector3(0,size,0)
        }[type]()
    ]

    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
        color:new THREE.Color('#ffffff')
    })

    return new THREE.Line(geometry,material)
}

export const createAxesScale = (type,size,segment)=>{
    const points = [];

    for(let i=0;i<size;i+=segment){
        if(type == 'x'){
            points.push(new THREE.Vector3(0,i,0))
            points.push(new THREE.Vector3(-5,i,0))
        }else if(type == 'y'){
            points.push(new THREE.Vector3(i,0,0))
            points.push(new THREE.Vector3(i,-5,0))
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(points)

    
    const material = new THREE.LineBasicMaterial({
        color:new THREE.Color('#ffffff')
    })

    return new THREE.LineSegments(geometry,material);
}

export const createAxesBar = (data,segment)=>{
    const group = new THREE.Group();
    data.forEach((value,index)=>{
        const geometry = new THREE.PlaneGeometry(segment,value);
        const material = new THREE.MeshBasicMaterial({
            color:new THREE.Color('#ffffff')
        })
        const bar = new THREE.Mesh(geometry,material);
        bar.position.setX((index+1)*2*segment-segment/2);
        bar.position.setY(value/2);
        group.add(bar)
    })
    return group;
}

export const create = (size,segment,data)=>{
    const group = new THREE.Group();
    group.add(createAxes('x',size))
    group.add(createAxes('y',size))
    group.add(createAxesScale('x',size,segment))
    group.add(createAxesScale('y',size,segment))
    group.add(createAxesBar(data,segment))
    return group
}