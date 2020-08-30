"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPhoneCode = getPhoneCode;
exports.register = register;
exports.login = login;
exports.judgeExistPhone = judgeExistPhone;
exports.judgeExistAccount = judgeExistAccount;
exports.phoneLogin = phoneLogin;

var _axios = _interopRequireDefault(require("./axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPhoneCode(data) {
  return (0, _axios["default"])({
    method: 'post',
    url: '/cat-registration/sendCode',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      /* 'Content-Type': 'application/json', */

      /* "Content-Type": "multipart/form-data" */

    }
  });
}

function register(data) {
  return (0, _axios["default"])({
    method: 'post',
    url: '/cat-registration/insert',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

function login(data) {
  return (0, _axios["default"])({
    method: 'post',
    url: '/cat-registration/login',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

function judgeExistPhone(data) {
  return (0, _axios["default"])({
    method: 'post',
    url: '/cat-registration/selectByPhone',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

function judgeExistAccount(data) {
  return (0, _axios["default"])({
    method: 'post',
    url: '/cat-registration/selectByUsername',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

function phoneLogin(data) {
  return (0, _axios["default"])({
    method: 'post',
    url: '/cat-registration/loginByPhone',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}