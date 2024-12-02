<template>
    <transition
        name="fade"
    >
        <div
            v-show="isModuleCustomModalOpen"
            class="
                bg-navy-800 bg-opacity-50 fixed flex h-full inset-0 items-center justify-center w-full
                md:py-16 md:px-8
            "
            @click.self="closeModal"
        >
            <div v-if="moduleInfo"
                class="
                    bg-white flex flex-col h-full pb-8 pt-4 w-full
                    md:rounded-lg
                "
            >
                <iframe :src="`/admin/module_created?module=${moduleInfo.tableName}&isModal=1`" frameborder="0" width="w-full"
                    style="height: 100vh;"
                ></iframe>
            
            </div>
        </div>
    </transition>
</template>

<script>

    import { STORE_NAME_CUSTOM_MODULES } from "../../../store/modules/customModules";
    import { mapActions, mapGetters } from "vuex";
    import modulesCreated from "../../../pages/admin/modulesCreated/Index";
    export default {
        components: {
            modulesCreated
        },
        computed: {
            ...mapGetters(STORE_NAME_CUSTOM_MODULES, ["moduleInfo", "isModuleCustomModalOpen"]),
        },
        methods: {
            ...mapActions(STORE_NAME_CUSTOM_MODULES, ['changeModalStatus']),
            closeModal() {
                this.changeModalStatus(false)
            },
            
        }
    }
</script>
