import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false,
        colors: [
            {
                name: 'blue',
                color: '#1890ff',
                active: false
            },
            {
                name: 'green',
                color: '#4CAF50',
                active: true
            },
            {
                name: 'pink',
                color: '#E91E63',
                active: false
            },
            {
                name: 'navy',
                color: '#323259',
                active: false
            }
        ],
        newVersion: false, // 是否有新版本
        curTime: new Date().getTime(),
        darkMode: false
    },
    mutations: {
        handleSignIn(state) {
            state.isLogin = true;
        },
        onVersion(state, val) {
            state.newVersion = val;
        },
        handleSetTIme(state) {
            state.curTime = new Date().getTime();
        },
        handleSignOut(state) {
            state.isLogin = false;
        },
        handleSetColor(state, val) {
            for (let i = 0; i < state.colors.length; i++) {
                if (state.colors[i].active) {
                    state.colors[i].active = false;
                }
                if (state.colors[i].name === val || state.colors[i].color === val || i === val) {
                    state.colors[i].active = true;
                }
            }
        },
        handleDarkMode(state, status) {
            state.darkMode = status;
        },
    }
});
export default store;