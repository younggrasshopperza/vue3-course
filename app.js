const app = Vue.createApp({
  // short hand for a function
  data() {
      // We are returning an object inside the function
    return {
      name: 'Xolani',
      sentence: ' is living his best life at',
      age: 25
    }
  },
  methods: {
      changeName() {
        // putting the word 'this' infront of the data value references the component itself   
        this.name = "Palesa";
      },
      // can access the value passed through the paramenter
      changeSentence(sentence) {
          this.sentence = sentence;
      }
  }
})

app.mount('#app');