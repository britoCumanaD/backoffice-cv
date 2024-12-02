<template>
    <form
        class="max-w-5xl mx-auto"
        autocomplete="off"
        @submit.prevent="submit"
    >
        <TopOptionSection 
            :userCanSection="'cms_page.create'"
            :userCanBack="'cms_page.view'"
            :address="'admin.module_created.index'"
            :module="current_module.tableName"
            :title="`Edit`"
            :buttonText="`Edit`"
        />

        <div class="bg-white py-6 shadow-subtle rounded-lg" :class="{'mt-16' : fixedBarAction}">
            <div  v-if="!loading"
                class="bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg"
            >
                <select-group v-for="(relation, i) in current_module.relations" :key="`relation-${i}`"
                    class="mt-4"
                    :error-message="getPageErrorMessage(relation.name)"
                    :label-text="relation.table.replace(/^./, relation.table[0].toUpperCase()).replaceAll('_', ' ')"
                    :input-any-option-enabled="true"
                    input-any-option-label="Please select"
                    :input-id="relation.name"
                    :input-name="relation.name"
                    :input-options="relations[relation.table]"
                    input-option-label-key="name"
                    input-option-value-key="id"
                    :input-required="true"
                    @errorHidden="clearPageErrorMessage(relation.name)"
                    v-model="formData.relations[relation.name]"
                />

                <content-editor
                    class="mt-4"
                    :template-fields="formatFields"
                    v-model="formData.fields"
                />
            </div>
        </div>

        <div
            v-if="!this.loading && selectedTemplateHasFields"
            class="bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg"
        >
            <p class="text-lg">Fields</p>

            <content-editor
                class="mt-4"
                :template-fields="current_module.template.template_fields"
                v-model="formData.content"
            />
        </div>

    </form>
</template>

<script>
    import _ from 'lodash';
    import InputGroup from "../../../components/core/forms/InputGroup";
    import MetadataEditor from "../../../components/admin/cms/metadata/MetadataEditor";
    import SelectGroup from "../../../components/core/forms/SelectGroup";
    import UrlEditor from "../../../components/admin/cms/urls/UrlEditor";
    import TopOptionSection from "../../../components/admin/TopOptionSection";
    import { STORE_NAME_ADMIN } from "../../../store/modules/admin";
    import { mapGetters } from "vuex";

    export default {
        components: {
            InputGroup,
            MetadataEditor,
            SelectGroup,
            UrlEditor,
            TopOptionSection,
        },
        layout: 'admin-layout',
        props: {
            current_module:{
                type: Object,
                required: true
            },
            registry:{
                type: Object,
                required: true
            },
            relations:{
                type: Object | Array,
                required: true
            }
        },
        data() {
            return {
                formData: {},
                loading: true,
                selectedTemplate: null,
            }
        },
        computed: {
            ...mapGetters(STORE_NAME_ADMIN, ["fixedBarAction"]),
            selectedTemplateHasFields() {
                try {
                    if (!this.current_module.template) {
                        return false;
                    }

                    return this.current_module.template.template_fields.length;
                } catch (e) {
                    return false;
                }
            },
            formatFields(){
                return this.current_module.fields.map((field) => {
                    return {
                        id: field.id,
                        name: field.name,
                        is_required: field.is_required == 1,
                        type: field.inputType
                    }
                })
            },
        },
        
        mounted() {
            this.formData.id = this.registry.id
            this.formData.content = {}
            this.formData.relations = {}
            this.current_module.relations.forEach(relation => {
                this.formData.relations[relation.name] = this.registry[relation.name]
            });
            this.current_module.fields.forEach(field => {
                this.formData.fields = {
                    ...this.formData.fields,
                    [field.id]: {
                        data: this.registry[field.columnName],
                        name: field.name,
                        columnName: field.columnName
                    }
                }
            });
            this.setTemplateContent()
            this.loading = false
        },
        methods: {
            
            setTemplateContent() {
                if(this.selectedTemplateHasFields){
                    if (this.registry.content) {
                        this.formData.content = this.registry.content;
                    }
                    this.current_module.template.template_fields.forEach((templateField) => {
                        if(!this.formData.content[templateField.id]){
                            this.formData.content[templateField.id] = {
                                data: '',
                                template_field_id: templateField.id,
                            };
                        }
                    });
                }
            },

            submit() {
                let msj = ''
                this.current_module.fields.forEach(field => {
                    if(field.is_required == 1 && !this.formData.fields[field.id].data)
                        msj = `The ${field.name} is required`
                });
                if(msj != ''){
                    this.$errorToast(msj)
                    return
                }
                this.$inertia.put(
                    this.$route('admin.module_created.update', this.current_module.id),
                    this.formData
                );
            },
        }
    }
</script>
