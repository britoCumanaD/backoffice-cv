<template>
    <div>
        <slot/>

        <array-group
            class="mt-4"
            v-if="render"
            :input-id="`form-field-${formField.order}-values`"
            :input-name="`form-field-${formField.order}-values`"
            label-text="Values"
            :select="true"
            @input="onEditableSettingsChange"
            v-model="editableFieldSettings.values"
        />

    </div>
</template>
<script>
    import { formFieldSettingsMixin } from "../../../../../../mixins/admin/crm/form-field-settings";
    import InputGroup from "../../../../../core/forms/InputGroup";
    import ArrayGroup from "../../../../../../components/core/forms/ArrayGroup";

    export default {
        name: "SelectSettings",
        mixins: [
            formFieldSettingsMixin,
        ],
        components: {
            InputGroup,
            ArrayGroup
        },
        data() {
            return {
                render: false,
            }
        },
        mounted(){
            this.editableFieldSettings.values=this.fieldSettings
            this.render = true 
        }
    }
</script>
