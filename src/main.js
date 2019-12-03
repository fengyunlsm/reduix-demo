// 是项目的JS打包入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';




// 导入项目的根组件
import App from './App.jsx'

ReactDOM.render(<App></App>, document.getElementById('app'))
