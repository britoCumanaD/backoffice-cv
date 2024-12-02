<template>
    <nav v-if="isMobile || isTablet" class="">
        <aside
            class="transform top-0 right-0 w-full bg-gradient-to-b from-white to-gray-200 h-screen overflow-y-scroll fixed ease-in-out transition-all duration-300 z-20"
            :class="getShowMenu ? 'translate-x-0' : 'translate-x-full'"
        >
            <section
                class="flex justify-between items-center px-8 lg:px-12 py-4"
            >
            
                <section>
                    <inertia-link href="/" @click="onChangeShowMenu(false)">
                        <img :src="config.logo" />
                    </inertia-link>

                </section>
                <section class="flex items-center">
                    <button @click="onChangeShowMenu(false)">
                        <close-menu :checked="getShowMenu" />
                    </button>
                </section>
            </section>
            <section
                class="flex flex-col justify-between items-center min-h-125 h-full--19.5 pt-12 border-t border-black"
            >
                <section class="flex flex-col items-center">
                    <inertia-link v-for="(item, index) in menu.internal" :key="index"
                        @click="onChangeShowMenu(false)"
                        :href="item.href"
                        class="text-2xl py-3 px-11 cursor-pointer"
                        v-text="item.label"
                    />
                </section>

              
                <section class="flex flex-col-reverse items-center">
                  

                    <a v-for="(item, index) in menu.out" :key="index"
                        :href="item.href"
                        :class="{
                                'text-blue-800 pl-2 py-4 pr-5' : item.custom_class=='button-white',
                                'flex justify-center rounded-2.5 items-center bg-blue-800 py-3 text-white mr-3 xl:mr-6 w-47.5 text-sm xl:text-base' : item.custom_class=='button-blue'
                            }"
                        v-text="item.label"
                        ref="nofollow"
                        :target="item.target"
                    />
                </section>
            </section>
        </aside>
    </nav>
</template>
<script>
import TextIconButton from "./common/TextIconButton.vue";
import CloseMenu from "./common/CloseMenu.vue";
import configMixin from "../../mixins/configMixin";

import { STORE_NAME_MENU } from "../../store/modules/menu";
import { mapGetters, mapActions } from "vuex";
export default {
    mixins: [configMixin],
    name: "MenuMobile",
    props:{
        menu:{
            require:true,
            type: Object
        }, 
        config:{}
    },
    components: {
        TextIconButton,
        CloseMenu,
    },
    computed: {
        ...mapGetters(STORE_NAME_MENU, ["getShowMenu"]),
    },
    methods: {
        ...mapActions(STORE_NAME_MENU, ["changeShowMenu"]),
        onChangeShowMenu(_showMenu) {
            setTimeout(() => this.changeShowMenu(_showMenu), 30);
        },
    },
};
</script>
