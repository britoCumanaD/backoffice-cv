<template>
    <section>
        <ul class="flex items-center" v-if="menuHave && isDesktop">
            <li v-for="(menu, index) in contentPage['main-menu'].menu_items" :key="index">
            <a class="mx-2" v-text="menu.label" :href="menu.href" :class="menu.custom_class" />
            </li>
        </ul>
            
        <section v-if="isMobile">
            <button @click="showMenu = true">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :class="`stroke-current w-6 h-6 text-text`"
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
        </section>
        <NavBarMovil :showMenu="showMenu" @close="hidden"/>
    </section>
</template>
<script>
import configMixin from "../../mixins/configMixin.js"
export default {
    props:{
    },
    components:{
        NavBarMovil: () => import("./NavBarMovil.vue"),
    },
    mixins: [configMixin],
    computed: {
        menuHave(){
        return this.contentPage['main-menu'] != undefined
        }
    },
    data: () => ({
        showMenu: false
    }),
    methods:{
        hidden(){
            this.showMenu = false
        }
    }
};
</script>
