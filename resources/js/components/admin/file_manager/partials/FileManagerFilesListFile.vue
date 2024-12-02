<template>
    <section
        class="p-2 rounded"
        :class="{ 'cursor-pointer': enableFileSelect }"
    >
        <img class="object-cover h-24 w-full" v-if="isFileImage" :src="file.url" 
        @click="onFileSelected(file)">
        
        <div v-else-if="isFileAudio"
            class="flex items-center justify-center w-full cursor-pointer" 
            @click="onFileSelected(file)"
        >
            <icon-audio class="w-24 h-24"  />
        </div>
        <div v-else
            class="flex items-center justify-center w-full cursor-pointer" 
            @click="onFileSelected(file)"
        >
            <icon-file class="w-24 h-24"  />
        </div>
        <div class="flex flex-col items-center">

            <p @click="onFileSelected(file)" class="truncate w-full">{{file.meta.basename ? file.meta.basename : file.meta.path}}</p>
            
            <section class="flex justify-between">
                <button
                    v-if="isFileDropdownMeta"
                    :id="infoButtonId"
                    class="
                        flex flex-row items-center justify-center rounded text-theme-base-subtle-contrast
                        ease-in-out duration-300 transition-colors
                        focus:text-theme-primary focus:outline-none
                        hover:text-theme-primary
                    "
                    type="button"
                    @click.stop="onDropdownButtonClick"
                >
                    Info
                </button>

                <button
                    class="
                        flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide
                        focus:outline-none focus:ring
                        hover:bg-theme-danger hover:text-theme-danger-contrast
                    "
                    title="Delete"
                    @click="$emit('clickDelete', file)"
                >
                    <icon-trash
                        class="w-4"
                    />
                </button>
            </section>
            <div
                v-if="isFileDropdownMeta"
                ref="infoDropdownMenu"
                class="
                    flex flex-col px-4 py-4 space-y-3
                    focus:outline-none
                "
                @click.stop=""
            >
                <p
                    v-for="(value, label) in fileDropdownMeta"
                    :key="label"
                >
                    <span class="block text-theme-base-subtle-contrast text-xs">
                        {{  label }}
                    </span>
                    <a
                        v-if="value && label.toLowerCase() === 'url'"
                        class="block break-all text-gray-700 text-sm underline"
                        :href="value"
                        rel="noreferrer noopener nofollow"
                        target="_blank"
                    >
                        {{ value }}
                    </a>
                    <span
                        v-else
                        class="block break-all text-gray-700 text-sm"
                    >
                        {{  value }}
                    </span>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    import prettyBytes from 'pretty-bytes';
    import slugify from 'slugify';
    import tippy from 'tippy.js';
    import 'tippy.js/animations/shift-away-extreme.css';

    export default {
        name: "FileManagerFilesListFile",
        props: {
            enableFileSelect: {
                default: false,
                type: Boolean,
            },
            file: {
                required: true,
                type: Object
            },
            index: {
                required: true,
                type: Number
            }

        },
        data() {
            return {
                isDropdownPreviewLoaded: false, // default to false so previews only download when required
            }
        },
        computed: {
            etag() {
                return this.file.meta.etag ? this.file.meta.etag.split('"').join('') : null;
            },
            fileDropdownMeta() {
                let meta = {};

                if (this.fileUpdatedAt) {
                    meta["Last Updated"] = this.fileUpdatedAt;
                }

                if (this.fileSize) {
                    meta["Size"] = this.fileSize;
                }

                if (this.fileExtension) {
                    meta["File Extension"] = this.fileExtension;
                }

                if (this.file.url) {
                    meta["URL"] = this.file.url;
                }

                return meta;
            },
            fileExtension() {
                try {
                    return this.file.meta.extension;
                } catch (e) {
                    return false;
                }
            },
            fileIcon() {
                try {
                    switch (this.file.meta.mimetype.toLowerCase()) {
                        case 'image/jpeg':
                        case 'image/png':
                            return 'icon-photo';
                        case 'application/pdf':
                        case 'text/plain':
                            return 'icon-file-text';
                        default:
                            return 'icon-file';
                    }
                } catch (e) {
                    return 'icon-file';
                }
            },
            fileNameSlug() {                
                return this.file.meta.basename ? slugify(this.file.meta.basename, {
                    remove: '.'                
                }) : this.index;

            },
            fileSize() {
                try {
                    return prettyBytes(this.file.meta.size);
                } catch (e) {
                    return false;
                }
            },
            fileUpdatedAt() {
                try {
                    let date = new Date(this.file.meta.timestamp)
                    return date.toLocaleString();
                } catch (e) {
                    return false;
                }
            },
            infoButtonId() {
                return 'info-button-' + this.fileNameSlug ;
            },
            isFileDropdownMeta() {
                try {
                    return Object.keys(this.fileDropdownMeta).length
                } catch(e) {
                    return false;
                }
            },
            isFileImage() {
                try {
                    const file = this.file.meta.path.split('.')
                    const endFile = file[file.length - 1].toLowerCase()
                    if(
                        endFile == 'png' ||
                        endFile == 'jpg' ||
                        endFile == 'jpeg' ||
                        endFile == 'gif' ||
                        endFile == 'svg' ||
                        endFile == 'webp' 
                    )
                        return true;

                } catch (e) {
                    return false;
                }
            },
            isFileAudio() {
                try {
                    const file = this.file.meta.path.split('.');
                    const endFile = file[file.length - 1].toLowerCase();
                    if (
                        endFile === 'mp3' ||
                        endFile === 'wav' ||
                        endFile === 'ogg' ||
                        endFile === 'flac' ||
                        endFile === 'aac' ||
                        endFile === 'm4a'
                    ) {
                        return true;
                    }
                } catch (e) {
                    return false;
                }
                return false; // Si no coincide con ningún tipo, devuelve false
            },
            showDropdownPreview() {
                return this.isDropdownPreviewLoaded && this.isFileImage;
            },
        },
        mounted() {
            this.initialiseFileDropdown();
        },
        methods: {
            initialiseFileDropdown() {
                if (!this.isFileDropdownMeta) {
                    return;
                }

                let infoDropdownMenu = this.$refs.infoDropdownMenu;
                infoDropdownMenu.style.display = 'block';

                tippy('#' + this.infoButtonId,{
                    animation: 'shift-away-extreme',
                    content: infoDropdownMenu,
                    interactive: true,
                    placement: 'bottom-end',
                    theme: 'dropdown',
                    trigger: 'click',
                });
            },
            onDropdownButtonClick() {
                this.isDropdownPreviewLoaded = true;
            },
            onFileSelected(file) {
                if (this.enableFileSelect) {
                    this.$emit('fileSelected', file);
                }
            }
        },
    }
</script>
