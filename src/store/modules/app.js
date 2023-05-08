const state={
  scale:1
}
const mutations={
  setScale(state,scale) {
    state.scale = scale;
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
