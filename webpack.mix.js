let mix = require('laravel-mix');

mix.sass('src/svg-turkey-map.scss', 'assets')
    .babel(['src/svg-turkey-map.js'], 'public/assets/svg-turkey-map.js')
    .setPublicPath('public');
