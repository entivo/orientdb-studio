let API = (function () {
  var m = window.location.pathname.match(/(.*\/)studio\/index.html/);
  return m && m[1] ? m[1] : '/api/';
})();

let STUDIO_VERSION = "2.2";

export {API,STUDIO_VERSION};