export default {
  increment(store) {
    let count = store.state.count
    count++
    store.commit('increment', count)
  }
}
