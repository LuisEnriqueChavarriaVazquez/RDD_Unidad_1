function ajustarTamanoTabs(){
    //Tabs de la sección de inicio
    let tabsContentElement = document.getElementById('tabsContentID');
    
    //Contenedor principal del contenido
    let parentContainer = document.getElementById('lateralUnityContent');
    //Accedemos a su ancho exacto
    let parentContainerAncho = parentContainer.offsetWidth - .5;
    console.log('parentContainerAncho: ', parentContainerAncho);

    //Importante... damos a el tab el ancho de el contenedor padre
    tabsContentElement.setAttribute('style', 'width: ' + parentContainerAncho + 'px;');
}

ajustarTamanoTabs();