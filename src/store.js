import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    favorites: [],
    favFilter: "all"
  },
  getters: {
    filteredFavs: state => {
      return state.favFilter === "all" ?
        state.favorites :
        state.favorites.filter(f => f.type === state.favFilter)
    }
  },
  actions: {
    addFavorite({
      commit,
      state
    }, data) {
      commit('addFavorite', data)
    },
    removeFromFavorites({
      commit,
      state
    }, id) {
      commit('removeFromFavorites', id)
    },
    setFilter: ({
      commit,
      state
    }, filterValue) => {
      commit('setFilter', filterValue)
    },
  },
  mutations: {

    addFavorite: (state, data) => {
      state.favorites = [
        ...state.favorites,
        { ...data,
          id: Math.random() + ""
        }
      ];
    },
    removeFromFavorites: (state, id) => {
      let a = state.favorites.slice().filter((f) => {
        debugger
        return f.id !== id
      })
      state.favorites = a;
    },
    setFilter: (state, value) => state.favFilter = value,
    decrement: state => state.count--
  }
})

export default store
