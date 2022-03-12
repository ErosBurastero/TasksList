import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [],

    },

    mutations: {
        addTaskMutation(state, newTask) {
            state.tasks = [...state.tasks, newTask]

            const valorGuardado = JSON.parse(localStorage.getItem('Tasks'))

            if (valorGuardado && valorGuardado.length > 0) {
                localStorage.setItem('Tasks', JSON.stringify([...valorGuardado, newTask]))
            } else {
                localStorage.setItem('Tasks', JSON.stringify([...state.tasks]))
            }

        },

        SET_TASK_STORAGE(state, storedTask) {
            state.tasks = storedTask
        },

        DELETE_TASK_MUTATION(state, deletedTask) {
            if (state.tasks.length === 0) return
            const tasks = state.tasks
            const indexTaskinTasks = tasks.indexOf(deletedTask)
            state.tasks.splice(indexTaskinTasks, 1)

            localStorage.setItem('Tasks', JSON.stringify([...state.tasks]))

        }



    },

    actions: {
        addTaskAction(context, newTask) {
            context.commit('addTaskMutation', newTask)
        },

        setTaskAction(context, storedTask) {
            context.commit('SET_TASK_STORAGE', storedTask)
        },

        deleteTaskAction(context, deletedTask) {
            context.commit('DELETE_TASK_MUTATION', deletedTask)
        }
    },

    modules: {}
})