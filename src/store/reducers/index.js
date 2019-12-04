import {ADD_USER, DEL_USER, UPDATE_USER} from '../actions/action-type/action-types.js'

//定义默认状态
let initState = {
  users: []
};


function reducer(state=initState,action) {

  let newState

  function removeState (user) {
    return user.id != action.playload.id
  }

  function getUser (user) {

    return user.id === action.playload.id
  }

  function getOtherUser(user) {
    // 获取非此id的数据
    return user.id != action.playload.id
  }

  switch (action.type) {
    case ADD_USER:
       newState = {
         users: [
           ...state.users,
           action.playload
         ]
       }
       break

    case DEL_USER:
      //  删除某个用户
      console.log('触发删除')
      let t = state.users.filter(removeState)
      newState = {
        users: [
          ...t
        ]
      }
      break

    case UPDATE_USER:
      console.log('触发修改')
      let oneUser = state.users.filter(getUser)
      // 修改数据
      oneUser[0].username = action.playload.username
      oneUser[0].location = action.playload.location

      let otherUser = state.users.filter(getOtherUser)
      console.log('otherUser: ', otherUser)

      newState = {
        users: [
          ...oneUser,
          ...otherUser
        ]
      }
      break

    default:
      newState = state
      break
  }
  return newState;
}
export default reducer;
