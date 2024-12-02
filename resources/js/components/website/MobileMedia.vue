<template>
    <section class="md:px-40 px-8">
        <section v-if="isTablet">
            <section
                @click="onClickShowText()"
                class="flex max-w-360 justify-between pb-6 "
            >
                <section>
                    <p v-text="title" class="text-blue-600" />
                </section>

                <section>
                    <button>
                        <component-icon
                            :name="'arrow'"
                            :width="24"
                            :height="24"
                            :color="'blue-600'"
                            class="transform ease-out transition duration-700"
                            :class="{ 'rotate-180': showText }"
                        />
                    </button>
                </section>
            </section>

            <section v-if="showText" class="pb-6">
                <section v-for="(item, index) in items" :key="index" class="">
                    <a v-if="item.target!=='inertia'"
                        class="text-gray-500 hover:text-black duration-500"
                        :href="item.href"
                        :class="item.custom_class"
                        
                        :ref="item.rel!=='null' ? item.rel : ''"
                        :target="item.target"
                    >
                        <p class="pb-3" v-text="item.label" />
                    </a>
                    <inertia-link v-if="item.target=='inertia'"
                        class="text-gray-500 hover:text-black duration-500"
                        :href="item.href"
                        :class="item.custom_class"
                    >
                        <p class="pb-3" v-text="item.label" />
                    </inertia-link>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
import configMixin from "../../mixins/configMixin.js";
import ComponentIcon from "./common/Icon.vue";
export default {
    name: "MobileMedia",
    mixins: [configMixin],
    components: {
        ComponentIcon,
    },
    data: () => ({
        showText: false,
    }),
    props: {
        items: {
            type: Array,
            default: null,
        },
        title: {
            default: null,
        },
    },

    methods: {
        onClickShowText() {
            this.showText = !this.showText;
        },
    },
};
</script>
