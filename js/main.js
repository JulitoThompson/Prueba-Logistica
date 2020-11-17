
$(document).ready(function () {
    
    $.getJSON('http://127.0.0.1:3000/elefantes',function(resultado){
    }).done(function (resultado) {
  
    
        const elefantes = resultado; 
        const ultimo = elefantes.findIndex(element=> element.__v ==  0)
        const sex = document.querySelector('#btn_sex')
        const resultados = document.querySelector('#resultados')
        sexo = 0;
        const formulario = document.querySelector('#busqueda');
        const boton_nom = document.querySelector('#btn-nom');
        const especie = document.querySelector('#seleccion')
        

        const filtrar_sexo = () => {
            sexo1 = (sexo++)%2
            resultados.innerHTML=''
            for(let i=0;i<ultimo;i++){
                let elefante = elefantes[i];
                let sexo2 = elefante.sex;
                if(!sexo1){
                    if(sexo2.indexOf("Male") !== -1){
                    resultados.innerHTML += `
                    <div class="col s12 m4">
                        <div class="card">
                            <div class="card-title">
                                ${elefante.name}
                            </div>
                            <div class="center-align card-img">
                                <img class=" circle responsive-img " src="${elefante.image}">
                            </div>
                            <div class="card-content">
                                <p>Sexo: ${elefante.sex}</p>
                                <p>Especie: ${elefante.species}</p>
                            </div>
                        </div>
                    </div>

                    `
                    }
                    
                }
                else{
                    if(sexo2.indexOf("Female") !== -1){
                        resultados.innerHTML += `
                        <div class="col s12 m4">
                        <div class="card">
                        <div class="card-title">
                                ${elefante.name}
                            </div>
                            <div class="center-align card-img">
                                <img class=" circle responsive-img " src="${elefante.image}">
                            </div>
                            <div class="card-content">
                                <p>Sexo: ${elefante.sex}</p>
                                <p>Especie: ${elefante.species}</p>
                            </div>
                        </div>
                    </div>
    
                        `
                        }
                }
            }


        }
        sex.addEventListener('change', filtrar_sexo)
        
        

        const filtrar_nombre = () =>{
            
            const texto = formulario.value.toLowerCase()
            resultados.innerHTML = ""

            for(let i=0;i<ultimo;i++){
                let elefante = elefantes[i];
                let nombre = elefante.name.toLowerCase();
                if(nombre.indexOf(texto) !== -1){
                    resultados.innerHTML+=`
                        <div class="col s12 m4">
                            <div class="card">
                            <div class="card-title">
                                    ${elefante.name}
                                </div>
                                <div class="center-align card-img">
                                    <img class=" circle responsive-img " src="${elefante.image}">
                                </div>
                                <div class="card-content">
                                    <p>Sexo: ${elefante.sex}</p>
                                    <p>Especie: ${elefante.species}</p>
                                </div>
                            </div>
                        </div>
                    `
                }
            }

            
        }


        boton_nom.addEventListener('click', filtrar_nombre)
        formulario.addEventListener('keyup', filtrar_nombre)
        filtrar_nombre();
        

        const filtrar_especie = () =>{
            
            const seleccion = especie.value
            resultados.innerHTML = ""

            for(let i=0;i<ultimo;i++){
                let elefante = elefantes[i];
                let especie = elefante.species
                if(especie.indexOf(seleccion) !== -1){
                    resultados.innerHTML+=`
                        <div class="col s12 m4">
                            <div class="card">
                            <div class="card-title">
                                    ${elefante.name}
                                </div>
                                <div class="center-align card-img">
                                    <img class=" circle responsive-img " src="${elefante.image}">
                                </div>
                                <div class="card-content">
                                    <p>Sexo: ${elefante.sex}</p>
                                    <p>Especie: ${elefante.species}</p>
                                </div>
                            </div>
                        </div>
                    `
                }
            }

            
        }
        seleccion.addEventListener('change', filtrar_especie)


        


    });
    
  
  });
  