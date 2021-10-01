//Ejercicio #1

const body = document.querySelector('body');

const div = document.createElement('div');

div.id = 'titulo'

const hUno = document.createElement('h1');

hUno.textContent = 'Mis películas favoritas';

div.appendChild(hUno);

body.appendChild(div);

//Ejercicio #2
const divLista = document.createElement('div');

divLista.className = 'lista';

const listaOrdenada = document.createElement('ol');

const eleUno = document.createElement('li');
const eleDos = document.createElement('li');
const eleTres = document.createElement('li');

eleUno.textContent = 'Se7en';
eleDos.textContent = 'Fight Club';
eleTres.textContent = 'Matrix';

listaOrdenada.appendChild(eleUno);
listaOrdenada.appendChild(eleDos);
listaOrdenada.appendChild(eleTres);

divLista.appendChild(listaOrdenada);

body.appendChild(divLista);

//Ejercicio 3

//!!!!importante, pegar al html!!!
const boton = document.createElement('button');

boton.innerText = 'click me';

document.querySelector('#titulo').appendChild(boton);

boton.onclick = e=>{
    document.querySelector('#titulo h1').setAttribute('style', 'color:red;');   
};


//Ejercicio 4
const botonDos = document.createElement('button');

botonDos.innerText = 'click me';

document.querySelector('.lista').appendChild(botonDos);

botonDos.onclick =  e=>{
    document.querySelectorAll('li')[2].setAttribute('style', 'color:blue;');   
}