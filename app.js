// Estructuras de control
// condicionales y ciclos
// while, do while, for
// parar y continuar ciclos (break, continue)

// for (let i=0; i<5; i ++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
//     debugger;

// }


// function suma(a,b,c){
//    console.log (a+b+c);
   
// }
// const num=[1,2,3]
// suma(...num)


// let hola = function(nombre){
//    console.log('Hola ' + nombre + ' desde una función anonima');
// }
// hola('Pepe')

// //arrow function
// let holaArrow =(nombre)=> console.log('Hola ' + nombre + ' desde una función arrow') //el scope se ponecuando son varias lineas de codigo
 
// holaArrow('Juan')

// function saludartodos(nombre){
//    console.log('Hola ' + nombre + ' desde una función vanilla')
// }
// saludartodos('Peter')


// funciones
   // let numero1 = parseFloat(document.getElementById('numero1').value);
   // let numero2 = parseFloat(document.getElementById('numero2').value);

   //let input1 = document.queryselector(#numero1)

 function suma(){
   let numero1 = parseFloat(document.getElementById('numero1').value);
   let numero2 = parseFloat(document.getElementById('numero2').value);
   
   document.getElementById('resultado').innerHTML = numero1+ numero2;
}
function resta(){
   let numero1 = parseFloat(document.getElementById('numero1').value);
   let numero2 = parseFloat(document.getElementById('numero2').value);
   
   document.getElementById('resultado').innerHTML = numero1 - numero2;
}
function multiplicacion(){
   let numero1 = parseFloat(document.getElementById('numero1').value);
   let numero2 = parseFloat(document.getElementById('numero2').value);
   
   document.getElementById('resultado').innerHTML = numero1 * numero2;
}
function division(){
   let numero1 = parseFloat(document.getElementById('numero1').value);
   let numero2 = parseFloat(document.getElementById('numero2').value);
   
   document.getElementById('resultado').innerHTML = numero1 / numero2;
}
function limpiar(){
   document.getElementById('formulario').reset();
   
}



let boton = document.querySelector('.boton');


// Eventos del mouse
                     // evento | función
boton.addEventListener('click',function(){
   console.log('Dimos click en el botón')
   boton.classList.toggle('boton_2');
})

boton.addEventListener('mousein',function(){
   console.log('Entré al botón')

})
boton.addEventListener('mouseout',function(){
   console.log('Salí del botón')

})


//eventos del teclado
window.addEventListener('keydown',(e)=>{
   console.log('pulso una tecla')
   console.log(String.fromCharCode(e.keyCode))
})

window.addEventListener('keypress',()=>{
   console.log('presioné una tecla')
})
window.addEventListener('keyup',()=>{
   console.log('dejé de presionar una tecla')
})

window.addEventListener('load',() => {
   console.log('Terminé de cargar la página')
})
