<template>
    <div class="flex flex-col space-y-4">

        <p
            v-if="getPageErrorMessage(contentFieldSlug)"
            class="text-theme-danger-contrast"
        >
            {{ getPageErrorMessage(contentFieldSlug) }}
        </p>

        <div
            v-for="templateField in templateFields"
            :key="templateField.id"
        >
            <component
                v-if="templateField.type != 'module_custom'"
                :is="getContentFieldComponent(templateField)"
                :template-field="templateField"
                @input="onEditableContentUpdate"
                v-model="editableContent[templateField.id].data"
            >
                <div class="mb-2">
                    <p class="flex flex-row font-medium items-baseline text-theme-base-contrast text-sm tracking-wider">
                        <span>{{ templateField.name }}</span>
                        <sup
                            v-if="templateField.is_required"
                            class="text-theme-danger-contrast"
                        >
                            *
                        </sup>
                    </p>
                    <p
                        v-if="templateField.description"
                        class="text-sm text-theme-base-subtle-contrast hidden"
                    >
                        {{ templateField.description }}
                    </p>
                </div>
            </component>
            <EditCustomModule v-else 
                :id="templateField.settings.customModule"
            />
        </div>

    </div>
</template>

<script>
    import _ from 'lodash';
    import CmsMenuField from "./content_fields/CmsMenuField";
    import CrmFormField from "./content_fields/CrmFormField";
    import ImageField from "./content_fields/ImageField";
    import NumberField from "./content_fields/NumberField";
    import RepeaterField from "./content_fields/RepeaterField";
    import TextAreaField from "./content_fields/TextAreaField";
    import TextField from "./content_fields/TextField";
    import SelectField from "./content_fields/SelectField";
    import WysiwygField from "./content_fields/WysiwygField";
    import Checkbox from "./content_fields/Checkbox";
    import DateField from "./content_fields/DateField";
    import HourField from "./content_fields/HourField";
    import DateHourField from "./content_fields/DateHourField";
    import SelectBackofficeField from "./content_fields/SelectBackofficeField";
    import QuillEditor from "../../../../components/admin/cms/content/content_fields/QuillEditor.vue";
    import PhoneField from "./content_fields/PhoneField";
    import EditCustomModule from "./EditCustomModule";
    import AudioField from "./content_fields/AudioField";

    export default {
        name: 'AdminCmsContentEditor',
        components: {
            CmsMenuField,
            CrmFormField,
            ImageField,
            NumberField,
            RepeaterField,
            TextAreaField,
            TextField,
            WysiwygField,
            SelectField,
            Checkbox,
            QuillEditor,
            DateField,
            HourField,
            SelectBackofficeField,
            DateHourField,
            PhoneField,
            EditCustomModule,
            AudioField
        },
        model: {
            prop: 'content',
        },
        props: {
            content: {
                required: true,
                type: Array | Object
            },
            contentFieldSlug: {
                default: 'content',
                type: String,
            },
            templateFields: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                editableContent: {},
            }
        },
        created() {
            // If there is existing content, clone it
            if (typeof this.content === 'object' && Object.keys(this.content).length > 0) {
                this.editableContent = _.cloneDeep(this.content);
            }
        },
        methods: {
            getContentFieldComponent(templateField) {
                switch (templateField.type) {
                    case 'cms_menu':
                        return 'CmsMenuField';
                    case 'crm_form':
                        return 'CrmFormField';
                    case 'image':
                        return 'ImageField';
                    case 'number':
                        return 'NumberField';
                    case 'repeater':
                        return 'RepeaterField';
                    case 'text':
                        return 'TextField';
                    case 'textarea':
                        return 'TextAreaField';
                    case 'wysiwyg':
                    case 'quill editor':
                        return 'quillEditor';
                    case 'select' :
                    case 'select Multiple' :
                        return 'SelectField';
                    case 'radio' :
                        return 'SelectField';
                    case 'checkbox' :
                        return 'Checkbox';
                    case 'date' :
                        return 'DateField';
                    case 'hour' :
                        return 'HourField';
                    case 'date_hour':
                        return 'DateHourField'
                    case 'select_backoffice' :
                        return 'SelectBackofficeField';
                    case 'phone':
                        return 'PhoneField';
                    case 'audio':
                        return 'AudioField';
                    default:
                        this.$errorToast('Unregistered content field for template field: ' + templateField.type);
                        return false;
                }
            },
            onEditableContentUpdate() {
                this.$emit('input', _.cloneDeep(this.editableContent));
            }
        }
    }
</script>
