<template>
    <inline-svg
        :src="`./images/${this.name}.svg`"
        :width="width"
        :height="height"
        :class="`text-${color} fill-current`"
    />
</template>
<script>
import InlineSvg from "vue-inline-svg";
export default {
    name: "ComponentIcon",
    props: {
        color: {
            type: String,
            default: "icon-primary",
        },
        name: {
            type: String,
        },
        height: {
            required: true,
        },
        width: {
            required: true,
        },
    },
    components: {
        InlineSvg,
    },
};
</script>
