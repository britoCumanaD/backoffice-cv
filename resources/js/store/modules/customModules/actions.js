export default {

    async getModulesToSelect({ commit, state }) {
                
        commit('SET_LOADING', true);
        const data = await axios.get('/admin/api/modules/getModulesToSelect')

        commit('SET_CUSTOM_MODULES', data.data);
        commit('SET_LOADING', false);

    },

    async getModule({ commit, state }, id) {
                
        const data = await axios.get(`/admin/api/modules/getModule/${id}`)
        return data.data

    },

    async changeModalStatus({ commit }, value) {
        commit('openModuleCustomModal', value)
    },

    handleModuleInfo({commit}, value){
        commit('set_moduleInfo', null)
        commit('set_moduleInfo', value)
    }
}
