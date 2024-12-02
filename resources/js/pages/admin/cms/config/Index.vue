<template>
    <form
        class="max-w-5xl mx-auto"
        autocomplete="off"
        @submit.prevent="submit"
    >
        <div
            class="flex flex-row items-center mb-6"
            :class="{'fixed top-0 z-50 bg-white shadow-md p-3 right-0' : fixedBarAction}"
        >
            <h1 class="font-medium text-lg" :class="fixedBarAction ? 'mr-8' : 'mr-auto'">
                 Setting
            </h1>


            <inertia-link
                v-if="userCan('cms.view')"
                class="button button-default-responsive button-primary-subtle
                    flex flex-row items-center mr-2"
                :href="$route('admin.index')"
            >
                <icon-chevron-left
                    class="w-5 md:mr-2"
                />
                <span class="hidden md:inline">
                    Back
                </span>
            </inertia-link>

            <button class="button button-default-responsive button-primary
                    flex flex-row items-center"
                type="submit"
            >
                <icon-save class="w-5 md:mr-2"/>
                <span class="hidden md:inline">
                    Save Changes
                </span>
            </button>
        </div>

        <div class="bg-white py-6 shadow-subtle rounded-lg">
            <div class="px-6 w-full grid grid-cols-2 gap-4" v-if="render">

                <section v-for="(config, index) in config_key" :key="index" class="mb-4">

                    <component
                        :is="config.component"
                        :template-field="{...config, id: index}"
                        :typeInput="config.type"
                        v-model="configValues[config.key]"
                        @input="checkInput"
                    >
                        <div class="mb-2">
                            <p class="flex flex-row font-medium items-baseline text-theme-base-contrast text-sm tracking-wider">
                                <span>{{ config.label }}</span>
                                <sup
                                    v-if="config.is_required"
                                    class="text-theme-danger-contrast"
                                >
                                    *
                                </sup>
                            </p>
                        </div>
                    </component>
                </section>
            </div>
        </div>
    </form>
</template>

<script>
    import _ from 'lodash';
    import { Inertia } from '@inertiajs/inertia'
    import ImageField from "../../../../components/admin/cms/content/content_fields/ImageField";
    import TextField from "../../../../components/admin/cms/content/content_fields/TextField";
    import ColorField from "../../../../components/admin/cms/content/content_fields/ColorField";
    import { STORE_NAME_ADMIN } from "../../../../store/modules/admin";
    import { mapGetters } from "vuex";

    export default {
        name: "AdminCmsConfigIndex",
        components: {
            ImageField,
            TextField,
            ColorField,
            Inertia
        },
        layout: 'admin-layout',
        props: {
            config_key: {
                required: true,
                type:  Object | Array,
            },
        },
        data() {
            return {
                configValues:{},
                render: false,
                logoValidFormat: [
                    'svg',
                    'jpg',
                    'jpeg',
                    'png',
                    'gif'
                ],
                faviconValidFormat: [
                    'png',
                    'ico',
                    'svg'
                ],
                logoError:false,
                faviconError:false,
            }
        },
        computed:{
            ...mapGetters(STORE_NAME_ADMIN, ["fixedBarAction"]),
        },
        mounted() {
            this.configValues = this.$page.props.config
            this.render = true
        },
        methods: {
            submit() {
                this.$inertia.post(
                    this.$route('admin.cms.config.store'),
                    this.configValues
                );
            },
            checkInput(){
                const logo = this.configValues.logo.split('.')
                const favicon = this.configValues.favicon.split('.')

                if(logo.length>0 && this.configValues.logo != ''){
                    this.logoError = 
                        this.logoValidFormat.find((end) => end === logo[logo.length - 1]) ? false : true

                    if(this.logoError){
                        this.configValues.logo = ''
                        this.render = false
                        this.$nextTick(() => {
                            this.render = true
                        })
                        return
                    }
                }
                if(favicon.length>0 && this.configValues.favicon != ''){

                    this.faviconError = 
                        this.faviconValidFormat.find((end) => end === favicon[favicon.length - 1]) ? false : true

                    if(this.faviconError){
                        this.configValues.favicon = ''
                        this.render = false
                        this.$nextTick(() => {
                            this.render = true
                        })
                        return
                    }
                }
            }
        },
    }
</script>
