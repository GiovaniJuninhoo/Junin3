function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < ListaDeTeclas.length; contador++){

    const instrumento = ListaDeTeclas[contador].classList[1];

    const tecla = ListaDeTeclas[contador];
    
    const idAudio = `#som_${instrumento}'

    tecla.onclick = function(){
        
        tocaSom(idAudio);
    };
}
