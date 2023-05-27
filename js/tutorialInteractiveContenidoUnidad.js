var driver = new Driver({
    allowClose: false,
    showButtons: true,         
    closeBtnText: 'Cerrar',      
    nextBtnText: 'Siguiente',
    prevBtnText: 'Anterior',   
    keyboardControl: true,
});

//Accedemos al boton de ayuda
let buttonHelp = document.getElementById('buttonComputerHelp');
//Boton del menu lateral
let a12tutorialButton = document.getElementById('a12tutorialButton');

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#a1tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Material de apoyo',
      description: 'En esta sección podrás encontrar el material de apoyo que necesitas para complementar tu aprendizaje. Esto puede incluir documentos, videos, presentaciones, ejercicios, entre otros recursos que te ayudarán a comprender mejor los temas abordados en la unidad.',
      position: 'right'
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Cierre de la unidad',
      description: 'En esta sección se presenta el cierre de la unidad, donde se resumen los principales temas y conceptos aprendidos. Esto te permitirá hacer una revisión final de lo que has aprendido antes de pasar a la siguiente unidad.',
      position: 'right'
    }
  },
  {
    element: '#a3tutorialButton',
    popover: {
      title: 'Evaluación',
      description: 'En esta sección se encuentra la evaluación de la unidad. La evaluación puede consistir en preguntas de opción múltiple, verdadero o falso, ensayos o cualquier otra forma de evaluación que permita medir tu conocimiento y comprensión de los temas abordados en la unidad.',
      position: 'top'
    }
  },
  {
    element: '#a4tutorialButton',
    popover: {
      title: 'Referencias de la unidad',
      description: 'En esta sección se encuentran las referencias utilizadas para desarrollar la unidad. Esto puede incluir libros, artículos, sitios web y otros recursos utilizados para respaldar los conceptos y temas abordados en la unidad. Las referencias pueden ayudarte a profundizar en los temas de la unidad y a ampliar tu conocimiento sobre el tema.',
      position: 'top'
    }
  }
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})