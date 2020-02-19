Simple utility to generate flat colors, colors are taken from : https://flatuicolors.com/
### Why?
sometimes, for example when generating dynamic charts without  knowing the number of items, is usefull to generate aesthetically-pleasing colors
and that go well together.

### Usage
#### Installation
`npm i flat-colors-js`  
then import in your project  ex. in react  
`import { getColor,getPalette } from 'flat-colors-js'`  
or  in node  
`const flatColorsJs = require("flat-colors-js")`

#### Generate a color 
`getColor(palette,index,rgb)` return a random (or not) color, it has 3 optional params:   
- ***palette*** : string, default `false`, if specified return a color of the given palette, see below for all avaible palettes.
- ***index*** : int, default `false`, if specified return the color at the given index (usefull in loops)  
- ***rgb*** : boolean, default `false`, if true return color value as rgb (default is Hex)

#### Get palette
`getPalette(palette)` return an array with the colors of the given palette.


#### examples
`let randomColor = getColor()` return a random color from a random palette.  
`let randomColor = getColor("chinese_palette")` return a random color from  chinese palette.  
`let randomColor = getColor("chinese_palette",2)` return the second color of chinese palette.  
`let randomColor = getColor("chinese_palette",2,true)` return second color of chinese palette as rgb.  

#### palettes
default : https://flatuicolors.com/  
german_palette : https://flatuicolors.com/palette/de  
spanish_palette : https://flatuicolors.com/palette/es  
aussie_palette : https://flatuicolors.com/palette/au   
russian_palette : https://flatuicolors.com/palette/ru    
american_palette : https://flatuicolors.com/palette/us   
chinese_palette : https://flatuicolors.com/palette/cn    
british_palette : https://flatuicolors.com/palette/gb   
dutch_palette : https://flatuicolors.com/palette/nl   
turkish_palette : https://flatuicolors.com/palette/tr   
indian_palette : https://flatuicolors.com/palette/in   
canadian_palette : https://flatuicolors.com/palette/ca   
swedish_palette : https://flatuicolors.com/palette/se   
frensh_palette : https://flatuicolors.com/palette/fr   