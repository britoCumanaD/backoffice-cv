<template>
    <form class="w-full lg:col-start-2 lg:col-end-12" @submit.prevent="submit">
        <section class="grid grid-cols-2 gap-x-7">
            <section
                v-for="(field, index) in formFields"
                :key="index"
                :class="{ 'col-span-2': index > 1 || isMobile }"
            >
                <component
                    :identity="field.name"
                    v-if="field.type !== 'crm_telephone'"
                    :label="field.type !== 'textarea' ? field.name : ''"
                    :type="field.type !== 'textarea' ? 'text' : ''"
                    :placeholder="
                        field.type === 'textarea' ? field.name : ''
                    "
                    class="mb-9"
                    v-model="contactData[field.slug]"
                    :ref="field.slug"
                    :rules="rules[field.slug]"
                    :is="typeComponent[field.type]"
                    :rows="field.settings.rows"
                />

                <template v-else>
                    <span
                        class="ml-2 mb-2 text-sm text-gray-1300"
                        v-text="field.name"
                    />

                    <VuePhoneNumberInput
                        class="mb-9 shadow-general"
                        :error="true"
                        show-code-on-list
                        :border-radius="8"
                        valid-color="#e5e7eb"
                        error-color="#e5e7eb"
                        color="#e5e7eb"
                        :translations="{
                            phoneNumberLabel: '',
                        }"
                        no-validator-state
                        default-country-code="EC"
                        no-example
                        v-model="prePhone"
                        @update="phone = $event"
                    />
                </template>
            </section>
        </section>

        <section class="mt-11 flex justify-center">
            <button
                type="submit"
                class="rounded-lg w-56 h-10 bg-blue-600 gap-x-4 text-white focus:outline-none transition duration-400 hover:bg-blue-800"
                :class="{ 'opacity-70 cursor-not-allowed': loading }"
                :disabled="loading"
                v-text="
                    `${loading ? 'Enviando...' : 'Enviar'}`
                "
            />
        </section>
    </form>
</template>
<script>
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import configMixin from "../../mixins/configMixin";
import InputField from "./InputField.vue";
import TextArea from "./TextArea.vue";
import VuePhoneNumberInput from "vue-phone-number-input";
export default {
    mixins: [configMixin],
    props: {
        idForm: {
            required: true,
        },
        formFields: {
            required: true,
        },
    },
    components: {
        VuePhoneNumberInput,
        InputField,
        TextArea,
    },
    data: () => ({
        loading: false,
        renderForm: false,
        typeComponent: {
            text: "InputField",
            number: "InputField",
            crm_first_name: "InputField",
            crm_last_name: "InputField",
            crm_email: "InputField",
            crm_telephone: "InputField",
            textarea: "TextArea",
        },
        rules: {},
        contactData: {},
        prePhone: null,
        phone: null,
    }),
    mounted() {
        this.formFields.forEach((item) => {
            this.contactData = {
                ...this.contactData,
                [item.slug]: item.value,
            };

            this.rules = {
                ...this.rules,
                [item.slug]: {
                    required: item.is_required,
                    email: ["email", "crm_email"].includes(item.type),
                },
            };

            if (item.type !== "crm_telephone" && this.$refs[item.slug]) {
               this.$refs[item.slug] = this.$refs[item.slug][0];
            }
        });

        this.$nextTick(() => {
            this.$emit("ready");
        });
    },
    methods: {
        validate() {
            let haveError = false;

            this.formFields.forEach((item) => {
                if (item.type !== "crm_telephone" && this.$refs[item.slug]) {
                    if (this.$refs[item.slug].validate()) haveError = true;
                }

                if (item.type === "crm_telephone") {
                    console.log(this.phone.formattedNumber)
                    if (this.phone === null || !this.phone.formattedNumber)
                        haveError = true;
                }
            });

            return haveError;
        },

        async submit() {
            if (this.validate()) return;

            this.loading = true;

            if(this.phone){
                this.contactData = {
                    ...this.contactData,
                    crm_telephone: this.phone.formattedNumber.slice(1, -1),
                };
            }

            try {
                const { status } = await axios.post(
                    this.$route("api.form-submission.store", this.idForm),
                    this.contactData
                );

                this.loading = false;

                this.formFields.forEach((item) => {
                    this.contactData[item.slug] = "";
                });

                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });

                if (status === 200) this.$emit("send");
            } catch (error) {
                this.loading = false;
                console.log(e);
            }
        },
    },
};
</script>
