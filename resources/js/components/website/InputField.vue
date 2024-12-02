<template>
    <label class="w-full flex flex-col">
        <span
            class="ml-2 mb-2 text-sm"
            :class="$v.value.$error ? 'text-red-500' : ' text-gray-1300'"
            v-text="label"
        />

        <input
            class="rounded-lg shadow-general text-base w-full focus:outline-none p-3 border-0"
            :id="identity"
            :name="identity"
            :type="type"
            :placeholder="placeholder"
            :value="value"
            @input="handleChange($event.target.value)"
        />

        <span
            v-if="$v.value.$error"
            class="font-medium text-red-500 text-xs mt-2"
            v-text="messageError"
        />
    </label>
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
} from "vuelidate/lib/validators";

export default {
    name: "TextField",
    props: {
        label: {
            type: String,
            default: "Label",
        },
        value: {
            default: null,
        },
        placeholder: {
            default: "",
        },
        identity: {
            defaul: "",
        },
        type: {
            default: "text",
        },
        rules: {
            default: null,
        },
    },
    validations() {
        return {
            value: this.requiredValidations,
        };
    },
    methods: {
        handleChange(_value) {
            this.$emit("input", _value);
        },
        validate() {
            this.$v.value.$touch();
            return this.$v.value.$error;
        },
        resetValidate() {
            this.$v.$reset();
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
            }

            return validations;
        },
        messageError() {
            if (this.$v.value.required === false) {
                return `El campo ${this.identity}, es requerido`;
            }
            if (this.$v.value.minLength === false) {
                return `El campo ${this.identity}, debe tener minimo ${this.$v.value.$params.minLength.min} caracteres`;
            }
            if (this.$v.value.maxLength === false) {
                return `El campo ${this.identity}, debe tener maximo ${this.$v.value.$params.maxLength.max} caracteres`;
            }
            if (this.$v.value.alpha === false) {
                return `El campo ${this.identity}, debe ser solo de caracteres`;
            }
            if (this.$v.value.alphaNum === false) {
                return `El campo ${this.identity}, debe ser alfanumerico`;
            }
            if (this.$v.value.numeric === false) {
                return `El campo ${this.identity}, debe ser solo numerico`;
            }
            if (this.$v.value.email === false) {
                return `El campo ${this.identity}, debe tener estructura de correo`;
            }
            if (this.$v.value.countrys === false) {
                return `El campo ${this.identity}, debe tener estructura de correo`;
            }
            return "";
        },
    },
};
</script>
