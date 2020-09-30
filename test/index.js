const {getColor,getPalette} = require("../index.js")

let randomColor = getColor() //return a random color from a random palette.
let randomColorFromPalette = getColor("chinese_palette") //return a random color from chinese palette.
let paletteColorByIndex = getColor("chinese_palette",2) //return the second color of chinese palette.
let paletteColorByIndexRgb = getColor("chinese_palette",2,true) //return second color of chinese palette as rgb.
let randomColorFromMultiplePalettes = getColor(["chinese_palette","spanish_palette"]) //return a random color from chinese palette.

console.log(randomColor,randomColorFromPalette,paletteColorByIndex,paletteColorByIndexRgb,randomColorFromMultiplePalettes)