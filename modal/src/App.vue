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

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo" >
      <h1>Register for promotions</h1>
      <p>Do not miss out of upcoming promo codes!</p>
    </Modal>
  </div>
  <button @click="toggleModal">Info</button>
  &nbsp;
  <button @click="toggleModalTwo">Register</button>
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
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
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
