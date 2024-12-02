<template>
    <form
        class="max-w-5xl mx-auto"
        autocomplete="off"
        @submit.prevent="submit"
    >
        <TopOptionSection 
            :userCanSection="'cms.edit'"
            :userCanBack="'cms.view'"
            :address="'admin.cms.menus.index'"
            :title="`Edit Menu - ${menu.name}`"
            :buttonText="'Save Changes'"
        />

        <div class="bg-white p-6 shadow-subtle rounded-lg" 
        :class="{'mt-16' : fixedBarAction}">
            <input-group
                class="mt-4"
                :error-message="getPageErrorMessage('name')"
                input-autocomplete="menu_name"
                input-id="name"
                input-name="name"
                :input-required="true"
                input-type="text"
                label-text="Menu Name"
                @errorHidden="clearPageErrorMessage('name')"
                @input="onNameInput"
                v-model="formData.name"
            />

            <input-group
                class="mt-4"
                :error-message="getPageErrorMessage('slug')"
                input-autocomplete="menu_slug"
                input-id="slug"
                input-name="slug"
                :input-required="true"
                input-type="text"
                label-text="Menu Slug"
                @blur="onSlugBlur"
                @errorHidden="clearPageErrorMessage('slug')"
                @input="onSlugInput"
                v-model="formData.slug"
            />
        </div>


        <div class="bg-white mt-6 p-6 shadow-subtle rounded-lg">
            <menu-items-editor
                v-model="formData.menu_items"
            />
        </div>

    </form>
</template>

<script>
    import slugify from "slugify";
    import InputGroup from "../../../../components/core/forms/InputGroup";
    import MenuItemsEditor from "../../../../components/admin/cms/menus/MenuItemsEditor";
    import TopOptionSection from "../../../../components/admin/TopOptionSection";
    import { STORE_NAME_ADMIN } from "../../../../store/modules/admin";
    import { mapGetters } from "vuex";

    export default {
        name: "AdminCmsMenuEdit",
        components: {
            InputGroup,
            MenuItemsEditor,
            TopOptionSection,
        },
        layout: 'admin-layout',
        props: {
            'menu': {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                autoUpdateSlug: false,
                formData: {}
            }
        },
        computed:{
            ...mapGetters(STORE_NAME_ADMIN, ["fixedBarAction"]),
        },
        created() {
            this.formData = {
                id:         this.menu.id,
                menu_items: this.menu.menu_items ? _.cloneDeep(this.menu.menu_items) : [],
                name:       this.menu.name,
                slug:       this.menu.slug,
            };
        },
        methods: {
            onNameInput() {
                if (!this.autoUpdateSlug) {
                    return;
                }

                this.formData.slug = this.slugify(this.formData.name);
                this.computedUrl = this.formData.slug;
            },
            onSlugBlur() {
                this.formData.slug = this.slugify(this.formData.slug)
            },
            onSlugInput() {
                this.autoUpdateSlug = false;
                this.computedUrl = this.formData.slug;
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
            submit() {
              this.$inertia.put(
                    this.$route('admin.cms.menus.update', this.menu.id),
                    this.formData
                );
            }
        }
    }
</script>
