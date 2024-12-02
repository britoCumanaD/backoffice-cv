<template>
  <div>
    <input-group
      :error-message="errorMessage"
      :input-autocomplete="inputName"
      input-class="border border-theme-base-subtle font-medium px-3 py-2 rounded-l w-full focus:border-theme-primary focus:outline-none focus:ring-0"
      :input-id="inputName"
      :input-name="inputName"
      :input-required="templateField.is_required"
      input-type="text"
      input-wrapper-class="flex flex-row items-center"
      label-class=""
      label-text=""
      readonly
      v-model="editableContent"
    >
      <template v-slot:default>
        <slot />
      </template>

      <template v-slot:inputAppend>
        <button
          class="border border-l-0 border-theme-primary-subtle button button-primary-subtle rounded-l-none"
          type="button"
          @click="openFileManagerModal"
        >
          Browse...
        </button>
      </template>
    </input-group>
    <section>
      <slot name="color"></slot>
      
      <div
        class="p-4 mx-auto mt-2"
        :class="backgroundSelect ? 'w-75 rounded-lg' : 'w-full'"
        :style="`background:${backgroundSelect}`"
      >
        <img
          v-if="imageError || !editableContent"
          src="/images/emptyimg.svg"
          alt="image"
          class="bg-gray-150 p-10 rounded-8 h-36 w-36 m-auto object-contain"
        />
        <section
          v-else
          :class="
            colorSelect
              ? 'mx-auto flex h-36 w-36 justify-center rounded-full border'
              : ''
          "
          :style="
            colorSelect
              ? `border-color: ${colorSelect}; box-shadow: -7px 10px 0px -3px ${colorSelect};`
              : ''
          "
        >
          <img
            loading="lazy"
            :src="editableContent"
            alt="Image"
            :class="isLogo ? ' rounded-full p-4' : ''"
            class="h-36 w-36 m-auto object-contain"
            @error="onImageError"
          />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
// TODO: Replace with an image select modal
import { contentFieldMixin } from "../../../../../mixins/admin/cms/content-field";
import InputGroup from "../../../../core/forms/InputGroup";

export default {
  name: "ImageField",
  mixins: [contentFieldMixin],
  props: {
    colorSelect: {
      type: String,
    },
    backgroundSelect: {
      type: String,
    },
    isLogo: {
      type: Boolean,
    },
  },
  data: () => ({
    imageError: false,
  }),
  components: {
    InputGroup,
  },
  methods: {
    onFileManagerFileSelected(file) {
      try {
        this.editableContent = file.url;
      } catch (e) {
        this.$errorToast(e);
      }
    },
    openFileManagerModal() {
      this.$store.commit(
        "admin/openFileManagerModel",
        this.onFileManagerFileSelected
      );
    },
    onImageError() {
      this.imageError = true;
    },
  },
};
</script>
