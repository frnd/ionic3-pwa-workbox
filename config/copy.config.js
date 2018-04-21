// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyWorkboxSw: {
    src: ['{{ROOT}}/node_modules/workbox-sw/build/workbox-sw.js'],
    dest: '{{BUILD}}'
  }
}
