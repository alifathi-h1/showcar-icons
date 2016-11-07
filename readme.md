![](http://img.badgesize.io/AutoScout24/showcar-icons/master/dist/showcar-icons.min.js?label=js_size_gzip&compression=gzip)

# Showcar-icons

This module provides custom elements for simple inclusion of icons in your frontend project.

## Installation:

To install showcar-icons within your project use bower.

```bash
$ bower install --save git@github.com:AutoScout24/showcar-icons.git
```

## How to include:

To make the custom elements available within you frontend, it is necessary to include some javascript (depending on your directory structure)

```javascript
require('showcar-icons/dist/showcar-icons.min.js');
```

## How to use:

use the following to include an icon in your frontend:

```html
<as24-icon type="t-online"></as24-icon>
<as24-icon type="flag/de"></as24-icon>
```

All the available icons are placed within the icons folder, using subfolder is possible too.  
If you want to use the icons without the showcar-ui library, you have to load a polyfill for custom elements first.  
See <https://cdnjs.com/libraries/document-register-element>

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/document-register-element/0.5.4/document-register-element.js"></script>
```

## Icon Sizing

If you only use showcar-icons you need to define the size of the icons with your own css code.

### How to create different sizes

You can change the size of an svg by overriding css declarations.  
Example:

```css
as24-icon[type='navigation/car'] {
    svg {
        width: 42px;
        height: 34px;
    }
}
```

### Sizing with ShowCarUI

If you include showcar-ui, all as24-icons have a default size of 16px x 16px.
In case you need a different size, just set it for the as24-icon, the svg will fit the size:

```css
as24-icon[type='navigation/car'] {
    width: 64px;
    height: 64px;
}
```

## Inline Icons

We recommend to use inline icons if you need to include icons just on one single page.
For further details see the [docs](./docs/index.html) and [CSS-Tricks](https://css-tricks.com/svg-symbol-good-choice-icons/)

## How to contribute:

If you need some additional icons within showcar-icons just add them to the icons folder or another subfolder. Afterwards it is necessary to create the `showcar-icons.min.js` again.

Rebuild showcar-icons.min.js with grunt:

```bash
$ grunt
```

## License

MIT License
