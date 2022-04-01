const boton = document.querySelector('#boton');

boton.onclick = () => {
    console.log('Boton clickeado');
    //Ejercicio1 Crear un div, que contenga un p con algún texto
    //el orden es, crear el elemento, modificarlo y ***pegarlo al html
    const contenedor = document.createElement('div');

    //el orden es, crear el elemento, modificarlo y ***pegarlo al html
    const parrafo = document.createElement('p');

    parrafo.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    //para pegar un elemento 
    //1. Tener el elemento padre en la mano 
    //2.Pegar en orden el/los elementos deseados -- usamos appendChild

    contenedor.appendChild(parrafo);

    document.querySelector('body').appendChild(contenedor);
}

const botonColor = document.createElement('button');
botonColor.textContent = 'Rojo';

botonColor.onclick = () => {
    document.querySelector('p').classList.add('rojo');
}

document.querySelector('body').appendChild(botonColor);