<template>
    <div>
        <div
            class="
                flex flex-col mb-4
                md:flex-row md:space-x-4
            "
        >
            <select-group
                class="flex-1"
                :error-message="getErrorMessage('type')"
                label-text="Column Type"
                :input-any-option-enabled="true"
                input-any-option-label="Please select a type"
                :input-id="`relation-${index}-type`"
                :input-name="`relation-${index}-type`"
                :input-options="relationTypes"
                :input-required="true"
                @errorHidden="clearErrorMessage('type')"
                @input="updateRelation"
                v-model="editableRelation.type"
            />

            <select-group
                class="flex-1"
                :error-message="getErrorMessage('table')"
                label-text="Table"
                :input-any-option-enabled="true"
                input-any-option-label="Please select a table"
                :input-id="`relation-${index}-table`"
                :input-name="`relation-${index}-table`"
                :input-options="currentTables"
                :input-required="true"
                @errorHidden="clearErrorMessage('table')"
                @input="updateTable"
                v-model="editableRelation.table"
            />

        </div>
        <div
            class="
                flex flex-col
                md:flex-row md:space-x-4
            "
        >

            <select-group
                class="flex-1"
                :error-message="getErrorMessage('column')"
                label-text="Column to show on select"
                :input-any-option-enabled="true"
                input-any-option-label="Please select a column"
                :input-id="`relation-${index}-column`"
                :input-name="`relation-${index}-column`"
                :input-options="editableRelation.table && !loadingColumns ? columns : {}"
                :input-required="true"
                @errorHidden="clearErrorMessage('column')"
                @input="updateRelation"
                v-model="editableRelation.column"
            />

            <input-group
                class="flex-1 mt-4 md:mt-0"
                :input-id="`relation-${index}-name`"
                :input-name="`relation-${index}-name`"
                input-type="text"
                label-text="Relation name"
                @input="updateRelation"
                v-model="editableRelation.name"
            />

        </div>

    </div>
</template>

<script>
    import slugify          from "slugify";
    import CheckboxGroup    from "../../../core/forms/CheckboxGroup";
    import InputGroup       from "../../../core/forms/InputGroup";
    import SelectGroup      from "../../../core/forms/SelectGroup";
    import { STORE_NAME_RELATIONS } from "../../../../store/modules/relations";
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "relation",
        components: {
            CheckboxGroup,
            InputGroup,
            SelectGroup,
        },
        model: {
            prop: 'relation'
        },
        props: {
            errorMessageKeyPrefix: {
                default: 'relations',
                type: String
            },
            relation: {
                required: true,
                type: Object
            },
            currentTables: {
                required: true,
                type: Object
            },
            relationTypes: {
                required: true,
                type: Object,
            },
            index:{
                required: true,
                type: Number,
            }
        },
        data() {
            return {
                autoUpdateSlug: true,
                editableRelation: {
                    type: '',
                    table: '',
                    name: '',
                    column: ''
                },
                loadingColumns: false,
                columns: {}
            }
        },
        computed: {
            errorMessageKey() {
                return this.errorMessageKeyPrefix + '.' + this.index + '.';
            },
        },

        mounted() {
            this.editableRelation = _.cloneDeep(this.relation);
        },

        methods: {
            ...mapActions(STORE_NAME_RELATIONS, ["getColumns"]),
            clearErrorMessage(relation) {
                this.clearPageErrorMessage(this.errorMessageKey + relation);
            },
            getErrorMessage(relation) {
                let message = this.getPageErrorMessage(this.errorMessageKey + relation);
                message = message.replace(this.errorMessageKey, '');
                return message;
            },
            onRelationUpdate() {
                this.editableRelation = _.cloneDeep(this.relation);
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
            async updateTable(){
                this.editableRelation.column = ''
                this.editableRelation.name = `${this.editableRelation.table.slice(0, this.editableRelation.table.length - 1)}_id`
                
                this.loadingColumns = true
                this.columns = await this.getColumns(this.editableRelation.table)
                this.loadingColumns = false
                this.updateRelation()
            },
            updateRelation() {
                this.$emit('input', _.cloneDeep(this.editableRelation));
            }
        },

        watch: {
            relation: {
                deep: true,
                handler: 'onRelationUpdate'
            }
        }

    }
</script>
