  function birds(x, y, s, complexity, n) {
      let xoff = 0.1;
      for (let j = 1; j <= n/complexity; j++) {

          for (let i = 1; i <= complexity; i++) {
              let birdPosX = fxrand()*width;
              let birdPosY = fxrand()*height;;
              let birdSize = s + fxrand() * s;
              stroke(random(palette.mount));
              strokeWeight(1 * birdSize / 10);
              noFill();
              let factor = map(noise(xoff), 0, 1, -width/33, -width/25);
            //   let factor = -width/33;
              print(factor)
              beginShape()
              curveVertex(birdPosX + birdSize * 10, birdPosY - birdSize * 10*noise(xoff))
              curveVertex(birdPosX - factor, birdPosY)
              curveVertex(birdPosX + factor, birdPosY)
              curveVertex(birdPosX - birdSize * 10, birdPosY - birdSize * 10*noise(xoff))
              endShape()
              fill(random(palette.mount));
            //   ellipse(birdPosX, birdPosY + birdSize*1.1, birdSize / 5)
              xoff += 0.1
          }
      }
    }