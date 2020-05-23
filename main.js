Vue.component('stock', {

  template: `
  <div>
    <h1>stock</h1>
    <ul>
      <li v-for="genre in genres">{{genre.genre}}</li>
    </ul>
  </div>
  `,
  data() {
    return {
      genres: [{
        genreId: 1,
        genre: "Rock",
      }, {
        genreId: 2,
        genre: "Punk",
      }],
    }
  }
})

var app = new Vue({
  el:'#app',
  data: {
    product: "Electric Wizard",
    image: "EW_DT.jpg",
    cart: 0,
    records: [{
      recordId: 1,
      recordArtist: "Electric Wizard",
      recordTitle: "Dopethrone",
      recordImage: "EW_DT.jpg",
      recordPrice: 10,
    },
    {
      recordId: 2,
      recordArtist: "Boris",
      recordTitle: "Pink",
      recordImage: 'B_P.jpg',
      recordPrice: 12,
    },
    {
      recordId: 3,
      recordArtist: "Black Flag",
      recordTitle: "My War",
      recordImage: "BF_MW.jpg",
      recordPrice: 21,
    }
  ]
  },
  methods: {
    updateProduct(recordImage){
      this.image = recordImage
    },

    addToCart(){
      this.cart += 1
    }
  }
})