function drops(x, y, s, n) {
    for (let i = 1; i < n; i++) {
        let dPosX = fxrand()*x;
        let dPosY = fxrand()*y;
        let dSize = fxrand()*s;
        stroke(random(palette.leaves));
        strokeWeight(1*dSize/10);
          fill(255,0,0);
        noFill();

        beginShape()
        curveVertex(dPosX+dSize*20, dPosY-dSize*20)
        curveVertex(dPosX, dPosY)
        curveVertex(dPosX, dPosY)
        curveVertex(dPosX-dSize*20, dPosY-dSize*20)
 
        endShape()

    }
}