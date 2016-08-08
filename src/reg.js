export function regIcon(g, iconName, iconText) {
  var proto = g.Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = iconText;
  };

  try {
      g.document.registerElement('as24-icon-' + iconName, { prototype: proto });
  } catch (e) {
      if (g.console) {
          g.console.warn('Failed to register CustomElement "as24-icon".');
      }
  }

  return iconName;
}
