


var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for( i = 0; i < pacientes.length ; i++){

var paciente = pacientes[i]

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

var tdImc =  paciente.querySelector(".info-imc");

if (peso <= 0 || peso >=1000){

    tdImc.textContent = "Peso Invalido"
    pesoValido = false;

    /*ADICIONAR CLASSE*/
    paciente.classList.add("paciente-invalido")
}

if (altura <= 0 || altura >=3){
    tdImc.textContent = "Altura Invalida"
    alturaValida = false;
    paciente.style.backgroundColor = "red";
}


if (pesoValido == true && alturaValida == true){
function calculaIMC(pesoPaciente,alturaPaciente){
    var imcCalc = pesoPaciente / Math.pow(alturaPaciente, 2)
        
    return imcCalc.toFixed(2);
}

}
tdImc.textContent = calculaIMC(peso,altura);
}



titulo.addEventListener("click",mostraMensagem);

function mostraMensagem(){
    console.log("Ola eu fui clicado");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
                event.preventDefault();
            
                var form = document.querySelector("#form-adiciona");

                var nome = form.nome.value;
                var peso = form.peso.value;
                var altura = form.altura.value;
                var gordura = form.gordura.value;

                var pacienteTr = document.createElement("tr");
                var nomeTd = document.createElement("td")
                var pesoTd = document.createElement("td");
                var alturaTd = document.createElement("td");
                var gorduraTd = document.createElement("td");

                    nomeTd.textContent = nome;
                    pesoTd.textContent = peso;
                    alturaTd.textContent = altura;
                    gorduraTd.textContent = gordura;

                    var tabela = document.querySelector("#tabela-pacientes")

                    tabela.appendChild(pacienteTr);

                    pacienteTr.appendChild(nomeTd);
                    pacienteTr.appendChild(pesoTd);
                    pacienteTr.appendChild(alturaTd);
                    pacienteTr.appendChild(gorduraTd);

                    console.log(pacienteTr)
            
            })


