let questionsTF = [
    {   
        id:1,
        enunciado: "Toda empresa es una organización",
        respuesta: "V",
        V: "Tu respuesta es correcta, toda empresa es una organización.",
        F: "Recuerda que en su acepción más simple una organización es un conjunto de individuos con un objetivo o meta en común; en este entendido, la empresa es un tipo particular de organización.",
    },
    {
        id:2,
        enunciado: "Toda organización es una empresa",
        respuesta: "F",
        V: "Recuerda que una organización es un grupo de personas con un objetivo en común. Por ejemplo, el grupo de clase en el que estás inscrito es una organización, al igual que un club de algoritmia, por lo que no necesariamente toda organización es una empresa.",
        F: "Tu respuesta es correcta, recuerda que una organización es un grupo de individuos con un objetivo en común. Por ejemplo, el grupo de clase en el que estás inscrito es una organización, al igual que un club de algoritmia, por lo que no necesariamente toda organización es una empresa.",
    },
    {
        id:3,
        enunciado: "Las personas morales tienen una realidad material o corporal como las personas físicas",
        respuesta: "F",
        V: "Recuerda que las personas morales no tienen una realidad material o corporal como las personas físicas.",
        F: "Tu respuesta es correcta, las personas morales no tienen una realidad material o corporal como las personas físicas.",
    },
    {
        id:4,
        enunciado: "Las empresas no necesitan constituirse de acuerdo con la legislación vigente",
        respuesta: "F",
        V: "Recuerda que las empresas para operar en el marco de la legalidad necesitan constituirse de acuerdo con la legislación vigente.",
        F: "Tu respuesta es correcta, las empresas para operar en el marco de la legalidad necesitan constituirse de acuerdo con la legislación vigente.",
    },
    {
        id:5,
        enunciado: "Las finanzas están relacionadas con el conjunto de actividades encaminadas al uso y administración del dinero",
        respuesta: "V",
        V: "Tu respuesta es correcta, las finanzas son el conjunto de actividades encaminadas al uso y administración del dinero.",
        F: "Recuerda que las finanzas son el conjunto de actividades encaminadas al uso y administración del dinero. ",
    },
];

//Sirve para revisar las preguntas una vez que han sido contestadas
function checkTFanswer(id, respuesta, idRetroalimentacion, contenedorButtonsTF){
    //Obtenemos el valor de la respuesta del cliente
    let valueAnswerUser = document.getElementById(id);
    valueAnswerUser.setAttribute('resultadoFinal', `${valueAnswerUser.innerText}`);
    valueAnswerUser = valueAnswerUser.innerText;


    const regex = /questionTF_(\d+)_button/;
    var match = id.match(regex);
    
    var buscaId = match ? match[1] : null;

    
    
    // Buscar el diccionario cuyo id coincide con el valor dado por el usuario
    let  preguntaEncontrada = questionsTF.find(pregunta => pregunta.id == buscaId);
    if (preguntaEncontrada) {
        if (valueAnswerUser == 'V'){
            var retroalimentacion = preguntaEncontrada.V;
        }else{
            var retroalimentacion = preguntaEncontrada.F;
        }    
    
      } else {
        console.log("No se encontró ninguna pregunta con el ID proporcionado.");
      }


    //Accedemos al contenedor de la retroalimentacion
    let contenedorButtonsTF_value = document.getElementById(contenedorButtonsTF);
    let retroalimentacionContainer = document.getElementById(idRetroalimentacion);

    //Validamos que sean correctas
    if(valueAnswerUser == respuesta){
        retroalimentacionContainer.classList.add('mensajeCorrecta');
        retroalimentacionContainer.textContent = "Correcto: "+retroalimentacion;

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    }else{
        retroalimentacionContainer.classList.add('mensajeIncorrecta');
        retroalimentacionContainer.textContent = "Incorrecto: "+retroalimentacion ;

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

    for(var i = 0; i < 5; i++){
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
                        <section class="optionsQuestionContainerTF clgrel1" id="questionTFButtonsContainer_${suffledquestionsTF[i].id}">
                            <div class="buttonTrue shadow2 waves-effect cl5 white-text"  id="questionTF_${suffledquestionsTF[i].id}_buttonTrue" onclick="checkTFanswer('questionTF_${suffledquestionsTF[i].id}_buttonTrue','${suffledquestionsTF[i].respuesta}','questionTF_${suffledquestionsTF[i].id}_retroalimentacion','questionTFButtonsContainer_${suffledquestionsTF[i].id}')">
                                V
                            </div>
                            <div class="buttonFalse shadow2 waves-effect cl4 white-text"  id="questionTF_${suffledquestionsTF[i].id}_buttonFalse" onclick="checkTFanswer('questionTF_${suffledquestionsTF[i].id}_buttonFalse','${suffledquestionsTF[i].respuesta}','questionTF_${suffledquestionsTF[i].id}_retroalimentacion','questionTFButtonsContainer_${suffledquestionsTF[i].id}')">
                                F
                            </div>
                        </section>
                        <!--Retroalimentacion de la pregunta-->
                        <div id="questionTF_${suffledquestionsTF[i].id}_retroalimentacion" cajaRetroalimentacion="retroalimentacion"></div>
                    </div>
                </form>
            </section>
        `;
    }
}

printQuestionsTrueFalse();