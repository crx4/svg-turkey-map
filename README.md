# [SVG Turkey Map](https://crx4.github.io/svg-turkey-map/public/)

This responsive SVG Turkey Map has Istanbul divided by Asia/Europe and Cyprus. 

![](src/assets/map.gif)

## Usage

First copy `div.turkey-map` from `public/index.html`:
```
<div class="turkey-map">
  <svg ...>
    ...
  </svg>
</div>
```
Then we need the styles, either copy their minified version from inside of `public/assets/svg-turkey-map.css` or 
insert the link tag in the head section of your document after copying the entire file to your path: 

```<link href="<your_path>/svg-turkey-map.css" rel="stylesheet" />```

Finally the script, you can either just copy the minified version from `public/assets/svg-turkey-map.js` or
insert a script tag in the body section at the very end. `renderSvgTurkeyMap` should be called, in order to render the map:
```
    <script src="<your_path>/svg-turkey-map.js"></script>
    <script>
     renderSvgTurkeyMap();
    </script>
```
 
## Preview
 - [Preview](https://crx4.github.io/svg-turkey-map/public/)
   
## Sources
 - [Map Source](https://commons.wikimedia.org/wiki/File:Turkey_provinces_blank_gray.svg)
 - [Data Source](https://en.wikipedia.org/wiki/Provinces_of_Turkey#Codes)
 
## Development
To build this project please follow these steps:
 1. Clone this repo `git clone https://github.com/crx4/svg-turkey-map.git`
 1. Cd into the project folder `cd svg-turkey-map`
 1. Install dependencies `npm install`
 1. Start hot reload with a mini server is running on `localhost:8080` via `npm run hot`.
 
## Forked From
 - [SVG Turkey Map](https://github.com/dnomak/svg-turkiye-haritasi) by @dnomak

## License
- SVG Turkey Map is licensed under the MIT license.
  - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
