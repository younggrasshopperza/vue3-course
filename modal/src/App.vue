<template>
  <h1>{{ title }}</h1>
  <p>Have a look at our promotion</p>
  <div v-if="showModal">
    <Modal theme="promotion" @close="toggleModal" >
      <template v-slot:links>
        <a href="#">Register</a>
        <a href="#">Find Out More</a>
      </template>
      <h1>Young Grasshopper</h1>
      <p>Come get your 50% discount now whilst stock last!</p>
    </Modal>
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
