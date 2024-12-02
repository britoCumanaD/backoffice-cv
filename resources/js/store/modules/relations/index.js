import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export const STORE_NAME_RELATIONS = 'relations'

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
