function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}
document.querySelector('.tecla_pom') .onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');


//Essa função consegue selecionar e ler o arquivo, mas não conseguimos 
//manipular o elemnto 
let contador= 0;

while (contador < listaDeTeclas.length) {
    const efeito =listaDeTeclas[contador].class[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function()
    {
        tocaSom(idAudio);
    }
    contador = contador +1;
    console.log(contador); 
}



