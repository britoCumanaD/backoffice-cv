<template>
    <section v-if="createForm">

        <form
            autocomplete="off"
            @submit.prevent="submit"
        >
            <section class="grid lg:grid-cols-2 py-2.5 gap-y-5 gap-x-8">

                <section v-for="(item, key) in form.form_fields" :key="key" 
                    :class="item.type == 'textarea' ? 'col-span-2' : ''">
                    <input-field v-if="item.type == 'text' || item.type == 'email'"
                        :identity="item.slug"
                        :ref="item.slug"
                        :type="item.type"
                        :is_required="item.is_required"
                        :maxlength="item.settings.max_length ? parseInt(item.settings.max_length) : 250"
                        :placeholder="`${item.name}${item.is_required ? '*' : ''}`"
                        v-model="contactData[item.slug]"
                        :rules="{
                            required: true,
                        }"
                    />
                    <text-area v-else-if="item.type == 'textarea'"
                        :rows="item.settings.rows"
                        :placeholder="item.name"
                        :is_required="item.is_required"
                        v-model="contactData[item.slug]"
                    />
                    <div v-else>
                        Not found{{item.type}}
                    </div>
                </section>
            </section>

            <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <section v-show="showMsj" class="bg-green-400 text-white transition-opacity rounded-md px-4 py-2 text-center mb-4 bg-opacity-80" >
                    {{msj}}
                </section>
            </transition>

            <button class="bg-gray-700 rounded-xl w-full text-white text-lg px-4 py-2 hover:opacity-80 transition-all duration-400"
                type="submit" v-if="!loading"
                :style="{backgroundColor: configValues.secondaryColor}">
                Enviar
            </button>
            <button class="bg-gray-700 rounded-xl w-full text-white text-lg px-4 py-2 opacity-80"
            :style="{backgroundColor: configValues.secondaryColor}" v-else>
                Enviando...
            </button>
        </form>
    </section>
</template>
<script>
import configMixin from "../../mixins/configMixin.js"
export default {
    mixins: [configMixin],
    props:{
        form:{
            type: Object,
        },
    },
    mounted(){
        this.form.form_fields.forEach(item => {
            this.contactData[item.slug] = null
        });
        this.createForm = true
    },
    components: {
        InputField: () => import("./InputField.vue"),
        TextArea: () => import("./TextArea.vue"),
        MainButton: () => import("./MainButton.vue")
    },
    data: () => ({
        contactData: {},
        createForm:false,
        msj:'',
        showMsj: false,
        loading: false,
    }),
    methods:{

        submit() {
            this.loading = true
            axios.post(
                this.$route('api.form-submission.store', this.form.id), this.contactData
            ).then(response => {
                this.loading = false
                if(response.status==200){
                    this.showMsj = true
                    this.msj =  response.data.message
                    const selt = this
                    setTimeout(function (){
                        selt.showMsj = false                    
                    }, 3000);
                }
                this.form.form_fields.forEach(item => {
                    this.contactData[item.slug] = ''
                });


            }).catch(e => {
                this.loading = false
                console.log(e)
            });
        }
    }
};
</script>
