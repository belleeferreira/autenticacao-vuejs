import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {
            isLoggedIn: false
        }
    },
    mutations: {
        someMutation (state, data) {
            state.user.isLoggedIn = data
        }
    },
    actions: {

    },
    getters: {

    }
})