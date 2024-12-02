<template>
    <form
        class="max-w-5xl mx-auto"
        autocomplete="off"
        @submit.prevent="submit"
    >
        <TopOptionSection 
            :userCanSection="'cms_advanced.create'"
            :userCanBack="'cms_advanced.view'"
            :address="'admin.modules.index'"
            :title="`Edit Module - '${formData.name}'`"
            :buttonText="`Edit Module`"
        />

        <div class="bg-white py-6 shadow-subtle rounded-lg" :class="{'mt-16' : fixedBarAction}">
            <div class="block px-6 w-full">
                <select-group v-if="isLayouts"
                    :error-message="getPageErrorMessage('layout_id')"
                    label-text="Layout"
                    :input-any-option-enabled="true"
                    input-any-option-label="Please select a Layout"
                    :input-autofocus="true"
                    input-id="layout_id"
                    input-name="layout_id"
                    :input-options="isLayouts ? layouts : {}"
                    input-option-label-key="name"
                    input-option-value-key="id"
                    :input-required="false"
                    @errorHidden="clearPageErrorMessage('layout_id')"
                    v-model="formData.layout_id"
                />

                <select-group v-if="isTemplates"
                    class="mt-4"
                    :error-message="getPageErrorMessage('template_id')"
                    label-text="Template"
                    :input-any-option-enabled="true"
                    input-any-option-label="Please select a template"
                    input-id="template_id"
                    input-name="template_id"
                    :input-options="isTemplates ? templates : {}"
                    input-option-label-key="name"
                    input-option-value-key="id"
                    :input-required="false"
                    @errorHidden="clearPageErrorMessage('template_id')"
                    v-model="formData.template_id"
                />

                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('name')"
                    input-autocomplete="name"
                    input-id="name"
                    input-name="name"
                    :input-required="true"
                    input-type="text"
                    label-text="Module Name"
                    @errorHidden="clearPageErrorMessage('name')"
                    v-model="formData.name"
                />

                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('tableName')"
                    input-autocomplete="tableName"
                    input-id="tableName"
                    input-name="tableName"
                    :input-required="true"
                    input-type="text"
                    label-text="Table Name"
                    inputDisabled
                    @errorHidden="clearPageErrorMessage('tableName')"
                    v-model="formData.tableName"
                />
                
                <ListIcons :listsIcons="listsIcons" v-model="formData.icon" />

                <Checkbox
                    v-if="!loading"
                    class="mt-4"
                    :template-field="{ 
                        'is_required': true,
                        'label': 'Status',
                        'id': 'status_id' 
                    }"
                    v-model="formData.status"
                >
                    <div class="mb-2">
                        <p
                            class="flex flex-row font-medium items-baseline text-theme-base-contrast text-sm tracking-wider"
                        >
                            <span>Status</span>
                            <sup class="text-theme-danger-contrast">*</sup>
                        </p>
                    </div>
                </Checkbox>

            </div>
        </div>

        <div class="bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg" >
            <FieldModule v-if="formData.fields"
                :field-settings="fieldSettings"
                :field-types="fieldTypes"
                :inputSettings="inputSettings"
                :inputTypes="inputTypes"
                v-model="formData.fields"
            />
        </div>

        <!--<div class="bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg" >
            <RelationModule v-if="formData.relations"
                :currentTables="currentTables"
                :relationTypes="relationTypes"
                v-model="formData.relations"
            />
        </div>-->

    </form>
</template>

<script>
    import InputGroup from "../../../components/core/forms/InputGroup";
    import SelectGroup from "../../../components/core/forms/SelectGroup";
    import { STORE_NAME_ADMIN } from "../../../store/modules/admin";
    import TopOptionSection from "../../../components/admin/TopOptionSection";
    import { mapGetters, mapActions } from "vuex";
    import RelationModule from "../../../components/admin/modules/RelationModule";
    import FieldModule from "../../../components/admin/modules/FieldModule"
    import Checkbox from "../../../components/admin/cms/content/content_fields/Checkbox";
    import { STORE_NAME_MENU } from "../../../store/modules/menu";
    import ListIcons from "../../../components/core/forms/ListIcons";

    let CancelToken = axios.CancelToken;
    let templateCancelToken = CancelToken.source();

    export default {
        name: "AdminModulesEdit",
        components: {
            InputGroup,
            SelectGroup,
            TopOptionSection,
            FieldModule,
            RelationModule,
            Checkbox,
            ListIcons
        },
        layout: 'admin-layout',
        props: {
            module:{
                required: true,
                type: Object | Array,
            },
            layouts: {
                required: true,
                type: Object | Array,
            },
            templates: {
                required: true,
                type: Object | Array,
            },
            fieldSettings: {
                type: Object,
                required: true
            },
            fieldTypes: {
                type: Object,
                required: true
            },
            currentTables: {
                type: Object,
                required: true
            },
            relationTypes: {
                type: Object,
                required: true
            },
            listsIcons: {
                type: Array,
                required: true
            },
            inputSettings: {
                type: Object,
                required: true
            },
            inputTypes: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                formData: {},
                loading: true
            }
        },
        mounted(){
            this.formData = {
                id: this.module.id,
                layout_id: this.module.layout_id,
                name: this.module.name,
                tableName: this.module.tableName,
                template_id: this.module.template_id,
                fields: this.module.fields ? this.module.fields : [],
                relations: this.module.relations ? JSON.parse(this.module.relations) : [],
                icon: this.module.icon,
                status: this.module.status == 1
            }
            this.module.fields.forEach((field, i) => {
                this.module.fields[i] = {
                    ...this.module.fields[i],
                    inputSettings: JSON.parse(field.inputSettings),
                    edit: true
                }
            });
            this.loading = false
        },
        computed: {
            ...mapGetters(STORE_NAME_ADMIN, ["fixedBarAction"]),
            isLayouts() {
                try {
                    return Object.keys(this.layouts).length;
                } catch (e) {
                    return false;
                }
            },
            isTemplates() {
                try {
                    return Object.keys(this.templates).length;
                } catch (e) {
                    return false;
                }
            }
        },
        methods: {
            ...mapActions(STORE_NAME_MENU, ["getModules"]),
            async submit() {
                await this.$inertia.put(
                    this.$route('admin.modules.update', this.module.id),
                    this.formData
                );
                this.getModules()
            }
        },
    }
</script>
