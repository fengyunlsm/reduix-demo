// 这是项目的根组件

import React from 'react'

// 导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'


// 导入模块化的样式
import styles from './css/app.scss'
import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'

// 导入 store


// 导入其他组件、
import Home from './components/home/Home.jsx'
import UserInfo from './components/user/UserInfo.jsx'
import UserList from './components/user/UserList.jsx'
import UserModified from './components/user/UserModified.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }


  render() {
    return (
      <HashRouter>
      <div>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" key="home">
              <Link to="/home">Home</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" key="userList">
              <Link to="/userList">Users</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" key="userInfo">
            <Link to="/userInfo">Create</Link>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Route path="/home" component={Home}></Route>
        <Route path="/userList" component={UserList}></Route>
        <Route path="/userInfo" component={UserInfo}></Route>
        <Route path="/user/:id" component={UserModified}></Route>

      </div>
      </div>
      </HashRouter>
    )
  }
}
