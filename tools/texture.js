///////////TEXTURE NOISE
function myTexture(val, den, fall) {
    noiseDetail(den,fall)
    blendMode(SOFT_LIGHT)
    let inc = val
    let yoff = 0;
    loadPixels()
    let d = pixelDensity();
    for (let y = 0; y < height; y++) {
        let xoff = 0;
        for (let x = 0; x < width; x++) {
            let index = (x + y * width* d) * 4;
            let r = noise(xoff, yoff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
}