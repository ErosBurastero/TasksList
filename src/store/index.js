import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [],
        newTask: null
    },

    mutations: {
        addTaskMutation(state) {
            state.tasks = [state.newTask, ...state.tasks]



        }
    },

    actions: {
        addTaskAction(context) {
            context.commit('addTaskMutation')
        }
    },

    modules: {}
})