const app = Vue.createApp({
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
          img: 'assets/1.jpg',
          myFav: true
        },
        {
          artist: 'Black Coffee',
          album: 'Pieces of Me',
          genre: 'House',
          img: 'assets/2.jpg',
          myFav: false
        },
        {
          artist: 'Sho Madjozi',
          album: 'Limpopo Champions League',
          genre: 'Gqom',
          img: 'assets/3.jpg',
          myFav: true
        }
      ]
    }
  },
  methods: {
    toggleShowDiscography() {
      this.showDiscography = !this.showDiscography;
    },
    toggleFav(discography) {
      discography.myFav = !discography.myFav;
    }
  }
})

app.mount('#app');