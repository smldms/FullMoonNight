/*
VIDEO CAPTURE
*/
let fps = 30;
let capturer = new CCapture({
    framerate: fps,
    format: 'png',
    name: 'out',
    quality: 50,
    verbose: true
});

/////////KEYS
function keyTyped() {

    if (key === 'r') {
        capturer.start();
        print('go');
    } else if (key === 'x') {
        capturer.stop();
        capturer.save();
        noLoop();
    }
    else if (key === 's') {
         save();
    }
}

///////////////SAVE & RELOAD
function timer() {
    save("FullMoonNight_" + window.fxhash + ".png")
    setTimeout(function () {
        location.reload(true);
    }, 2000);
}
