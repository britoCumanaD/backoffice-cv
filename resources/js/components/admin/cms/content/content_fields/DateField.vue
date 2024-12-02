<template>
    <div>
        <date-time-picker-group
            :error-message="errorMessage"
            :input-autocomplete="inputName"
            :input-id="inputName"
            :input-max-length="inputMaxLength"
            :input-name="inputName"
            :input-required="templateField.is_required"
            :input-type="'text'"
            :inputFormat="'DD/MM/YYYY'"
            :inputTimeTitleFormat="'DD/MM/YYYY'"
            :inputTitleFormat="'DD/MM/YYYY'"
            :inputType="'date'"
            :inputValueType="'YYYY-MM-DD'"
            label-class=""
            label-text=""
            v-model="editableContent"
        >
            <slot/>
        </date-time-picker-group>
    </div>
</template>

<script>
    import { contentFieldMixin } from "../../../../../mixins/admin/cms/content-field";
    import DateTimePickerGroup from '../../../../core/forms/DateTimePickerGroup';

    export default {
        name: "TextField",
        mixins: [
            contentFieldMixin,
        ],
        components: {
            DateTimePickerGroup,
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
