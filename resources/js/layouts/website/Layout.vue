
<template>
    <section :style="{ background: bodyColor, color: colorText }">
        <nav-bar v-model="showMenu" v-if="navbar" :config="config" :page="page"/>
            <main>
                <slot/>
            </main>
        <Footer v-if="haveFooter" :config="config" :page="page"/>
    </section>
</template>

<script>
    import configMixin from "../../mixins/configMixin";
    export default {
        mixins: [configMixin],
        name: 'layout',
        components:{
            NavBar: () => import("../../components/website/NavBar.vue"),
            Footer: () => import("../../components/website/Footer.vue"),
        },
        props: {
            haveFooter:{
                type: Boolean,
                default: true,
            },
            navbar:{
                type: Boolean,
                default: true,
            },
            config:{
                type: Object,
            },
            page:{
                type: Object,
            }
        },
        data: () => ({
            showMenu: false,
        }),
        computed:{
            bodyColor(){
                return (this.config && this.config.bodyColor) ? this.config.bodyColor : '#FFFFFF'
            },
            colorText(){
                return (this.config && this.config.colorText) ? this.config.colorText : '#000000'
            }
        },
    }
</script>