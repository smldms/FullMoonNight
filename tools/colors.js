//////////////BG PALETTE
let palette = {
    n: fxrand(),
    name: "SEASON",
    mount: ["#000000", "#333333"],
    moon: ["#FFF", "#555"],
    sky: ["#000", "#fff"],
}
if (palette.n < 0.5) {
    palette.name = "1"
    palette.mount = ["#0D0D0D", "#020306"];
    palette.moon = ["#f5f5f5", "#F2F2F2"];
    palette.sky = ["#0D0D0D", "#020202"];
}
else  {
    palette.name = "2"
    palette.mount = ["#0D0D0D", "#262626"];
    palette.moon = ["#737373", "#F2F2F2"];
    palette.sky = ["#0D0D0D", "#262626"];
}