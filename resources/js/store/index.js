import Vue from 'vue'
import Vuex from 'vuex'
import websiteModuleStore, { STORE_NAME_WEBSITES } from './modules/website'
import adminModuleStore, { STORE_NAME_ADMIN } from './modules/admin'
import menuModuleStore, { STORE_NAME_MENU } from './modules/menu'
import relationsModuleStore, { STORE_NAME_RELATIONS } from './modules/relations'
import customModulesModuleStore, { STORE_NAME_CUSTOM_MODULES } from './modules/customModules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        [STORE_NAME_WEBSITES]: websiteModuleStore,
        [STORE_NAME_ADMIN]: adminModuleStore,
        [STORE_NAME_MENU]: menuModuleStore,
        [STORE_NAME_RELATIONS]: relationsModuleStore,
        [STORE_NAME_CUSTOM_MODULES]: customModulesModuleStore,
    },
})
