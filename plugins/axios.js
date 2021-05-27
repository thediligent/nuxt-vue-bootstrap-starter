export default ({ app, $axios, store }) => {
  $axios.interceptors.request.use(
    (config) => {
      store.commit('SET_DATA', { data: true, id: 'loading' })
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
    (response) => {
      store.commit('SET_DATA', { data: false, id: 'loading' })
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
