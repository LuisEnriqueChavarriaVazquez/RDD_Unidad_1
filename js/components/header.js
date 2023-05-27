function inyectHeader(){
    let footer = `
    <div id="icoNavIpn"></div>
      <div class="titleNavIpnContainer">
        <p class="titleNavIpn white-text">Polilibro académico de formulación y evaluación de proyectos informáticos</p>
      </div>
    <div id="icoNavEscom"></div>
    `;
    let footerListener = document.getElementById('nav-superior');
    footerListener.innerHTML = footer;
}

inyectHeader();