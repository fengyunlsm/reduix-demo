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

    let divHeader = {
      width: "50%",
      margin: "0 auto"
    }

    let buttonStyle = {
      display: "inline-block",
      position: "absolute",
      right: "0px"
    }

    let userList = []
    for (let user of this.state.users) {
      let userid = user.id
      let path = `/user/${userid}`

      userList.push(
        <li key={user.id} className="list-group-item" ref="key" >
        {user.username + ',' + user.location}
        <div style={buttonStyle}>
          <div className="btn btn-outline-primary" ><Link to={path} history={this.props.history}>view</Link></div>
          <div className="btn btn-outline-secondary" onClick={this.delUser.bind(this, user.id)}>delete</div>
        </div>
        </li>
      )
    }


    return <div style={divHeader}>
        <ul className="list-group list-group-flush">
         {userList}
       </ul>
    </div>
  }

}
