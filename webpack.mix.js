let mix = require('laravel-mix');

mix.js('src/svg-turkey-map.js', 'assets')
    .sass('src/svg-turkey-map.scss', 'assets')
    .setPublicPath('public');