<template>
    <div>
        <select-group
            :error-message="errorMessage"
            :input-any-option-enabled="true"
            input-any-option-label="Seleccione"
            :input-id="inputName"
            :input-name="inputName"
            :input-options="templateField.settings.options"
            :input-required="templateField.is_required"
            @errorHidden="clearPageErrorMessage('layout_id')"
            v-model="editableContent"
        >
            <slot/>
        </select-group>
    </div>
</template>

<script>
    import { contentFieldMixin } from "../../../../../mixins/admin/cms/content-field";
    import SelectGroup from "../../../../core/forms/SelectGroup";

    export default {
        name: "TextField",
        mixins: [
            contentFieldMixin,
        ],
        components: {
            SelectGroup,
        },
        computed: {
            inputMaxLength() {
                try {
                    return this.templateField.settings.max_length;
                } catch (e) {
                    return '';
                }
            }
        }
    }
</script>
