import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const mutations = {
  [types.ADD_TO_CART](state, { id }) {
    const record = state.added.find(p => p.id === id);
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      });
    } else {
      record.quantity++;
    }
  }
};

export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations
});
