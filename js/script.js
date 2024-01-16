const { createApp } = Vue

createApp({
    data() {
        return {
            // inserisco la mia api che non è altro che il server.php  
            apiUrl: './server.php',
            // serve la lista delle cose da inserire
            songsList : [],
        }
    },
    /* devo chiamare api e sovrascriverla: 
        1. creo methods che crea songsList
        2. dentro faccio chiamata axios
        3.faccio hook per richiamarla tramite created()
    */
        methods: {
            getSongsList(){
                axios.get(this.apiUrl).then((response) =>{
                    this.songsList = response.data;
    
                    console.log(response.data);
                });
            }
        },
    
        created(){
            this.getSongsList();
        }
    


}).mount('#app')