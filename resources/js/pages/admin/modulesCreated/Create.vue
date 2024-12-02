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
            :title="`Create`"
            :buttonText="`Create`"
        />
        <div class="bg-white py-6 shadow-subtle rounded-lg" :class="{'mt-16' : fixedBarAction}">
            <div
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

                <content-editor v-if="!loading"
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
    import InputGroup from "../../../components/core/forms/InputGroup";
    import SelectGroup from "../../../components/core/forms/SelectGroup";
    import { STORE_NAME_ADMIN } from "../../../store/modules/admin";
    import TopOptionSection from "../../../components/admin/TopOptionSection";
    import { mapGetters } from "vuex";
    import RelationModule from "../../../components/admin/modules/RelationModule";
    import FieldModule from "../../../components/admin/modules/FieldModule"
    import Checkbox from "../../../components/admin/cms/content/content_fields/Checkbox";

    export default {
        components: {
            InputGroup,
            SelectGroup,
            TopOptionSection,
            FieldModule,
            RelationModule,
            Checkbox
        },
        layout: 'admin-layout',
        props: {
            current_module:{
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
                formData: {
                    id: null,
                    fields: {},
                    content:  {},
                    relations:  {},
                },
                loading: true,
                selectedTemplate: null,
            }
        },
        mounted(){

            this.formData.id = this.current_module.id
            this.current_module.relations.forEach(relation => {
                this.formData.relations[relation.name] = ''
            });
            this.current_module.fields.forEach(field => {
                this.formData.fields = {
                    ...this.formData.fields,
                    [field.id]: {
                        data: null,
                        name: field.name,
                        columnName: field.columnName
                    }
                }
            });
            this.selectedTemplate = _.cloneDeep(this.current_module.template)
            this.setTemplateContent()
            this.loading = false

        },
        computed: {
            ...mapGetters(STORE_NAME_ADMIN, ["fixedBarAction"]),
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
        },
        methods: {
            setTemplateContent() {
                if(this.selectedTemplateHasFields){
                    this.current_module.template.template_fields.forEach((templateField) => {
                        this.formData.content[templateField.id] = {
                            data: '',
                            template_field_id: templateField.id,
                        };
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
                this.$inertia.post(
                    this.$route('admin.module_created.save', this.current_module.id),
                    this.formData
                );
            }
        },
    }
</script>
