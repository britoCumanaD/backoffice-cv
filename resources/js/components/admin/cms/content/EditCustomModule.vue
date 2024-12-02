<template>
    <section class="my-8 border px-4 py-6 text-center">
        <p class="mb-3">"{{ !loading ? moduleInfo.name : '' }}"</p>
        <a class="my-4 button button-default-responsive button-primary" @click="openModal">
            Administrar
        </a>
    </section>
</template>

<script>
    import { STORE_NAME_CUSTOM_MODULES } from "../../../../store/modules/customModules";
    import { mapActions } from "vuex";

    export default {
        props: {
            id:{}
        },
        data() {
            return {
                moduleInfo: null,
                loading: true
            }
        },
        async mounted () {
            this.moduleInfo = await this.getModule(this.id)
            this.loading = false
        },
        methods: {
            ...mapActions(STORE_NAME_CUSTOM_MODULES, ["getModule", 'changeModalStatus', 'handleModuleInfo']),
            openModal() {
                this.handleModuleInfo(this.moduleInfo)
                this.changeModalStatus(true)
            },
        }
    }
</script>
