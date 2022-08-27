///////////FORMAT
let format = {
    n: fxrand(),
    w: 1,
    h: 1,
    name: ''
}

if (format.n<0.33){
    format.h = 0.70
    format.w = 1
    format.name = 'Landscape'
}
else if (format.n<0.66) {
    format.h = 1
    format.w = 0.70
    format.name = 'Portrait'
}

else {
    format.h = 1
    format.w = 1
    format.name = 'Square'
}