<template>

    <label for="close-menu" class="close-menu-label">
        <input type="checkbox" :checked="checked" id="close-menu" class="close-menu" />
        <span></span>
        <span></span>
        <span></span>
        
    </label>
    

    
</template>
<script>

export default {
    
    props: {
        checked: { required: true },
    },
    
}
</script>
<style scoped>

 .close-menu-label {
    display: flex;
    flex-direction: column;
    width: 21px;
    cursor: pointer;
  }

  .close-menu-label span {
    background: #1E40AF;
    border-radius: 10px;
    height: 4px;
    margin: 2px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  .close-menu-label span:nth-of-type(1){
    width: 50%;
  }
  .close-menu-label span:nth-of-type(2){
    width: 100%;
  }
  .close-menu-label span:nth-of-type(3){
    width: 75%;
  }
  .close-menu {
    display: none;
  }
  .close-menu:checked ~ span:nth-of-type(1){
    transform-origin: bottom;
    transform: rotatez(45deg) translate(3px, 1px);
  }
  .close-menu:checked ~ span:nth-of-type(2){
    transform-origin: top;
    transform: rotatez(-45deg);
  }
  .close-menu:checked ~ span:nth-of-type(3){
    transform-origin: bottom;
    width: 50%;
    transform: translate(9px, -6px) rotatez(45deg);
  }
  
    body{
      overflow: hidden;
      
    }

   
</style>