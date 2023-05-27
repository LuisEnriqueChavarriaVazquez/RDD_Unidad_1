let questionsTF = [
    { //Preguntas originales
        enunciado: "Para calcular el valor presente se utiliza una tasa de descuento.",
        respuesta: "V",
    },
    {
        enunciado: "El interés simple es el que se gana en un depósito dado y se vuelve parte del principal al final de un período específico.",
        respuesta: "F",
    },
    {
        enunciado: "El período de recuperación de la inversión (PRI) es un método que se puede calcular sin tomar en cuenta el valor del dinero en el tiempo y también puede calcularse tomando en cuenta el valor del dinero en el tiempo.",
        respuesta: "V",
    },
    {
        enunciado: "Uno de los criterios de decisión para aceptar o rechazar invertir en un proyecto de inversión es el siguiente: TIR>TMAR.",
        respuesta: "V",
    },
    {
        enunciado: "El VAN  se puede definir como el valor monetario que resulta de restar la suma de los flujos descontados (flujos de efectivo del proyecto a valor presente) a la inversión inicial.",
        respuesta: "V",
    },
    {
        enunciado: "Entre más largo sea el período de capitalización de una inversión se ganan más rendimientos.",
        respuesta: "F",
    },
    {   //Preguntas parafraseadas
        enunciado: "Cuanto mayor sea el intervalo de tiempo en que se realiza la capitalización de una inversión, mayores serán los rendimientos que se obtendrán.",
        respuesta: "F",
    },
    {
        enunciado: "El Valor Actual Neto (VAN) es una medida financiera que se utiliza para calcular el valor monetario resultante de restar la inversión inicial a la suma de los flujos de efectivo futuros del proyecto, descontados a su valor presente.",
        respuesta: "V",
    },
    {
        enunciado: "El período de recuperación de la inversión (PRI) solo se puede calcular tomando en cuenta el valor del dinero en el tiempo y no es posible calcularlo sin considerar este factor.",
        respuesta: "F",
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
        if(respuesta == "F"){
            retroalimentacionContainer.textContent = "Correcto, la respuesta es falso";
        }else if(respuesta == "V"){
            retroalimentacionContainer.textContent = "Correcto, la respuesta es verdadero";
        }

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    }else{
        retroalimentacionContainer.classList.add('mensajeIncorrecta');
        if(respuesta == "F"){
            retroalimentacionContainer.textContent = "Incorrecto, la respuesta es falso";
        }else if(respuesta == "V"){
            retroalimentacionContainer.textContent = "Incorrecto, la respuesta es verdadero";
        }

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