<template>
  <div class="block" v-if="showBlock">
      Click Me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
      return {
        showBlock: false
      }
    },
    // This will execute as soon as this component is mounted to the dom (on the index.html in the div where the id="app")
    mounted() {
      // We are delaying the time it will take for the code to execute using the prop, delay  
      setTimeout(() => {
        // The div block is displayed after the delay is complete  
        this.showBlock = true;
      }, this.delay);  
    },
    // This will execute as any data is updated inside this component
    updated() {
        console.log("component updated");
    },
    // This will execute when the component has been unmounted from the dom (when the component is no longer accessible in the App.vue file)
    unmounted() {
        console.log("unmounted");
        // comment the block componenent in the App.vue to after pressing play to view the console log above
        // This is beneficial for when we start using Vue routing and change from one page to another page
    }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>