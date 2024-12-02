export default {
    // File Manager Modal
    closeFileManagerModal(state) {
        state.isFileManagerModalOpen = false;
        state.fileManagerModalCallback = null;
    },
    openFileManagerModel(state, callback = null) {
        state.isFileManagerModalOpen = true;
        state.fileManagerModalCallback = callback;
    },
  
    // Mobile Side Menu
    hideMobileSideMenu(state) {
        state.isMobileSideMenuOpen = false;
    },
    showMobileSideMenu(state) {
        state.isMobileSideMenuOpen = true;
    },
    toggleMobileSideMenu(state) {
        state.isMobileSideMenuOpen = !state.isMobileSideMenuOpen;
    },
    setFixedBarAction(state, value){
        state.fixedBarAction = value
    },
  }
  