<template>
  <h1>{{ title }}</h1>
  <p>Have a look at our promotion</p>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="promotion" @close="toggleModal" />
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'Young Grasshopper',
      header: 'Sign up to win a prize!',
      text: 'Come get your 50% discount now whilst stock last!',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
