alert("Bienvenido, escribe 2 numeros entre 1 y 100 y te dire la suma y si el resultado es multiplo de 3, 5 o ambos!")


let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let resultado = num1 + num2;


for(let i= 1; i<=100; i++){
    if(resultado % 15 === 0){
        alert(`${resultado} es divisible por ambos!`);
    } else if (resultado % 3 === 0) {
        alert(`${resultado} es divisible por 3!`);
    } else if(resultado % 5 === 0){
        alert(`${resultado} es divisible por 5!`);
    } else {
        alert(`${resultado} no es divisible de 3 ni 5`);
        
    }
    break;
}

