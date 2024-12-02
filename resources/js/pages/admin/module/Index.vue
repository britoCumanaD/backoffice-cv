<template>
    <section>
        <div
            class="flex flex-row items-center mb-6"
        >
            <h1 class="font-medium mr-auto text-lg">
                Modules
            </h1>

            <inertia-link
                v-if="userCan('cms.create')"
                class="
                    button button-default-responsive button-primary
                    flex flex-row items-center
                "
                :href="$route('admin.modules.create')"
            >
                <icon-plus class="w-5 md:mr-2"/>

                <span
                    class="hidden md:inline"
                >
                    Create Module
                </span>
            </inertia-link>
        </div>

        <div class="bg-white py-6 shadow-subtle rounded-lg">

            <p
                v-if="!modulesData"
                class="bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
            >
                No aditionals modules
            </p>

            <template v-else>

                <!-- Search Results -->
                <div class="block mt-8 overflow-x-auto w-full">
                    <table class="table table-hover table-striped w-full">
                        <thead>
                        <tr>
                            <th class="indicator-column"></th>
                            <th>Name</th>
                            <th class="text-center">Enabled</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="m in modulesData"
                            :key="`module-${m.id}`"
                        >
                            <td class="indicator-column">
                                <div
                                    class="h-3 rounded-full w-3"
                                    :class="{
                                        'bg-theme-success-contrast': m.status,
                                        'bg-theme-danger-contrast': !m.status,
                                    }"
                                />
                            </td>
                            <td v-text="m.name" />
                            <td>
                                <div class="flex flex-row justify-center">
                                    <icon-check
                                        v-if="m.status"
                                        class="h-4 w-4"
                                    />
                                    <icon-x
                                        v-else
                                        class="h-4 w-4"
                                    />
                                </div>
                            </td>
                            <td>
                                <div class="flex flex-row items-center justify-end -mx-1">

                                    <inertia-link
                                        class="
                                            flex flex-row items-center mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide
                                            focus:outline-none focus:ring
                                            hover:bg-theme-info hover:text-theme-info-contrast
                                        "
                                        :href="$route('admin.modules.edit', m.id)"
                                        title="Edit module"
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
                                        title="Delete Page"
                                        @click="checkDelete(m)"
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

                <!-- Pagination -->
                <div
                    v-if="showPagination"
                    class="flex flex-row justify-center mt-12 px-6"
                >
                    <pagination :pagination="modules.pagination" />
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
    import { mapActions } from "vuex";
    import { STORE_NAME_MENU } from "../../../store/modules/menu";

    export default {
        name: "AdminCmsPageIndex",
        components: {
            ConfirmationModal,
            InputGroup,
            SelectGroup
        },
        layout: 'admin-layout',
        props: {
            modules: {
                required: true,
                type: Object,
            },
        },
        data() {
            return {
                isInitialised: false,
                isLoadingDelete: false,
                showDeleteModal: false,
                moduleToDelete: null,
            }
        },
        mounted() {
            this.setSearchOptions(this.searchOptions);
        },
        computed: {
            deleteModalText() {
                try {
                    return `Do you really want to delete '${this.moduleToDelete.name}'? This will delete all of that module's data and it can't be restored`;
                } catch (e) {
                    return 'Do you really want to delete this module?'
                }
            },
            showPagination() {
                try {
                    return this.modules.pagination.last_page > 1;
                } catch (e) {
                    return false;
                }
            },
            modulesData() {
                if (!this.modules || !this.modules.data || this.modules.data.length < 1) {
                    return false;
                }

                return this.modules.data;
            }
        },
        methods: {
            ...mapActions(STORE_NAME_MENU, ["getModules"]),
            cancelDelete() {
                if (!this.isLoadingDelete) {
                    this.showDeleteModal = false;
                    this.moduleToDelete = null;
                }
            },
            checkDelete(module) {
                this.showDeleteModal = true;
                this.moduleToDelete = module;
            },
            async confirmDelete() {
                if (this.isLoadingDelete) {
                    return this.$errorToast('It\'s only possible to delete one module at a time.');
                }
                await this.$inertia.delete(
                    this.$route('admin.modules.destroy', this.moduleToDelete.id),
                    {
                        only: [
                            'flash',
                            'modules'
                        ]
                    }
                );
                this.getModules()
                this.moduleToDelete = null;
                this.showDeleteModal = false;
            },
            onSearchOptionsUpdate: _.debounce(function () {
                if (!this.isInitialised) {
                    this.isInitialised = true;

                    // If there are already search results, don't attempt search
                    if (this.modulesData) {
                        return;
                    }
                }

                Inertia.get(
                    this.$route('admin.modules.index'),
                    this.editableSearchOptions,
                    {
                        only: ['modules'],
                        preserveState: true,
                    }
                );
            }, 500),
            setSearchOptions(new_options = {}) {
                let options = {
                    layout_id       : '',
                    per_page        : 15,
                    page_name       : '',
                    page_slug       : '',
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
        watch: {
            editableSearchOptions: {
                deep: true,
                handler: 'onSearchOptionsUpdate'
            }
        }
    }
</script>
