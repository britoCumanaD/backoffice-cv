<template>
    <button
        class="flex justify-center rounded-2.5 items-center bg-blue-800 py-3 text-white"
    >
        {{ text }}
        <component-icon
            :name="icon"
            :width="10"
            :height="16"
            :color="'white'"
            class="text-base transform ml-4"
        />
    </button>
</template>
<script>
import ComponentIcon from "./Icon.vue";
export default {
    name: "TextIconButton",
    components: {
        ComponentIcon,
    },
    props: {
        text: { default: "" },
        icon: { default: "" },
    },
};
</script>
