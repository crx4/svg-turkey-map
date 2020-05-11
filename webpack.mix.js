let mix = require('laravel-mix');

mix.js('src/main.js', 'dist')
    .sass('src/main.scss', 'dist')
    .setPublicPath('public');