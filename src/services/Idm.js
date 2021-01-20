/*
 * @Author: lyq
 * @Date: 2021-01-20 11:29:03
 * @LastEditTime: 2021-01-20 13:45:04
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /fe-1-lyq12345/src/services/Idm.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
import Socket from './Socket'
import { idmUrl, idmEPs } from '../Config.json'

async function login(email, password) {
  const payLoad = {
    email: email,
    password: password.split(''),
  }

  const options = {
    baseURL: idmUrl, // Base URL
    url: idmEPs.loginEP, // Path of URL
    data: payLoad, // Data to send in Body
  }

  return await Socket.POST(options)
}

async function register(email, password) {
  const payLoad = {
    email: email,
    password: password.split(''),
  }

  const options = {
    baseURL: idmUrl, // Base URL
    url: idmEPs.registerEP, // Path of URL
    data: payLoad, // Data to send in Body
  }

  return await Socket.POST(options)
}

export default {
  login,
  register,
}
