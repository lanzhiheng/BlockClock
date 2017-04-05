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




// popup 灰度模式开关，开启之后加载的页面只会加载黑白模式
var grayInputElement = document.getElementById('gray-input');

function checkBoxLoad(targetFirst) {
  var backgroundWindow = chrome.extension.getBackgroundPage();

  // 如果是第一次加载则需要需要根据background的状态值来设置input的值
  if (targetFirst) {
    grayInputElement.checked = backgroundWindow.grayInputStatus;
  } else {

  // 否则则是在input状态切换的时候调用的函数，需要根据input的值来改变background里面的状态值
    backgroundWindow.grayInputStatus = grayInputElement.checked;
  }


  // 这里为了方便起见直接修改内联样式
  if (grayInputElement.checked) {
    grayInputElement.parentNode.style.background = '#358ce2';
  } else {
    grayInputElement.parentNode.style.background = '';
  }
}

checkBoxLoad(true);

grayInputElement.addEventListener('change', function () {
  // 获取background的上下文
  checkBoxLoad();
});
