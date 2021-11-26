const app = Vue.createApp({
  // short hand for a function
  data() {
      // We are returning an object inside the function
    return {
      url: "https://www.younggrasshopper.co.za",
      showDiscography: true,
      discographies: [
        {
          artist: 'Soa Mattrix',
          album: 'uThando',
          genre: 'Amapiano',
          img: 'assets/1.jpg'
        },
        {
          artist: 'Black Coffee',
          album: 'Pieces of Me',
          genre: 'House',
          img: 'assets/2.jpg'
        },
        {
          artist: 'Sho Madjozi',
          album: 'Limpopo Champions League',
          genre: 'Gqom',
          img: 'assets/3.jpg'
        }
      ]
    }
  },
  methods: {
    toggleShowDiscography() {
      this.showDiscography = !this.showDiscography;
    }
  }
})

app.mount('#app');