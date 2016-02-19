var iconNames = [
    '@@iconNames'
];

var icons = {};

iconNames.forEach(function(name) {
    icons[name.toLowerCase()] = require('../icons/' + name + '.svg');
});

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
    this.innerHTML = icons[('' + this.getAttribute('type')).toLowerCase()];
};

proto.attributeChangedCallback = function(attributeName, previousValue, value) {
    if (attributeName === 'type') {
        this.innerHTML = icons[('' + this.getAttribute('type')).toLowerCase()];
    }
};

try {
    document.registerElement('as24-icon', { prototype: proto });
} catch (e) {
    if (window && window.console) {
        window.console.warn('Failed to register CustomElement "as24-icon".', e);
    }
}

window.showcarIconNames = iconNames;
