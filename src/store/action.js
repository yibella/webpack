import ajax from '../config/ajax'

export default {
	addNum({ commit, state }, id) {
		commit('REMBER_ANSWER', { id })
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', {
				num: 1
			})
		}
	},

	getData({ commit, state }) {
		ajax('GET', '#').
		then(res => {
			commit('GET_DATA', {
				res
			})
		})
	},

	initializeData({ commit }) {
		commit('INITIALIZE_DATA')
	}
}