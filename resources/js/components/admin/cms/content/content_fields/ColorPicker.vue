<template>
  <div class="relative text-right">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="ml-2 w-10 h-10 rounded-full focus:outline-none focus:shadow-outline inline-flex p-2 shadow"
      :style="`background: ${
        editableContent != '' ? editableContent : '#dbeafe'
      }; color: ${colorBlack ? '#000000' : '#FFFFFF'}`"
    >
      <svg
        class="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          d="M15.584 10.001L13.998 8.417 5.903 16.512 5.374 18.626 7.488 18.097z"
        />
        <path
          d="M4.03,15.758l-1,4c-0.086,0.341,0.015,0.701,0.263,0.949C3.482,20.896,3.738,21,4,21c0.081,0,0.162-0.01,0.242-0.03l4-1 c0.176-0.044,0.337-0.135,0.465-0.263l8.292-8.292l1.294,1.292l1.414-1.414l-1.294-1.292L21,7.414 c0.378-0.378,0.586-0.88,0.586-1.414S21.378,4.964,21,4.586L19.414,3c-0.756-0.756-2.072-0.756-2.828,0l-2.589,2.589l-1.298-1.296 l-1.414,1.414l1.298,1.296l-8.29,8.29C4.165,15.421,4.074,15.582,4.03,15.758z M5.903,16.512l8.095-8.095l1.586,1.584 l-8.096,8.096l-2.114,0.529L5.903,16.512z"
        />
      </svg>
    </button>

    <div
      v-show="isOpen"
      class="origin-top-right absolute right-0 top-0 mt-12 w-40 rounded-md shadow-lg z-20"
    >
      <div class="rounded-md bg-white shadow-xs px-4 py-3">
        <div class="flex flex-wrap -mx-2 mb-2">
          <div
            @click="isOpen = false"
            class="px-2"
            v-for="(color, index) in colors"
            :key="index"
          >
            <template v-if="editableContent === color">
              <div
                class="w-8 h-8 inline-flex rounded-full cursor-pointer border"
                :style="`background: ${color}; box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);`"
              ></div>
            </template>

            <template v-if="editableContent != color">
              <div
                @click="editableContent = color"
                @keydown.enter="editableContent = color"
                role="checkbox"
                tabindex="0"
                :aria-checked="editableContent"
                class="w-8 h-8 inline-flex rounded-full cursor-pointer border focus:outline-none focus:shadow-outline"
                :style="`background: ${color};`"
              ></div>
            </template>
          </div>
        </div>

        <span class="block w-full text-left mb-1 text-xs text-gray-500"
          >Custom color
        </span>
        <div class="input-group-input-picker">
          <input
            type="color"
            class="input-picker"
            placeholder="Color"
            v-model="editableContent"
          />
          <input
            type="text"
            class="text"
            placeholder="#0000"
            v-model="editableContent"
          />
        </div>
      </div>
    </div>
    <slot/>
  </div>
</template>

<script>
import { contentFieldMixin } from "../../../../../mixins/admin/cms/content-field";

export default {
  name: "TextField",
  mixins: [contentFieldMixin],
  components: {},
  mounted() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
  data: () => ({
    isOpen: false,
    selectedColor: "#000000",
    colors: [
      "#FFFFFF",
      "#143AA3",
      "#D7E1FC",
      "#2196F3",
      "#009688",
      "#9C27B0",
      "#FFEB3B",
      "#afbbc9",
      "#4CAF50",
      "#000000",
      "#f56565",
      "#ed64a6",
    ],
  }),
  computed: {
    inputMaxLength() {
      try {
        return this.templateField.settings.max_length;
      } catch (e) {
        return "";
      }
    },
    colorBlack() {
      return (
        this.editableContent == "#FFFFFF" ||
        this.editableContent == "#D7E1FC" ||
        this.editableContent == "#FFEB3B"
      );
    },
  },
};
</script>
