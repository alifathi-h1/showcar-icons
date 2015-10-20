# showcar-icons

This module provides custom elements for simple inclusion of icons in your frontend project.

## Installation:

To install showcar-icons within your project use npm:

    npm install git+ssh://github.com/AutoScout24/showcar-icons.git --save-dev


## How to include:
To make the custom elements available within you frontend, it is necessary to include some javascript

    require('showcar-icons');

## How to use:

use the following to include an icon in your frontend

    <x-icon type="t-online"></x-icon>
    <x-icon type="flag/de"></x-icon>

All the available icons are placed within the icons folder, using subfolder is possible too.

## How to contribute:

If you need some additional icons within showcar-icons just add them to the icons folder or another subfolder. Afterwards it is necessary to create the showcar-icons.min.js again.

Rebuild showcar-icons.min.js with grunt:

    grunt

## License

MIT License