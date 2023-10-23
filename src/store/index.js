import { createStore } from 'vuex'
import ModulesUser from './user'

export default createStore({
  state: {
    // 存用户信息
  },
  getters: {
    // 获取state里的信息并通过计算
  },
  mutations: {
    // 不能进行异步操作
  },
  actions: {
    // state里的信息进行操作 比如更新用户信息
  },
  modules: {
    // 对state进行分割
    user: ModulesUser,
  }
});
