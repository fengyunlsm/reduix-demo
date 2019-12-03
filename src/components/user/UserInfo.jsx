import React from 'react'
import store from '../../store/index.js'

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      location: ''
        }
  }


  render() {
    return <div >
        <form onSubmit={this.addUser.bind(this)}>
        <div className="form-group">
          <label >Username</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="username" defaultValue = {this.state.username} onChange={this.addUsername.bind(this)}></input>
        </div>
        <div className="form-group">
          <label >Location</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="location" defaultValue = {this.state.location} onChange={this.addLocation.bind(this)}></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.addUser.bind(this)}>Create</button>
      </form>
    </div>
  }

  addUsername = (e) => {
    this.setState({
      username: e.target.value
    }, () => {
      console.log('username', this.state.username)
    })
  }

  addLocation = (e) => {
    this.setState({
      location: e.target.value
    }, () => {
      console.log('location: ', this.state.location)
    })
  }

  addUser = (event) => {
    let username = this.state.username
    let location = this.state.location
    // 添加用户
    store.dispatch({type: 'ADD_USER', playload: {
      id: parseInt(Math.random() * 10000000),
      username: username,
      location: location
    }})
    console.log('userInfo: ', store.getState())

    // 跳转到用户列表
    this.props.history.push('/userList')

  }
}
