var iconNames = [
    '@@iconNames'
];



var icons = iconNames.reduce(function(res, name) {
  res[name.toLowerCase()] = require('../icons/' + name + '.svg');
  return res;
}, {});

var proto = Object.create(HTMLElement.prototype);

proto.attachedCallback = function() {
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
