<template>
    <div>
        <slot/>
        <section class="flex mt-4" >
            <button class="cursor-pointer px-4 py-2 rounded  focus:outline-none focus:ring "
            :class="editableContent == true ? 'bg-blue-600 text-white' : 'hover:bg-theme-base-subtle-contrast hover:text-theme-base-subtle bg-theme-base-subtle text-theme-base-subtle-contrast'" type="button"
            @click="editableContent = true"> Active </button>
            <button class="cursor-pointer px-4 py-2 rounded  focus:outline-none focus:ring "
            :class="editableContent != true ? 'bg-blue-600 text-white' : 'hover:bg-theme-base-subtle-contrast hover:text-theme-base-subtle bg-theme-base-subtle text-theme-base-subtle-contrast'" type="button"
            @click="editableContent = false"
            > Inactive </button>
        </section>
    </div>
</template>

<script>
    import { contentFieldMixin } from "../../../../../mixins/admin/cms/content-field";
    import ArrayGroup from "../../../../core/forms/ArrayGroup";

    export default {
        name: "Checkbox",
        mixins: [
            contentFieldMixin,
        ],
        components: {
            ArrayGroup,
        },
    }
</script>
