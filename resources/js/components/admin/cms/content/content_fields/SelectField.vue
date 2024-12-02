<template>
    <div>
        <slot/>
        <array-group
            class="mt-4"
            :input-id="inputName"
            :input-name="inputName"
            label-text="Values"
            :select="true"
            v-model="editableContent"
        />
    </div>
</template>

<script>
    import { contentFieldMixin } from "../../../../../mixins/admin/cms/content-field";
    import ArrayGroup from "../../../../core/forms/ArrayGroup";

    export default {
        name: "TextField",
        mixins: [
            contentFieldMixin,
        ],
        components: {
            ArrayGroup,
        },
    }
</script>
