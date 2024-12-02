<template>
    <section class="flex justify-center" v-if="lastPage>1">
        <inertia-link v-for="(link, index) in lastPage" :key="index"
            v-text="link"
            class="px-4 py-2 border rounded-md border-gray-400 hover:bg-blue-800 hover:text-white transition duration-400"
            :class="[{'bg-blue-700 text-white' : currentPage == link}]"
            :href="`${url}?page=${link}`"
        />
    </section>
</template>
<script>
    export default {
        props: {
            lastPage:{
                type: Number,
            },
            currentPage:{
                type: Number,
            },
            url:{
                type: String
            },
        },
    };
</script>