<template>
    <form
        class="max-w-5xl mx-auto"
        autocomplete="off"
        @submit.prevent="submit"
    >
        <TopOptionSection 
            :userCanSection="'cms.create'"
            :userCanBack="'cms.view'"
            :address="'admin.cms.menus.index'"
            :title="`Create Menu`"
            :buttonText="'Create Menu'"
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
        name: "AdminCmsMenuCreate",
        components: {
            MenuItemsEditor,
            InputGroup,
            TopOptionSection,
        },
        layout: 'admin-layout',
        data() {
            return {
                autoUpdateSlug: true,
                formData: {
                    name: '',
                    slug: '',
                    menu_items: [],
                }
            }
        },
        computed:{
            ...mapGetters(STORE_NAME_ADMIN, ["fixedBarAction"]),
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
              this.$inertia.post(
                    this.$route('admin.cms.menus.store'),
                    this.formData
                );
            }
        }
    }
</script>
