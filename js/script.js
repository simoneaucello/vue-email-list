const { createApp } = Vue;

createApp({

  data(){
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: []

    }
  },

  methods: {


  },

  mounted(){

  }

}).mount('#app')