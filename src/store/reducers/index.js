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
        function getUser (user) {
          return user.id === id
        }

        newState = {
          // 触发更新 节奏不一样的
        }
    default:
      newState = state
      break
  }
  return newState;
}
export default reducer;
