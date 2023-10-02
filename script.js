const imagenes = document.querySelectorAll('.contenedor img');


imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () =>{
        const modal = document.createElement('div');
        modal.classList.add('modal');
    })
})