export default {
  state: () => ({
    loading: false,
  }),
  mutations: {
    SET_DATA(state, { id, data }) {
      state[id] = data
    },
  },
  actions: {},
}
export const strict = false
