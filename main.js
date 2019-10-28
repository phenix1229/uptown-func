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

function modifyNumber(num, func) {
  return func(num);
}

function modifyAnything(val, func) {
  return func(val);
}

function twoFuncs(func1, func2) {
  return func2(func1());
}

function twoValues(val1, val2, func) {
  return func(val1, val2);
}

function twoValuesRTL(val1, val2, func) {
  return func(val2, val1);
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