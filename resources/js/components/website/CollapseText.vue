<template>
  <section
    class="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start py-6 px-16-px border-b border-black first-child:border-t overflow-y-hidden gap-x-2.5"
  >
    <section
      class="flex flex-col justify-center gap-y-6 px-3.5 lg:px-0"
    >
      <p class="text-lg" v-text="title" />
      <section v-if="showText" class="pl-3.5 md:pl-0">
        <p v-text="text" />
      </section>
    </section>

    <section class="flex flex-col justify-center pt-6 lg:pt-0 h-5">
      <button class="focus:outline-none" @click="onClickShowText">
      </button>
    </section>
  </section>
</template>
<script>
export default {
  name: "CollapseText",
  components: {
  },
  data: () => ({
    showText: false,
  }),
  props: {
    title: {
      default: "Agregar título del tema a tratar en el curso",
    },
    text: {
      default:
        "Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  },
  methods: {
    onClickShowText() {
      this.showText = !this.showText;
    },
  },
};
</script>
