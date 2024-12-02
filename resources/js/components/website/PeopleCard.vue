<template>
    <section class="w-full border border-black rounded-5 pb-6 px-6 pt-8 lg:pt-7">
        <section class="flex justify-between py-1">
            <article>
                <p class="font-bold text-xl" v-text="'Pedro Bonilla'"/>
                <p class="pt-1" v-text="'Diseñador Gráfico'" />
            </article>
            <div class="h-15 w-15 bg-gray-400 rounded-full"/>
        </section>
        <section class="lg:text-lg pt-6">
            <p v-text="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.'" />
        </section>
        <section class="flex justify-between items-center pt-6">
            <p class="text-xl" v-text="'Lorem Ipsum'"/>
            <section class="flex justify-center items-center gap-x-5">
                <div class="bg-gray-400 rounded-full w-7.5 h-7.5"/>
                <div class="bg-gray-400 rounded-full w-7.5 h-7.5"/>
                <div class="bg-gray-400 rounded-full w-7.5 h-7.5"/>
            </section>
        </section>
    </section>
</template>
<script>
export default {
    props:{

    },
}
</script>