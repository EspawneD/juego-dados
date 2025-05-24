const boton = document.getElementById('lanzar');
const resultado = document.getElementById('resultado');

function tirarDado(){
    const numero = Math.floor(Math.random() * 6) + 1;
    const caras = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
        
     };
     resultado.textContent = caras[numero];

     //Animacion giro
     resultado.style.transform = 'rotate(360deg)';
     setTimeout(() => {
         resultado.style.transform = 'rotate(odeg)';
        }, 300);


}

boton.addEventListener('click', tirarDado);