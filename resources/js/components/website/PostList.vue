<template>
    <section class="shadow-md mb-8 lg:mb-4">
        <inertia-link
            class="rounded w-full lg:flex mb-10 text-gray-700 transition duration-500 hover:text-black"
            :href="post.url_only.url_full"
        >
            <div 
                class="h-48 sm:w-125 m-auto lg:w-48 flex-none bg-cover text-center overflow-hidden transition duration-500 hover:opacity-75" 
                :v-if="image!=''"
                :style="{
                    backgroundImage: `url(${image})`,
                }"
                :title="post.name"
            />
            <div class="rounded px-4 flex flex-col justify-between">
                <div>
                    <div class="mt-3 md:mt-0 font-bold text-2xl mb-2" v-text="post.name" />
                    <p v-text="description" />
                </div>
            </div>
        </inertia-link>

    </section>
</template>
<script>
export default {
    props:{
        post:{
            required:true,
            type: Object
        }
    },
    data: () => ({
        image: '',
        description:''
    }),
    mounted(){
        this.post.content.forEach(element => {
            if(element.template_field.slug == "image")
                this.image=element.data
            if(element.template_field.slug == "sort-description")
                this.description=element.data
        });
    }
};
</script>
