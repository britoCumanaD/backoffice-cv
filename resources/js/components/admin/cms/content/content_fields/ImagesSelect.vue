<template>
  <div class="flex flex-col">
    <label
      :class="formattedLabelClass"
      :for="inputId"
      class="flex mb-6 justify-between"
    >
      <slot>
        <span class="flex flex-row items-baseline">
          <span>{{ labelText }}</span>
          <sup v-if="inputRequired" class="text-theme-danger-contrast"> * </sup>
        </span>
      </slot>

      <button
        class="border border-l-0 border-theme-primary-subtle button button-primary-subtle rounded-l-none"
        type="button"
        @click="openFileManagerModal"
      >
        Add...
      </button>
    </label>

    <img
      v-if="!editableInputValue.length"
      src="/images/emptyimg.svg"
      alt="image"
      class="bg-gray-150 p-10 rounded-8 h-36 w-auto m-auto object-contain"
    />

    <div :class="inputValuesWrapperClass" class="grid grid-cols-4 gap-6">
      <div
        v-for="(value, index) in editableInputValue"
        class="relative bg-gray-150 p-2.5 rounded-lg"
      >
        <img
          :key="`value-${index}-${value}`"
          :class="inputValuesClass"
          type="button"
          alt="Image"
          :src="value.images || value "
          class="w-full h-24 object-cover rounded-lg"
        />
        <button
          @click="removeValue(index)"
          class="bg-theme-base-subtle cursor-pointer absolute -bottom-2 -right-2 rounded-full w-8 h-8"
        >
          <icon-x :class="inputValuesCloseClass" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { baseFormGroupMixin } from "../../../../../mixins/admin/cms/forms/base-form-group";
import FormFieldError from "../../../../core/forms/partials/FormFieldError";

export default {
  name: "ArrayGroup",
  mixins: [baseFormGroupMixin],
  components: {
    FormFieldError,
  },
  props: {
    inputAllowDuplicates: {
      default: false,
      type: Boolean,
    },
    inputButtonClass: {
      default:
        "border border-l-0 border-theme-primary-subtle button button-primary-subtle rounded-l-none",
      type: String,
    },
    inputClass: {
      default:
        "border border-theme-base-subtle font-medium px-3 py-2 rounded-l w-full focus:border-theme-primary focus:outline-none focus:ring-0",
      type: String,
    },
    inputTrimValues: {
      default: true,
      type: Boolean,
    },
    inputType: {
      default: "text",
      type: String,
    },
    inputValuesClass: {
      default: "",
      type: String,
    },
    inputValuesCloseClass: {
      default: "h-4 ml-2 w-4",
      type: String,
    },
    inputValuesWrapperClass: {
      default: "flex flex-row flex-wrap items-center -mx-1 my-1",
      type: String,
    },
    inputWrapperClass: {
      default: "flex flex-row items-center",
      type: String,
    },
    select: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editableInputValue: [],
      newValue: "",
    };
  },
  mounted() {
    try {
      if (this.select) {
        this.editableInputValue = this.inputValue.values
          ? this.inputValue.values
          : JSON.parse(this.inputValue);
      } else {
        if (
          Array.isArray(this.inputValue) ||
          Array.isArray(this.inputValue.values)
        ) {
          this.editableInputValue = _.clone(
            this.select ? this.inputValue.values : this.inputValue
          );
        } else if (
          (this.inputValue && this.inputValue.length) ||
          (this.inputValue.values && this.inputValue.values.length)
        ) {
          this.editableInputValue = this.select
            ? this.inputValue.values.split(",")
            : this.inputValue.split(",");
        } else {
          this.editableInputValue = [];
        }
      }
    } catch (e) {
      this.editableInputValue = [];
    }
  },
  methods: {
    removeValue(index) {
      if (this.errorHideOnInput) {
        this.hideError = true;
      }

      try {
        this.editableInputValue.splice(index, 1);
        this.onEditableInputChange();
      } catch (e) {
        this.$errorToast("Failed to remove value.");
        console.log(e);
      }
    },
    onEditableInputChange() {
      this.$emit("input", this.editableInputValue);
    },
    onFileManagerFileSelected(file) {
      try {
        this.newValue = file.url;
        if (
          !this.inputAllowDuplicates &&
          this.editableInputValue.indexOf(this.newValue) >= 0
        ) {
          this.$errorToast("Duplicate values not allowed.");
          return;
        }
        this.editableInputValue.push(this.newValue);
        this.newValue = "";
        this.autofocus();

        this.onEditableInputChange();
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
