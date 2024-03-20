const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({addVariant}) {
    addVariant('focus-visible-within', ['&:has(:focus-visible)'])
});
