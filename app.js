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