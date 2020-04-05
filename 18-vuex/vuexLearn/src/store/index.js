import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload.newName
    }
  },
  getters: {
    fullName(state) { 
      return state.name + '1111'
    },
    //gettes 为本模块的getters
    fullName1(state, getters) {
      return getters.fullName + '2222'
    },
    fullName2(state, getters, rootState) {
      return getters.fullName1 + rootState.counter
    },
  },

  // 模块中只能调用自己的mutations
  actions: {
    asynsUpateName(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('recived name :\t' + payload);
          context.commit({
            type: 'updateName',
            newName: payload
          })
          resolve('完成修改任务')  
        }, 2000)
      })
    }
  }

}

const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      { id: 101, name: 'zx', age: 20 },
      { id: 102, name: 'ls', age: 19 },
      { id: 103, name: 'ww', age: 21 },
      { id: 104, name: 'zl', age: 22 },
    ],
    info: {
      id: 111,
      name: 'tianhong',
      age: 28
    }


  },

  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // mutation 接收参数
    incrementCount(state, count) {
      state.counter += count
    },
    // 风格化提交风格
    incrementCountType(state, payload) {
      state.counter += payload.count
    },
    //  recive object  mutation payload
    pushStudent(state, stu) {
      state.students.push(stu)
    },

    //响应添加store里面没有的属性
    updateStoreInfo(state) {
      // 添加属性错误范例
      // state.info['addresss'] = '北京'
      // Vue.set(state.info,'address','北京')
      // 删除属性错误范例
      // delete state.info.age
      // console.log(state.info);
      Vue.delete(state.info, 'age')

    },
    fromActionsUpdateInfo(state) {
      state.info.name = '修改后的天鸿name'
    }
  },
  //异步操作 可让dev-tools可监测 方便bug排除 
  actions: {
    // context 上下文
    aUpdateInfo(context, payload) {

      // 模拟异步操作
      // console.log(payload);
      // setTimeout(() => {
      //   context.commit('fromActionsUpdateInfo')
      // }, 2000)



      // 回调通知修改完成 第一种方式
      setTimeout(() => {
        console.log('vuex action 接受到 ' + payload.msg);
        context.commit('fromActionsUpdateInfo')
        payload.success('异步任务完成通知')
      }, 2000)



      // promise 实现方式  
      //   return new Promise((resolve,reject)=>{
      //     setTimeout(()=>{
      //       console.log('vuex action 接受到'+payload);
      //       context.commit('fromActionsUpdateInfo')
      //       resolve('异步任务完成通知') 
      //     },2000)
      //   })


    }
  },
  // 类似组件中的 computed属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    lg20Stu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    //参数的设置 复用以前的函数
    lg20StuLength(state, getters) {
      return getters.lg20Stu.length
    },
    // 返回一个回调函数 动态设置 age
    lgAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }


  },
  modules: {
    a: moduleA
  }
})



export default store