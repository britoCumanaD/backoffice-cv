<template>
    <div>
        <slot/>

        <array-group v-if="editableFieldSettings.options"
            class="mt-4"
            :input-id="`template-field-${templateField.order}-max-length`"
            :input-name="`template-field-${templateField.order}-max-length`"
            label-text="Options"
            @input="onEditableSettingsChangeSelect"
            v-model="editableFieldSettings.options"
        />
    </div>
</template>
<script>
    import { templateFieldSettingsMixin } from "../../../../../mixins/admin/cms/template-field-settings";
    import ArrayGroup from "../../../../core/forms/ArrayGroup";

    export default {
        name: "TemplateFieldSelectSettings",
        mixins: [
            templateFieldSettingsMixin,
        ],
        components: {
            ArrayGroup
        },
        methods:{
            onEditableSettingsChangeSelect() {
                this.editableFieldSettings = {
                    options: this.editableFieldSettings.options
                }
                this.$emit('input', this.editableFieldSettings);
            },
        }
    }
</script>
