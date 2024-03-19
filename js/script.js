const { createApp } = Vue;

createApp({

  data(){
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: []

    }
  },

  methods: {

    getApi(){
      // creo un ciclo for per riempire l'array
      for(let i = 0; i < 10; i++){
      // attraverso l'api faccio un push dell'email generata nell'array emails  
        axios.get(this.apiUrl).then( (res) => {
          console.log(res.data.response);
          this.emails.push(res.data.response)
        })
      }
    }

  },

  mounted(){
    this.getApi()
  }

}).mount('#app')