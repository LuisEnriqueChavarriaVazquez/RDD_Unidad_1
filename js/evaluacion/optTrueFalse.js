let questionsTF = [
    {
        enunciado: "Enunciado de pregunta True/False 0",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 1",
        respuesta: "F",
    },
    {
        enunciado: "Enunciado de pregunta True/False 2",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 3",
        respuesta: "F",
    },
    {
        enunciado: "Enunciado de pregunta True/False 4",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 5",
        respuesta: "F",
    },
    {
        enunciado: "Enunciado de pregunta True/False 6",
        respuesta: "V",
    },
    {
        enunciado: "Enunciado de pregunta True/False 7",
        respuesta: "F",
    },
    {
        enunciado: "Enunciado de pregunta True/False 8",
        respuesta: "V",
    },
];

//Sirve para revisar las preguntas una vez que han sido contestadas
function checkTFanswer(id, respuesta, idRetroalimentacion, contenedorButtonsTF){
    //Obtenemos el valor de la respuesta del cliente
    let valueAnswerUser = document.getElementById(id);
    valueAnswerUser.setAttribute('resultadoFinal', `${valueAnswerUser.innerText}`);
    valueAnswerUser = valueAnswerUser.innerText;
    

    //Accedemos al contenedor de la retroalimentacion
    let contenedorButtonsTF_value = document.getElementById(contenedorButtonsTF);
    let retroalimentacionContainer = document.getElementById(idRetroalimentacion);

    //Validamos que sean correctas
    if(valueAnswerUser == respuesta){
        retroalimentacionContainer.classList.add('mensajeCorrecta');
        retroalimentacionContainer.textContent = "Correcto, la respuesta es: " + respuesta;

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    }else{
        retroalimentacionContainer.classList.add('mensajeIncorrecta');
        retroalimentacionContainer.textContent = "Incorrecto, la respuesta es: " + respuesta;

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        preguntasContestadasTotal++;
    }

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //Cada que se responda pregunta correcta se actualiza contador
    contadorPreguntas.innerText = puntajeTotal;
    contadorPreguntas2.innerText = puntajeTotal;

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //Cada que contestemos una pregunta se actualiza el contador
    contadorPreguntasRespondidas.innerText = preguntasContestadasTotal;
    contadorPreguntasRespondidas2.innerText = preguntasContestadasTotal;

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //La barra se incrementa de tamaño con cada pregunta
    barraPreguntas.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');
    barraPreguntas2.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');

    //Eliminamos los botones de la pregunta
    contenedorButtonsTF_value.setAttribute('style', 'display: none;')

    //Retroalimentamos al usuario
    M.toast({html: `Pregunta respondida`});

    //Validamos que el examen se hay terminado en este punto
    validateExamenCompletado();

    
}

function printQuestionsTrueFalse(){
    let containerTrueFalse = document.getElementById('contenedor_preguntas');

    let suffledquestionsTF = shuffle(questionsTF);

    for(var i = 0; i < 8; i++){
        containerTrueFalse.innerHTML +=  `
            <section class="randomizeDOMClass lazy">
                <form class="cardPregunta clgreyl2 border1 shadow2">
                    <!--Numero y enunciado de la pregunta-->
                    <div class="titleQuestionContainer clgreyl3">
                        <div class="titleQuestionContainerSecondary">
                            <h5 class="getEnunciadoNumeroPdf preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
                            <a class="tooltipped clgreyl2 clbktx border1"
                            data-position="left" data-tooltip="Presiona el boton izquierdo o derecho">
                            <i class="material-icons">help</i>
                            </a>
                        </div>
                        <p class="getEnunciadoPdf preguntaEnunciado clgreyl2 clbktx border1 textoPregunta">${suffledquestionsTF[i].enunciado}</p>
                    </div>
                    
                    <section class="optionsQuestionContainer clgreyl3 hide-on-small-only" ></section>

                    <!--Boton para revisar la pregunta-->
                    <div class="evaluateQuestionContainer">
                        <!--Opciones de la pregunta-->
                        <section class="optionsQuestionContainerTF clgrel1" id="questionTFButtonsContainer_${i}">
                            <div class="buttonTrue shadow2 waves-effect cl5 white-text"  id="questionTF_${i}_buttonTrue" onclick="checkTFanswer('questionTF_${i}_buttonTrue','${suffledquestionsTF[i].respuesta}','questionTF_${i}_retroalimentacion','questionTFButtonsContainer_${i}')">
                                V
                            </div>
                            <div class="buttonFalse shadow2 waves-effect cl4 white-text"  id="questionTF_${i}_buttonFalse" onclick="checkTFanswer('questionTF_${i}_buttonFalse','${suffledquestionsTF[i].respuesta}','questionTF_${i}_retroalimentacion','questionTFButtonsContainer_${i}')">
                                F
                            </div>
                        </section>
                        <!--Retroalimentacion de la pregunta-->
                        <div id="questionTF_${i}_retroalimentacion" cajaRetroalimentacion="retroalimentacion"></div>
                    </div>
                </form>
            </section>
        `;
    }
}

printQuestionsTrueFalse();