function inyectFooter(){
    let footer = `
    <footer class="footerDesign clgreyl2 clborder">
        <div class="footerContainerOne">
            <a class='btn waves-effect waves-light border1 clgreyl4 black-text'
                href='https://github.com/LuisEnriqueChavarriaVazquez/Poli_libro'>Repositorio del polilibro<i
                class="material-icons right">code</i></a>

            <!--Licencia-->
            <section class="licenciaDeLaPagina textoFooter clbktx">
                <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                    <img alt="Licencia Creative Commons" style="border-width:0" src="img/cc.png" />
                </a>
                <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">
                    Polilibro académico de formulación y evaluación de proyectos informáticos por Eduardo Rodríguez Flores, Josefina Hernández Jaime & Yasmín Ivette Jiménez Galán
                </span> 
                <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                    Se distribuye bajo una Licencia Creative Commons Atribución-NoComercial 4.0 Internacional
                </a>
                <a xmlns:dct="http://purl.org/dc/terms/" href="https://luisenriquechavarriavazquez.github.io/Poli_libro/" rel="dct:source">
                Basada en una obra en https://luisenriquechavarriavazquez.github.io/Poli_libro/
                </a>
                <a xmlns:cc="http://creativecommons.org/ns#" href="https://luisenriquechavarriavazquez.github.io/Poli_libro/" rel="cc:morePermissions">
                    Permisos más allá del alcance de esta licencia pueden estar disponibles en https://luisenriquechavarriavazquez.github.io/Poli_libro/
                </a>
            </section>
            <section class="clgreyl1 border1 shadow2 tabFechaElaboracion clbktx">
                Fecha de elaboración: Marzo del 2023
            </section>
        </div>
        <div class="footerContainerTwo">
        <a class='btn waves-effect waves-light border1 clgreyl4 black-text' style="z-index: 0;" href='#!'>Manual<i
            class="material-icons right">help</i></a>
        <a class='btn waves-effect waves-light border1 clgreyl4 black-text' style="z-index: 0;" href='/contacto'>Contacto<i
            class="material-icons right">alternate_email</i></a>
        </div>
    </footer>
    `;
    let footerListener = document.getElementById('footerListener');
    footerListener.innerHTML = footer;
}

inyectFooter();