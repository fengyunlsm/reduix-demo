import {createStore} from 'redux';
import reducer from './reducers';



// 创建 store
let store = createStore(reducer);
console.log('store: ', store)
export default store;
