<template>
  <section class="flex flex-col items-center lg:items-start px-6">
    <div class="bg-gray-400 h-40-px w-10 rounded-xl" />
    <p class="pt-6 text-xl font-bold" v-text="title"/>
    <p class="pt-3 text-lg" v-text="text"/>
  </section>
</template>
<script>
export default {
    props:{
        title: {
            default: 'Agregar título de banner segun la Temática'
        },
        text:{
            default: 'Lorem Ipsum is simply dummy textof the printing and typesetting industry.'
        }
    }
}
</script>
