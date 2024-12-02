<template>
    <div>
        <slot/>

        <array-group
            class="mt-4"
            :input-id="`form-field-${formField.order}-values`"
            :input-name="`form-field-${formField.order}-values`"
            label-text="Values"
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
        name: "RadioSettings",
        mixins: [
            formFieldSettingsMixin,
        ],
        components: {
            InputGroup,
            ArrayGroup
        }
    }
</script>
