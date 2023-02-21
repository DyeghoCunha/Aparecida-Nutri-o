
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
                event.preventDefault();
            
                var form = document.querySelector("#form-adiciona");
                var paciente =  obtemPacienteDoFormulario(form);
                
                var erros = validaPaciente(paciente);

                
                if(erros.length > 0){
                    exibeMensagensDeErro(erros);
                    return;
                }
                
                var pacienteTr = montaTr(paciente);
                
                var tabela = document.querySelector("#tabela-pacientes");
                
                tabela.appendChild(pacienteTr);
                
                form.reset();
                var mensagensErro = document.querySelector("#mensagen-erro");
                mensagensErro.innerHTML=""
            });


            function exibeMensagensDeErro(erros){
                var ul = document.querySelector("#mensagem-erro");
                    ul.innerHTML = ""
                erros.forEach( function(erro){
                    var li = document.createElement("li");
                    li.textContent = erro;
                    ul.appendChild(li);
                })
            }




            function obtemPacienteDoFormulario(form){

                var paciente = {
                    nome: form.nome.value,
                    peso: form.peso.value,
                    altura: form.altura.value,
                    gordura: form.gordura.value,
                    imc: calculaIMC(form.peso.value, form.altura.value)
                }

                return paciente;
            }

            function montaTr(paciente){


                var pacienteTr = document.createElement("tr");
                pacienteTr.classList.add("paciente");


                var nomeTd = montaTd(paciente.nome, "info-nome");
                var pesoTd = montaTd(paciente.peso,"info-peso");
                var alturaTd = montaTd(paciente.altura, "info-altura");
                var gorduraTd = montaTd(paciente.gordura, "info-gordura");
                var imcTd = montaTd(paciente.imc, "info-imc");



              /*  Foi substituido pela Function
               
                var pacienteTr = document.createElement("tr");
                pacienteTr.classList.add("paciente")
                var nomeTd = document.createElement("td")
                nomeTd.classList.add("info-nome");
                var pesoTd = document.createElement("td");
                pesoTd.classList.add("info-peso");
                var alturaTd = document.createElement("td");
                alturaTd.classList.add("info-altra");
                var gorduraTd = document.createElement("td");
                gorduraTd.classList.add("info-gordura");
                var imcTd = document.createElement("td");
                imcTd.classList.add("info-imc") */

                    nomeTd.textContent = paciente.nome;
                    pesoTd.textContent = paciente.peso;
                    alturaTd.textContent = paciente.altura;
                    gorduraTd.textContent = paciente.gordura;
                    imcTd.textContent = paciente.imc;

                    var tabela = document.querySelector("#tabela-pacientes")

                    tabela.appendChild(pacienteTr);

                    pacienteTr.appendChild(nomeTd);
                    pacienteTr.appendChild(pesoTd);
                    pacienteTr.appendChild(alturaTd);
                    pacienteTr.appendChild(gorduraTd);
                    pacienteTr.appendChild(imcTd);  




                return pacienteTr;

            }

            function montaTd(dado,classe){
                var td = document.createElement("td");
                td.textContent = dado;
                td.classList.add(classe);

                return td;
            }

          function validaPaciente(paciente){

            var erros = [];

            if( paciente.nome.length == 0){
                erros.push("O nome não pode ser em branco")
            }

            if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
                
            
            if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

            if (paciente.gordura.length == 0 ){
                erros.push("0 % de gordura não pode ficar em branco")
            }

            if(paciente.peso.length == 0){
                erros.push("O peso não pode ficar em branco")
            }

            if(paciente.altura.length == 0){
                erros.push("A altura não pode ficar em branco")
            }

            return erros;
          }