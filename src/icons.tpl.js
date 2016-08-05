export function @@iconName() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '@@iconText';
  };

  try {
      document.registerElement('as24-icon-@@iconName', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}
