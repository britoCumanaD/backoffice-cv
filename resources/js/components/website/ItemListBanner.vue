<template>
  <section class="w-full flex flex-col lg:flex-row lg:justify-between items-center text-lg gap-x-9 gap-y-6 pb-6 lg:pb-0 border-b lg:border-none border-black ">
    <section>
      <div class="w-12 h-12 rounded-2.5" 
      :style="{backgroundColor: configValues.secondaryColor}" />
    </section>
    <p
      class="max-w-md"
      v-text="text"
    />
  </section>
</template>

<script>
import configMixin from '../../mixins/configMixin'
export default {
  mixins: [configMixin],
  components:{
      ItemListBanner: () => import("./ItemListBanner.vue"),
  },
  props: {
    text: {
      required: true,
      type: String
    },
    configValues:{}
  },
};
</script>