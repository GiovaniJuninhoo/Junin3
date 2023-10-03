function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < 9){
    ListaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_clap');
    };

    contador = contador + 1;
}

