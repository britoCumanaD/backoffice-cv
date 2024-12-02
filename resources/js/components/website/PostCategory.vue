<template>
    <inertia-link :href="post.url_only.url_full" class="focus:outline-none shadow-md hover:shadow-xl transition duration-500">
        <img role="img" class="focus:outline-none w-full object-cover h-40 transition duration-500 hover:opacity-80" :src="image" :alt="`${post.name} img`" />
        
        <div class="bg-white px-6 py-4 flex flex-col justify-between h-56">

            <section>
                <h1 class="focus:outline-none text-2xl text-gray-900 font-semibold truncate hover:text-blue-800 transition duration-500" v-text="post.name"/>
                <p class="focus:outline-none text-gray-700 mt-2 overflow-ellipsis overflow-hidden " v-text="description" 
                    style="
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
                    "
                />
            </section>

            <div class="w-full flex justify-end" >
                <button class="focus:outline-none focus:ring-2 ring-offset-2 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span class="text-blue-800" v-text="$t('BLOG.READ_MORE')" />
                </button>
            </div>
        </div>
    </inertia-link>
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
