<template>
    <div>
        <input-group
            :error-message="errorMessage"
            :input-autocomplete="inputName"
            :input-id="inputName"
            :input-max-length="20"
            :input-name="inputName"
            :input-required="templateField.is_required"
            input-type="hidden"
            label-class=""
            :label-text="templateField.name"
            v-model="phone"
        >
            <template #inputPrepend>
                <VuePhoneNumberInput
                    no-example
                    v-model="phone"
                    :default-country-code="defaultCode"
                    @update="updatePhone"
                    :translations="{
                        countrySelectorLabel: 'Country',
                        phoneNumberLabel: 'Phone'
                    }"
                />
            </template>
        </input-group>

    </div>
</template>

<script>
    import InputGroup from "../../../../core/forms/InputGroup";
    import VuePhoneNumberInput from "vue-phone-number-input";
    import "vue-phone-number-input/dist/vue-phone-number-input.css";
    import countryCode from "./countryCode.json";

    export default {
        name: "PhoneField",
        model: {
            prop: 'content',
        },
        data() {
            return {
                phone: this.content ? this.content.phone : '',
                defaultCode: ''
            }
        },
        mounted(){
            this.defaultCode = this.content ? countryCode[this.content.code] : 'EC';
        },
        props: {
            content: {
                required: true,
            },
            templateField: {
                required: true,
                type: Object
            },
            typeInput:{
                type: String,
                default: 'text'
            }
        },
        components: {
            InputGroup,
            VuePhoneNumberInput
        },
        computed: {
            inputMaxLength() {
                try {
                    return this.templateField.settings.max_length;
                } catch (e) {
                    return '';
                }
            },
            errorMessage() {
                // Returns either the first error message for the field, or false
                try {
                    if (!Array.isArray(this.inputErrors)) {
                        return this.inputErrors;
                    }

                    return this.inputErrors[0];
                } catch (e) {
                    return false;
                }
            },
            inputErrors() {
                try {
                    let errors = [];
                    _.forEach(this.$page.props.errors, (e, slug) => {
                        if (slug.indexOf(this.inputName) === 0) {
                            e = _.replace(e, this.inputName + '.', '');
                            e = _.replace(e, this.inputName, '');
                            errors.push(e);
                        }
                    })

                    return errors;
                } catch (e) {
                    return false;
                }
            },
            inputName() {
                return 'content.' + this.templateField.id;
            }
        },
        methods:{
            updatePhone(e){
                if(e.countryCallingCode){
                    this.$emit('input', {
                        code: `+${e.countryCallingCode}`,
                        phone: this.phone,
                        fullPhone: `+${e.countryCallingCode}-${this.phone}`
                    })
                }
            },
        }
    }
</script>
