export default {
    setConfigInit({ commit, state }, params ){

        const configValues = params
            
        commit('setConfigValues', configValues)
        commit('setContentPage', params.content)
        commit('setPosts', params.posts)
        commit('setUrlPage', params.url)

    }
}
