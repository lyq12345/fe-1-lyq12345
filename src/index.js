/*
 * @Author: lyq
 * @Date: 2021-01-20 11:29:03
 * @LastEditTime: 2021-01-20 14:32:50
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /fe-1-lyq12345/src/index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.css'
//open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/Users/joelee/UCI/CS122B/TestChrome/temp/chrome_dev_test" --disable-web-security

/*
  This Function connects Our Main <App> to our HTML file
  by connecting <App> to <div id="root"></div>. <App>'s render
  function then gets called and any component within <App> will
  also get called.
*/
ReactDOM.render(<App />, document.getElementById('root'))
