import React from 'react'
import store from '../../store/index.js'

export default class UserModified extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      location: '',
      userid: ''
    }
  }


  componentWillMount () {
    // 本身无赖
    let userId = this.props.match.params.id
    // 根据userId 查询出对应的用户名和地址
    let users = store.getState().users

    let getUserInfo = function (userId) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === Number(userId)) {
          return users[i]
        }
      }
    }

    if (userId) {
      let user = getUserInfo(userId)
      console.log('user8888', user)
      this.setState({
        username: user.username || '',
        location: user.location || '',
        userid: user.id
      }, () => {
        console.log('挂载完毕')
      })
    }
  }
  render() {
    return <div >
        <form >
        <div className="form-group">
          <label >Username</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="username" defaultValue = {this.state.username} onChange={this.addUsername.bind(this)}></input>
        </div>
        <div className="form-group">
          <label >Location</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="location" defaultValue = {this.state.location} onChange={this.addLocation.bind(this)}></input>
        </div>
        <div type="submit" className="btn btn-primary" onClick={this.UpdateUser.bind(this)}>submit</div>
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

  test = (e) => {
    console.log('测试开始')
  }


  UpdateUser = (event) => {
    // 如果使用button 的话 ，会出现问题
    console.log('--------------------')
    let username = this.state.username
    let location = this.state.location
    let userid = this.state.userid
    console.log('更新用户信息')
    store.dispatch({type: 'UPDATE_USER', playload: {
      id: userid,
      username: username,
      location: location
    }})
    console.log('userInfo: ', store.getState())

    // 跳转到用户列表
    this.props.history.push('/userList')

  }
}
