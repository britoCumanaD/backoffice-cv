<template>
    <section :class="{'grid grid-cols-5 gap-4' : !showFilesLoader && isFiles}">
        <template v-if="showFilesLoader">
            <p
                class="flex flex-row items-center justify-center text-theme-base-subtle-contrast text-sm py-4 w-full"
            >
                <span class="flex items-center">
                    <icon-loader-circle class="animate-spin-slow mr-2 w-5"/>
                    <span>Loading</span>
                </span>
            </p>
        </template>
        <template v-else-if="!isFiles">
            <p
                class="flex flex-row items-center justify-center text-theme-base-subtle-contrast text-sm py-4 w-full"
            >
                <span>No files</span>
            </p>
        </template>
        <template v-else>
            <file-manager-files-list-file
                @clickDelete="checkDelete"
                v-for="(file, index) in files"
                :key="file.meta.basename"
                :enable-file-select="enableFileSelect"
                :file="file"                
                :index="index"
                @fileSelected="onFileSelected"
            />
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
    </section>
</template>

<script>
    import FileManagerFilesListFile from "./FileManagerFilesListFile";
    import ConfirmationModal from "../../../core/modals/ConfirmationModal";

    export default {
        name: "FileManagerFilesList",
        components: {FileManagerFilesListFile, ConfirmationModal},
        props: {
            enableFileSelect: {
                default: false,
                type: Boolean,
            },
            files: {
                required: true,
                type: Array
            },
            showFilesLoader: {
                default: true,
                type: Boolean,
            }
        },
        data() {
            return {
                isLoadingDelete: false,
                showDeleteModal: false,
                fileToDelete: null,
            }
        },
        computed: {
            deleteModalText() {
                try {
                    return 'Do you really want to delete \'' + this.file.name + '\'?';
                } catch (e) {
                    return 'Do you really want to delete this file?'
                }
            },
            isFiles() {
                return this.files.length;
            }
        },
        methods: {
            onFileSelected(file) {
                this.$emit('fileSelected', file);
            },
            cancelDelete() {
                if (!this.isLoadingDelete) {
                    this.showDeleteModal = false;
                    this.fileToDelete = null;
                }
            },
            checkDelete(file) {
                this.showDeleteModal = true;
                this.fileToDelete = file;
            },
            confirmDelete() {
                if (this.isLoadingDelete) {
                    return this.$errorToast('It\'s only possible to delete one file at a time.');
                }

                axios.delete(
                    this.$route('admin.api.file-manager.files.delete', this.fileToDelete.meta.path.replaceAll('/', '___'))
                ).then(response => {
                    this.$emit('reloadFiles')
                    this.fileToDelete = null;
                    this.showDeleteModal = false;
                }).catch(e => {
                });

            },
        }
    }
</script>
