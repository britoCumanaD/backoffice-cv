<template>
    <div>
        <slot/>

        <select-group
            class="flex-1 mt-4"
            label-text="Modules"
            :input-any-option-enabled="true"
            :input-any-option-label="loading ? 'Loading...' : 'Please select a module'"
            :input-id="`template-field-${templateField.order}-module`"
            :input-name="`template-field-${templateField.order}-module`"
            :input-options="loading ? {} : customModules"
            :input-required="true"
            @input="onEditableSettingsChange"
            v-model="editableFieldSettings.customModule"
        />
    </div>
</template>
<script>
    import { templateFieldSettingsMixin } from "../../../../../../mixins/admin/cms/template-field-settings";
    import SelectGroup from "../../../../../core/forms/SelectGroup";
    import { STORE_NAME_CUSTOM_MODULES } from "../../../../../../store/modules/customModules";
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "TemplateCustomModuleSettings",
        mixins: [
            templateFieldSettingsMixin,
        ],
        components: {
            SelectGroup
        },
        computed:{
            ...mapGetters(STORE_NAME_CUSTOM_MODULES, ["customModules", 'loading']),
        },
        methods: {
            ...mapActions(STORE_NAME_CUSTOM_MODULES, ["getModulesToSelect"]),
        },
        mounted(){
            this.getModulesToSelect()
        }
    }
</script>
