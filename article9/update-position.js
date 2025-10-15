import { createNoise2D } from "simplex-noise";

const nose2D = createNoise2D();


export const updatePosition = (positions)=>{
    for(let i = 0;i<positions.count;i++){
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = nose2D(x/80,y/80)*50;
        const sinNum = Math.sin(Date.now()*0.002+x*0.05)*10;
        positions.setZ(i,z+sinNum);
    }   

    positions.needsUpdate=true;
}