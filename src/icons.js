const icons = {};
const regex = /^\.\/([^\.]+)\.svg$/gm;

function importAll(r) {
  r.keys().forEach(key => (icons[key.toLowerCase().replace(regex, "$1")] = r(key)));
}

importAll(require.context("../icons", true, /\.svg$/));

const proto = Object.create(HTMLElement.prototype);

proto.attachedCallback = function() {
  this.innerHTML = icons[("" + this.getAttribute("type")).toLowerCase()].default;
};

proto.attributeChangedCallback = function(attributeName, previousValue, value) {
  if (attributeName === "type") {
    this.innerHTML = icons[("" + this.getAttribute("type")).toLowerCase()].default;
  }
};

try {
  document.registerElement("as24-icon", { prototype: proto });
} catch (e) {
  if (window && window.console) {
    window.console.warn('Failed to register CustomElement "as24-icon".', e);
  }
}

window.showcarIconNames = Object.keys(icons);
