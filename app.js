const app = Vue.createApp({
    // short hand for a function
    data() {
        // We are returning an object inside the function
      return {
        name: 'Xolani',
        verb: ' is',
        sentence: ' living his best life at',
        age: '25'
      }
    }
})

app.mount('#app');