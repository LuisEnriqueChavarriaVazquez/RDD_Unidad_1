function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt3"
        , "pregunta2_opt1", "pregunta3_opt3"
        , "pregunta4_opt1", "pregunta5_opt2"
        , "pregunta6_opt2", "pregunta7_opt3"
        , "pregunta8_opt2", "pregunta9_opt2"
        , "pregunta10_opt1", "pregunta11_opt1"
        , "pregunta12_opt1", "pregunta13_opt2"
        , "pregunta14_opt3", "pregunta15_opt3"
        , "pregunta16_opt3", "pregunta17_opt2"
        , "pregunta18_opt1", "pregunta19_opt2"
        , "pregunta20_opt3"];

    //Explicaciones de las preguntas
    let respuestasExplicacion = [0, "Valor del dinero en el tiempo"
        , "Valor presente", "Valor del dinero en el tiempo"
        , "Flujos de efectivo", "Anualidad"
        , "Interés compuesto", "Principal"
        , "$121,665", "Capitalizarla trimestralmente"
        , "Es falso", "Ordinarias, vencidas o diferidas"
        , "Programa de amortización", "Periodo de Recuperación de la inversión"
        , "Tasa Interna de Rendimiento (TIR)", "índice de rentabilidad  (IR)"
        , "Relación beneficio-costo", "Hay utilidad"
        , "25,454", "TIR mayor que TMAR"
        , "VAN o VPN"];

    let respuestaCorrectaId = respuestasId[numero]
    let contenedor = document.getElementById("pregunta" + String(numero))
    let retroalimentacion = contenedor.querySelector("#retroalimentacion")
    var respuestaAlumnoId = contenedor.querySelector("section>div>label>input:checked").id;

    //Accedemos al contenido de la opcion elejida por el alumno
    var respuestaAlumnoContent = document.getElementById(respuestaAlumnoId);

    //Hay que registrar la respuesta del usuario como atributo en el DOM
    let contenedorPrincipalOPTMULTIPLE = document.getElementById(`pregunta${numero}`);
    contenedorPrincipalOPTMULTIPLE.setAttribute('resultadoFinal',`${respuestaAlumnoContent.value}`)

    //Evaluacion de las preguntas
    //console.log(respuestaAlumnoId)
    if (respuestaCorrectaId == respuestaAlumnoId) {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Correcto</span>` + ", la respuesta es: " + `&nbsp;<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[numero]}</span>`;
        retroalimentacion.classList.add('mensajeCorrecta');

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    } else {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Incorrecto</span>` +", la respuesta es: " + `&nbsp;<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[numero]}</span>`;
        retroalimentacion.classList.add('mensajeIncorrecta');

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

    //Se elimina el boton de la pregunta que ha sido respondida
    let button_evaluation = document.getElementById('button_evaluation_'+numero);
    button_evaluation.setAttribute('style', 'display:none');

    //Se eliminan los inputs de la pregunta
    let opt1_input = document.getElementById('pregunta' + numero + '_opt1');
    let opt2_input = document.getElementById('pregunta' + numero + '_opt2');
    let opt3_input = document.getElementById('pregunta' + numero + '_opt3');

    opt1_input.setAttribute('disabled', '');
    opt2_input.setAttribute('disabled', '');
    opt3_input.setAttribute('disabled', '');

    //Retroalimentamos al usuario
    M.toast({html: `Pregunta respondida`});

    //Validamos que el examen se hay terminado en este punto
    validateExamenCompletado();
}

const preguntas_aleatorias_indices = [0]
const preguntas = [
    0,
    {
        "enunciado": "Sociedades en las que cada socio goza de un voto, sin importar el monto de su aportación",
        "opciones": ['Sociedad Cooperativa y Sociedad Anónima', 'Asociación Civil, Sociedad Civil y Sociedad Cooperativa', 'Sociedad de Responsabilidad Limitada y Asociación Civil'],
    },
    {
        "enunciado": "Sociedades en las que el rumbo de la empresa (toma de decisiones) será definido en función del capital aportado",
        "opciones": ['Sociedad Civil (S.C) y Sociedad de Responsabilidad Limitada (S. de R.L)', 'Asociación Civil (A.C) y Sociedad Civil (S.C)', 'Sociedad de Responsabilidad Limitada (S. de R.L) y Sociedad Anónima (S.A)'],
    },
    {
        "enunciado": "Son sociedades que no tributan",
        "opciones": ['Asociación Civil (A.C) sin finalidad económica y Sociedad Cooperativa de consumo', 'Todas las asociaciones civiles y las sociedades cooperativas', 'La Sociedad Anónima (S.A)  y la Sociedad por Acciones Simplificada (S.A.S)'],
    },
    {
        "enunciado": "Sociedad que no requiere solicitar acta constitutiva ante un fedatario público y se constituye bajo los estatutos de la Secretaría de Economía mediante el sistema electrónico de constitución",
        "opciones": ['Asociación Civil (A.C)','Sociedad Civil', 'Sociedad por Acciones Simplificada (S.A.S)'],
    },
    {
        "enunciado": "En 2021 hubo una reforma, en el esquema laboral, que prohíbe la subcontratación de personal (outsourcing). Dicha reforma, se considera un factor del:",
        "opciones": ['Microentorno o microambiente', 'Macroentorno o macroambiente', 'Macroentorno o microambiente'],
    },
    {
        "enunciado": "De acuerdo con el SAT es el Individuo con capacidad para contraer obligaciones y ejercer derechos; puede prestar servicios, realizar actividades comerciales, arrendar bienes inmuebles y trabajar por salarios",
        "opciones": ['Persona moral', 'Persona física', 'Empleador y empleado'],
    },
    {
        "enunciado": "Corresponde a la obtención de recursos mediante diferentes fuentes; por ejemplo: compras a crédito, préstamos de la banca de primer piso, préstamos de la banca se segundo piso, préstamo de los socios, crowdfunding, entre otras",
        "opciones": ['Actividades de financiamiento', 'Actividades de inversión', 'Actividades empresariales'],
    },
    {
        "enunciado": "La compra de maquinaria y equipo, la compra o ampliación de una planta productiva y las mejoras en el proceso productivo, son consideradas:",
        "opciones": ['Actividades de inversión', 'Actividades de financiamiento ', 'Actividades empresariales'],
    },
    {
        "enunciado": "Son considerados elementos del microambiente o microentorno",
        "opciones": ['Factores político-legales, económicos, medio ambientales', 'Demográficos, tecnológicos y socio-culturales', 'Proveedores, clientes, comunidad, alcaldías o municipios'],
    },
    {
        "enunciado": "Son consideradas como las dos funciones o actividades principales de las finanzas",
        "opciones": ['Planeación y control', 'Planeación y organización', 'Inversión y financiamiento'],
    },
];

function preguntas_aleatorias() {



    while (preguntas_aleatorias_indices.length < 11) {
        numero = aleatorio(1, preguntas.length-1);
        if (preguntas_aleatorias_indices.includes(numero) == false) {
            preguntas_aleatorias_indices.push(numero)
        }
    }


    let contenedor_preguntas = document.getElementById('contenedor_preguntas');
    let contenido_preguntas = "";
    for (i = 1; i < preguntas_aleatorias_indices.length; i++) {
        contenido_preguntas = contenido_preguntas + `
        <section class="randomizeDOMClass lazy" id="pregunta${preguntas_aleatorias_indices[i]}" resultadoFinal="">
            <!--Formulario para la revision de la pregunta-->
            <form class="cardPregunta clgreyl2 border1 shadow2">
                <!--Numero y enunciado de la pregunta-->
                <div class="titleQuestionContainer clgreyl3">
                    <div class="titleQuestionContainerSecondary">
                        <h5 class="getEnunciadoNumeroPdf preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
                        <a class="waves-effect waves-light tooltipped clgreyl2 clbktx border1"
                            data-position="left" data-tooltip="Selecciona alguna de las opciones">
                            <i class="material-icons">help</i>
                        </a>
                    </div>
                    <p class="getEnunciadoPdf preguntaEnunciado clgreyl2 clbktx border1 textoPregunta">${preguntas[preguntas_aleatorias_indices[i]].enunciado}</p>
                </div>
                
                <!--Opciones de la pregunta-->
                <section class="optionsQuestionContainer clgreyl3" >
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt1" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt2" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt3" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}</span>
                        </label>
                    </div>
                </section>

                
                <!--Boton para revisar la pregunta-->
                <div class="evaluateQuestionContainer">
                    <a class='btn-large btnIndividualQuestion waves-effect waves-light border1 cl5 white-text' id="button_evaluation_${preguntas_aleatorias_indices[i]}" onclick="pregunta(${preguntas_aleatorias_indices[i]})">Revisar pregunta<i
                    class="material-icons right">done</i></a>
                    <!--Retroalimentacion de la pregunta-->
                    <div id="retroalimentacion" cajaRetroalimentacion="retroalimentacion"></div>
                </div>
            </form>
        </section>
        `;
    }
    contenedor_preguntas.innerHTML = contenido_preguntas;

}

function aleatorio(a, b) {
    var aleatorio = Math.round(Math.random() * (b - a) + parseInt(a));
    return aleatorio
}
preguntas_aleatorias();
