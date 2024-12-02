<template>
    <header class="bg-white py-1.5 w-full flex  justify-center z-20
    border-gray-2000 border-b fixed" :class="{'shadow': fixed}">
        <section
            class="max-w-360 w-full  px-6 flex items-center justify-between"
        >
            <inertia-link href="/" class="cursor-pointer">
                <img :src="config.logo" class="w-auto h-auto max-h-10"/>
            </inertia-link>
            
            <section class="flex items-center">
                <section class="ml-3" v-if="!isTablet">
                    <inertia-link v-for="(item, index) in menu.internal" :key="`internal-${index}`"
                        :href="item.href"
                        class="duration-500 hover:text-blue-800 px-2"
                        :class="[
                                    item.custom_class=='default' ? 'px-6 py-4 text-sm xl:text-base' : '',
                                    item.custom_class.length == index ? 'px-2.5 xl:mr-6' : '',
                                    item.href == path ? 'text-blue-800': '',
                                ]"
                        v-text="item.label"
                    />
                </section>
            </section>

            <section class="flex flex-row">
                <a v-for="(item, index) in menu.out" :key="`out-${index}`"
                    :href="item.href"
                    :class="{
                            'py-1.5 mr-3 xl:mr-6 text-center px-2 text-sm xl:text-base duration-500 hover:text-blue-800' : item.custom_class=='button-white',
                            'flex justify-center rounded-2.5 items-center bg-blue-800 py-1.5 text-white mr-3 xl:mr-6 border border-blue-800 text-sm xl:text-base px-2' : item.custom_class=='button-blue'
                        }"
                    v-text="item.label"
                    ref="nofollow"
                    :target="item.target"
                />
            </section>

            <section v-if="isTablet">
                <button class="relative" @click="onChangeShowMenu(true)">
                    <close-menu :checked="getShowMenu" />
                </button>
                <side-bar v-model="getShowMenu" :menu="menu" :config="config"/>
            </section>
        </section>
    </header>

</template>
<script>
import configMixin from '../../mixins/configMixin'
import { STORE_NAME_MENU } from "../../store/modules/menu";
import { mapGetters, mapActions } from "vuex";
import TextIconButton from "./common/TextIconButton.vue";
import CloseMenu from "./common/CloseMenu.vue";
import CollapseText from "./CollapseText.vue";
import SideBar from "./SideBar.vue";
export default {

    mixins: [configMixin],
    name: 'ComponentHeader',
    components: {
        TextIconButton,
        CloseMenu,
        CollapseText,
        SideBar,
    },
    mounted(){
        this.mainUrl = window.location.origin

        const selt = this
        window.addEventListener('scroll', function(e) {
            selt.fixed = window.scrollY > 0;
        });
    },
    props: {
        config:{
            type: Object,
        },
        page:{
            type: Object,
        }
    },
    data: () => ({
        mainUrl:'',
        fixed: false
    }),
    computed:{
        ...mapGetters(STORE_NAME_MENU, ["getShowMenu"]),

        menuTop(){
            if(this.layoutContent && this.layoutContent['menu']){
                return this.layoutContent['menu']
            }
            return null
        },

        path(){
            return window.location.pathname
        },

        menu(){
            const menu = {
                internal: [],
                out:[]
            }
            if(this.menuTop){
                this.menuTop.menu_items.forEach(item => {
                    if(item.target==="inertia"){
                        menu.internal.push(item) 
                    }
                    if(item.target==="_blank"){
                        menu.out.push(item) 
                    }

                });
            }
            return menu
        },

        layoutContent(){
            return (this.page.data && this.page.data.layout) ? this.page.data.layout.content : null
        },

    },
    methods: {
        ...mapActions(STORE_NAME_MENU, ["changeShowMenu"]),
        onChangeShowMenu(_showMenu){
            this.changeShowMenu(_showMenu)
        },
    },
}
</script>


