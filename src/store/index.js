export default {
	state: {
		message: ''
	},
	mutations: {
		MESSAGE(state, value) {
			state.message = value || state.message;
		}
	}
}