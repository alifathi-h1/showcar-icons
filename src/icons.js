const icons = {};
const regex = /^\.\/([^\.]+)\.svg$/gm;

function importAll(r) {
  r.keys().forEach(key => (icons[key.toLowerCase().replace(regex, "$1")] = r(key)));
}

importAll(require.context("../icons", true, /\.svg$/));

const proto = Object.create(HTMLElement.prototype);

const inlineIconIntoElement = (el) => {
  const type = el.getAttribute("type");
  try {
    if (type) {
      el.innerHTML = icons[type.toLowerCase()].default;
      adjustClipPathsIfNecessary(el)
    }
  } catch(e) {
    console.error('Could not create icon with type', type, e);
  }
};

const adjustClipPathsIfNecessary = (el) => {
  const cpEls = el.querySelectorAll('clipPath[id]')
  cpEls.forEach((cp) => {
    const id = cp.getAttribute('id');
    const path = el.querySelector(`[clip-path="url(#${id})"]`)
    if (path) {
      const randomId = createRandomId()
      cp.setAttribute('id', randomId)
      path.setAttribute('clip-path', `url(#${randomId})`)
    }
  })
}

const createRandomId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

proto.attachedCallback = function() {
  inlineIconIntoElement(this);
};

proto.attributeChangedCallback = function(attributeName, previousValue, value) {
  if (attributeName === "type") {
    inlineIconIntoElement(this);
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
