<template>
    <div>
        <div class="flex flex-row items-center">
            <span class="text-lg">Fields</span>
            <button
                class="button button-primary-subtle button-small ml-auto text-sm"
                type="button"
                @click="addField"
            >
                Add Field
            </button>
        </div>

        <p
            v-if="!editableFields.length"
            class="bg-theme-base-subtle mt-6 px-4 py-3 rounded text-center text-theme-base-subtle-contrast"
        >
            No fields
        </p>

        <template v-else>
            <draggable
                class="mt-6"
                :animation="200"
                ghost-class="ghost"
                handle=".draggable-handle"
                @end="onDraggableEnd"
                @sort="onDraggableSort"
                @start="onDraggableStart"
                v-model="editableFields"
            >
                <transition-group
                    :name="!isDragging ? 'flip-field' : null"
                    type="transition"
                >
                    <article
                        v-for="(field, index) in editableFields"
                        :key="`template-field-${index}`"
                        class="border-2 border-theme-base-subtle mt-4 overflow-hidden rounded"
                    >
                        <!-- Draggable Header -->
                        <header
                            class="
                                draggable-handle
                                bg-theme-base-subtle cursor-move flex flex-row items-center px-4 py-3
                            "
                        >
                            <icon-grid-dots class="w-5" />

                            <span class="flex-1 pl-4">
                                <template v-if="field.name && field.name.length">
                                    {{ field.name }}
                                </template>
                                <template v-else>
                                    New Field
                                </template>
                            </span>
                        </header>

                        <p class="p-4">
                            <Field
                                :is-autofocus-disabled="isAutofocusDisabled"
                                :field-types="fieldTypes"
                                :field-settings="fieldSettings"
                                :inputSettings="inputSettings"
                                :inputTypes="inputTypes"
                                :edit="field.edit == true"
                                @input="updateFields"
                                v-model="editableFields[index]"
                            />
                        </p>

                        <footer class="flex flex-row items-center px-4 py-3">
                            <button
                                class="
                                    button button-small
                                    bg-transparent border border-theme-base-subtle-contrast flex flex-row items-center ml-auto text-sm text-theme-base-subtle-contrast
                                    hover:bg-theme-danger-contrast hover:text-theme-danger hover:border-theme-danger-contrast
                                "
                                type="button"
                                @click="deleteField(index)"
                            >
                                <icon-trash class="h-4 w-4" />
                                <span class="pl-2">Delete</span>
                            </button>
                        </footer>

                    </article>
                </transition-group>
            </draggable>

            <div class="flex flex-row items-center mt-6">
            <button
                class="button button-primary-subtle button-small ml-auto text-sm"
                type="button"
                @click="addField"
            >
                Add Field
            </button>
        </div>
        </template>
    </div>
</template>

<script>
    import _ from 'lodash';
    import draggable from 'vuedraggable';
    import Field from "./modules_fields/Field";

    export default {
        name: 'FieldModule',
        components: {
            draggable,
            Field
        },
        model: {
            prop: 'fields'
        },
        props: {
            fieldSettings: {
                required: true,
                type: Object,
            },
            fieldTypes: {
                required: true,
                type: Object,
            },
            fields: {
                required: true,
                type: Array,
            },
            inputSettings: {
                type: Object,
                required: true
            },
            inputTypes: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                editableFields: [],
                isAutofocusDisabled: false,
                isDragging: false,
            }
        },
        created() {
            if (this.isEditing) {
                this.isAutofocusDisabled = true;
            }
            this.editableFields = _.cloneDeep(this.fields);
        },
        methods: {
            addField() {
                this.isAutofocusDisabled = false;

                this.editableFields.push({
                    is_required: false,
                    name: '',
                    columnName: '',
                    order: this.fields.length,
                    settings: {},
                    type: '',
                    inputType:'',
                    inputSettings:{},
                });

                this.updateFields();
            },
            deleteField(index) {
                try {
                    this.editableFields.splice(index, 1);
                    this.reorderFields();
                } catch (e) {
                    this.$errorToast('Failed to delete field');
                    console.log(e); // TODO: This should go through to a log tracker once available
                }
            },
            getFieldTypesKeys() {
                try {
                    return Object.keys(this.fieldTypes);
                } catch (e) {
                    return [];
                }
            },
            onDraggableEnd() {
                this.isDragging = false;
                this.reorderFields();
            },
            onDraggableSort() {
                // Clear page errors as indexes have changed
                this.$page.props.errors = {};
            },
            onDraggableStart() {
                this.isDragging = true;
            },
            onFieldsChange(fields) {
                this.editableFields = _.cloneDeep(fields);
            },
            onFieldTypesChange() {
                try {
                    let allowedFields = this.getFieldTypesKeys();
                    _.forEach(this.editableFields, (field, key) => {
                        if (field.type && allowedFields.indexOf(field.type) < 0) {
                            this.editableFields[key].type = '';
                        }
                    });

                    this.updateFields();
                } catch (e) {
                    console.log(e); // TODO: Replace with error tracker
                }
            },
            reorderFields() {
                try {
                    if (!this.editableFields.length) {
                        this.updateFields();
                        return;
                    }

                    this.editableFields.forEach((field, index) => {
                        this.editableFields[index].order = index;
                    });

                    this.updateFields();
                } catch (e) {
                    throw "Failed to reorder fields: " + e
                }
            },
            updateFields() {
                this.$emit('input', _.cloneDeep(this.editableFields));
            }
        },
        watch: {
            fields: {
                handler: 'onFieldsChange'
            },
            fieldTypes: {
                handler: 'onFieldTypesChange',
                deep: true,
            }
        }
    }
</script>

<style scoped>
    .ghost {
        opacity: 0.35;
    }

    .flip-field-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }
</style>

