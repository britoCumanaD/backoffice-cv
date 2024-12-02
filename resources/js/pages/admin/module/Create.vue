<template>
    <form
        class="max-w-5xl mx-auto"
        autocomplete="off"
        @submit.prevent="handleShowModal"
    >
        <TopOptionSection 
            :userCanSection="'cms_advanced.create'"
            :userCanBack="'cms_advanced.view'"
            :address="'admin.modules.index'"
            :title="'Create Module'"
            :buttonText="'Create Module'"
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
                    input-id="name"
                    input-name="name"
                    :input-required="true"
                    input-type="text"
                    label-text="Module Name"
                    @input="setTableName"
                    inputMax="250"
                    @errorHidden="clearPageErrorMessage('name')"
                    v-model="formData.name"
                />

                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('tableName')"
                    input-id="tableName"
                    input-name="tableName"
                    :input-required="true"
                    input-type="text"
                    label-text="Table Name"
                    inputMax="60"
                    @errorHidden="clearPageErrorMessage('tableName')"
                    v-model="formData.tableName"
                />
                
                <ListIcons :listsIcons="listsIcons" v-model="formData.icon" />

                <Checkbox
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
            <FieldModule
                :field-settings="fieldSettings"
                :field-types="fieldTypes"
                :inputSettings="inputSettings"
                :inputTypes="inputTypes"
                v-model="formData.fields"
            />
        </div>

        <div class="bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg" >
            <RelationModule
                :currentTables="currentTables"
                :relationTypes="relationTypes"
                v-model="formData.relations"
            />
        </div>

        <confirmation-modal
            confirm-text="Save"
            confirm-type="primary"
            :show-modal="showModal"
            :message-text="'After creating, you will not be able to change the name, table name, column name, type of the fields or add new relationships.'"
            @cancelAction="showModal = false"
            @closeModal="showModal = false"
            @confirmAction="submit"
        />
    </form>
</template>

<script>
    import InputGroup from "../../../components/core/forms/InputGroup";
    import ListIcons from "../../../components/core/forms/ListIcons";
    import SelectGroup from "../../../components/core/forms/SelectGroup";
    import { STORE_NAME_ADMIN } from "../../../store/modules/admin";
    import TopOptionSection from "../../../components/admin/TopOptionSection";
    import { mapGetters, mapActions } from "vuex";
    import RelationModule from "../../../components/admin/modules/RelationModule";
    import FieldModule from "../../../components/admin/modules/FieldModule"
    import Checkbox from "../../../components/admin/cms/content/content_fields/Checkbox";
    import { STORE_NAME_MENU } from "../../../store/modules/menu";
    import ConfirmationModal from "../../../components/core/modals/ConfirmationModal";

    let CancelToken = axios.CancelToken;
    let templateCancelToken = CancelToken.source();

    export default {
        name: "AdminModulesCreate",
        components: {
            InputGroup,
            SelectGroup,
            TopOptionSection,
            FieldModule,
            RelationModule,
            Checkbox,
            ConfirmationModal,
            ListIcons
        },
        layout: 'admin-layout',
        props: {
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
                showModal: false,
                formData: {
                    layout_id: '',
                    name: '',
                    tableName: '',
                    template_id: '',
                    fields: [],
                    relations: [],
                    icon: '',
                    status:false
                },
            }
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
            handleShowModal(){
                if(this.formData.icon == '')
                    return this.$errorToast('Please select a icon')

                this.formData.tableName = this.formData.tableName.toLowerCase();
                if(this.formData.tableName.includes(' ') || this.formData.tableName.charAt(this.formData.tableName.length - 1) != 's'){
                    return this.$errorToast('The table name must be plural and without spaces');
                }
                this.showModal = true
            },
            async submit() {
                this.showModal = false
                await this.$inertia.post(
                    this.$route('admin.modules.store'),
                    this.formData
                );
                this.getModules()
            },
            setTableName(){
                this.formData.tableName = this.formData.name.replace(/ /g, "_").toLowerCase()
            },
        },
    }
</script>
