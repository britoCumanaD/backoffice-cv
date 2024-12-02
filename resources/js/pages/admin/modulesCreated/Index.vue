<template>
    <section>
        <div
            class="flex flex-row items-center mb-6"
        >
            <h1 class="font-medium mr-auto text-lg" v-text="current_module.name"/>

            <inertia-link
                v-if="userCan('admin.module_created.create')"
                class="
                    button button-default-responsive button-primary
                    flex flex-row items-center
                "
                :href="$route('admin.module_created.create', {'module' : current_module.tableName})"
            >
                <icon-plus class="w-5 md:mr-2"/>

                <span
                    class="hidden md:inline"
                >
                    Create {{ current_module.name }}
                </span>
            </inertia-link>
        </div>

        <div class="bg-white py-6 shadow-subtle rounded-lg">
            <h1 class="font-semibold px-6 text-gray-850">
                Search
                <button
                    class="
                        text-sm text-theme-base-subtle-contrast
                        focus:outline-none focus:text-theme-primary
                        hover:text-theme-primary
                    "
                    @click="setSearchOptions"
                >
                    (Clear)
                </button>
            </h1>

            <div
                class="
                    flex flex-row flex-wrap items-center -mx-4 -my-2 pt-4 px-6
                "
            >

                <div
                    v-if="isLayouts"
                    class="
                        my-2 w-full
                        sm:w-1/2
                        lg:w-1/4
                    "
                >
                    <select-group
                        class="mx-4"
                        :label-hidden="true"
                        label-text="Layout"
                        :input-any-option-enabled="true"
                        input-any-option-label="Layout"
                        input-class="form-control form-control-short"
                        input-id="template_id"
                        input-name="template_id"
                        input-option-label-key="name"
                        input-option-value-key="id"
                        :input-options="layouts"
                        v-model="editableSearchOptions.layout_id"
                    />
                </div>

                <div
                    v-if="isTemplates"
                    class="
                        my-2 w-full
                        sm:w-1/2
                        lg:w-1/4
                    "
                >
                    <select-group
                        class="mx-4"
                        :label-hidden="true"
                        label-text="Template"
                        :input-any-option-enabled="true"
                        input-any-option-label="Template"
                        input-class="form-control form-control-short"
                        input-id="template_id"
                        input-name="template_id"
                        input-option-label-key="name"
                        input-option-value-key="id"
                        :input-options="templates"
                        v-model="editableSearchOptions.template_id"
                    />
                </div>

            </div>

            <p
                v-if="!rowsData"
                class="bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
            >
                No {{current_module.name}}
            </p>

            <template v-else>

                <div class="block mt-8 overflow-x-auto w-full">
                    <table class="table table-hover table-striped w-full">
                        <thead>
                        <tr>
                            <th class="indicator-column"></th>
                            <th v-for="(column, i) in columnTotal" :key="`th-${i}`" v-text="columnsToShow[i].name" />
                            <th v-if="current_module.layout || current_module.template">Layout / Template</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(row, index) in rowsData"
                            :key="`row-${row.id}`"
                        >
                            <td class="indicator-column">
                            </td>
                            <td v-for="(column, i) in columnTotal" :key="`td-${i}-${index}`">
                                <template v-if="columnsToShow[i].type == 'json'">
                                    {{ row[columnsToShow[i].columnName] != 'null' ? JSON.parse(row[columnsToShow[i].columnName]).fullPhone : '' }}
                                </template>
                                <template v-else>
                                    {{ row[columnsToShow[i].columnName] }}
                                </template>
                            </td>
                            <td class="text-sm text-theme-base-subtle-contrast" v-if="current_module.layout || current_module.template">
                                {{  current_module.layout ? current_module.layout.name : ''}}
                                <br>
                                {{  current_module.template ? current_module.template.name : '' }}
                            </td>
                            <td>
                                <div class="flex flex-row items-center justify-end -mx-1">

                                    <inertia-link
                                        class="
                                            flex flex-row items-center mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide
                                            focus:outline-none focus:ring
                                            hover:bg-theme-info hover:text-theme-info-contrast
                                        "
                                        :href="$route('admin.module_created.get.edit', [current_module.id, row.id])"
                                        title="Edit"
                                    >
                                        <icon-edit
                                            class="w-4"
                                        />
                                    </inertia-link>
                                    
                                    <button
                                        class="
                                            flex flex-row items-center mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide
                                            focus:outline-none focus:ring
                                            hover:bg-theme-danger hover:text-theme-danger-contrast
                                        "
                                        title="Delete"
                                        @click="checkDelete(row)"
                                    >
                                        <icon-trash
                                            class="w-4"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div
                    v-if="showPagination"
                    class="flex flex-row justify-center mt-12 px-6"
                >
                    <pagination :pagination="rows.pagination" />
                </div>
            </template>

            <confirmation-modal
                confirm-text="Delete"
                confirm-type="danger"
                :show-modal="showDeleteModal"
                :message-text="deleteModalText"
                @cancelAction="cancelDelete"
                @closeModal="cancelDelete"
                @confirmAction="confirmDelete"
            />
        </div>
    </section>
</template>

<script>
    import _ from 'lodash';
    import { Inertia } from '@inertiajs/inertia'
    import ConfirmationModal from "../../../components/core/modals/ConfirmationModal";
    import InputGroup from "../../../components/core/forms/InputGroup";
    import SelectGroup from "../../../components/core/forms/SelectGroup";

    export default {
        components: {
            ConfirmationModal,
            InputGroup,
            SelectGroup
        },
        layout: 'admin-layout',
        props: {
            rows:{
                required: true,
                type: Object | Array,
            },
            layouts: {
                required: true,
                type: Object | Array,
            },
            searchOptions: {
                required: true,
                type: Object | Array,
            },
            templates: {
                required: true,
                type: Object | Array,
            },
            current_module: {
                required: true,
                type: Object,
            },
        },
        data() {
            return {
                editableSearchOptions: {
                    layout_id   : '',
                    per_page    : 15,
                    template_id : '',
                },
                isInitialised: false,
                isLoadingDelete: false,
                showDeleteModal: false,
                rowToDelete: null,
            }
        },
        mounted() {
            this.editableSearchOptions = {
                ...this.editableSearchOptions,
                ...this.$page.props.searchOptions
            }
            
        },
        computed: {
            deleteModalText() {
                return 'Do you really want to delete this row?'
            },
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
            },
            showPagination() {
                try {
                    return this.rows.pagination.last_page > 1;
                } catch (e) {
                    return false;
                }
            },
            rowsData() {
                if (!this.rows || !this.rows.data || this.rows.data.length < 1) {
                    return false;
                }

                return this.rows.data;
            },
            columnsToShow(){
                const notValid = ['image', 'textarea', 'quill editor', 'radio', 'checkbox']
                return this.current_module.fields.filter((column) => !notValid.includes(column.inputType))
            },
            columnTotal(){
                return this.columnsToShow.length > 4 ? 4 : this.columnsToShow.length
            }
        },
        methods: {
            cancelDelete() {
                if (!this.isLoadingDelete) {
                    this.showDeleteModal = false;
                    this.rowToDelete = null;
                }
            },
            checkDelete(row) {
                this.showDeleteModal = true;
                this.rowToDelete = row;
            },
            confirmDelete() {
                if (this.isLoadingDelete) {
                    return this.$errorToast('It\'s only possible to delete one page at a time.');
                }
                this.$inertia.delete(
                    this.$route('admin.module_created.delete', [this.current_module.id, this.rowToDelete.id] ),
                    {
                        only: [
                            'flash',
                            'rows'
                        ]
                    }
                );
                this.rowToDelete = null;
                this.showDeleteModal = false;
            },
            onSearchOptionsUpdate: _.debounce(function () {
                if (!this.isInitialised) {
                    this.isInitialised = true;

                    // If there are already search results, don't attempt search
                    if (this.rowsData) {
                        return;
                    }
                }

                Inertia.get(
                    this.$route('admin.module_created.index'),
                    {...this.editableSearchOptions, module: this.current_module.name},
                    {
                        only: ['rowsData'],
                        preserveState: true,
                    }
                );
            }, 500),
            setSearchOptions(new_options = {}) {
                let options = {
                    layout_id       : '',
                    per_page        : 15,
                    template_type   : '',
                }

                try {
                    // Overwrite the defaults with any new options
                    _.forEach(new_options, (option, key) => {
                        options[key] = option;
                    })
                } catch (e) {
                    console.log(e);
                }

                this.editableSearchOptions = _.cloneDeep(options);
            }
        },
    }
</script>
