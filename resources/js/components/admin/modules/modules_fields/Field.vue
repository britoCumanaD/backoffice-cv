<template>
    <div>
        <div
            class="
                flex flex-col
                md:flex-row md:space-x-4
            "
        >
            <select-group
                class="flex-1"
                :error-message="getErrorMessage('type')"
                label-text="Column Type"
                :input-any-option-enabled="true"
                input-any-option-label="Please select a type"
                :input-id="`field-${field.order}-type`"
                :input-name="`field-${field.order}-type`"
                :input-options="fieldTypes"
                :input-required="true"
                :inputDisabled="edit"
                @errorHidden="clearErrorMessage('type')"
                @input="updateEditType"
                v-model="editableField.type"
            />

            <select-group
                class="flex-1"
                :error-message="getErrorMessage('inputType')"
                label-text="Input Type"
                :input-any-option-enabled="true"
                input-any-option-label="Please select a input type"
                :input-id="`input-${field.order}-type`"
                :input-name="`input-${field.order}-type`"
                :input-options="editableField.type ? inputTypesToShow : {}"
                :input-required="true"
                @errorHidden="clearErrorMessage('inputType')"
                @input="updateField"
                v-model="editableField.inputType"
            />

            <input-group
                class="flex-1 mt-4 md:mt-0"
                :input-disabled="true"
                :input-id="`field-${field.order}-order`"
                :input-name="`field-${field.order}-order`"
                input-type="number"
                label-text="Order"
                @input="updateField"
                v-model="editableField.order"
            />
        </div>
        <div
            class="
                flex flex-col
                md:flex-row md:space-x-4
            "
        >
            <component
                v-if="settingsInput"
                :is="settingsInput"
                :default-settings="defaultFieldSettings"
                :template-field="editableField"
                @input="updateField"
                v-model="editableField.inputSettings"
            >
                <p class="font-semibold mt-6 text-theme-base-subtle-contrast">
                    Settings
                </p>
            </component>
        </div>

        <div
            class="
                flex flex-col
                md:flex-row md:space-x-4
            "
        >
            <input-group
                class="flex-1 mt-4"
                :error-message="getErrorMessage('name')"
                :input-id="`field-${field.order}-name`"
                :input-name="`field-${field.order}-name`"
                :input-required="true"
                input-type="text"
                label-text="Field Name"
                inputMax="250"
                @errorHidden="clearErrorMessage('name')"
                @input="setColumnName"
                v-model="editableField.name"
            />
            <input-group
                class="flex-1 mt-4"
                :inputDisabled="edit"
                :error-message="getErrorMessage('columnName')"
                :input-id="`field-${field.order}-columnName`"
                :input-name="`field-${field.order}-columnName`"
                inputMax="60"
                :input-required="true"
                input-type="text"
                label-text="Field Column Name"
                @errorHidden="clearErrorMessage('columnName')"
                @input="updateField"
                v-model="editableField.columnName"
            />

        </div>

        <checkbox-group
            class="mt-4"
            :error-message="getErrorMessage('is_required')"
            :input-id="`field-${field.order}-is_required`"
            :input-name="`field-${field.order}-is_required`"
            label-text="Required?"
            @errorHidden="clearErrorMessage('is_required')"
            @input="updateField"
            v-model="editableField.is_required"
        />

    </div>
</template>

<script>
    import slugify          from "slugify";
    import CheckboxGroup    from "../../../core/forms/CheckboxGroup";
    import InputGroup       from "../../../core/forms/InputGroup";
    import SelectGroup      from "../../../core/forms/SelectGroup";
    import TextAreaSettings from "./field_settings/TextAreaSettings";
    import TextSettings     from "./field_settings/TextSettings";
    import NumberSettings   from "./field_settings/NumberSettings";
    import SelectSettings   from "./field_settings/SelectSettings";


    export default {
        name: "field",
        components: {
            CheckboxGroup,
            InputGroup,
            SelectGroup,
            NumberSettings,
            TextAreaSettings,
            TextSettings,
            SelectSettings,
        },
        model: {
            prop: 'field'
        },
        props: {
            errorMessageKeyPrefix: {
                default: 'fields',
                type: String
            },
            field: {
                required: true,
                type: Object
            },
            fieldSettings: {
                required: true,
                type: Object
            },
            fieldTypes: {
                required: true,
                type: Object,
            },
            inputSettings: {
                type: Object,
                required: true
            },
            inputTypes: {
                type: Array,
                required: true
            },
            edit:{
                default: false,
                type: Boolean,
            }
        },
        data() {
            return {
                editableField: {
                    is_required: false,
                    name: '',
                    order: 0,
                    type: '',
                    inputType:'',
                    inputSettings:{},
                    columnName: ''
                },
                autoSetColumnName: true
            }
        },
        computed: {
            defaultFieldSettings() {
                if (!this.editableField.type) {
                    return false;
                }

                try {
                    return this.fieldSettings[this.editableField.type] ? this.fieldSettings[this.editableField.type] : [];
                } catch (e) {
                    return {};
                }
            },
            errorMessageKey() {
                return this.errorMessageKeyPrefix + '.' + this.editableField.order + '.';
            },
            defaultInputSettings() {
                if (!this.editableField.inputType) {
                    return false;
                }

                try {
                    return this.editableField[this.editableField.inputType];
                } catch (e) {
                    return {};
                }
            },
            settingsInput() {
                if (!this.editableField.inputType) {
                    return false;
                }

                switch (this.editableField.inputType) {
                    case 'number' :
                        return 'number-settings';
                    case 'repeater' :
                        return 'repeater-settings';
                    case 'text' :
                        return 'text-settings';
                    case 'textarea' :
                        return 'text-area-settings';
                    case 'select_backoffice' :
                        if(!this.editableField.inputSettings.options){
                            this.editableField.inputSettings = { options: [] }
                        }
                        return 'select-settings';
                    default:
                        return false;
                }
            },
            inputTypesToShow(){
                const resp = {}
                for (const key in this.inputTypes) {
                    const value = this.inputTypes[key].replace(/^./, this.inputTypes[key][0].toUpperCase()).replaceAll('_', ' ')
                    switch (this.editableField.type) {
                        case 'string':
                            if(['image', 'number', 'text', 'select_backoffice'].includes(this.inputTypes[key]))
                                resp[this.inputTypes[key]] = value
                        break;
                        case 'integer':
                            if(['checkbox', 'radio', 'number'].includes(this.inputTypes[key]))
                                resp[this.inputTypes[key]] = value
                        break;
                        case 'text':
                            if(['textarea', 'quill editor'].includes(this.inputTypes[key]))
                                resp[this.inputTypes[key]] = value
                        break;
                        case 'date':
                            if(['date'].includes(this.inputTypes[key]))
                                resp[this.inputTypes[key]] = value
                        break;
                        case 'time':
                            if(['hour'].includes(this.inputTypes[key]))
                                resp[this.inputTypes[key]] = value
                        break;
                        case 'dateTime':
                            if(['date_hour'].includes(this.inputTypes[key]))
                                resp[this.inputTypes[key]] = value
                        break;
                        case 'json':
                            if(['phone'].includes(this.inputTypes[key]))
                                resp[this.inputTypes[key]] = value
                        break;
                    
                        default:
                            resp[this.inputTypes[key]] = value
                        break;
                    }
                }
                return resp
            }
        },

        created() {
            this.editableField = _.cloneDeep(this.field);
        },

        methods: {
            clearErrorMessage(field) {
                this.clearPageErrorMessage(this.errorMessageKey + field);
            },
            getErrorMessage(field) {
                let message = this.getPageErrorMessage(this.errorMessageKey + field);
                message = message.replace(this.errorMessageKey, '');
                return message;
            },
            onFieldUpdate() {
                this.editableField = _.cloneDeep(this.field);
            },
            slugify(value) {
                if (!value || !value.length) {
                    return '';
                }

                return slugify(
                    value, {
                        lower: true,
                    }
                );
            },
            updateField() {
                this.$emit('input', _.cloneDeep(this.editableField));
            },
            setColumnName(){
                if(this.autoSetColumnName && !this.edit){
                    this.editableField.columnName = this.editableField.name.replace(/ /g, "_").toLowerCase()
                }
                this.updateField()
            },
            updateEditType(){
                this.editableField.inputType = ''
                this.updateField()
            }
        },

        watch: {
            field: {
                deep: true,
                handler: 'onFieldUpdate'
            }
        }

    }
</script>
