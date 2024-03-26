const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({addVariant}) {
    addVariant("focus-visible-within", ["&:has(:focus-visible)"]);
    addVariant("group-focus-visible-within", ":merge(.group):has(:focus-visible) &");
    addVariant("peer-focus-visible-within", ":merge(.peer):has(:focus-visible) ~ &");
});
