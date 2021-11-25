const app = Vue.createApp({
  // short hand for a function
  data() {
      // We are returning an object inside the function
    return {
      showSentence: true,
      name: 'Xolani',
      sentence: ' is living his best lives at',
      age: 25,
      x: 0,
      y: 0
    }
  },
  methods: {
      toggleShowSentence() {
        // ! is used to reverse the value to what it is not: switching between true and false
        this.showSentence = !this.showSentence
      },
      // inserting a value in the first parameter will allow you to view the event object 
      handleEvent(e, number) {
        // open the console on the web browser to view the event
        console.log(e, e.type);
        //will only work if we are passing an arguement in the parameter
        if(number) {
          console.log(number);
        }
      },
      handleMouseMove(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
  }
})

app.mount('#app');