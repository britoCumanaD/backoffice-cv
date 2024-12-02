export default {
    changeShowMenu: ({ commit }, payload) => {
        commit('SET_SHOW_MENU', payload);
    },

    async getModules({ commit, state }) {
                
        commit('SET_LOADING', true);
        const data = await axios.get('/admin/api/modules/getActiveModules')
        const menu = state.menu
        menu.modules.children = {}
        data.data.forEach((module, i) => {
            menu.modules.children = {
                ...menu.modules.children,
                ['module_'+i]: {
                    activeRoutes: ["admin.module_created.index", "admin.module_created.create"],
                    children: {
                        index: {
                            icon: false,
                            label: `View ${module.name}`,
                            requiresAllPermissions: [],
                            requiresAnyPermissions: [],
                            route: `admin.module_created.index`,
                            module: module.tableName
                        },
                        create: {
                            children: false,
                            icon: false,
                            label: `Create ${module.name}`,
                            requiresAllPermissions: [],
                            requiresAnyPermissions: [],
                            route: `admin.module_created.create`,
                            module: module.tableName
                        },
                    },
                    icon: module.icon,
                    label: module.name,
                    requiresAllPermissions: [],
                    requiresAnyPermissions: [],
                }
            }
        });

        commit('SET_MENU', menu);
        commit('SET_LOADING', false);

    },
}
