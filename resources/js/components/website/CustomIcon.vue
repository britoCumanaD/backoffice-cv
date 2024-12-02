<template>
    <inline-svg
        :src="imgUrl"
        :width="width"
        :height="height"
        :class="`text-${color} fill-current`"
    />
</template>
<script>
import InlineSvg from 'vue-inline-svg'
export default {
    name: 'ComponentIcon',
    props: {
        color: {
            type: String,
            default: 'icon-primary',
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
    computed: {
        imgUrl() {
            return require(`../assets/${this.name}.svg`)
        },
    },
}
</script>
