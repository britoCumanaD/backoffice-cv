<template>
    <div>
        <input type="text" class="col-span-6 lg:col-span-9 input-group-input mt-4" v-model="filterIcon" placeholder="Search a icon">
        <section class="grid grid-cols-6 lg:grid-cols-9 gap-4 bg-gray-150 rounded-md mb-4 p-4 h-32 overflow-y-auto light-scroll">
            <button type="button" v-for="(icon, i) in listIconsToShow" :key="`icon-${i}`"
                class="h-10 w-10  rounded-md border border-solid hover:border-gray-700 hover:bg-gray-200 transition-all duration-400 flex items-center justify-center"
                :class="inputValue == icon ? 'border-gray-700 bg-gray-200' : 'bg-white border-white'"
                @click="$emit('input', icon) ">
                <component :is="icon"/>

            </button>

        </section>
    </div>
</template>

<script>

    export default {
        name: "ListIcons",
        model: {
            prop: 'inputValue'
        },
        props: {
            listsIcons: {
                required: true,
                type: Array
            },
            inputValue: {
                default: '',
                type: String
            },
        },
        data() {
            return {
                filterIcon:''
            }
        },
        computed:{
            listIconsToShow(){
                return this.listsIcons.filter((icon) => icon.toLowerCase().includes(this.filterIcon))
            }
        }
    }
</script>
