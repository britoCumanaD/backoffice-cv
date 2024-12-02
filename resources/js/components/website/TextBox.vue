<template>
  <section class="w-full h-60 rounded-2.5 text-white bg-cover relative" 
    :style="[
        alternateColor ? { backgroundColor: configValues.secondaryColor } : {backgroundColor: configValues.primaryColor},
        img!='' ?  {backgroundImage: `url(${img})`} : {}
    
    ]"
    >
    <div class="absolute w-full h-full bg-opacity-30 bg-black p-7 rounded-2.5">
        <p class="text-2xl font-bold" v-text="title"/>
        <p class="pt-6" v-text="text"/>
    </div>
  </section>
</template>
<script>
import configMixin from '../../mixins/configMixin'
export default {
    mixins: [configMixin],
    props:{
        alternateColor: {
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        img:{
            type: String,
            default: ''
        },
        configValues:{}
    }
}
</script>
