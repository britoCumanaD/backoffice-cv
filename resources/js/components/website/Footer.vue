<template>
  <section class="px-4 bg-white">
    
    <footer class="w-full flex flex-col lg:flex-row justify-center bg-white">  

      <section v-if="isTablet" class="border-gray-2000 border-t w-full px-4 flex flex-col items-center mb-16 pt-12">
        <img :src="`${mainUrl}/images/Footer.svg`" class="items-center" />
      </section>
      <section v-if="isTablet" class="mb-12 md:px-5">
        <mobile-media v-if="layoutContent && layoutContent['footer-1']"
          class="pr-19.5 pl-19.5"
          :items="layoutContent['footer-1'].menu_items"
          :title="layoutContent['footer-1'].name"
        />

        <mobile-media v-if="layoutContent && layoutContent['footer-2']"
          class="pr-19.5 pl-19.5 pt-3"
          :items="layoutContent['footer-2'].menu_items"
          :title="layoutContent['footer-2'].name"
        />

        <mobile-media v-if="layoutContent && layoutContent['footer-3']"
          class="pr-19.5 pl-19.5 pt-3"
          :items="layoutContent['footer-3'].menu_items"
          :title="layoutContent['footer-3'].name"
        />
      </section>
      <section class="max-w-360 w-full pb-12 lg:py-12 flex flex-col items-center justify-center">
        <p
          class="text-center px-4 md:w-99 lg:w-full text-gray-500"
          v-text="copyright"
        />
      </section>
    </footer>
  </section>
</template>
<script>
import configMixin from "../../mixins/configMixin.js";
export default {
  name: "Footer",
  mixins: [configMixin],
  name: "Footer",
  components: {
    MobileMedia: () => import("./MobileMedia.vue"),
  },
  props: {
    config:{
      type: Object,
    },
    page:{
      type: Object,
    }
  },
  computed:{
    layoutContent(){
      return (this.page.data && this.page.data.layout) ? this.page.data.layout.content : null
    },
    copyright(){
      return (this.config && this.config.copyright) ? this.config.copyright : ''
    }
  },
  data: () => ({
      mainUrl:''
  }),
  mounted(){
      this.mainUrl = window.location.origin
  },
};
</script>
