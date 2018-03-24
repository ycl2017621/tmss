'use strict'
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);
const state = {
    //导航默认状态
    currTab: 'Home'
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})