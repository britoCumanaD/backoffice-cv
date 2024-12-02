export default {
    SET_LOADING(state, value){ 
        state.loading = value 
    },
    SET_CUSTOM_MODULES(state, value){ 
        state.customModules = value 
    },
    openModuleCustomModal(state, value){
        state.isModuleCustomModalOpen = value
    },
    set_moduleInfo(state, value){
        state.moduleInfo = value
    },
    
}
