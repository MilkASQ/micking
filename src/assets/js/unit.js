/**
 * 正则
 **/
let mbTest = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/; // 手机号
let bankReg = /^([1-9]{1})(\d{14,18})$/; ///^(\d{16}|\d{17}|\d{18}|\d{19})$/;  //银行卡号
let myPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;  // 8-16位数密码
let isIdCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;  //身份证验证
let isIdCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[A-Za-z0-9]{1}$/; //身份证验证正则
let email_reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; // email
let stringReg = /^[A-Za-z0-9]+$/;
let minSexNumber = /^\d{6,}$/;
let SexNumber = /^\d{6}\b/;

// 验证手机号码
function checkPhone(v) {
  if (!mbTest.test(v)) {
    return false;
  }
  return true;
}

// 验证手机号码
function subStrPhone(v) {
  v = v.toString();
  let nPhone = v.split(v.substr(3, 4)).join("****");
  return nPhone;
}

// 验证6为数字
function msgVerify(v) {
  if (!SexNumber.test(v)) {
    return false;
  }
  return true;
}

function bankCode(v) {
  if (!bankReg.test(v)) {
    return false;
  }
  return true;
}

function checkIdCade(v) {
  if (isIdCard1.test(v) || isIdCard2.test(v)) {
    return true;
  }
  return false;
}

// 验证手机号码
function subStrString(v, l) {
  v = v.toString();
  let m = v.substr(v.length - l, l);
  return m;
}

export {checkPhone, subStrPhone, msgVerify, bankCode, checkIdCade, subStrString}
