<template>
  <div>
    <slot />
    <quillEditor
      ref="editor"
      v-model="editableContent"
      :options="editorConfig"
    />
    <div class="text-red-500 my-2" v-if="required">Please enter content in the editor.</div>
  </div>
</template>

<script>
import { contentFieldMixin } from "../../../../../mixins/admin/cms/content-field";
import { quillEditor, Quill } from "vue-quill-editor";
import ImageResize from "quill-image-resize-vue";
import quillModule from "quill";
import hljs from "highlight.js";

Quill.register("modules/imageResize", ImageResize);

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "highlight.js/styles/monokai-sublime.css";

let BaseImageFormat = quillModule.import("formats/image");
const ImageFormatAttributesList = ["alt", "height", "width", "style"];

class ImageFormat extends BaseImageFormat {
  static formats(domNode) {
    return ImageFormatAttributesList.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }
  format(name, value) {
    if (ImageFormatAttributesList.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}

Quill.register(ImageFormat, true);

export default {
  name: "QuillEditoor",
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [contentFieldMixin],

  components: {
    quillEditor,
  },

  data() {
    return {
      editorFilePickerCallback: null,
    };
  },
  computed: {
    editorConfig() {
      return {
        placeholder: " ",
        modules: {
          imageResize: {
            modules: ["Resize", "DisplaySize", "Toolbar"],
            displaySize: true,
            displayStyles: {
              backgroundColor: "black",
              border: "none",
              color: "white",
              textAlign: "center",
              borderRadius: "5px",
              opacity: "0.8",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              padding: "5px 10px",
              cursor: "move",
              width: "50px",
              height: "50px",
            },
          },
          toolbar: {
            handlers: {
              image: this.onEditorFilePicker,
            },
            container: [
              ["bold", "italic", "underline"],
              ["blockquote", "code-block"],
              [{ header: 1 }, { header: 2 }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["link", "video", "image"],
            ],
          },
          syntax: {
            highlight: (text) => hljs.highlightAuto(text, ["javascript"]).value,
          },
        },
      };
    },
  },

  methods: {
    onEditorFilePicker(callback, value, meta) {
      this.editorFilePickerCallback = callback;
      this.$store.commit(
        "admin/openFileManagerModel",
        this.onFileManagerFileSelected
      );
    },
    onFileManagerFileSelected(file) {
      this.$refs.editor.quill.insertEmbed(
        this.$refs.editor.quill?.getSelection(),
        "image",
        file.url
      );
    },
  },
};

</script>
