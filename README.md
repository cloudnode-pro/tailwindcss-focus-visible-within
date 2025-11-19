# tailwindcss-focus-visible-within

This plugin allows you to target parent nodes with a child that has `:focus-visible`.

## Installation

Install as dev-dependency using:

```sh
npm i -D tailwindcss-focus-visible-within
```

### Tailwind CSS v4

You **do not need this plugin** in Tailwind CSS v4! Use the built-in `has-focus-visible:*`, `group-has-focus-visible:*`, etc.!

### Tailwind CSS v3

Add the plugin to your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    // …
  },
  plugins: [
    require("tailwindcss-focus-visible-within")
    // …
  ],
}
```

## Usage

You can apply Tailwind CSS classes to a parent node that has an element child with the `focus-visible` state.

```html
<div class="focus-visible-within:…">
```

## Demo

[**Tailwind Play**](https://play.tailwindcss.com/KvDscGgo76)

```html
<div class="p-3 relative rounded-lg focus-visible-within:outline focus-visible-within:outline-2 focus-visible-within:outline-blue-600">
  <a href="#" class="font-semibold focus-visible:outline-none">
    Link title
    <span class="absolute inset-0"></span>
  </a>
  <p class="text-neutral-600">Link description</p>
</div>
```
