# [SVG Turkey Map](https://crx4.github.io/svg-turkey-map/public/)

This responsive SVG Turkey Map has Istanbul divided by Asia/Europe and Cyprus. 

## Usage
Please insert the style file on your page's head section:
```<link href="<your_path>/svg-turkey-map.css" rel="stylesheet" />```


Then add script file page's body section at the very end:
```
    <script src="<your_path>/svg-turkey-map.js"></script>
    <script>
     renderSvgTurkeyMap();
    </script>
```

And finally copy the `<svg>` element from `index.html` to your file.


 
## Preview
 - [Preview](https://crx4.github.io/svg-turkey-map/public/)
 - [Map Source](https://commons.wikimedia.org/wiki/File:Turkey_provinces_blank_gray.svg)
 - [Data Source](https://en.wikipedia.org/wiki/Provinces_of_Turkey#Codes)
 
## Development
To build this project please follow these steps:
 - Clone this repo `git clone https://github.com/crx4/svg-turkey-map.git`
 - Cd into the project folder `cd svg-turkey-map`
 - Install dependencies `npm install`
 - Start watcher `npm run watch`
 
 To see the changes you need to build a server. For instance by using PHP's 
 built-in server: `php -S localhost:81 -t public`
 
## Forked From
 - [SVG Turkey Map](https://github.com/dnomak/svg-turkiye-haritasi) by @dnomak

## License
- SVG Turkey Map is licensed under the MIT license.
  - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
