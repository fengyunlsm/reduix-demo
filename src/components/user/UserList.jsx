import React from 'react'
import store from '../../store/index.js'
import {  Route, Link } from 'react-router-dom'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users:store.getState().users
    }
  }
  delUser = (userId) => {
    event.preventDefault();
    store.dispatch({type: 'DEL_USER', playload: {id: userId}})
    // 删除之后还要重新渲染页面
    this.setState({
      users: store.getState().users
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  render() {
    // 获取所有用户信息
    let userList = []
    for (let user of this.state.users) {
      let userid = user.id
      console.log('userid: ', user.id)
      let path = `/user/${userid}`

      console.log('path: ', path)
      userList.push(
        <li key={user.id} className="list-group-item" ref="key">
        {user.username + ',' + user.location}
          <div className="btn btn-primary" ><Link to={path} history={this.props.history}>view</Link></div>
          <div className="btn btn-primary" onClick={this.delUser.bind(this, user.id)}>delete</div>
        </li>
      )
    }


    return <div>
        <ul className="list-group list-group-flush">
         {userList}
       </ul>
    </div>
  }

}
