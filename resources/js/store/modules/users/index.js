import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export const STORE_NAME_AUTHENTICATIONS = 'authentications'

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
