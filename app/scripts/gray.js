(function grayscale() {
  var className = document.body.className;
  if (className.match(/gray/)) {
    document.body.className = className.replace('gray', '').trim();
  } else {
    document.body.className += ' gray';
  }
})();
