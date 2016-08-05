export function android() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22"><path d="M6.2 1.7h.1c.1 0 .1-.1.1-.1L5.4 0h-.1c-.1 0-.1.1-.1.1l1 1.6zM11.7 1.7h-.1c-.1 0-.1-.1-.1-.1L12.6 0h.1c.1 0 .1.1.1.1l-1.1 1.6zM9 2.7C3.3 2.7 3 8 3 8h12s-.4-5.3-6-5.3zM6.4 6.4c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm5.1 0c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM2 15c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6zM18 15c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6zM7 21c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v6zM12 21c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v6z"/><path d="M15 17c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v7z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-android', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function appIcon() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54"><path d="M42 0H12C5.4 0 0 5.4 0 12v14h54V12c0-6.6-5.4-12-12-12z" fill="#003468"/><path d="M12 54h30c6.6 0 12-5.4 12-12V28H0v14c0 6.6 5.4 12 12 12z" fill="#ff7500"/><g fill="#003468"><path d="M6.9 42.3h-.1c-1.5 0-2.7-1-2.7-2.7 0-1 1.6-1 1.6 0 0 .7.5 1.1 1.1 1.1h.1c.7 0 1.2-.3 1.2-1 0-1.7-3.9-1.8-3.9-4.3v-.3c0-1.4 1.4-2.3 2.6-2.3h.1c1.4 0 2.6.9 2.6 2.2 0 1-1.5 1-1.5 0 0-.4-.4-.6-1.1-.6h-.1c-.6 0-1 .3-1 .8v.2c0 1.1 3.9 1.5 3.9 4.3-.1 1.6-1.3 2.6-2.8 2.6zM13.6 42.3h-.1c-1.5 0-2.7-1.1-2.7-2.6v-4.2c0-1.5 1.2-2.6 2.7-2.6h.1c1.4 0 2.5.9 2.7 2.2v.1c0 .5-.4.8-.8.8-.3 0-.7-.2-.8-.7-.1-.6-.6-.9-1.1-.9h-.1c-.6 0-1.1.5-1.1 1.1v4.2c0 .6.5 1.1 1.1 1.1h.1c.6 0 1-.4 1.1-.9.1-.5.4-.7.8-.7s.8.3.8.8v.1c-.2 1.3-1.3 2.2-2.7 2.2zM20.2 42.3h-.1c-1.5 0-2.7-1.2-2.7-2.6v-4.2c0-1.5 1.2-2.6 2.7-2.6h.1c1.5 0 2.7 1.1 2.7 2.6v4.2c0 1.4-1.2 2.6-2.7 2.6zm1.2-6.8c0-.6-.5-1.1-1.1-1.1h-.1c-.6 0-1.1.5-1.1 1.1v4.2c0 .6.5 1.1 1.1 1.1h.1c.6 0 1.1-.5 1.1-1.1v-4.2zM27.3 42.3h-.1c-1.5 0-2.7-1.2-2.7-2.7v-6c0-.5.4-.8.8-.8s.8.3.8.8v6c0 .6.5 1.1 1.1 1.1h.1c.6 0 1.1-.5 1.1-1.1v-6c0-.5.4-.8.8-.8s.8.3.8.8v6c0 1.5-1.2 2.7-2.7 2.7zM35.5 34.5h-1.1v7c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.7c.5 0 .8.4.8.8.1.4-.1.8-.7.8zM42.8 42.2h-3.5c-.5 0-.8-.5-.8-.9 0-.2 0-.3.1-.5l3.1-4.9c.2-.3.2-.4.2-.6v-.1c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.3 1.1-2.3 2.3-2.3 1.3 0 2.4.9 2.4 2.3v.1c0 .5-.2.9-.5 1.4l-2.5 4h2.3c.5 0 .8.4.8.8.1.4-.2.8-.7.8zM48.9 40.4h-.3v1.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.1h-2c-.5 0-.9-.3-.9-.8 0-.1 0-.3.1-.4l2.5-5.8c.1-.3.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3l-2.2 4.9h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8-.1.3-.3.7-.9.7z"/></g><g fill="#fff"><path d="M9.2 21.1c-.3 0-.6-.2-.7-.5L8 19.1H5.5L5 20.6c-.1.4-.4.5-.7.5-.4 0-.8-.3-.8-.7v-.2L6 12.8c.2-.6.5-.6.8-.6.3 0 .6.1.8.6l2.3 7.4v.2c.1.5-.3.7-.7.7zm-2.4-6.2L6 17.6h1.6l-.8-2.7zM13.7 21.1h-.1c-1.4 0-2.6-1.2-2.6-2.6v-5.7c0-.5.4-.7.7-.7s.7.2.7.7v5.7c0 .6.5 1.1 1.1 1.1h.1c.6 0 1.1-.5 1.1-1.1v-5.7c0-.5.4-.7.7-.7.4 0 .7.2.7.7v5.7c.2 1.5-1 2.6-2.4 2.6zM21.7 13.7h-1v6.7c0 .5-.4.7-.7.7-.4 0-.7-.2-.7-.7v-6.7h-1c-.5 0-.7-.4-.7-.7 0-.4.3-.7.7-.7h3.5c.5 0 .7.4.7.7-.1.3-.4.7-.8.7zM26 21.1h-.1c-1.4 0-2.6-1.1-2.6-2.5v-4c0-1.4 1.2-2.5 2.6-2.5h.1c1.4 0 2.6 1.1 2.6 2.5v4c-.1 1.4-1.2 2.5-2.6 2.5zm1-6.4c0-.6-.5-1-1.1-1h-.1c-.6 0-1.1.4-1.1 1v4c0 .6.5 1.1 1.1 1.1h.2c.6 0 1.1-.4 1.1-1v-4.1H27z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-appIcon', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function arrowTop() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="17.8" viewBox="0 0 14 17.8"><path d="M14 7L7 0 0 7l1.4 1.4L6 3.8v14h2v-14l4.6 4.6z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-arrowTop', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function auto24() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="74" height="35" viewBox="0 0 74 35"><path fill="#003468" d="M0 0v17h74V0H0z"/><path d="M0 35h65.3c4.9 0 8.7-3.9 8.7-8.5V18H0v17z" fill="#ff7500"/><g fill="#003468"><path d="M6.7 31.7h-.1c-1.5 0-2.8-1.1-2.8-2.8 0-1.1 1.6-1.1 1.6 0 0 .8.5 1.2 1.2 1.2h.1c.7 0 1.3-.4 1.3-1.1 0-1.8-4-1.9-4-4.5v-.3c0-1.5 1.5-2.4 2.7-2.4h.1c1.4 0 2.7.9 2.7 2.2 0 1-1.6 1.1-1.6 0 0-.4-.4-.7-1.1-.7h-.2c-.6 0-1.1.3-1.1.9v.2c0 1.1 4 1.6 4 4.5.1 1.7-1.2 2.8-2.8 2.8zM13.7 31.7h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.4c0-1.6 1.3-2.7 2.8-2.7h.1c1.4 0 2.6 1 2.8 2.3v.1c0 .5-.4.8-.8.8s-.7-.2-.8-.7c-.1-.6-.6-1-1.2-1h-.1c-.7 0-1.2.5-1.2 1.1V29c0 .7.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-1 .1-.5.4-.7.8-.7s.8.3.8.8v.2c-.2 1.3-1.4 2.3-2.8 2.3zM20.6 31.7h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.4c0-1.6 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7V29c0 1.5-1.3 2.7-2.8 2.7zm1.1-7.1c0-.7-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1V29c0 .7.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1v-4.4zM27.9 31.7h-.1c-1.5 0-2.8-1.3-2.8-2.8v-6.2c0-.5.4-.8.8-.8s.8.3.8.8v6.2c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2v-6.2c0-.5.4-.8.8-.8s.8.3.8.8v6.2c0 1.6-1.2 2.8-2.8 2.8zM36.4 23.6h-1.1v7.3c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7.3h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.2.8-.8.8zM43.9 31.6h-3.6c-.5 0-.8-.5-.8-1 0-.2 0-.4.1-.5l3.2-5.1c.2-.3.2-.4.2-.6v-.1c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.4 1.1-2.4 2.4-2.4 1.3 0 2.4 1 2.4 2.4v.2c0 .5-.2 1-.5 1.5l-2.6 4h2.4c.5 0 .8.4.8.8s-.2.8-.8.8zM50.3 29.7H50v1.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.2h-2.2c-.6 0-.9-.3-.9-.9 0-.1 0-.3.1-.4l2.6-6.1c.2-.4.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3L47.1 28h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8.1.5-.2.9-.7.9z"/></g><path d="M10.2 13.8c-.3 0-.6-.2-.7-.6L9 11.5H6.2l-.5 1.7c-.1.4-.4.6-.8.6s-.8-.3-.8-.8v-.3l2.5-8.1c.3-.6.6-.7 1-.7.3 0 .7.1.9.7l2.5 8.1v.3c0 .5-.4.8-.8.8zM7.6 6.9l-.9 3h1.8l-.9-3zM15.1 13.8H15c-1.5 0-2.8-1.3-2.8-2.8V4.7c0-.5.4-.8.8-.8s.8.3.8.8V11c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2V4.7c0-.5.4-.8.8-.8s.8.3.8.8V11c0 1.5-1.3 2.8-2.8 2.8zM23.7 5.6h-1.1V13c0 .5-.4.8-.8.8s-.8-.3-.8-.8V5.6h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.3.8-.8.8zM28.4 13.8h-.1c-1.5 0-2.8-1.2-2.8-2.7V6.7c0-1.6 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7V11c0 1.6-1.3 2.8-2.8 2.8zm1.2-7.1c0-.7-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1V11c0 .7.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1V6.7z" fill="#fff"/></svg>';
  };

  try {
      document.registerElement('as24-icon-auto24', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function arrow() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7L0 .5.5 0l6 6 5.9-6 .6.5z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-arrow', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function attention() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="17.5" r="2.5"/><path d="M11.5 12h-3l-1-11 1-1h2.9l1.1 1.1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-attention', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bubble() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M3.5 16h-.2c-.2-.1-.3-.3-.3-.5v-2.7l-.7-.8H2c-.1 0-.2 0-.2-.1l-1-.5c-.1 0-.2-.1-.2-.2l-.5-1c-.1 0-.1-.1-.1-.2V2c0-.1 0-.2.1-.2l.5-1C.6.7.7.6.8.6l1-.5c0-.1.1-.1.2-.1h12c.1 0 .2 0 .2.1l1 .5c.1 0 .2.1.2.2l.5 1c.1 0 .1.1.1.2v8c0 .1 0 .2-.1.2l-.5 1c0 .1-.1.2-.2.2l-1 .5c0 .1-.1.1-.2.1H7.7l-3.9 3.9s-.2.1-.3.1zm-1.4-5h.4c.1 0 .3.1.4.2l1 1.1c.1 0 .1.1.1.3v1.7l3.1-3.1c.1-.1.3-.2.4-.2h6.4l.7-.4.4-.7V2.1l-.4-.7-.7-.4H2.1l-.7.4-.4.7v7.8l.4.7.7.4z"/><path d="M3 7h10v1H3zM3 4h10v1H3z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bubble', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bubbles() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="60" viewBox="0 0 75 60"><path d="M69.2 27c1.1 0 2.8 1.6 2.8 2.7v15.2c0 1-1.9 3.2-3 3.2h-3.5c-1 0-2.5 1-2.5 2v4l-5.7-5c-.4-.4-.8-1-1.3-1H43c-1 0-2-3-2-4h-4c0 3.1 2.6 7 5.7 7H55l9.5 8.4c.4.4.8.6 1.3.6.2 0 .2.1.2-.1v-8.9h3c3.1 0 6-3 6-6.2V29.7c0-3.1-2.6-5.7-5.7-5.7H59v3h10.2z" fill-rule="evenodd" clip-rule="evenodd" fill="#c4c4c4"/><path d="M48.2 37H26l-1.2.9L13 50V39l-2-2H7.5C5.4 37 4 35.8 4 33.7V7.5C4 5.4 5.4 4 7.5 4h41.1c2 0 3.4 1.4 3.4 3.5v26.1c0 2.1-1.4 3.4-3.5 3.4h-.3zm0-37H7.5C3.4 0 0 3.3 0 7.5v26.1c0 4.1 3.4 7.5 7.5 7.5L9 41v13l3.3 2 14.4-15h21.8c4.1 0 7.5-3.3 7.5-7.4V7.5C56 3.3 52.6 0 48.5 0h-.3z" fill-rule="evenodd" clip-rule="evenodd" fill="#c4c4c4"/><path fill="#ff7500" d="M10 9h34v4H10z"/><path fill="#c4c4c4" d="M10 27h22v4H10zM10 18h34v4H10z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bubbles', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function car_valuation() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="none" d="M25.236 27.961h7.383v2.217h-7.383z"/><circle fill="none" cx="36.31" cy="26.486" r="1.66"/><path fill="#949494" d="M37.715 20.562c-.893-1.581-2.104-2.934-3.908-2.934h-3.5c-.165.506-.362.997-.582 1.476h4.082c.729 0 1.275.073 2.239 1.778.102.18.637 1.18 1.1 2.651h-10.63a14.005 14.005 0 0 1-3.429 2.339 1.66 1.66 0 0 1-1.54 2.274 1.654 1.654 0 0 1-1.585-1.19c-.655.14-1.329.225-2.014.27a13.953 13.953 0 0 0-.092 1.549v3.617c0 .813.661 1.476 1.476 1.476h.738c.815 0 1.476-.662 1.476-1.476v-.738H36.31v.738c0 .813.66 1.476 1.477 1.476h.738c.815 0 1.476-.662 1.476-1.476v-3.617c-.001-3.861-1.647-7.081-2.286-8.213zm-5.096 9.616h-7.383v-2.217h7.383v2.217zm3.691-2.032a1.66 1.66 0 1 1 0-3.322 1.66 1.66 0 0 1 0 3.322zM.33 35.834a2.467 2.467 0 0 0 4.273 2.467l6.834-11.837a14.279 14.279 0 0 1-4.136-2.703L.33 35.834z"/><path fill="#949494" d="M17.022.465C9.937.465 4.194 6.208 4.194 13.293s5.743 12.828 12.828 12.828c.37 0 .733-.025 1.095-.057a12.7 12.7 0 0 0 1.952-.323c.76-.186 1.493-.434 2.193-.748a12.83 12.83 0 0 0 2.463-1.46 12.883 12.883 0 0 0 3.723-4.429c.242-.476.452-.969.635-1.476a12.79 12.79 0 0 0 .767-4.335C29.85 6.208 24.106.465 17.022.465zm3.753 22.907c-.671.251-1.372.435-2.098.548-.541.084-1.091.141-1.655.141-5.938 0-10.768-4.83-10.768-10.768S11.085 2.525 17.022 2.525s10.767 4.831 10.767 10.768a10.694 10.694 0 0 1-1.716 5.811 10.803 10.803 0 0 1-5.298 4.268z"/><path fill="#FF7500" d="M19.816 9.208a7.643 7.643 0 0 0-.828-.236c-.261-.057-.607-.084-1.039-.084-.699 0-1.264.24-1.696.718-.431.481-.736 1.079-.914 1.797h4.026l-.264 1.4H15.09l-.038.359a3.09 3.09 0 0 0-.019.341v.349c0 .111.006.229.021.351h3.745l-.266 1.4h-3.308c.139 1.047.458 1.822.953 2.326.495.505 1.125.758 1.887.758.599 0 1.183-.114 1.756-.34v1.588a4.82 4.82 0 0 1-.899.199 7.256 7.256 0 0 1-.993.067c-.706 0-1.321-.114-1.845-.339a3.817 3.817 0 0 1-1.334-.946 4.654 4.654 0 0 1-.87-1.455 8.3 8.3 0 0 1-.454-1.858h-1.551l.265-1.4h1.174a3.09 3.09 0 0 1-.019-.351v-.349c0-.111.005-.224.019-.341l.037-.359H11.93l.265-1.4h1.344a8.097 8.097 0 0 1 .529-1.504c.228-.484.52-.914.88-1.285a4.19 4.19 0 0 1 1.277-.899c.491-.228 1.072-.341 1.74-.341.441 0 .861.036 1.258.105s.723.154.974.254l-.381 1.475z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-car_valuation', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function carInsertion() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40"><path fill="#FF7500" d="M6 23h20v2H6z"/><path fill="#949494" d="M6 28h20v2H6zm0 5h16v2H6zm23 7H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h26c1.7 0 3 1.3 3 3v34c0 1.7-1.3 3-3 3zM3 2c-.6 0-1 .4-1 1v34c0 .6.4 1 1 1h26c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H3zm20.9 5.7C23.1 6.3 22 5 20.4 5h-8.8C10 5 8.9 6.3 8.1 7.7c-.6 1-2.1 4-2.1 7.5v3.3c0 .8.7 1.5 1.5 1.5S9 19.3 9 18.5V18h14v.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.3c0-3.5-1.5-6.4-2.1-7.5zm-14.3.9c.9-1.5 1.4-1.6 2-1.6h8.8c.7 0 1.2.1 2 1.6.1.1.3.6.6 1.4H9c.3-.8.5-1.3.6-1.4zM9.5 15c-.8 0-1.5-.7-1.5-1.5S8.7 12 9.5 12s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm9.5 1h-6v-2h6v2zm3.5-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-carInsertion', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function carInsertionEdit() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40"><path d="M30 28.3V37c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v14.1l2-2V3c0-1.7-1.3-3-3-3H3C1.3 0 0 1.3 0 3v34c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V26.3l-2 2zM24.2 23H6v2h16.2zm-4.1 5H6v2h13.1z" fill="#949494"/><path fill="#FF7500" d="M17.9 33H6v2h13.9zm1.9-.6l.6.6 4.8-2.4-3-3.1z"/><path d="M23.9 7.7C23.1 6.3 22 5 20.4 5h-8.8S8.9 6.3 8.1 7.7c-.6 1-2.1 4-2.1 7.5v3.3c0 .8.7 1.5 1.5 1.5S9 19.3 9 18.5V18h14v.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.3c0-3.5-1.5-6.4-2.1-7.5zm-14.3.9c.9-1.5 1.4-1.6 2-1.6h8.8c.7 0 1.2.1 2 1.6.1.1.3.6.6 1.4H9c.3-.8.5-1.3.6-1.4zM9.5 15c-.8 0-1.5-.7-1.5-1.5S8.7 12 9.5 12s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm9.5 1h-6v-2h6v2zm3.5-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm17.3-.1c.6.6 0 1.2-.6 1.8L26.4 29.4l-3-3 12.8-12.9c.6-.6 1.2-1.2 1.8-.6l1.8 2z" fill="#949494"/></svg>';
  };

  try {
      document.registerElement('as24-icon-carInsertionEdit', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function close() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M.031 14.142L14.173 0l1.414 1.414L1.445 15.556z"/><path d="M1.415.031l14.142 14.142-1.415 1.414L0 1.445z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-close', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function contract() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#949494" d="M30 26.499v10.679c0 .548-.405.822-.954.822H3.154C2.604 38 2 37.726 2 37.178V3.319C2 2.77 2.604 2 3.154 2h25.892c.549 0 .954.77.954 1.319V15.41l2-2.008V3.319C32 1.672 30.693 0 29.046 0H3.154C1.507 0 0 1.672 0 3.319v33.859C0 38.825 1.507 40 3.154 40h25.892C30.693 40 32 38.825 32 37.178V24.495l-2 2.004z"/><path fill="#949494" d="M39.704 12.857c-.603-.606-1.177-1.054-1.777-1.661-.602-.606-1.202 0-1.804.607L23.422 24.609l3.006 3.033L39.13 14.834c.421-.422.856-.747.87-1.169.006-.183-.113-.623-.296-.808z"/><path fill="#FF7500" d="M19.883 30.604l.603.606 4.812-2.426-3.009-3.032z"/><path fill="#949494" d="M6 8h20v2H6zM6 13h20v2H6zM6 18h17v2H6z"/><path fill="none" stroke="#FF7500" stroke-width="1.3" stroke-linejoin="round" stroke-miterlimit="10" d="M6.72 31.035s3.271-6.9 5.092-6.648c2.561.355-3.91 9.722-2.388 10.449 1.202.573 3.754-4.291 5.848-4.774.898-.208 1.781.57 1.781.57"/></svg>';
  };

  try {
      document.registerElement('as24-icon-contract', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function counselor() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#949494" d="M36 36c0 2.207-1.792 4-4 4H8a4 4 0 0 1-4-4V4c0-2.21 1.79-4 4-4h24a4 4 0 0 1 4 4v32zM34 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32c0 1.102.895 2 2 2h24c1.103 0 2-.898 2-2V4z"/><path fill="#949494" d="M10 6.998h20v2H10z"/><path fill="#FF7500" d="M10 12h20v2H10z"/><path fill="#949494" d="M10 16.998h20v2H10zM15.494 33.796l-.471-1.972h-2.456l-.47 1.972H9.955l2.547-8.714h2.665l2.547 8.714h-2.22zm-1.712-7.159l-.875 3.736h1.763l-.888-3.736zM18.925 30.752v-1.516h3.423v1.516h-3.423zM24.133 33.796v-1.255l3.318-5.93H24.29v-1.529h5.591v1.254l-3.318 5.918h3.396v1.542h-5.826z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-counselor', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function del() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21"><path d="M6 18c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1s-1 .5-1 1v11c0 .5.5 1 1 1zM10 18c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1s-1 .5-1 1v11c0 .5.5 1 1 1z"/><path d="M15 2h-4V0H5v2H1c-.5 0-1 .5-1 1v1h1v15c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4h1V3c0-.5-.5-1-1-1zm-2 17H3V4h10v15z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-del', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function download() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18"><path d="M11.9 0H3.1L2 1.5V7h2V2.3L3.8 2H9v5h5v8.8l-.2.2H7.9l-1.8 2h8.4l1.4-1.4V4.2l-4-4.2zM11 5V2.3L13.8 5H11z"/><path d="M6 13V9.6C6 8.8 5.2 8 4.4 8h-.8C2.8 8 2 8.8 2 9.6V13H0l4 4 4-4H6z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-download', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function edit() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M6.6 17.6l4.4-1.1-3.3-3.3z"/><path d="M16 19.3l-1.1.7H2.7l-.7-.7V2.7l.7-.7H15l1 .7v.6l1.6-1.9L15.9 0H1.8C1.1 0 0 1.1 0 1.7v18.5c0 .7 1.1 1.8 1.7 1.8h14.1c.6 0 2.1-1.2 2.1-1.7v-8.2l-2 2.2v5z"/><path d="M12.075 15.375l-3.322-3.324 9.902-9.897 3.323 3.325z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-edit', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function emission_badge_2() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M23.8.6C11.1.6.8 10.9.8 23.6s10.3 23 23 23 23-10.3 23-23c.1-12.7-10.2-23-23-23zm0 44.3c-11.7 0-21.2-9.5-21.2-21.2S12.1 2.5 23.8 2.5 45 12 45 23.7s-9.5 21.2-21.2 21.2z" fill="#923526"/><circle cx="23.8" cy="23.6" r="19.5" fill="#da2d00"/><path d="M30.1 28.5H18.5v-2.1l4.4-4.4c1.3-1.3 2.2-2.3 2.6-2.8s.7-1.1.9-1.6.3-1 .3-1.6c0-.8-.2-1.4-.7-1.8s-1.1-.7-1.9-.7c-.7 0-1.3.1-1.9.4s-1.3.7-2.1 1.3l-1.5-1.8c1-.8 1.9-1.4 2.8-1.7s1.9-.5 2.9-.5c1.6 0 2.9.4 3.8 1.2s1.4 2 1.4 3.4c0 .8-.1 1.5-.4 2.2s-.7 1.4-1.3 2.2-1.5 1.7-2.9 3L22 26v.1h8.1v2.4z"/><path fill="#fff" d="M16 33h16v4H16z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-emission_badge_2', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function emission_badge_3() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M23.8.6C11.1.6.8 10.9.8 23.6s10.3 23 23 23 23-10.3 23-23c.1-12.7-10.2-23-23-23zm0 44.3c-11.7 0-21.2-9.5-21.2-21.2S12.1 2.5 23.8 2.5 45 12 45 23.7s-9.5 21.2-21.2 21.2z" fill="#817d0a"/><circle cx="23.8" cy="23.6" r="19.5" fill="#d7cb07"/><path d="M29.6 15.4c0 1.1-.3 2-.9 2.7s-1.5 1.2-2.7 1.5v.1c1.4.2 2.4.6 3.1 1.3s1 1.6 1 2.7c0 1.6-.6 2.9-1.7 3.8s-2.8 1.3-5 1.3c-1.9 0-3.5-.3-4.8-.9v-2.4c.7.4 1.5.6 2.3.8s1.6.3 2.3.3c1.3 0 2.3-.2 3-.7s1-1.3 1-2.3c0-.9-.4-1.6-1.1-2s-1.9-.6-3.4-.6h-1.5v-2.2h1.5c2.7 0 4.1-.9 4.1-2.8 0-.7-.2-1.3-.7-1.7s-1.2-.6-2.1-.6c-.6 0-1.3.1-1.9.3s-1.3.5-2.1 1.1l-1.3-1.9c1.6-1.2 3.4-1.7 5.5-1.7 1.7 0 3.1.4 4 1.1s1.4 1.4 1.4 2.8z"/><path fill="#fff" d="M16 33h16v4H16z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-emission_badge_3', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function emission_badge_4() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M23.8.6C11.1.6.8 10.9.8 23.6s10.3 23 23 23 23-10.3 23-23c.1-12.7-10.2-23-23-23zm0 44.3c-11.7 0-21.2-9.5-21.2-21.2S12.1 2.5 23.8 2.5 45 12 45 23.7s-9.5 21.2-21.2 21.2z" fill="#2a6042"/><circle cx="23.8" cy="23.6" r="19.5" fill="#449567"/><path d="M29.9 24.6h-2.3v3.7h-2.7v-3.7h-7.8v-2.1l7.8-11.3h2.7v11.2h2.3v2.2zm-5-2.3V18c0-1.5 0-2.8.1-3.8h-.1c-.2.5-.6 1.1-1 1.9l-4.3 6.2h5.3z"/><path fill="#fff" d="M16 33h16v4H16z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-emission_badge_4', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function facebook() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M7 18v-8H4V7h3V4.5C7.1 2.9 8 1 10 1h3v3h-3v3h3v3h-3v8H7z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-facebook', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function finance24() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="74" height="35" viewBox="0 0 74 35"><path fill="#fff" d="M0 15v4.5h74V15H0z"/><path fill="#003468" d="M0 0v16.9h74V0H0z"/><path d="M0 35h65.3c4.9 0 8.7-3.9 8.7-8.5v-8.4H0V35z" fill="#ff7500"/><path d="M6.7 31.4h-.1c-1.5 0-2.8-1-2.8-2.7 0-1 1.6-1 1.6 0 0 .7.5 1.2 1.2 1.2h.1c.7 0 1.2-.4 1.2-1 0-1.7-4-1.9-4-4.4v-.3c0-1.5 1.5-2.3 2.7-2.3h.1c1.4 0 2.7.9 2.7 2.2 0 1-1.6 1-1.6 0 0-.4-.4-.7-1.1-.7h-.1c-.6 0-1.1.3-1.1.8v.2c0 1.1 4 1.6 4 4.4.1 1.6-1.2 2.6-2.8 2.6zM13.7 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.3c0-1.5 1.3-2.7 2.8-2.7h.1c1.4 0 2.6.9 2.8 2.3v.1c0 .5-.4.8-.8.8s-.7-.2-.8-.7c-.1-.6-.6-.9-1.2-.9h-.1c-.7 0-1.2.5-1.2 1.1v4.3c0 .6.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-.9.1-.5.4-.7.8-.7s.8.3.8.8v.2c-.2 1.3-1.4 2.2-2.8 2.2zM21.7 24.5c0-.6-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1v-4.2zm-1.1 6.9h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.2c0-1.5 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7v4.2c0 1.5-1.3 2.7-2.8 2.7zM27.9 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 1.5-1.2 2.7-2.8 2.7zM36.4 23.5h-1.1v7.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7.1h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.2.8-.8.8zM43.9 31.3h-3.6c-.5 0-.8-.5-.8-.9 0-.2 0-.3.1-.5l3.2-5c.2-.3.2-.4.2-.6v-.1c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.3 1.1-2.3 2.4-2.3 1.3 0 2.4 1 2.4 2.3v.2c0 .5-.2.9-.5 1.4l-2.5 4.1H44c.5 0 .8.4.8.8-.1.2-.3.6-.9.6zM50.3 29.5H50v1.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.2h-2.2c-.6 0-.9-.3-.9-.8 0-.1 0-.3.1-.4l2.6-5.9c.2-.3.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3l-2.3 5h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8s-.2.7-.7.7z" fill="#003468"/><path d="M9.1 5.5H5.8v2.2H8c.5 0 .8.4.8.8s-.3.8-.8.8H5.8v3.4c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h4.1c.5 0 .8.4.8.8s-.3.8-.8.8zM11.9 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .5-.4.8-.8.8zM20 13.4h-.2c-.5 0-.7-.3-.9-.7l-2.2-5.1v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l2.2 4.9V4.6c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .4-.4.8-.8.8zM25.7 6.7l-.9 2.9h1.8l-.9-2.9zm2.7 6.7c-.3 0-.6-.2-.7-.6l-.5-1.6h-2.8l-.5 1.6c-.1.4-.4.6-.8.6s-.8-.3-.8-.8v-.3l2.5-7.9c.2-.6.5-.7.9-.7.3 0 .7.1.9.7l2.5 7.9v.3c.1.5-.3.8-.7.8zM35.5 13.4h-.2c-.5 0-.7-.3-.9-.7l-2.2-5.1v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l2.2 4.9V4.6c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .4-.3.8-.8.8zM41.3 13.4h-.1c-1.5 0-2.8-1.2-2.8-2.7V6.5c0-1.5 1.2-2.7 2.8-2.7h.1c1.4 0 2.6.9 2.8 2.3v.1c-.1.5-.5.8-.9.8s-.7-.2-.8-.7c-.1-.6-.6-.9-1.2-.9h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-.9.1-.5.4-.7.8-.7s.8.3.8.8v.2c-.2 1.2-1.3 2.2-2.7 2.2zM50.8 13.3h-4.1c-.4 0-.8-.4-.8-.8V4.7c0-.4.4-.8.8-.8h4.1c.5 0 .8.4.8.8s-.3.8-.8.8h-3.3v2.2h2.2c.5 0 .8.4.8.8s-.3.8-.8.8h-2.2v2.5h3.3c.5 0 .8.4.8.8 0 .3-.3.7-.8.7z" fill="#fff"/></svg>';
  };

  try {
      document.registerElement('as24-icon-finance24', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function googleplus() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M7.2 8.9c0-1.1 2.4-1.4 2.4-4 0-1.6-.1-2.5-1.3-3.1 0-.4 2.1-.1 2.1-.9-.5.1-4.7.1-4.7.1S1 1.1 1 5.2c0 4.1 4.1 3.6 4.1 3.6v1c0 .4.5.3.6 1.1-.3 0-5.7-.1-5.7 3.5C0 18.2 4.8 18 4.8 18s5.5.3 5.5-4.3c0-2.8-3.1-3.7-3.1-4.8zM3.1 5.4c-.4-1.6.2-3.2 1.3-3.5 1.1-.3 2.4.8 2.8 2.4S7.1 7.5 6 7.8c-1.1.3-2.4-.7-2.9-2.4zm2.4 11.4c-1.9.2-3.5-.9-3.6-2.3-.1-1.4 1.4-2.7 3.3-2.8 1.9-.1 3.5.9 3.6 2.3.1 1.4-1.4 2.7-3.3 2.8zM18 4.1V5h-3.1v3H14V5h-3v-.9h3V1h.9v3.1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-googleplus', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function heart() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.98 4.888c.568-.586 1.095-1.173 1.667-1.713 1.034-.978 2.29-1.436 3.702-1.523 1.204-.074 2.37.06 3.462.587 1.686.814 2.665 2.188 3.034 4 .428 2.09-.06 4.015-1.135 5.82-.61 1.03-1.422 1.892-2.26 2.735-1.506 1.517-3.006 3.04-4.507 4.563-1.15 1.167-2.295 2.338-3.445 3.506-.367.373-.626.374-.99.004a3944.265 3944.265 0 0 1-6.425-6.52c-.887-.9-1.79-1.79-2.634-2.728C1.27 12.313.435 10.806.13 9.053-.195 7.165.058 5.38 1.24 3.813c.932-1.237 2.22-1.88 3.73-2.106a7.738 7.738 0 0 1 2.857.11c1.274.288 2.28 1.01 3.15 1.952.342.37.675.75 1.004 1.118z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-heart', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function hook() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M6.8 19L20 5.7 18.4 4 6.8 15.7l-5.2-5.3L0 12.1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-hook', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function hookSquare() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 34 36"><path d="M32 8.7V31c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h18.7L25 2H5C2.2 2 0 4.2 0 7v24c0 2.8 2.2 5 5 5h24c2.8 0 5-2.2 5-5V7c0-.3 0-.6-.1-.9L32 8.7z" fill="#949494"/><path d="M32 .3c-.9-.6-2.1-.3-2.7.6L16.6 19l-6.3-5.5c-.7-.6-1.8-.7-2.6-.1-.9.7-1 1.9-.3 2.8l8 10c.4.5 1 .8 1.6.8h.1c.7 0 1.2-.4 1.6-1l14-23c.6-.9.3-2.1-.7-2.7z" fill="#FF7500"/></svg>';
  };

  try {
      document.registerElement('as24-icon-hookSquare', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function immo24() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="74" height="35" viewBox="0 0 74 35"><path fill="#fff" d="M0 15v4.5h74V15H0z"/><path fill="#003468" d="M0 0v16.9h74V0H0z"/><path d="M0 35h65.3c4.9 0 8.7-3.9 8.7-8.5v-8.4H0V35z" fill="#ff7500"/><path d="M6.7 31.4h-.1c-1.5 0-2.8-1-2.8-2.7 0-1 1.6-1 1.6 0 0 .7.5 1.2 1.2 1.2h.1c.7 0 1.2-.4 1.2-1 0-1.7-4-1.9-4-4.4v-.3c0-1.5 1.5-2.3 2.7-2.3h.1c1.4 0 2.7.9 2.7 2.2 0 1-1.6 1-1.6 0 0-.4-.4-.7-1.1-.7h-.1c-.6 0-1.1.3-1.1.8v.2c0 1.1 4 1.6 4 4.4.1 1.6-1.2 2.6-2.8 2.6zM13.7 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.2c0-1.5 1.3-2.7 2.8-2.7h.1c1.4 0 2.6.9 2.8 2.3v.1c0 .5-.4.8-.8.8s-.7-.2-.8-.7c-.1-.6-.6-.9-1.2-.9h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-.9.1-.5.4-.7.8-.7s.8.3.8.8v.1c-.2 1.4-1.4 2.3-2.8 2.3zM20.6 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.2c0-1.5 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7v4.2c0 1.5-1.3 2.7-2.8 2.7zm1.1-6.9c0-.6-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1v-4.2zM27.9 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 1.5-1.2 2.7-2.8 2.7zM36.4 23.5h-1.1v7.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7.1h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.2.8-.8.8zM43.9 31.3h-3.6c-.5 0-.8-.5-.8-.9 0-.2 0-.3.1-.5l3.2-5c.2-.3.2-.4.2-.6v-.1c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.3 1.1-2.3 2.4-2.3 1.3 0 2.4 1 2.4 2.3v.1c0 .5-.2.9-.5 1.4l-2.5 4.1H44c.5 0 .8.4.8.8-.1.3-.3.7-.9.7zM50.3 29.5H50v1.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.2h-2.2c-.6 0-.9-.3-.9-.8 0-.1 0-.3.1-.4l2.6-5.9c.2-.3.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3l-2.3 5h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8s-.2.7-.7.7z" fill="#003468"/><path d="M5 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .5-.4.8-.8.8zM14.5 13.4c-.4 0-.8-.3-.8-.8v-5l-1.2 2.7c-.2.4-.6.5-.8.5-.3 0-.6-.1-.8-.5L9.7 7.6v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l1.7 3.8 1.7-3.8c.2-.4.4-.7.9-.7h.2c.4 0 .8.4.8.8v8c0 .5-.4.8-.8.8zM23.9 13.4c-.4 0-.8-.3-.8-.8v-5l-1.2 2.7c-.2.4-.6.5-.8.5-.3 0-.6-.1-.8-.5l-1.2-2.7v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l1.7 3.8 1.7-3.8c.2-.4.4-.7.9-.7h.2c.4 0 .8.4.8.8v8c0 .5-.4.8-.8.8zM29.6 13.4h-.1c-1.5 0-2.8-1.2-2.8-2.7V6.5c0-1.5 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7v4.2c0 1.5-1.3 2.7-2.8 2.7zm1.2-6.9c0-.6-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1V6.5zM37.2 13.3h-2c-.4 0-.8-.4-.8-.8V4.7c0-.4.4-.8.8-.8h2c1.6 0 2.7 1.1 2.7 2.6 0 .9-.4 1.4-.9 1.9.6.5 1 1.2 1 2v.1c0 1.6-1.3 2.8-2.8 2.8zm0-7.8H36v2.2h1.2c.6 0 1.1-.5 1.1-1.2s-.5-1-1.1-1zm1.2 5c0-.7-.6-1.2-1.2-1.2H36v2.5h1.2c.7 0 1.2-.5 1.2-1.2v-.1zM42.4 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c.1.5-.3.8-.8.8zM49.8 13.3h-3.5c-.4 0-.8-.4-.8-.8V4.6c0-.5.4-.8.8-.8s.7.3.7.8v7.1h2.7c.5 0 .8.4.8.8.1.4-.2.8-.7.8zM52.2 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .5-.4.8-.8.8zM60 13.3h-4.1c-.4 0-.8-.4-.8-.8V4.7c0-.4.4-.8.8-.8H60c.5 0 .8.4.8.8s-.3.8-.8.8h-3.3v2.2h2.2c.5 0 .8.4.8.8s-.3.8-.8.8h-2.2v2.5H60c.5 0 .8.4.8.8 0 .3-.3.7-.8.7zM67.3 13.4h-.2c-.5 0-.7-.3-.9-.7L64 7.6v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l2.2 4.9V4.6c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .4-.4.8-.8.8z" fill="#fff"/></svg>';
  };

  try {
      document.registerElement('as24-icon-immo24', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function info() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 1c3.859 0 7 3.141 7 7s-3.141 7-7 7-7-3.141-7-7 3.141-7 7-7m0-1C3.588 0 0 3.588 0 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8z"/><path d="M9.333 11.667c0 .458-.238 1-.762 1H7.429c-.523 0-.762-.542-.762-1V8.333c0-.458.238-1 .762-1h1.143c.523 0 .762.542.762 1v3.334z"/><circle cx="8" cy="4.667" r="1.333"/></svg>';
  };

  try {
      document.registerElement('as24-icon-info', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function ios() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22"><path d="M18 15.4c-.5 1.1-.7 1.6-1.4 2.5-.9 1.4-2.1 3-3.7 3-1.4 0-1.7-.9-3.6-.9-1.9 0-2.2.9-3.6.9-1.5 0-2.7-1.5-3.6-2.9C-.4 14.2-.6 9.8.9 7.5 2 5.9 3.7 4.9 5.3 4.9c1.6 0 2.7.9 4 .9 1.3 0 2.1-.9 4-.9 1.4 0 2.9.8 4 2.1-3.4 2-2.9 7.1.7 8.4z" fill-rule="evenodd" clip-rule="evenodd"/><path d="M11.9 3.4c.7-.9 1.2-2.1 1-3.4-1.1.1-2.4.8-3.2 1.7-.7.8-1.3 2.1-1 3.3 1.2.1 2.5-.6 3.2-1.6z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-ios', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function location() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/><path d="M17.7 11H20V9h-2.3c-.2-3.1-2.4-5.2-5.2-6.2-.2 0-.4-.1-.5-.2-.5-.1-.5-.2-1-.2V0H9v2.4c-2.8.2-4.8 1.9-6 4.4-.3.8-.5 1.2-.7 2.2H0v2h2.3c.1.7.2 1 .5 1.7.2.3.3.7.5 1 .2.3.3.5.5.8 1.3 1.8 2.9 3 5.2 3.2V20h2v-2.3c3.8-.4 6.3-2.9 6.7-6.7zM10 16.5c-2 0-3.8-.9-5-2.3-.2-.3-.5-.7-.7-1-.5-.9-.8-2-.8-3.1 0-.7.1-1.3.3-2 .2-.6.4-1.3.9-1.9.4-.6 1-1.2 1.6-1.6 1-.8 2.3-1.2 3.7-1.2h.8c1.9.2 3.5 1.3 4.6 2.8l.3.6c.3.4.4.9.5 1.2.2.6.3 1.2.3 2v.7c0 .4-.1.8-.2 1.2-.8 2.6-3.3 4.6-6.3 4.6z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-location', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function mail() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 11.9l-9-6v7.5c0 .9.7 1.6 1.6 1.6h14.7c.9 0 1.6-.7 1.6-1.6V6v-.2L9 11.9zm0-1.6l8.5-5.9c-.3-.2-.9-.4-1.3-.4H1.8c-.4 0-1 .2-1.3.4L9 10.3z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-mail', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function phone() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 27 27"><path d="M6.8 1l1.9.5s1 .3.7 1.3l.4 5.3s0 .8-.8 1.1l-1.3.5s-.9.6-.3 1.4c.5.9 4.1 6.5 4.1 6.5s.3.4.8.4c.2 0 .4-.1.6-.2l1-.7s.3-.2.6-.2c.1 0 .2 0 .3.1.4.2 3.7 1.9 3.7 1.9s.8.4.5 1.4c-.3 1-.7 2.5-.7 2.5S16.9 24 15.8 24h-.3c-1.1-.3-14.2-4.4-11-21.1C4.7 1.8 6.8 1 6.8 1"/></svg>';
  };

  try {
      document.registerElement('as24-icon-phone', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function pin() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="43" viewBox="0 0 29 43"><path d="M27 7.2c-2-3.4-5.1-5.8-8.8-6.7C17 .2 15.7 0 14.5 0 7.7 0 1.9 4.6.4 11.2c-1 4.3.3 8.3 1.7 11.5C5 29.4 9 35.3 12.6 40.2c.3.4.6.8 1 1.3l1 1.2.4-.6c.5-.7 1.1-1.5 1.6-2.2 1.1-1.6 2.2-3.1 3.3-4.6 3.4-5.1 6.9-10.7 8.7-17 .9-3.8.4-7.7-1.6-11.1zM14.5 21.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-pin', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function pinCar() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="44" viewBox="0 0 30 44"><path d="M14.1 42c-.4-.5-.7-.9-1-1.3-3.6-4.9-7.6-10.8-10.5-17.5C1.2 19.9-.2 16 .9 11.7 2.4 5.1 8.2.5 15 .5c1.2 0 2.5.2 3.7.5 3.7 1 6.9 3.3 8.8 6.7 2 3.4 2.5 7.3 1.4 11.1-1.8 6.3-5.2 11.9-8.7 17-1 1.6-2.1 3-3.3 4.6-.5.7-1.1 1.5-1.6 2.2l-.4.6-.8-1.2z" fill="#ff7500"/><path d="M15 1c1.2 0 2.4.1 3.6.5 7.5 1.9 12 9.7 9.9 17.2-1.7 6.2-5.1 11.6-8.6 16.9-1.5 2.3-3.2 4.4-4.8 6.8-.6-.7-1.1-1.3-1.5-1.9C9.5 34.9 5.7 29.3 3 23 1.4 19.4.4 15.8 1.3 11.8 2.9 5.3 8.6 1 15 1m0-1C8 0 2 4.8.4 11.6c-1.1 4.5.3 8.5 1.7 11.8C5 30.1 9.1 36.1 12.7 41c.3.4.7.9 1 1.3.2.2.3.4.5.7l.8 1.1.8-1.1c.5-.7 1.1-1.5 1.6-2.2 1.1-1.6 2.2-3.1 3.3-4.6 3.4-5.2 6.9-10.7 8.7-17.2 1.1-4 .6-8-1.4-11.5s-5.3-6-9.2-7C17.6.2 16.3 0 15 0z" fill="#fff"/><path d="M24.5 13.4c0-.9-1.1-.7-1.5-.7h-1c-.1-.6-.4-1-.5-1.1-.7-1.2-1.5-2-2.9-2h-7.3c-1.4 0-2.1 1.1-2.8 2.3-.2.1-.3.1-.4.7h-1c-.5 0-1.6-.2-1.6.7 0 .5 1.2.7 2 .8-.3 1.1-.2 2-.2 3.5V21c0 .5.7.7 1.2.7s1.2-.2 1.2-.7v-1h10.5v.9c0 .5.6.8 1.1.8h.1c.5 0 1.3-.2 1.3-.8v-3.2c0-1.4 0-2.4-.3-3.5.9-.1 2.1-.3 2.1-.8zM9.5 12c.8-1.3 1.3-1.1 1.8-1.1H18.5c.7 0 1.1 0 1.7 1.1.1.1.5.7.8 1.9H8.9c.3-1.2.5-1.8.6-1.9zm-.1 5.2c-.5 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1c-.1.5-.5 1-1 1zm8.2 1.9h-5.2v-1.7h5.2v1.7zm3-1.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1 .5 0 1 .4 1 1 0 .5-.4 1-1 1z" fill="#fff"/></svg>';
  };

  try {
      document.registerElement('as24-icon-pinCar', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function pinterest() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.6 1 1 4.6 1 9c0 3.3 2 6.1 4.8 7.3 0-.6 0-1.2.1-1.8l1-4.4s-.3-.5-.3-1.3c0-1.2.7-2.1 1.5-2.1.9.1 1.2.6 1.2 1.3 0 .7-.5 1.8-.7 2.8-.2.9.4 1.5 1.3 1.5 1.5 0 2.5-1.9 2.5-4.3 0-1.7-1.2-3.1-3.3-3.1-2.4 0-3.9 1.8-3.9 3.8 0 .7.2 1.2.5 1.6.2.2.2.2.1.5l-.2.6c-.1.2-.2.3-.4.2-1.1-.5-1.6-1.7-1.6-3.1 0-2.3 1.9-5 5.7-5 3.1 0 5.1 2.2 5.1 4.6 0 3.1-1.7 5.5-4.3 5.5-.9 0-1.7-.5-2-1 0 0-.5 1.8-.6 2.2-.2.6-.5 1.2-.8 1.7.8.4 1.5.5 2.3.5 4.4 0 8-3.6 8-8s-3.6-8-8-8z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-pinterest', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function pinMoto() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="44" viewBox="0 0 30 44"><path d="M14.1 42c-.4-.5-.7-.9-1-1.3-3.6-4.9-7.6-10.8-10.5-17.5C1.2 19.9-.2 16 .9 11.7 2.4 5.1 8.2.5 15 .5c1.2 0 2.5.2 3.7.5 3.7 1 6.9 3.3 8.8 6.7 2 3.4 2.5 7.3 1.4 11.1-1.8 6.3-5.2 11.9-8.7 17-1 1.6-2.1 3-3.3 4.6-.5.7-1.1 1.5-1.6 2.2l-.4.6-.8-1.2z" fill="#ff7500"/><path d="M15 1c1.2 0 2.4.1 3.6.5 7.5 1.9 12 9.7 9.9 17.2-1.7 6.2-5.1 11.6-8.6 16.9-1.5 2.3-3.2 4.4-4.8 6.8-.6-.7-1.1-1.3-1.5-1.9C9.5 34.9 5.7 29.3 3 23 1.4 19.4.4 15.8 1.3 11.8 2.9 5.3 8.6 1 15 1m0-1C8 0 2 4.8.4 11.6c-1.1 4.5.3 8.5 1.7 11.8C5 30.1 9.1 36.1 12.7 41c.3.4.7.9 1 1.3.2.2.3.4.5.7l.8 1.1.8-1.1c.5-.7 1.1-1.5 1.6-2.2 1.1-1.6 2.2-3.1 3.3-4.6 3.4-5.2 6.9-10.7 8.7-17.2 1.1-4 .6-8-1.4-11.5s-5.3-6-9.2-7C17.6.2 16.3 0 15 0z" fill="#fff"/><g fill="#fff"><path d="M16.6 19.9c0-.8-.6-1.4-1.4-1.4h-.7c-.8 0-1.4.6-1.4 1.4v6.4c0 .8.6 1.4 1.4 1.4h.7c.8 0 1.4-.6 1.4-1.4v-6.4z"/><path d="M21.5 8.8h-.7c-.6 0-1.3.6-1.3 1.2v.7c-.7 0-1 .1-1 .1-.8-1.8-3-2.8-3-2.8h-1.2s-2.1 1-3 2.8c0 0-.3-.1-1-.1V10c0-.6-.7-1.2-1.3-1.2h-.8s-.8.7-.8 1.2v.7s.8.7 1.5.7l2.1.7c-.4.7-.7 1.9-.7 2.9v2.9c0 2.4.7 3.6 2.1 5v-3.6c0-.7.8-2 2.2-2h.4c1.4 0 2.3 1.2 2.3 2v3.6c1.4-1.4 2.1-2.6 2.1-5V15c0-.9-.4-2.1-.7-2.9l2.1-.7c.7 0 1.5-.7 1.5-.7V10c0-.5-.8-1.2-.8-1.2zm-6.8 5.9c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7.9 0 1.7.8 1.7 1.7 0 1-.7 1.7-1.7 1.7z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-pinMoto', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function plus() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><style>.st0{fill:#fff}</style><path d="M24 15c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/><path class="st0" d="M20 14h-3v-3c0-.6-.4-1-1-1s-1 .4-1 1v3h-3c-.6 0-1 .4-1 1s.4 1 1 1h3v3c0 .6.4 1 1 1s1-.4 1-1v-3h3c.6 0 1-.4 1-1s-.4-1-1-1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-plus', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function print() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24.3" viewBox="17.2 14.7 24 24.3"><path d="M37.2 22.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.6-.5-1.1-1.1-1.1zM24.8 31h8v1h-8zM24.8 33h5v1h-5z"/><path d="M37.2 20v-5.3h-16V20h-4v13h4v6h8c5.1 0 8-3 8-6h4V20h-4zm-14-3.3h12V20h-12v-3.3zM35.6 33c0 2.2-3.1 1-3.1 1s.2 3.4-3.3 3.4h-6.4v-8.8h12.8V33zm3.6-2h-2v-4h-16v4h-2v-9h20v9z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-print', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function scout24() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="74" height="36" viewBox="0 210.5 74 36"><path fill="#FF7500" d="M0 246.236h65.28c4.851 0 8.721-3.983 8.721-8.65V210.5H0v35.736z"/><g fill="#003468"><path d="M8.101 241.691h-.156c-1.868 0-3.476-1.296-3.476-3.458 0-1.331 2.006-1.331 2.006 0 0 .934.605 1.47 1.47 1.47h.156c.864 0 1.521-.45 1.521-1.314 0-2.161-5.031-2.37-5.031-5.533v-.363c0-1.85 1.85-2.957 3.354-2.957h.156c1.78 0 3.371 1.107 3.371 2.766 0 1.279-1.988 1.314-1.988.052 0-.449-.553-.83-1.383-.83h-.156c-.761 0-1.349.415-1.349 1.071v.259c0 1.366 5.031 1.971 5.031 5.533 0 1.972-1.538 3.304-3.526 3.304zM16.798 241.691h-.156c-1.902 0-3.458-1.47-3.458-3.388v-5.395c0-1.919 1.557-3.371 3.458-3.371h.156c1.746 0 3.198 1.193 3.423 2.888a.511.511 0 0 1 .018.172c0 .623-.519.968-1.021.968-.45 0-.882-.276-.968-.864-.104-.709-.708-1.176-1.452-1.176h-.156c-.812 0-1.47.588-1.47 1.383v5.395c0 .812.674 1.4 1.47 1.4h.156c.744 0 1.349-.467 1.452-1.176.086-.587.536-.865.968-.865.519 0 1.021.346 1.021.968v.19c-.26 1.661-1.695 2.871-3.441 2.871zM25.287 241.691h-.156c-1.901 0-3.458-1.487-3.458-3.388v-5.377c0-1.92 1.557-3.389 3.458-3.389h.156c1.919 0 3.458 1.47 3.458 3.389v5.359c.001 1.92-1.538 3.406-3.458 3.406zm1.453-8.765c0-.813-.639-1.401-1.452-1.401h-.156c-.812 0-1.452.605-1.452 1.401v5.359c0 .813.657 1.418 1.452 1.418h.156c.813 0 1.452-.605 1.452-1.4v-5.377zM34.417 241.691h-.155a3.469 3.469 0 0 1-3.458-3.458v-7.693c0-.674.501-1.003 1.002-1.003s1.003.329 1.003 1.003v7.693c0 .796.657 1.47 1.453 1.47h.155c.813 0 1.47-.657 1.47-1.47v-7.693c0-.674.501-1.003 1.003-1.003s1.002.329 1.002 1.003v7.693c0 1.902-1.555 3.458-3.475 3.458zM44.982 231.628h-1.384v9.061c0 .674-.502 1.002-1.002 1.002-.502 0-1.003-.328-1.003-1.002v-9.061H40.21c-.657 0-1.002-.501-1.002-1.002 0-.484.346-.986 1.002-.986h4.772c.675 0 1.002.501 1.002.986 0 .501-.327 1.002-1.002 1.002zM54.319 241.587h-4.496c-.64 0-1.02-.605-1.02-1.193 0-.225.034-.433.155-.623l3.925-6.328c.208-.346.208-.536.208-.795v-.139c0-.519-.449-.985-1.037-.985h-.053a.99.99 0 0 0-1.003.985v.191c0 .657-.501.985-1.002.985s-1.003-.329-1.003-.985v-.259c0-1.677 1.365-2.905 3.008-2.905h.053c1.625 0 3.043 1.21 3.043 2.905l-.017.19c0 .657-.243 1.193-.606 1.798l-3.163 5.169h3.009c.674 0 1.002.502 1.002.985 0 .503-.329 1.004-1.003 1.004zM62.22 239.219h-.38v1.47c0 .674-.502 1.002-1.003 1.002-.502 0-1.003-.328-1.003-1.002v-1.47H57.12c-.691 0-1.124-.379-1.124-1.054 0-.173.034-.398.104-.554l3.232-7.469c.191-.432.536-.605.883-.605.519 0 1.037.397 1.037.968 0 .139-.018.277-.086.434l-2.853 6.292h1.521v-1.002c0-.658.502-1.003 1.003-1.003.502 0 1.003.329 1.003 1.003v1.002h.38c.674 0 1.003.484 1.003.986 0 .501-.329 1.002-1.003 1.002z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-scout24', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function search() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg"><title>Group 20</title><g fill="#FFF" fill-rule="evenodd"><path d="M7 2.2c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m0 12c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7M16.146 16.824l-2.96-3.808a8.497 8.497 0 0 1-2.87 2.012l3.06 3.933a1.795 1.795 0 1 0 2.77-2.137"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-search', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function security() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40"><path d="M23 16h-3V7.5C20 5 18 3 15.5 3h-5C8 3 6 5 6 7.5V16H3V7.5C3 3.4 6.4 0 10.5 0h5C19.6 0 23 3.4 23 7.5V16z" fill="#FF7500"/><path d="M26 22v10c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8V22c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4zm-9.5 3.5c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5c0 1.2.6 2.2 1.5 2.9V33c0 1.1.9 2 2 2s2-.9 2-2v-4.6c.9-.7 1.5-1.7 1.5-2.9z" fill="#949494"/></svg>';
  };

  try {
      document.registerElement('as24-icon-security', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function sharing() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="23.9" height="23.7" viewBox="12 10.2 23.9 23.7"><path d="M17 19.1c1.6 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.4-3 3-3m0-2c-2.7 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5zM31.9 10.2c-2.2 0-4 1.8-4 4 0 .3.1.7.1 1l-5.4 2.7c.4.5.7 1.1 1 1.8L29 17c.7.8 1.8 1.3 2.9 1.3 2.2 0 4-1.8 4-4 0-2.3-1.8-4.1-4-4.1zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM31.9 25.9c-1.2 0-2.2.5-2.9 1.3l-5.3-2.8c-.2.6-.6 1.2-.9 1.8L28 29c-.1.3-.1.6-.1.9 0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-sharing', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function star_half() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 -1 26 26"><path d="M11.906 19.063V.03c-.466.06-.906.502-1 .969l-2.5 7.688H1.312c-.6 0-1.312.2-1.312 1 0 .4.1 1.018.5 1.218l6 3.594-2.406 8c-.1.5.193 1.113.593 1.313.2.1.425.187.625.187.3 0 .482.012.782-.188l5.812-4.75z"/><path d="M12 0c-.033 0-.061.027-.094.031v19.032L12 19l5.906 4.813c.2.2.382.187.782.187.2 0 .418-.087.718-.188.4-.2.7-.812.5-1.312l-2.406-8 6-3.594c.4-.2.5-.819.5-1.219 0-.4-.188-.63-.438-.78-.25-.15-.575-.22-.875-.22h-7.093L13.094 1C12.994.5 12.5 0 12 0z" fill="#fff"/></svg>';
  };

  try {
      document.registerElement('as24-icon-star_half', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function star() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 27 27"><path d="M22.7 8.7h-7.1L13.1 1c-.1-.5-.6-1-1.1-1s-1 .5-1.1 1L8.4 8.7H1.3c-.6 0-1.3.2-1.3 1 0 .4.1 1 .5 1.2l6 3.6-2.4 8c-.1.5.2 1.1.6 1.3.2.1.4.2.6.2.3 0 .5 0 .8-.2L12 19l5.9 4.8c.2.2.4.2.8.2.2 0 .4-.1.7-.2.4-.2.7-.8.5-1.3l-2.4-8 6-3.6c.4-.2.5-.8.5-1.2 0-.8-.7-1-1.3-1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-star', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function t_online() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="129" height="22" viewBox="0 0 129 22"><path fill="#fff" d="M51 0h78v22H51z"/><path d="M0 16.3V9.8h.7v.6c.3-.5.8-.7 1.4-.7.6 0 1.1.2 1.4.6.4.5.6 1.1.6 1.9 0 .8-.2 1.4-.5 1.8-.4.4-.8.7-1.4.7-.6 0-1-.2-1.4-.7v2.3H0m2-6c-.2 0-.3 0-.5.1s-.3.2-.4.4c-.2.3-.3.8-.3 1.4 0 .6.1 1.1.4 1.4.2.3.5.4.9.4s.7-.2.9-.5c.2-.4.4-.8.4-1.4 0-.6-.1-1-.4-1.4-.3-.2-.6-.4-1-.4M7.2 9.7c.6 0 1.1.2 1.5.7.4.4.6 1 .6 1.8s-.2 1.5-.7 1.9c-.4.4-.8.5-1.4.5-.7 0-1.2-.2-1.6-.7-.4-.4-.6-1-.6-1.7s.2-1.3.5-1.7c.4-.6 1-.8 1.7-.8m-.1.6c-.4 0-.7.2-.9.5-.3.4-.4.8-.4 1.4 0 .6.1 1.1.4 1.4.2.3.6.4 1 .4s.6-.1.9-.4c.3-.4.4-.8.4-1.5 0-.6-.1-1.1-.4-1.4-.3-.3-.6-.4-1-.4M11.1 14.5L9.8 9.8h.8l1 3.7.9-3.7h.8l.9 3.7.9-3.7h.8l-1.4 4.7h-.8l-.9-3.6-.8 3.6h-.9M20.3 12.4h-3.2c0 .3.1.6.1.8.2.6.6.8 1.1.8.4 0 .7-.2.9-.5.1-.1.1-.3.2-.5h.8c-.1.4-.2.7-.4.9-.4.5-.8.7-1.5.7s-1.2-.3-1.6-.8c-.3-.5-.5-1-.5-1.7s.2-1.3.6-1.8c.4-.5.9-.7 1.5-.7.5 0 .9.2 1.3.5s.6.8.7 1.5v.8m-.8-.6c0-.3-.1-.6-.2-.8-.2-.4-.5-.6-1-.6-.4 0-.8.2-1 .6-.1.2-.2.5-.3.9h2.5M21.5 14.5V9.8h.7v.9c.3-.7.8-1 1.6-1v.8h-.3c-.4 0-.7.1-.9.4-.2.2-.3.6-.4 1v2.6h-.7M28.4 12.4h-3.2c0 .3.1.6.1.8.2.6.6.8 1.1.8.4 0 .7-.2.9-.5.1-.1.1-.3.2-.5h.8c-.1.4-.2.7-.4.9-.4.5-.8.7-1.5.7s-1.2-.3-1.6-.8c-.3-.5-.5-1-.5-1.7s.2-1.3.6-1.8c.4-.5.9-.7 1.5-.7.5 0 .9.2 1.3.5s.6.8.7 1.5v.8m-.8-.6c0-.3-.1-.6-.2-.8-.2-.4-.5-.6-1-.6-.4 0-.8.2-1 .6-.1.2-.2.5-.3.9h2.5M33.4 14.5h-.7v-.6c-.3.5-.8.7-1.4.7-.6 0-1.1-.2-1.4-.6-.4-.5-.6-1.1-.6-1.9 0-.8.2-1.4.6-1.8.4-.4.8-.7 1.4-.7.6 0 1 .2 1.4.7V7.7h.8v6.8m-2.1-4.2c-.2 0-.3 0-.5.1s-.3.2-.4.3c-.2.4-.4.8-.4 1.4 0 .6.1 1 .4 1.4.2.3.5.5.9.5.2 0 .4 0 .5-.1.2-.1.3-.2.4-.4.2-.3.3-.8.3-1.4 0-.6-.1-1.1-.4-1.4-.2-.3-.5-.4-.8-.4M37 14.5V7.7h.8v2.6c.3-.5.8-.7 1.4-.7s1.1.2 1.4.7c.4.4.5 1 .5 1.8s-.2 1.4-.6 1.9c-.4.4-.8.6-1.4.6-.6 0-1.1-.2-1.4-.7v.6H37m2-4.2c-.4 0-.7.2-.9.5-.3.3-.4.8-.4 1.4 0 .6.1 1 .3 1.4.2.3.5.5.9.5s.7-.2.9-.5c.2-.4.4-.8.4-1.4 0-.6-.1-1-.4-1.4-.1-.3-.4-.5-.8-.5M41.9 16.2v-.7h.1c.1 0 .2.1.3.1.2 0 .3-.1.4-.2.1-.1.2-.5.4-1.1l-1.7-4.6h.9l1.2 3.6 1.2-3.6h.8L44 14.3c-.3.8-.5 1.3-.6 1.5-.2.3-.5.5-1 .5-.1 0-.3-.1-.5-.1" fill="#999"/><path d="M64.4 18v.9h-7.8V18c.3 0 .6 0 .9-.1 1.1-.1 1.6-.6 1.7-1.8v-.8V3.9v-.3c-.6 0-1.2.1-1.8.3-1.2.5-1.9 1.5-2.3 2.7-.2.6-.3 1.3-.4 1.9-.2 0-.5-.1-.8-.1.1-1.9.1-3.7.2-5.6h12.7c.1 2.1.2 3.9.2 5.8-.3 0-.6.1-.8.1-.1-.6-.2-1.1-.3-1.6-.3-1-.7-1.9-1.6-2.6-.7-.5-1.6-.7-2.5-.8V15.4c0 .4 0 .8.1 1.2.1.9.5 1.3 1.5 1.4h1z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1027b"/><path d="M98.3 14.7c0 .6-.1 1.3-.3 1.9-.5 1.4-1.8 2.3-3.3 2.4-.8 0-1.6-.1-2.4-.5-1.1-.6-1.7-1.7-1.8-2.9-.1-.8-.1-1.7.1-2.5.4-1.6 1.7-2.6 3.3-2.7.9-.1 1.7 0 2.5.5 1.1.6 1.6 1.6 1.8 2.8 0 .3 0 .7.1 1zm-1.6.2c0-.4-.1-.8-.1-1.2-.2-1.1-1-1.8-2-1.9-1.3-.1-2.1.5-2.4 1.7-.2.8-.2 1.6 0 2.4.3 1 1.1 1.6 2.2 1.6 1 0 1.9-.6 2.2-1.6 0-.3 0-.7.1-1z" fill-rule="evenodd" clip-rule="evenodd" fill="#7b7c7c"/><path d="M125.2 16.3h-4c0 .7.4 1.3 1 1.5.6.1 1-.1 1.3-.8.5.1 1 .1 1.6.2-.3.9-.8 1.5-1.7 1.7-.7.2-1.3.2-2-.1-.9-.3-1.4-1-1.7-1.9-.2-.8-.2-1.7.1-2.5.4-1.2 1.4-1.8 2.8-1.8 1.2.1 2.1.8 2.4 2 .1.5.1 1.1.2 1.7zm-1.7-1c0-.6-.1-1.1-.7-1.4-.4-.2-.8-.2-1.1.1-.4.3-.5.8-.5 1.3h2.3zM105 18.8h-1.6v-.3-3-.9c-.1-.7-.7-1-1.3-.8-.6.2-.8.8-.8 1.4v3.5h-1.6v-6h1.6v.8l.2-.2c.6-.7 1.3-.9 2.2-.7.8.2 1.3.7 1.3 1.6v4.6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7c7d7d"/><path d="M114.7 18.8h-1.6v-6h1.6v.9l.2-.2c.7-.8 1.7-1 2.6-.6.6.3.9.8 1 1.5v4.5h-1.6v-.3V15c0-.7-.3-1-.8-1.1-.6 0-1.1.3-1.2.9-.1.4-.1.7-.1 1.1v2.8c-.1 0-.1 0-.1.1z" fill-rule="evenodd" clip-rule="evenodd" fill="#7b7c7c"/><path d="M108.2 10.6v8.2h-1.5l-.1-.1v-.1-7.8-.2h1.6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7c7d7d"/><path d="M54 13.5v-3.2h3.2v3.2H54zM67 10.3v3.2h-3.2v-3.2H67z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1027b"/><path d="M76.8 10.3v3.2h-3.2v-3.2h3.2z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1037b"/><path d="M83.3 13.5v-3.2h3.2v3.2h-3.2z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1027b"/><path d="M111.4 18.8h-1.6v-6h1.6v6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7c7d7d"/><path d="M109.8 12v-1.4h1.6V12h-1.6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7b7c7c"/></svg>';
  };

  try {
      document.registerElement('as24-icon-t_online', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function tip() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M7 16v1.2L8 19l1.3 1h1.4l1.3-1 1-1.8V16l-1-1H8z"/><path d="M8.6 12h2.9l.1-.1c.1-1.2.8-2.2 1.7-3.6l.3-.5c.2-.5.4-1.1.4-1.8 0-2.2-1.8-4-4-4S6 3.8 6 6c0 .7.2 1.4.5 2l.4.5c.9 1.3 1.5 2.2 1.7 3.5zm3.3 2H8.1c-.3 0-.6-.1-.8-.3l-.6-.7c-.2-.2-.2-.4-.2-.7 0-.7-.4-1.3-1.3-2.7L4.8 9C4.3 8.1 4 7.1 4 6c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1-.2 2-.7 2.9l-.4.5c-1 1.5-1.4 2.1-1.4 2.9 0 .2-.1.5-.2.7l-.6.7c-.2.2-.5.3-.8.3z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-tip', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function twitter() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M12 12.9c1.3 0 1.8 1.4 1.8 2.6 0 1.2-.8 2.5-2.1 2.5h-4C5.1 18 3 16 3 13.6V2.9C3 1.7 4.5 1 5.8 1c1.3 0 2.3.7 2.3 1.9v3h4.2c1.3 0 1.5.8 1.5 2S13 10 11.7 10H8.1v3H12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-twitter', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function whatsapp() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9.2 0C4.2 0 .3 3.9.3 8.7c0 1.7.4 3.3 1.3 4.5L0 18l4.8-1.6c1.3.7 2.7 1.1 4.2 1.1 4.8 0 8.7-3.9 8.7-8.7C17.9 3.9 14 0 9.2 0zm0 15.8c-1.4 0-2.7-.4-3.8-1.1l-2.7.9.8-2.7c-.8-1.1-1.3-2.6-1.3-4.1 0-3.8 3.1-7 7-7 3.8 0 7 3.1 7 7-.1 3.9-3.2 7-7 7zm4.1-5.1c-.2-.1-1.3-.7-1.5-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8c-.1.1-.3.1-.5 0s-.9-.4-1.8-1.2c-.7-.5-1.1-1.3-1.2-1.5-.2-.2 0-.3.1-.4.1-.2.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4s-.4-1.3-.6-1.8c-.2-.5-.4-.4-.5-.4-.1 0-.3-.1-.4-.1-.1 0-.4 0-.6.2-.2.3-.9.9-.9 1.9 0 1.1.7 2.2.8 2.3.1.1 1.5 2.5 3.7 3.6 2.2.9 2.2.6 2.6.6s1.4-.5 1.6-1.1c.2-.5.2-.9.2-1.1 0 .1-.1 0-.3-.1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-whatsapp', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function youtube() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M8 12V6l4.4 3.1L8 12zm10-6.4C18 4.2 16.8 3 15.3 3H2.7C1.2 3 0 4.2 0 5.6v6.9C0 13.9 1.2 15 2.7 15h12.5c1.5 0 2.7-1.1 2.7-2.6V5.6z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-youtube', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_compact() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M7.2 15C4.9 15 3 16.8 3 19s1.9 4 4.2 4 4.2-1.8 4.2-4-1.8-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5 2.6 1.1 2.6 2.5-1.1 2.5-2.6 2.5zM33.8 15c-2.3 0-4.2 1.8-4.2 4s1.9 4 4.2 4 4.2-1.8 4.2-4-1.9-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5 2.6 1.1 2.6 2.5-1.2 2.5-2.6 2.5z"/><path d="M18.1 10L17 5h.8c1.1 0 4.4.6 6.2 1.3 2.4.9 7.1 2.7 8.4 3.7H18.1zm-9.3 0c-.7 0-1.6-.6-1.8-1.6C7.8 6.5 9.6 5 12.5 5h2.2l1.1 5h-7zm28.9.7c-1.5-.4-4.1-1.6-4.1-1.6s-6.1-2.9-9.1-4c-2-.7-5.4-1.2-6.8-1.2h-6C9.4 4 7.1 5.3 5.4 6.7 2.3 9.3 0 14.1 0 17c0 .8.3 2.3.5 3H2v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V20h15v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V20h1.6c.3-1.1.4-2.4.4-3.4 0-1.5-1-5.2-3.3-5.9z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_compact', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_delivery() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M16.4 21.5c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8zm37.8 0c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8zm6.4-10L53 2.2C52 .8 50.3 0 48.4 0h-46C1 .7 0 2.5 0 4.6V18s0-.1 0 0c0 2.1 1.1 4.1 2.5 5h5.1v-1.5c0-3.3 2.7-5.9 6-5.9s6 2.7 6 5.9V23h25.7v-1.5c0-3.3 2.7-5.9 6-5.9s6 2.7 6 5.9V23h3.2c.8-.9 1.3-2.2 1.3-3.7v-3.2c.2-1.4-.2-3.3-1.2-4.6zm-13-1.5c-1.9 0-2.6-.9-2.6-3V2h4c1.1 0 2.5.8 3.2 1.7L57 10h-9.4zm-34 7.1c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm37.8 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5c.1-2.5-2-4.5-4.5-4.5z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_delivery', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_electro_hybrid_gas() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 70 40"><path d="M16 4.7c1.1 2.6.7 5.4-.7 7.3-2.4-.3-4.6-2-5.7-4.7-1.2-2.6-.8-5.4.7-7.3 2.4.3 4.6 2 5.7 4.7zM0 25c1.9 1.5 4.7 1.7 7.3.6 2.6-1.1 4.4-3.3 4.7-5.7-1.9-1.5-4.7-1.8-7.3-.7C2 20.2.3 22.6 0 25zm23.1-9.7c1.9 1.5 4.7 1.8 7.3.7 2.6-1.1 4.2-3.6 4.6-6-1.9-1.5-4.6-1.6-7.2-.5-2.7 1.1-4.4 3.4-4.7 5.8zM19.8 12c2.4-.3 4.6-2 5.7-4.7 1.1-2.6.7-5.4-.7-7.3-2.4.3-4.6 2-5.7 4.7-1.1 2.6-.7 5.4.7 7.3zM28 37c-3-2-8-2.4-8-8v-6c0-2.1 1.5-3.8 2.6-5 .5-.5.4-1.3-.1-1.8s-1.3-.4-1.8.1c-.7.8-1.5 1.7-2.1 2.9-.2-1.9-.6-3.9-1.4-6-.2-.6-1-1-1.6-.7-.6.2-1 1-.7 1.6.8 2 1.1 4 1.3 5.8-.6-.5-1.3-.9-2.2-1.3-.6-.3-1.4 0-1.6.6s0 1.4.6 1.6c.8.4 2 .8 2 1.3V29c0 5.6-5 6-8 8 3.1 1 8 0 9-2l1 5h1l1-5c1 2 6.1 3 9 2zM0 10c.3 2.4 2 4.9 4.7 6 2.6 1.1 5.4.7 7.3-.7-.3-2.4-2-4.6-4.7-5.7C4.7 8.4 1.9 8.5 0 10zm36.2 22c-2.3 0-4.2 1.8-4.2 4s1.9 4 4.2 4 4.2-1.8 4.2-4-1.8-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5 2.6 1.1 2.6 2.5-1.1 2.5-2.6 2.5zM62.8 32c-2.3 0-4.2 1.8-4.2 4s1.9 4 4.2 4c2.3 0 4.2-1.8 4.2-4s-1.9-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5c1.4 0 2.6 1.1 2.6 2.5s-1.2 2.5-2.6 2.5z"/><path d="M47.1 27L46 22h.8c1.1 0 4.4.6 6.2 1.3 2.4.9 7.1 2.7 8.4 3.7H47.1zm-9.3 0c-.6 0-1.5-.6-1.8-1.5.9-1.9 2.6-3.5 5.5-3.5h2.2l1.1 5h-7zm28.9.8c-1.5-.4-4.1-1.6-4.1-1.6s-6.1-2.9-9.1-4c-2-.7-5.4-1.2-6.8-1.2h-6c-2.4 0-4.7 1.3-6.4 2.8-3 2.6-5.4 7.4-5.4 10.2 0 .8.3 2.3.5 3H31v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V37h15v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V37h1.6c.3-1.1.4-2.4.4-3.4 0-1.5-1-5.2-3.3-5.8z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_electro_hybrid_gas', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_chopper() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M36 22.4c.8-.7 1.7-1.4 2.5-1.4 1.6 0 3.2 1.2 3.8 1.7.6.6 1.6.5 2.1-.1.6-.6.5-1.6-.1-2.1-.3-.3-2.8-2.5-5.8-2.5-1.8 0-3.3 1.1-4.5 2.2L15.4 37.1c-1.6-1.3-3.7-2.1-5.9-2.1C4.3 35 0 39.3 0 44.5S4.3 54 9.5 54s9.5-4.3 9.5-9.5c0-1.9-.6-3.7-1.6-5.2L36 22.4zM16 44.5c0 3.6-2.9 6.5-6.5 6.5S3 48.1 3 44.5 5.9 38 9.5 38c1.4 0 2.6.4 3.7 1.1l-4.7 4.3c-.6.6-.7 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l4.7-4.3c.5 1 .8 2.1.8 3.2z"/><path class="st0" d="M66.5 35c-5.2 0-9.5 4.3-9.5 9.5 0 .5.1 1 .1 1.5h-2.5c-.1-.5-.1-1-.1-1.5 0-6.6 5.4-12 12-12 2 0 3.9.5 5.5 1.4l1-1.9c-2.1-1.1-4.5-2-7-2-4.4 0-6.6 1.4-8.6 2.9C54.2 35 50 38 46 35c-2.8-7-9.9-7.7-13-7l-4 4 5.2 9.7c1.7 2.8 4.6 7.3 8.3 7.3h15.7c1.6 3 4.7 5 8.4 5 5.2 0 9.5-4.3 9.5-9.5S71.7 35 66.5 35zm-6.3 11c-.1-.5-.2-1-.2-1.5 0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5c-1.8 0-3.5-.8-4.7-2h5.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-7.3z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_chopper', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_limousine() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M13.6 15.9c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7c1.6 0 2.8-1.2 2.8-2.7s-1.2-2.7-2.8-2.7zm37.8 0c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7 2.8-1.2 2.8-2.7-1.2-2.7-2.8-2.7zm7.3-4.4L45.2 9.8l-7.6-4.4c-1.7-1-2.8-1.5-5.3-1.5h-9.1c-2.5 0-3.6.5-5.3 1.5l-5.2 3.4-8.9 1C1.8 10.6 0 12.2 0 15c0 2.1 1.1 4.2 2.5 5h5.1v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h25.7v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h3.2c.8-.9 1.3-2.1 1.3-3.6.2-2.5-1.2-4.6-3.1-4.9zM17 10l2.2-2.9c1.1-1.2 2.5-1.6 4.8-1.6h1.7L27 10H17zm12 0l-1-4.5h4.3c2.2 0 3 .4 4.5 1.3L42 10H29zm-10.9 8.6c0 2.4-2 4.4-4.5 4.4s-4.5-2-4.5-4.4 2-4.4 4.5-4.4 4.5 2 4.5 4.4zm37.9 0c0 2.4-2 4.4-4.5 4.4S47 21 47 18.6s2-4.4 4.5-4.4c2.4 0 4.5 2 4.5 4.4z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_limousine', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_classic() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M45.5 31l-4.9 2.5c-.7-.2-1.1-.4-1.1-.5 0-3-6.1-5-9-5-4 0-5 1-6 2h-2.3c.5-1.2.9-2 1.1-2.3.6-1.1 2.6-1.7 6.2-1.7.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-3.6 0-7.4.4-8.9 3.3 0 .1-.1.2-.2.4 0 0-4.3-1.5-4.5-1.6-.1-.1-.2-.1-.4-.1-1.1 0-2 1.3-2 3s.9 3 2 3c.2 0 .3 0 .5-.1.1 0 3-1.1 3-1.1-.7 1.6-1.6 3.6-2.4 5.5-.8-.2-1.7-.3-2.6-.3-5.2 0-9.5 4.3-9.5 9.5S8.8 54 14 54s9.5-4.3 9.5-9.5c0-3.3-1.7-6.2-4.2-7.9.6-1.3 1.1-2.6 1.7-3.8 1.1 1.9 3.9 6.8 5.5 9.2 2 3 6 6 10 6h14.7c1.4 3.5 4.8 6 8.8 6 5.1 0 9.2-4 9.5-9h2c0-7-5.2-11.8-11.5-11.8-3.5 0-6.6 1.4-8.7 3.8-.6-.2-2.6-.9-4.8-1.6V34H50c.8 0 1.5-.7 1.5-1.5S50.8 31 50 31h-4.5zm-25 13.5c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5S10.4 38 14 38c.5 0 .9.1 1.4.1-1.2 2.8-2.2 5-2.3 5.3-.3.8 0 1.6.8 2 .2.1.4.1.6.1.6 0 1.1-.3 1.4-.9.6-1.4 1.4-3.2 2.2-5.1 1.5 1.1 2.4 3 2.4 5zm14-6.5h-3l-2 2h-1l-3-5 9 2v1zM62 48c.8 0 1.5-.7 1.5-1.5S62.8 45 62 45h-8.5v-.5c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5S63.6 51 60 51c-2.3 0-4.3-1.2-5.5-3H62z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_classic', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_enduro() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M58.5 35c-3.3 0-6.2 1.7-7.9 4.3L45.5 37c.9-2.9 3.2-5.1 5.9-6.2l7.4-2.9c3.2-1.4 4.8-.6 6.8 1.2l2.3-1.2c-1.8-3.4-5.1-5-8.3-4.3L43 27c-3.2 0-8.1-2.2-11.2-6H35c.8 0 1.5-.7 1.5-1.5S35.8 18 35 18h-4c-.8 0-1.6.3-2.3.7-2.6 1.7-4.8 4.2-5.4 6.9-4.9-.9-10.2.3-13.2 2.6-.7.5-.8 1.4-.3 2.1.5.7 1.4.8 2.1.3 2.8-2.1 8.2-3.1 12.7-1.5l-3.7 6.5c-1.1-.4-2.2-.6-3.4-.6-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5c0-3-1.4-5.6-3.5-7.4l3.8-6.6c2.5 1.8 3.8 4.5 4 8.1 0 .7.6 1.3 1.2 1.4l6.5 3c3.8 1.3 6-.1 6-3l4.3 2c-.2.8-.3 1.6-.3 2.5 0 5.2 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zM24 44.5c0 3.6-2.9 6.5-6.5 6.5S11 48.1 11 44.5s2.9-6.5 6.5-6.5c.6 0 1.3.1 1.9.3l-3.2 5.5c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.2-5.5c1.2 1.3 2 2.9 2 4.8zM58.5 51c-3.6 0-6.5-2.9-6.5-6.5 0-.4 0-.8.1-1.3l5.8 2.6c.2.1.4.1.6.1.6 0 1.1-.3 1.4-.9.3-.8 0-1.6-.7-2l-5.8-2.6c1.2-1.5 3-2.5 5.1-2.5 3.6 0 6.5 2.9 6.5 6.5S62.1 51 58.5 51z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_enduro', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_naked() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M71 44.5c0 5.2-4.3 9.5-9.5 9.5-4.9 0-8.9-3.7-9.4-8.5L55 44v.4c0 3.6 2.9 6.5 6.5 6.5S68 48 68 44.4c0-2.3-1.1-4.2-2.9-5.4l2.9-1.5c1.9 1.9 3 4.3 3 7zM31 34c0-.3 0-.6.1-.9L26.2 32c1.8 3.6 5.2 11.7 8.8 12v-6c-2.2 0-4-1.8-4-4zm32.3 11.8c-.3.5-.8.7-1.3.7-.3 0-.5-.1-.8-.2L54 41.9l-2.7 1.4c-1.4.6-7.3 3.7-13.4 3.7h-1.2c-3.3 0-7.3-2.7-8.7-5.6l-5.4-10.2-2.6 5.5c2.4 1.7 4 4.5 4 7.8 0 5.2-4.3 9.5-9.5 9.5S5 49.7 5 44.5 9.3 35 14.5 35c.9 0 1.7.1 2.5.3l3.5-7.4c-1.4-.2-2.5-1.5-2.5-3 0-1.7 1.3-3 3-3h2.3l1.4-3c.4-.8 1.4-1.2 2.2-.8.8.4 1.2 1.4.8 2.2l-2.5 5.4C30.2 23 31.3 23 36 23c0 0 6 .2 9 7 7.5-2 18.2-6 20-6 2 0 2.7 2.4 1.2 3.4-1.6 1-10.6 6-10.6 6-1.9 1-3.1 2.3-3.8 3.6l2.2 1.3 14.1-7.2 1.5 2.9-12.3 6.3 5.6 3.4c.6.5.8 1.4.4 2.1zm-44.6-6.3L16 45.2c-.3.6-.9.9-1.5.9-.2 0-.5-.1-.7-.2-.8-.4-1.2-1.4-.8-2.2l2.7-5.7h-1.2C10.9 38 8 40.9 8 44.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5c0-2-.9-3.8-2.3-5zM39 34v1l4 4 1-4-5-1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_naked', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_quad() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M17.8 54H17c-4.7 0-8.5-3.9-8.5-8.6s3.8-8.6 8.5-8.6h.8c-2.6 1.9-4.3 5.1-4.3 8.6s1.7 6.6 4.3 8.6zm15-32.8c.4-.8.1-1.7-.7-2-.7-.4-1.6-.1-2 .7L27.6 25c-5.1 1.1-8.4 2.9-10.1 4.6-2.2 2.2 1 3.1 4 3 7 0 13 4.1 13 12.2v1h9c.3 4.5 3.9 8.1 8.5 8.1h.8c-2.6-1.9-4.3-5.1-4.3-8.6 0-5.7 2.9-12.2 16-15.7 0-1.1-.9-2-2-2-7.8.4-15.3 5.1-21 5.1-5 0-6.3-3.5-11-5.1v-.8c0-.5.2-1.2.4-1.7l1.9-3.9zM59 36.8c-4.7 0-8.5 3.9-8.5 8.6S54.3 54 59 54s8.5-3.9 8.5-8.6-3.8-8.6-8.5-8.6zm4.5 8.6c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6 2-4.6 4.5-4.6 4.5 2.1 4.5 4.6zM24 36.8c-4.7 0-8.5 3.9-8.5 8.6S19.3 54 24 54s8.5-3.9 8.5-8.6-3.8-8.6-8.5-8.6zm4.5 8.6c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6 2-4.6 4.5-4.6 4.5 2.1 4.5 4.6z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_quad', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_scooter() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M18 36c1.2.1 2.4.3 3.5.8L20 39.4c-.8-.3-1.6-.4-2.5-.4-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5c0-2.2-.9-4.2-2.4-5.5l1.5-2.6c2.4 1.9 3.9 4.9 3.9 8.2v.2c0 .7-.1 1.3-.2 1.9l23.4-.9c.6 3.5 3.7 6.2 7.4 6.2 4.1 0 7.5-3.4 7.5-7.5S62.6 39 58.5 39c-3.6 0-6.7 2.6-7.4 6h-3c.4-3.3 2.4-6.1 5.1-7.7 0 0 4.3-2.7 5.8-3.6 1.5-.9 2-1.5 2-2.8 0-1.7-1.3-3-3-3-.3 0-14.4 2-14.6 2.1-1.9.4-3.4 2-3.4 4 0 1.7 1 3.1 2.4 3.7C40.2 40.2 35.7 41 32 41c-7-5-6-12 0-19h2.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H30c-2.3.9-9.1 7.3-12 12.6-.4.8-1.2 2.8 0 4.4zm4.2 10.5c0 2.6-2.1 4.8-4.8 4.8s-4.8-2.1-4.8-4.8 2.1-4.8 4.8-4.8c.4 0 .7.1 1.1.1L16.2 46c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l2.3-4c.7.9 1.1 1.9 1.1 3.1zm36.3 4.7c-2.2 0-4-1.5-4.6-3.5h4.6c.8 0 1.5-.5 1.5-1.3s-.7-1.5-1.5-1.5L54 45c.6-1.9 2.4-3.3 4.5-3.3 2.6 0 4.8 2.1 4.8 4.8s-2.2 4.7-4.8 4.7z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_scooter', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_sports() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M46.1 37.7s18-8.8 18.3-8.9c.7-.3 1.1-1 1.1-1.8 0-1.1-.8-2-2-2-.9 0-14 5-14 5h-7c-1.5-3.5-5.7-5-9-5h-7v3l15 7c1.4.7 3.1 1.6 4.6 2.7z"/><path class="st0" d="M61 35c-4.7 0-8.7 3.5-9.4 8h-4.4c-1.1-3.6-5-5.4-7.7-6.7l-15-7V18c-11.9 4.2-14.4 8.5-13.7 12.1 0 0 6.7 2.1 7.4 2.3.5.1 1 .3 1.5.5l-1.5 2.6c-1-.4-2.1-.6-3.2-.6-5.2 0-9.5 4.3-9.5 9.5S9.8 54 15 54s9.5-4.3 9.5-9.5c0-3-1.4-5.7-3.7-7.5l1.5-2.6c3.1 2.3 5.2 5.9 5.2 10.1 0 2-.5 3.8-1.3 5.5h16.3c2.6 0 4.5-1.4 4.9-4h4.2c.7 4.5 4.6 8 9.4 8 5.2 0 9.5-4.3 9.5-9.5S66.2 35 61 35zm-39.5 9.5c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5S11.4 38 15 38c.6 0 1.1.1 1.7.2l-3.5 6c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.5-6.1c1.4 1.3 2.2 3.1 2.2 5zM61 51c-3.1 0-5.6-2.1-6.3-5h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8c.7-2.9 3.2-5 6.3-5 3.6 0 6.5 2.9 6.5 6.5S64.6 51 61 51z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_sports', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_tourer() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M69.9 43h-3.1c.1.5.2 1 .2 1.5 0 3.6-2.9 6.5-6.5 6.5-2.3 0-4.3-1.2-5.5-3h6c.8 0 1.5-.7 1.5-1.5S61.8 45 61 45h-7v-.5c0-1.5.5-2.8 1.3-3.9-.2-.5-.3-1-.3-1.6v-2.2c-2.4 1.7-4 4.5-4 7.7v.5h-2.5v-.5c0-4.6 2.6-8.7 6.5-10.7V33c0-2.2 1.8-4 4-4h9v-2c0-1.1-.9-2-2-2h-1.8C61.5 25 47 30 43 30s-5-6-12-6c-2.1 0-4.6.7-6.3 1.3L23 24c3.9-4.9 4-9 3-11-9.9 3.9-14.2 14.5-14.2 16.6 0 1 .3 2.1.9 2.9h.8c1.6 0 3.2.3 4.6.9l-1.3 2.2c-1.1-.4-2.2-.6-3.4-.6C8.3 35 4 39.3 4 44.5S8.3 54 13.5 54s9.5-4.3 9.5-9.5c0-3-1.4-5.6-3.5-7.4l1.3-2.2c2.9 2.2 4.8 5.7 4.8 9.6 0 1.2-.2 2.4-.5 3.5h26.7c1.4 3.5 4.8 6 8.8 6 5.2 0 9.5-4.3 9.5-9.5-.1-.5-.2-1-.2-1.5zM20 44.5c0 3.6-2.9 6.5-6.5 6.5S7 48.1 7 44.5 9.9 38 13.5 38c.6 0 1.3.1 1.9.3l-3.2 5.5c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.2-5.5c1.2 1.3 2 2.9 2 4.8z"/><path class="st0" d="M59 31c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H59z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_tourer', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_moto_touring_enduro() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="76" height="54" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M66 27.7c-.2 0-.3 0-.5.1l-10.6 2.8c-1.1.3-1.7 1.4-1.4 2.4l1.6 5.8c.3 1 1.4 1.7 2.5 1.4l10.6-2.8c1.1-.3 1.7-1.4 1.4-2.5L68 29.2c-.3-.9-1.1-1.5-2-1.5z"/><path class="st0" d="M26.8 21c1.6-4 1-8.4.2-10-9.9 3.9-10.2 8.5-10.2 10.6 0 1.6 1.3 3.7 3.1 5-4.8-.8-9.8.5-12.8 2.7-.7.5-.8 1.4-.3 2.1.5.7 1.4.8 2.1.3 2.8-2.1 8.5-3.2 13.1-1.4l-3.1 5.4c-1.1-.4-2.2-.6-3.4-.6C10.3 35 6 39.3 6 44.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5c0-3-1.4-5.6-3.5-7.4l3.1-5.4c.7.5 1.3 1.1 1.8 1.8L30 43c.6 1.8 2.3 3 4 3h17.1c.7 4.5 4.6 8 9.4 8 5.2 0 9.5-4.3 9.5-9.5 0-1.9-.6-3.6-1.5-5.1l-3.1.8c1 1.1 1.6 2.6 1.6 4.3 0 3.6-2.9 6.5-6.5 6.5-3.1 0-5.6-2.1-6.3-5H62c.8 0 1.5-.7 1.5-1.5S62.8 43 62 43h-7.8c.1-.5.3-1 .5-1.4-.8-.5-1.3-1.3-1.6-2.2l-.2-.6c-.9 1.2-1.5 2.6-1.8 4.2H48c0-3.3 1.5-6.5 3.8-8.6l-.2-.9c-.6-2.1.7-4.3 2.8-4.9L65 25.8c.3-.1.7-.1 1-.1.5 0 1.1.1 1.5.3h.5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v4l-19.1 3.8c-1.8-5.2-6.4-5.7-15.1-5.8zM22 44.5c0 3.6-2.9 6.5-6.5 6.5S9 48.1 9 44.5s2.9-6.5 6.5-6.5c.6 0 1.3.1 1.9.3l-3.2 5.5c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.2-5.5c1.2 1.3 2 2.9 2 4.8z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_moto_touring_enduro', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_offroad() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M58.6 9.6L45 7.7l-7.6-5C35.8 1.6 34.7 1 32.1 1H13.3c-2.6 0-4.7.9-6.3 2.6L1.8 9l-.1.1-.2.2C.6 10.4 0 12 0 14v3.5c0 1.2.6 2.4 1.3 2.9L3 21h3v-1.6c0-4.2 3.2-7.1 7.2-7.1s7.2 2.9 7.2 7.1V21h23.4v-1.6c0-4.2 3.2-7.1 7.2-7.1s7.2 2.9 7.2 7.1V21H61c.6-.9 1-2.5 1-3.7v-2.1c0-2.9-1.5-5.2-3.4-5.6zM16 8H9l2.4-3.3c1-1.4 2.5-1.7 4.5-1.7h1.5L16 8zm2 0l1.7-5h6l.8 5H18zm11 0l-1-5h4.5c1.5 0 2.7.1 4.1 1.1L42 8H29zm-15.8 9.1c-1.7 0-3 1.3-3 3s1.4 3 3 3c1.7 0 3-1.3 3-3s-1.3-3-3-3zm37.8 0c-1.7 0-3 1.3-3 3s1.4 3 3 3c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-32.9 3c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9zm37.9 0c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_offroad', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_oldtimer() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M53 18.6v.7c0 .4-.3.7-.8.7h-.8v-1.4c0-3.3-2.7-5.9-6.1-5.9-2.5 0-4.2 1.4-6 3.6-1.9 2.3-7.7 3.7-9.9 3.7H15.1v-1.4c0-3.3-2.7-5.9-6.1-5.9-3.3 0-6.1 2.7-6.1 5.9.1.8-.5 1.4-1.4 1.4-.8 0-1.5-.6-1.5-1.4v-5.9c0-.8.7-1.5 1.5-1.5H3V9.7C3 5.2 4.5 3 10.6 3H25c2.3 0 2.9.6 3 1.5L29.2 9H46c1.5 0 2.5.7 2.5 2.1v.6c2.6 1.2 4.5 3.8 4.5 6.9zM14 5h-4C7.7 5 6 6.8 6 9h8V5zm13 4l-1-4h-9v4h10zm-15.1 9.6c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.2 2.8 2.8zm36.4 0c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.2 2.8 2.8zM9.1 14.1c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4zm36.3 0c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_oldtimer', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_roadster() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M24.3 9.1c-.4-.6-.2-1.4.5-1.7s1.4-.1 1.8.5l1.4 2.3h-3l-.7-1.1zm34.4 3.4l-13.5-1.7L35.3 5h-.4c-.3 0-.6.2-.6.5 0 .2 0 .3.2.4l6.5 5H17.6c-2.6 0-3.4-1.5-3.4-1.5L3.9 10.8C1.8 11.6 0 13.2 0 16c0 2.1 1.1 4.2 2.5 5h5.1v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V21h25.7v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V21h3.2c.8-.9 1.3-2.1 1.3-3.6.2-2.5-1.2-4.6-3.1-4.9zm-42.3 7.1c0 1.5-1.3 2.7-2.8 2.7s-2.8-1.2-2.8-2.7 1.3-2.7 2.8-2.7 2.8 1.2 2.8 2.7zm37.8 0c0 1.5-1.3 2.7-2.8 2.7s-2.8-1.2-2.8-2.7 1.3-2.7 2.8-2.7 2.8 1.2 2.8 2.7zm-40.6-4.4c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4zm37.8 0c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_roadster', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_sports() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M13.4 15.6c-1.5 0-2.8 1.3-2.8 2.8 0 1.6 1.2 2.9 2.8 2.9s2.8-1.3 2.8-2.9c0-1.5-1.3-2.8-2.8-2.8zm36.4 0c-1.5 0-2.8 1.3-2.8 2.8 0 1.6 1.2 2.9 2.8 2.9 1.5 0 2.8-1.3 2.8-2.9 0-1.5-1.2-2.8-2.8-2.8zm6-4c-4.7-1.9-12.6-1.5-12.6-1.5S36 5.7 32.6 4.9c-1.7-.4-4.8-.9-8-.9-2.3 0-4.7.2-6.9.9-2.6.8-7 2.2-10.9 4.3L2.2 7.8l-.7.8 1.9 2.6c-2.2 1.3-3.4 3.4-3.4 5C0 20 3.5 21 5.2 21h2.2v-2.6c0-3.4 2.7-6.1 6-6.1s6 2.7 6 6.1V21h24.5v-2.6c0-3.4 2.7-6.1 6-6.1s6 2.7 6 6.1V21l3.7-.3c1-1 1.5-1.8 1.5-3-.1-1.6-1.3-4.5-5.3-6.1zm-37.2-1.5c-1.5 0-4.2-.4-4.2-1.5 0-1.3 3-2.1 3.7-2.3 1.2-.3 2.6-.6 4.3-.7l1.5 4.5h-5.3zm7.4 0l-1.5-4.6h.7c3.5 0 5.4.4 6.9.8 1.9.5 6.5 2.6 8 3.7H26zm-8.1 8.3c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6c0-2.5 2-4.6 4.5-4.6s4.5 2.1 4.5 4.6zm36.4 0c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6c0-2.5 2-4.6 4.5-4.6s4.5 2.1 4.5 4.6z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_sports', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_station() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M58.7 11.5L45.2 9.8l-7.6-4.4c-1.7-1-2.8-1.5-5.3-1.5H13.5c-2.5 0-4.6.8-6.2 2.2l-5 4.5C1 11.7 0 13 0 15c0 2.1 1.1 4.2 2.5 5h5.1v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h25.7v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h3.2c.8-.9 1.3-2.1 1.3-3.6.2-2.5-1.2-4.6-3.1-4.9zm-45-1.5H7l2.3-2.7c1.1-1.2 3.1-1.8 5.1-1.8h1.5L13.7 10zm2.4 0l2-4.5h7.6l.8 4.5H16.1zm12.6 0L28 5.5h4.4c2.2 0 2.9.4 4.4 1.3l5.4 3.3H28.7zm-15.1 5.9c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7c1.6 0 2.8-1.2 2.8-2.7s-1.2-2.7-2.8-2.7zm37.8 0c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7 2.8-1.2 2.8-2.7-1.2-2.7-2.8-2.7zm-33.3 2.7c0 2.4-2 4.4-4.5 4.4s-4.5-2-4.5-4.4 2-4.4 4.5-4.4 4.5 2 4.5 4.4zm37.9 0c0 2.4-2 4.4-4.5 4.4S47 21 47 18.6s2-4.4 4.5-4.4c2.4 0 4.5 2 4.5 4.4z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_station', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function bodytypes_van() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="0 0 62 26"><path d="M11.3 17.7c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c1.6 0 2.8-1.3 2.8-2.8s-1.2-2.8-2.8-2.8zm40.9 0c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8S55 22 55 20.5s-1.3-2.8-2.8-2.8zm6.5-6.3L46.6 4c-2.6-1.4-5-3-10.3-3H15.7C6.5 1 4.2 4.3 3 7.2c0 0-3 6-3 8v2.2c0 2.1 1.1 3.6 2.5 4.5h2.8v-1.5c0-3.3 2.7-6 6-6s6 2.7 6 6V22H46v-1.5c0-3.3 2.7-6 6-6s6 2.7 6 6V22h2.5c.8-.9 1.3-2.2 1.3-3.8.2-2.5-.6-5.4-3.1-6.8zM14.1 9H5.6c.4-1 .6-1.5 1.1-2.8.9-2.1 3.8-3.2 8.8-3.2l-1.4 6zm2.1 0l1.4-6h11.2l1 6H16.2zM32 9l-1-6h5.3c4.3 0 6.9 1 9 2.2L52.1 9H32zM15.9 20.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c2.4 0 4.5 2 4.5 4.5zm40.8 0c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5 4.5 2 4.5 4.5z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-bodytypes_van', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_at() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640" version="1"><g fill-rule="evenodd"><path fill="#fff" d="M640 480H0V0h640z"/><path fill="#df0000" d="M640 480H0V319.997h640zm0-319.875H0V.122h640z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_at', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_be() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640"><g fill-rule="evenodd" stroke-width="1pt"><path d="M0 0h213.335v479.997H0z"/><path fill="#ffd90c" d="M213.335 0H426.67v479.997H213.335z"/><path fill="#f31830" d="M426.67 0h213.335v479.997H426.67z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_be', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_de() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640" version="1"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fc0" d="M0 320h640v160.002H0z"/><path d="M0 0h640v160H0z"/><path fill="red" d="M0 160h640v160H0z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_de', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_es() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640" version="1"><path fill="#c60b1e" d="M0 0h640v480H0z"/><path fill="#ffc400" d="M0 120h640v240H0z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_es', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_fr() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640" version="1"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#00267f" d="M0 0h213.337v480H0z"/><path fill="#f31830" d="M426.662 0H640v480H426.662z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_fr', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_it() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640" version="1"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v479.997H0z"/><path fill="#005700" d="M0 0h213.331v479.997H0z"/><path fill="#fc0000" d="M426.663 0h213.331v479.997H426.663z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_it', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_lu() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill-opacity="14.118" viewBox="0 0 640 480" height="480" width="640" fill="#28ff09"><g fill-rule="evenodd" fill-opacity="1"><path fill="red" d="M0 0h640v160.683H0z"/><path fill="#fff" d="M0 160.683h640V321.55H0z"/><path fill="#0098ff" d="M0 321.55h640v158.448H0z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_lu', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_nl() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640" version="1"><g fill-rule="evenodd" stroke-width="1pt" transform="scale(1.25 .9375)"><rect rx="0" ry="0" height="509.76" width="512" fill="#fff"/><rect rx="0" ry="0" height="169.92" width="512" y="342.08" fill="#21468b"/><path fill="#ae1c28" d="M0 0h512v169.92H0z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_nl', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function flag_pl() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" height="480" width="640" version="1"><g fill-rule="evenodd"><path fill="#fff" d="M640 480H0V0h640z"/><path stroke-width="1pt" fill="#dc143c" d="M640 480H0V240h640z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-flag_pl', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function lifestyle_familycar() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40"><ellipse cx="32" cy="22.1" rx="2" ry="2"/><ellipse cx="23.9" cy="3.2" rx="2.5" ry="3.2"/><path d="M42.7 7h4.6c.6 0 1-.3 1-.9v-.2l-1-3.8c-.2-1-1.1-1.7-2.2-1.7s-2 .8-2.2 1.8l-1 3.8v.1c-.2.6.2.9.8.9zM37.4 20.9c-.5-.3-1.1-.1-1.4.4l-2.4 4.6-.3.1h-2.9L28 24.1c-.4-.3-1.1-.3-1.4.1-.3.4-.1 1 .4 1.4l2.8 2V40h4.4l1.2-13.4 2.4-4.4c.3-.4.1-1-.4-1.3zM27.8 11.8v-.3c0-1.6-1.3-3-2.9-3.2l-5-.4h-.3c-1.7 0-3 1.2-3.2 2.9l-.7 7.7v.3c0 1 .4 1.9 1.2 2.5l.6 8.7c.9 0 1.8.3 2.5.8l1-1c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-.8 1c.5.8 1.1 1.7 1.1 2.8v5h1.6l1.1-18c.9-.5 1.5-1.4 1.6-2.5l.8-7.7z"/><path d="M17.3 32H15c-.9 0-1.7-.6-1.9-1.4l-.4-1.3c-.1-.3-.2-.6-.5-.6-.4 0-.5.3-.5.8v1l-2.9.7c-.2.1-.5.2-.6.5-.2.3-.2.5-.1.7l.5 1c.2.2.4.6.6.6h1.5s1.3-.1 1.3 1v5h2v-3h2.3c1.1 0 2.7.9 2.7 2v1h2v-5c0-1.7-2.1-3-3.7-3zM41.1 10.8l-3.8 8.1c-.2.5 0 1 .4 1.3.2.1.3.1.5.1.3 0 .7-.2.9-.5l1.9-3 .1 3.1c0 .1 0 .1-.1.2l-3 7.5c0 .1-.1.3-.1.4 0 .6.5 1 1 1h3l1.6 11h2.8l1.6-11h2.8c.6 0 1.1-.5 1.1-1 0-.1.1-.3 0-.4l-2.9-7.5.2-8c0-.8-.3-1.6-.9-2.2-.4-.6-1.2-.9-2.1-.9h-2.3c-.8 0-1.6.3-2.2.9-.2.3-.4.6-.5.9"/></svg>';
  };

  try {
      document.registerElement('as24-icon-lifestyle_familycar', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function lifestyle_firstcar() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40"><circle cx="32.5" cy="4.5" r="4.5"/><path d="M49 18.5c0-1.4-1.1-2.5-2.5-2.5-1 0-1.8.6-2.2 1.3C41.6 14.1 37.1 12 32 12c-4.3 0-8.2 1.5-10.9 4-.8-1-1.4-2.1-2-2.6-.5-.5-1.1-.4-1.1-.4v6.4c-1.1.6-1.6 1.3-2 2.6h-3c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h3c1 2.1 3.3 3.7 6 4.3V38c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-1.3c1 .2 2 .3 3 .3s2-.1 3-.3V38c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-4.2h.1c3.1-2.3 4.9-5.6 4.9-9.3 0-1.2-.2-2.4-.6-3.5h.1c1.4 0 2.5-1.1 2.5-2.5zm-29 6.7c-1 0-1.8-.6-2-1.5 0-.1 0-.2-.1-.3V23c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2s-1.1 2.2-2.3 2.2z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-lifestyle_firstcar', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function lifestyle_fourxfour() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40"><path d="M3.7 36l13-7 5 1 4-5 8-2 5 3 9-8 9 4v18h-53v-4zM7 15.4l-.7-8S25.4.5 26.2.2c1-.4 1.6.2 1.6.2l6.7 5.1 12.8-3.2c.8-.2 1.6.2 1.8.8s2.4 6.6 2.4 6.6l-1.7 1.4-.2-.7C48.5 7.5 45.3 6 42.4 7c-2.9 1.1-4.4 4.3-3.4 7.2l.2.7-2 .7-13.3 4.8-.2-.7c-1.1-2.9-4.3-4.4-7.2-3.4-2.9 1.1-4.4 4.3-3.4 7.2l.2.4-2.8.5-3.5-9zm13.9-5.1l-2.2-6L8.1 8.2l.9 6.5 11.9-4.4zm11.3-4.1l-5.5-4.8-6 2.2 2.2 6 9.3-3.4z"/><path d="M48.8 13.1c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3-.1 4.2 1.8 4.2 4.2zm-4.3-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM22.9 22.1c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3-.1 4.2 1.8 4.2 4.2zm-4.3-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM8.8 23.3c.2.5-.1 1.1-.6 1.3l-.9.3c-.5.2-1.1-.1-1.3-.6l-2.4-6.6c-.2-.5.1-1.1.6-1.3l.9-.3c.5-.2 1.1.1 1.3.6l2.4 6.6z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-lifestyle_fourxfour', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function lifestyle_fuelsaver() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40"><path d="M28.5 4.7c1.1 2.6.7 5.4-.7 7.3-2.4-.3-4.6-2-5.7-4.7-1.1-2.6-.7-5.4.7-7.3 2.4.3 4.6 2 5.7 4.7zm7.1 15.2c.3 2.4 2 4.6 4.7 5.7 2.6 1.1 5.3.9 7.2-.6-.3-2.4-1.9-4.8-4.6-5.9-2.6-1.1-5.4-.7-7.3.8zM12.5 25c1.9 1.5 4.7 1.7 7.3.6 2.6-1.1 4.4-3.3 4.7-5.7-1.9-1.5-4.7-1.8-7.3-.7-2.7 1-4.4 3.4-4.7 5.8zm23.1-9.7c1.9 1.5 4.7 1.8 7.3.7 2.6-1.1 4.2-3.6 4.6-6-1.9-1.5-4.6-1.6-7.2-.5-2.7 1.1-4.4 3.4-4.7 5.8zM32.3 12c2.4-.3 4.6-2 5.7-4.7 1.1-2.6.7-5.4-.7-7.3-2.4.3-4.6 2-5.7 4.7-1.1 2.6-.7 5.4.7 7.3zm8.2 25c-3-2-8-2.4-8-8v-6c0-2.1 1.5-3.8 2.6-5 .5-.5.4-1.3-.1-1.8s-1.3-.4-1.8.1c-.7.8-1.5 1.7-2.1 2.9-.2-1.9-.6-3.9-1.4-6-.2-.6-1-1-1.6-.7-.6.2-1 1-.7 1.6.8 2 1.1 4 1.3 5.8-.6-.5-1.3-.9-2.2-1.3-.6-.3-1.4 0-1.6.6s0 1.4.6 1.6c.8.4 2 .8 2 1.3V29c0 5.6-5 6-8 8 3.1 1 8 0 9-2l1 5h1l1-5c1 2 6.1 3 9 2zM12.5 10c.3 2.4 2 4.9 4.7 6 2.6 1.1 5.4.7 7.3-.7-.3-2.4-2-4.6-4.7-5.7-2.6-1.2-5.4-1.1-7.3.4z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-lifestyle_fuelsaver', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function lifestyle_luxury() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40"><style>.st0{fill-rule:evenodd;clip-rule:evenodd}</style><circle cx="30" cy="25" r="1.5"/><path class="st0" d="M27.6 27.4l-.7-4.4H31c2.1 0 2.9.3 4.3 1.1l5.4 3.3H27.6zm-11.7 0l2.6-3c1.1-1.2 2.4-1.5 4.6-1.5h1.6l.7 4.4h-9.5zm40.4 1.2l-13-1.7-7.3-4.1c-1.6-.9-2.6-1.2-5.1-1.2h-8.7c-2.4 0-3.5.3-5.1 1.2l-5 3.5-8.5 1.1c-2 0-3.7 2.1-3.7 4.8 0 2.1 1.2 4 2.5 4.8h4.3v-1.5c0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8V37h25.1v-1.5c0-3.2 2.6-5.8 5.8-5.8 3.2 0 5.8 2.6 5.8 5.8V37h3.1c1-.9 1.8-2.4 1.8-3.9.1-2.4-1.8-4.2-3.6-4.5zm-7 4.3c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7.1-1.5-1.2-2.7-2.7-2.7zm0 7.1l-2.2-.6-1.6-1.6-.5-2.2.6-2.2 1.6-1.6 2.2-.6 2.2.6 1.6 1.6.6 2.2-.6 2.2-1.6 1.6-2.3.6zm-36.7-7.1c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm0 7.1l-2.2-.6-1.6-1.6-.6-2.2.6-2.2 1.6-1.6 2.2-.6 2.2.6 1.6 1.6.6 2.2-.6 2.2-1.6 1.6-2.2.6z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-lifestyle_luxury', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function lifestyle_roadster_l() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40"><style>.st0{fill:#010202}</style><path class="st0" d="M2.5 18c7 2.6 8.1-5.6 14-5l-1 2c-3.5-.2-3 7-8 7-2 0-3.7-1.1-5-4zM39.5 34h4.8c1.1 0 1.7-.8 1.3-1.9l-2-5.2-1.7 2.3 1.3 2.8h-2.8l-.9 2zM22.2 31.2l1.5.8c1.4.8 2 1.6 2.3 2.4.3.8.5 1.5.5 1.5h2l-.5-2c-.3-1.2-1.4-2.9-2.9-3.6L19.9 28l2.3 3.2z"/><path class="st0" d="M16.2 22.1l-3.5 2.6c-.9.7-.9 1.8-.1 2.5l5 4.5c.8.7 1.9 2.2 2.3 3.2l.9 2.1h2.5l-1.5-3.4c-.4-1-1.4-2.5-2.1-3.3l-2.7-3 7.5-4.3h3s5.1 1.4 9.6 2.4L32.5 40h1.7l7.2-14c4 0 6-15 8-15s3.3.6 5 1.4c1.7.8 3-.4 3-1.4s-.4-1.4-.8-1.7c-1-.7-7.2-5.8-7.2-5.8V0C48 0 41.2 12 37.2 12h-1.8v3.8c0 2-2.2 4.2-4.2 4.2h-2.6c-2 0-4.2-2.2-4.2-4.2V12h-2c-3.7 0-7 4-7 7 .1 1.2.4 2.3.8 3.1z"/><path class="st0" d="M32.5 11h-5c-.6 0-1 .4-1 1v3c0 1.7 1.3 3 3 3h1c1.7 0 3-1.3 3-3v-3c0-.6-.4-1-1-1z"/></svg>';
  };

  try {
      document.registerElement('as24-icon-lifestyle_roadster_l', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function navigation_car() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="15" viewBox="0 0 34 15"><g fill="#8C91A0"><path d="M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.8c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z"/><path d="M1.604 13.5c-.066 0-.104-.898-.104-1.225 0-2.484 2.015-4.638 4.5-4.638s4.5 2.196 4.5 4.681c0 .346-.047.182-.12 1.182h13.24c-.073-1-.12-.905-.12-1.25 0-2.485 2.015-4.625 4.5-4.625s4.5 2.202 4.5 4.688c0 .345-.047.188-.12 1.188h.466C33.482 12.5 34 11.207 34 10c0-2.092-1.321-3.581-2.496-3.842l-7.031-1.377S18.979.5 15.713.5H9.099C4.002.5 0 6.273 0 9.463 0 11.164.172 11.5.953 13.5h.651zm3.238-8L6.25 3.181C7.241 1.619 9.262 1.5 11.094 1.5h1.075l.479 4H4.842zm9.238 0l-.478-4h2.11c2.379 0 7.07 4 7.07 4H14.08z"/><path d="M28 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.8c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-navigation_car', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function navigation_caravan() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 34 20"><g fill="#8C91A0"><path d="M26.742 11.596c-.973 0-1.528-.469-1.528-1.528V7.775h2.292c.549 0 1.182.311 1.528.764l2.426 3.057h-4.718zm6.569.955L29.44 7.744c-.521-.705-1.359-1.115-2.303-1.115H23.686c-.632 0-1.146.514-1.146 1.146v10.696h3.155a3.1 3.1 0 0 1-.1-.764 3.057 3.057 0 0 1 6.114 0c0 .265-.037.519-.101.764h1.724A3.047 3.047 0 0 0 34 16.562v-1.634c0-.731-.199-1.697-.689-2.377z"/><path d="M30.332 1.859l-.685-.393c-.548-.312-1.511-.568-2.142-.568h-6.494c-.631 0-1.631.177-2.223.393l-3.126 1.137H1.529C.688 2.428 0 3.115 0 3.955v12.988c0 .842.688 1.528 1.529 1.528H3.82c.033 0 .062-.007.096-.01v.01h2.679a3.054 3.054 0 0 1-.101-.764 3.057 3.057 0 1 1 6.014.764h9.268V7.775c0-1.053.857-1.91 1.91-1.91H28.653l1.68-.959c.547-.312.994-.999.994-1.523-.001-.527-.448-1.212-.995-1.524zM6.494 9.303c0 .631-.516 1.146-1.145 1.146H3.82a1.15 1.15 0 0 1-1.146-1.146V7.775A1.15 1.15 0 0 1 3.82 6.629h1.53a1.15 1.15 0 0 1 1.145 1.146v1.528zm12.608 0a1.15 1.15 0 0 1-1.146 1.146h-4.201a1.15 1.15 0 0 1-1.146-1.146V7.775a1.15 1.15 0 0 1 1.146-1.146h4.201a1.15 1.15 0 0 1 1.146 1.146v1.528z"/><path d="M10.697 17.708a1.147 1.147 0 1 1-2.293-.001 1.147 1.147 0 0 1 2.293.001zm-1.146-2.292a2.291 2.291 0 1 0 0 4.584 2.293 2.293 0 1 0 0-4.584zM29.799 17.708a1.147 1.147 0 1 1-2.293-.001 1.147 1.147 0 0 1 2.293.001zm-1.147-2.292A2.292 2.292 0 1 0 28.65 20a2.292 2.292 0 0 0 .002-4.584z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-navigation_caravan', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function navigation_motocycle() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="15" viewBox="0 0 27 15"><g fill="#8C91A0"><path d="M9.85 6.227s-5.562-2.35-7.213-2.91c-.231-.08-.387-.133-.519-.133-.513 0-.863.431-.863.907a.9.9 0 0 0 .481.798c.115.057 8.1 3.74 8.1 3.74s6.521-3.582 7.41-4.072c.887-.49 1.02-1.057 1.02-1.057h-3.74c-1.426 0-3.867.857-4.676 2.727z"/><path d="M20.211.501c4.258 1.739 5.125 3.534 4.837 4.978 0 0-2.069.63-3.298 1.002-2.277.689-4.047 2.432-4.047 4.926 0 .854.146 1.094.507 2.094h-7.029c-1.27 0-2.095-.68-2.095-1.492 0-1.301 2.06-2.479 3.453-3.275 0 0 5.273-2.802 5.91-3.153.639-.352 1.051-.832 1.051-1.3V2.192c0-1.037.635-1.722.711-1.691zM6.344 11.76a2.105 2.105 0 1 1-4.207-.001 2.105 2.105 0 0 1 4.207.001zM4.24 8.02a3.74 3.74 0 1 0 .001 7.481A3.74 3.74 0 0 0 4.24 8.02z"/><path d="M25.045 11.76a2.105 2.105 0 1 1-4.208-.002 2.105 2.105 0 0 1 4.208.002zm-2.104-3.74a3.74 3.74 0 1 0 0 7.48 3.74 3.74 0 0 0 0-7.48z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-navigation_motocycle', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}

export function navigation_truck() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="17" viewBox="0 0 34 17"><g fill="#8C91A0"><path d="M7.871 11.796H3.123v.897l3.525 1.111a3.283 3.283 0 0 1 1.223-2.008zM33.697 6.799l-.729-3.105c-.166-.715-.902-1.265-1.635-1.265H26c-.733 0-1.367.532-1.367 1.265v8.103H11.906a3.295 3.295 0 0 1 1.27 2.429h11.467a3.291 3.291 0 0 1 6.574 0h1.449C33.4 14.225 34 13.76 34 13.027V9.414c0-.733-.137-1.9-.303-2.615zm-4.363.834c-.848 0-1.232-.348-1.232-1.271V4.164H31c.521 0 1 .119 1.129.672l.537 2.797h-3.332z"/><path d="M23.939 11.103H1.334C.6 11.103 0 10.428 0 9.694V1.361C0 .627.6 0 1.334 0h21.333c.733 0 1.272.627 1.272 1.361v9.742zM11.514 14.398c0 .897-.729 1.626-1.626 1.626a1.627 1.627 0 0 1 0-3.253c.897 0 1.626.729 1.626 1.627zm-1.626-2.602a2.603 2.603 0 1 0 0 5.206 2.603 2.603 0 0 0 0-5.206zM29.555 14.398a1.627 1.627 0 1 1-3.25-.001 1.627 1.627 0 0 1 3.25.001zm-1.626-2.602a2.602 2.602 0 1 0-.001 5.205 2.602 2.602 0 0 0 .001-5.205z"/></g></svg>';
  };

  try {
      document.registerElement('as24-icon-navigation_truck', { prototype: proto });
  } catch (e) {
      if (window && window.console) {
          window.console.warn('Failed to register CustomElement "as24-icon".', e);
      }
  }
  return name;
}
