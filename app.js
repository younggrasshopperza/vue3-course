const app = Vue.createApp({
  // short hand for a function
  data() {
      // We are returning an object inside the function
    return {
      showSentence: true,
      name: 'Xolani',
      sentence: ' is living his best lives at',
      age: 25
    }
  },
  methods: {
      toggleShowSentence() {
        // ! is used to reverse the value to what it is not: switching between true and false
        this.showSentence = !this.showSentence
      }
  }
})

app.mount('#app');