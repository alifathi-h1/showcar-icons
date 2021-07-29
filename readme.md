![](http://img.badgesize.io/Scout24/showcar-icons/master/dist/showcar-icons.min.js?label=js_size_gzip&compression=gzip)

# Showcar-icons

This module provides custom elements for simple inclusion of icons in your frontend project.

## Installation:

To install showcar-icons within your project use npm.

```bash
$ npm i --save showcar-icons
```

## How to include:

To make the custom elements available within you frontend, it is necessary to include some javascript (depending on your directory structure)

```javascript
require("showcar-icons/dist/showcar-icons.min.js");
```

## How to use:

use the following to include an icon in your frontend:

```html
<as24-icon class="sc-icon-s" type="android" title="android"></as24-icon>
```

More documentation on usage: https://autoscout24.github.io/showcar-ui/#icon-target

All the available icons are placed within the icons folder, using subfolder is possible too.  
If you want to use the icons without the showcar-ui library, you have to load a polyfill for custom elements first.  
See <https://cdnjs.com/libraries/document-register-element>

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/document-register-element/0.5.4/document-register-element.js"></script>
```


## Inline Icons

We recommend to use inline icons if you need to include icons just on one single page.
For further details see the [docs](./docs/index.html) and [CSS-Tricks](https://css-tricks.com/svg-symbol-good-choice-icons/)

## How to contribute:

If you need some additional icons within showcar-icons just add them to the icons folder or another subfolder. Afterwards it is necessary to create the `showcar-icons.min.js` again.

```bash
$ yarn build
```

To test your changes run, it will open docs page on port 8080

```bash
$ yarn start
```

## License

MIT License
