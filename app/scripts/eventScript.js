function grayscale() {
  var className = document.body.className;
  document.body.className += ' gray';
  // if (className.match(/gray/)) {
  //   document.body.className = className.replace('gray', '').trim();
  // } else {
  //
  // }
}

chrome.runtime.sendMessage("", { to: 'background', subject: 'shouldBeGray'}, {}, function(response) {
  if (response.shouldBeGray == true) {
    grayscale()
  }
})
