<template>
  <button
    class="text-lg bg-black text-white font-bold py-20-px rounded-xl w-full lg:w-80"
    v-text="text"
  />
</template>
<script>
export default {
    props:{
        text: {
            default: 'Boton principal'
        }
    }
}
</script>
