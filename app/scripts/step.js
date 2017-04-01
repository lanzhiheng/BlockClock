function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 1000);
}
startTime();

var grayInputElement = document.getElementById('gray-input');

// chrome.storage.sync.set({'grayInput': grayInputElement.checked});

grayInputElement.addEventListener('change', function () {
  chrome.tabs.executeScript(null, {file: "scripts/gray.js"});
  // chrome.storage.sync.set({'grayInput': grayInputElement.checked});
});
