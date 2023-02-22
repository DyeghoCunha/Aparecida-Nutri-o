var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(() => {
        event.target.parentNode.remove();
        
    }, 1800);

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;


    // paiDoAlvo.remove();



})



// pacientes.forEach(function(paciente){

//     paciente.addEventListener("dblclick", function(){

//     console.log("Fui clicado com um duplo clique");

//     this.remove()
// })


// })