<template>
  <nav>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <section v-show="showMenu" class="z-10 fixed inset-0 transition-opacity" @click="$emit('close')" >
        <section class="absolute inset-0 bg-black opacity-50" />
      </section>
    </transition>
    <aside
      class="transform top-0 left-0 w-full sm:w-11/12 md:w-80 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300  z-20 flex flex-col justify-between"
      :class="showMenu ? 'translate-x-0' : '-translate-x-full'"
    >   

        <!--<ul class="mt-8 mx-8">
            <li v-for="(menu, index) in contentPage['main-menu'].menu_items" :key="index">
            <a class="my-4" v-text="menu.label" :href="menu.href" :class="menu.custom_class" />
            </li>
        </ul>-->

        <div class="w-full mb-16 flex justify-center">
            <button class="border rounded-full w-8 h-8 flex items-center justify-center" 
            @click="$emit('close')">
                x
            </button>
        </div>

    </aside>
  </nav>
</template>

<script>
import configMixin from "../../mixins/configMixin.js"
export default {
    props: {
        showMenu:{
            type: Boolean,
            default: false
        }
    },
    components: {
    },
    data: () => ({
    }),
    mixins: [configMixin],
};
</script>
