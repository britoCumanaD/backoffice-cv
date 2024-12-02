<template>
    <section class="flex justify-between items-center gap-x-12 gap-y-6 flex-col" :class="{ 'lg:flex-row-reverse': isInverted, 'lg:flex-row': !isInverted }">
        <section class="bg-gray-400 rounded-xl w-full lg:w-80 h-48 m-4" />
        <p class="text-lg lg:max-w-md" v-text="'Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.'"/>
    </section>
</template>
<script>
export default {
    props:{
        isInverted: {
            default: false,
        }
    }
}
</script>