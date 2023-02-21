


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

var pesoValido = validaPeso(peso);
var alturaValida = validaAltura(altura);

var tdImc =  paciente.querySelector(".info-imc");

if (!pesoValido){

    tdImc.textContent = "Peso Invalido"
    pesoValido = false;

    /*ADICIONAR CLASSE*/
    paciente.classList.add("paciente-invalido")
}

if (!alturaValida){
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

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}
