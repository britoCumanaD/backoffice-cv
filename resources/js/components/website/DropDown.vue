<template>
  <section class="relative">
    <button
      :disabled="disabledBtn"
      @click="dropdownOpen = !dropdownOpen"
      class="
        text-xs
        p-2
        rounded-3xl
        transition-all
        text-grayscale-80
        font-medium
        flex
        items-center
      "
      :class="{
        'hover:bg-grayscale-e5 hover:text-black': !disabledBtn && !withOutHover,
        'cursor-default': disabledBtn,
      }"
    >
      <slot name="label" />
    </button>
    <section
      v-if="dropdownOpen"
      class="absolute bg-white rounded-md border border-grayscale-d9 z-30"
      :class="`${orientation}-3`"
    >
      <slot name="body" />
    </section>
  </section>
</template>
<script>
export default {
  props: {
    orientation: {
      default: "right",
    },
    disabledBtn: {
      default: false,
    },
    withOutHover: {
      default: false,
    },
  },
  data: () => ({
    dropdownOpen: false,
  }),
  created() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) this.dropdownOpen = false;
    });
  },
};
</script>
