let mix = require('laravel-mix');

mix.js('src/svg-turkiye-haritasi.js', 'dist')
    .sass('src/svg-turkiye-haritasi.scss', 'dist')
    .setPublicPath('public');