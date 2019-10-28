function call(func) {
  func();
}

function callTwice(func) {
  func();
  func();
}

function callXTimes(func, times) {
  while (times > 0){
    func();
    times--
  }
}

function returnFromFunc(func) {
  return func();
}

function modifyString(str, func) {
  return func(str);
}

function modifyNumber() {
}

function modifyAnything() {
}

function twoFuncs() {
}

function twoValues() {
}

function twoValuesRTL() {
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}