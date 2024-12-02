<template>
    <div id="text-area" class="flex flex-col w-full">
        <p
            v-if="label"
            class="tw-label pl-2"
            v-text="label"
            :class="{ error: error }"
        />
        <textarea
            :rows="rows"
            class="rounded-lg shadow-general text-base w-full focus:outline-none p-3 border-0 resize-none"
            :class="`${error ? 'border-red-500' : ''}`"
            type="text"
            :placeholder="placeholder"
            :required="is_required"
            :disabled="disabled"
            @input="handleChange($event.target.value)"
            @keypress="preventInput"
            @paste="pasteHandle"
            :value="value"
        />
        <span
            class="text-red-500 text-xs text-right"
            v-if="error"
            v-text="errorText"
        />
    </div>
</template>
<script>
import {
    required,
    minLength,
    maxLength,
    alpha,
    alphaNum,
    numeric,
    email,
    sameAs,
} from "vuelidate/lib/validators";
export default {
    props: {
        error: {
            type: Boolean,
        },
        errorText: {
            default: "",
        },
        value: {
            default: false,
        },
        label: {
            type: String,
        },
        inputClass: {
            type: String,
            default: "",
        },
        value: {
            default: null,
        },
        placeholder: {
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        border: {
            type: String,
            required: false,
        },
        rows: {
            type: Number,
            default: 4,
        },
        is_required: {
            type: Boolean,
            default: false,
        },
        rules: {
            default: null,
        },
        maxlength: {
            type: Number,
            default: 250,
        },
    },
    validations() {
        return {
            value: this.requiredValidations,
        };
    },
    methods: {
        validate() {
            this.$v.value.$touch();
            return this.$v.value.$error;
        },
        resetValidate() {
            this.$v.$reset();
        },
        handleChange(_value) {
            this.$emit("input", _value);
        },
        preventInput($event) {
            const keyCode = $event.keyCode ? $event.keyCode : $event.which;
            if (keyCode > 59 && keyCode < 63) $event.preventDefault();
        },
        pasteHandle($event) {
            const textClipboard = $event.clipboardData.getData("text");
            const noPermitList = ["script", "<", ">", "&"];
            let incident = 0;

            noPermitList.forEach((item) => {
                if (textClipboard.indexOf(item) >= 0) {
                    incident = ++incident;
                }
            });

            if (incident > 0) {
                $event.preventDefault();
                return false;
            }
        },
    },
    computed: {
        requiredValidations() {
            let validations = {};

            if (this.rules) {
                if (this.rules.required) {
                    validations = {
                        ...validations,
                        required,
                    };
                }

                if (this.rules.minLength) {
                    validations = {
                        ...validations,
                        minLength: minLength(this.rules.minLength),
                    };
                }

                if (this.rules.maxLength) {
                    validations = {
                        ...validations,
                        maxLength: maxLength(this.rules.maxLength),
                    };
                }

                if (this.rules.alpha) {
                    validations = {
                        ...validations,
                        alpha,
                    };
                }

                if (this.rules.alphaNum) {
                    validations = {
                        ...validations,
                        alphaNum,
                    };
                }

                if (this.rules.numeric) {
                    validations = {
                        ...validations,
                        numeric,
                    };
                }

                if (this.rules.email) {
                    validations = {
                        ...validations,
                        email,
                    };
                }

                if (this.rules.sameAs) {
                    validations = {
                        ...validations,
                        sameAs: sameAs(this.rules.sameAs),
                    };
                }
            }

            return validations;
        },
        messageError() {
            if (this.$v.value.required === false) {
                return `El campo ${
                    this.identity
                }, es requerido`;
            }
            if (this.$v.value.minLength === false) {
                return `El campo ${this.identity}, minimo ${
                    this.$v.value.$params.minLength.min
                } caracteres`;
            }
            if (this.$v.value.maxLength === false) {
                return `El campo ${
                    this.identity
                }, maximo ${
                    this.$v.value.$params.maxLength.max
                } caracteres`;
            }
            if (this.$v.value.alpha === false) {
                return `El campo ${
                    this.identity
                }, debe ser solo de caracteres`;
            }
            if (this.$v.value.alphaNum === false) {
                return `El campo ${
                    this.identity
                }, debe ser alfanumerico`;
            }
            if (this.$v.value.numeric === false) {
                return `El campo ${
                    this.identity
                }, debe ser solo numerico`;
            }
            if (this.$v.value.email === false) {
                return `El campo ${
                    this.identity
                }, debe tener estructura de correo`;
            }
            return "";
        },
    },
};
</script>
