# PASCO Conductive Paper SVG
SVG Image to control a physics remote lab.

## Implementation
  You will only need the [HTML](https://github.com/JorgeAMS/PASCO-Conductive-Paper-SVG/index.html), [Scripts](https://github.com/JorgeAMS/PASCO-Conductive-Paper-SVG/scripts.js), and [Stylesheet](https://github.com/JorgeAMS/PASCO-Conductive-Paper-SVG/style.css) file, the svg image is not required.
  
  Inside HTML file you will notice there's a DIV tag which contains all the SVG code, you can just style that div in order to get what you want.
  If you are having troubles with the size of the SVG Image, you can go to line 11 (HTML file), there you will find my default width (50%) and height (auto), fell free to change it.
  
## Extra info
  It has three javascript functions, two of them are just to make the user knows where's cursor easily, the main function you'll want to add code is set_pos(), as you can see it gets an id which is defined like "00-00", first two numbers mean X position, and last two Y position, in this case (00-00) is located in the lower left corner.
