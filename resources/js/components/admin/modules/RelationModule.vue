<template>
    <div>
        <div class="flex flex-row items-center">
            <span class="text-lg">Relations</span>
            <button
                class="button button-primary-subtle button-small ml-auto text-sm"
                type="button"
                @click="addRelation"
            >
                Add Relation
            </button>
        </div>

        <p
            v-if="!editableRelations.length"
            class="bg-theme-base-subtle mt-6 px-4 py-3 rounded text-center text-theme-base-subtle-contrast"
        >
            No Relations
        </p>

        <template v-else>
            <draggable
                class="mt-6"
                :animation="200"
                ghost-class="ghost"
                handle=".draggable-handle"
                v-model="editableRelations"
            >
                <transition-group
                    :name="!isDragging ? 'flip-field' : null"
                    type="transition"
                >
                    <article
                        v-for="(relation, index) in editableRelations"
                        :key="`relation-${index}`"
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
                                <template v-if="relation.name && relation.name.length">
                                    {{ relation.name }}
                                </template>
                                <template v-else>
                                    New relation
                                </template>
                            </span>
                        </header>

                        <p class="p-4">
                            <Relation
                                :is-autofocus-disabled="isAutofocusDisabled"
                                :relation-types="relationTypes"
                                :currentTables="currentTables"
                                :index="index"
                                @input="updateRelations"
                                v-model="editableRelations[index]"
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
                                @click="deleteRelation(index)"
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
                @click="addRelation"
            >
                Add Relation
            </button>
        </div>
        </template>
    </div>
</template>

<script>
    import _ from 'lodash';
    import draggable from 'vuedraggable';
    import Relation from "./relation_fields/Relation";

    export default {
        name: 'RelationModule',
        components: {
            draggable,
            Relation
        },
        model: {
            prop: 'relations'
        },
        props: {
            currentTables: {
                required: true,
                type: Object,
            },
            relationTypes: {
                required: true,
                type: Object,
            },
            relations: {
                required: true,
                type: Array,
            },
        },
        data() {
            return {
                editableRelations: [],
                isAutofocusDisabled: false,
                isDragging: false,
            }
        },
        created() {
            if (this.isEditing) {
                this.isAutofocusDisabled = true;
            }
            this.editableRelations = _.cloneDeep(this.relations);
        },
        methods: {
            addRelation() {
                this.isAutofocusDisabled = false;

                this.editableRelations.push({
                    type: '',
                    table: '',
                    name:'',
                    column: ''
                });

                this.updateRelations();
            },
            deleteRelation(index) {
                try {
                    this.editableRelations.splice(index, 1);
                } catch (e) {
                    this.$errorToast('Failed to delete relation');
                    console.log(e); // TODO: This should go through to a log tracker once available
                }
            },
            getRelationTypesKeys() {
                try {
                    return Object.keys(this.relationTypes);
                } catch (e) {
                    return [];
                }
            },
            onRelationsChange(relations) {
                this.editableRelations = _.cloneDeep(relations);
            },
            onRelationTypesChange() {
                try {
                    let allowedRelations = this.getRelationTypesKeys();
                    _.forEach(this.editableRelations, (field, key) => {
                        if (field.type && allowedRelations.indexOf(field.type) < 0) {
                            this.editableRelations[key].type = '';
                        }
                    });

                    this.updateRelations();
                } catch (e) {
                    console.log(e); // TODO: Replace with error tracker
                }
            },
            updateRelations() {
                this.$emit('input', _.cloneDeep(this.editableRelations));
            }
        },
        watch: {
            relations: {
                handler: 'onRelationsChange'
            },
            relationTypes: {
                handler: 'onRelationTypesChange',
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

