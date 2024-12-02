<template>
    <section>

        <inertia-link
            class="mb-8 w-full relative rounded inline-block h-96"
            :href="post.url_only.url_full"
        >
            <div class="absolute left-0 bottom-0 w-full h-full z-10 hover:opacity-80 duration-500 transition" style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));" />

            <img :src="image" v-if="image!=''" alt="Main post image" 
            class="object-cover h-96 w-full"/>

            <div class="p-4 absolute bottom-0 left-0 z-20">

                <inertia-link
                    class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                    :href="post.parent_name.url_only.url_full"
                    v-text="post.parent_name.name" 
                />

                <h2 class="text-4xl font-semibold text-gray-100 leading-tight" v-text="post.name" />

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
    }),
    mounted(){
        this.post.content.forEach(element => {
            if(element.template_field.slug == "image")
                this.image=element.data
        });
    }
};
</script>
