const app = Vue.createApp({
  // short hand for a function
  data() {
      // We are returning an object inside the function
    return {
      showDiscography: true,
      discographies: [
        {
          artist: 'Soa Mattrix',
          album: 'uThando',
          genre: 'Amapiano'
        },
        {
          artist: 'Black Coffee',
          album: 'Pieces of Me',
          genre: 'House'
        },
        {
          artist: 'Sho Madjozi',
          album: 'Limpopo Champions League',
          genre: 'Gqom'
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