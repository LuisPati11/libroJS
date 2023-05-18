// Ejercicio 1: Ciclo de un triángulo
let piramide = '';
for (let i=0;i<7;i++){
    piramide = piramide+'#';
    console.log(piramide);
}

//Ejercicio 2: fizzbuzz
for (let i = 1; i<=100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }  
    else if (i % 3 == 0){
      console.log('Fizz');
    }
    else if (i % 5 == 0){
      console.log('Buzz');
    }
    else {
        console.log(i);
    }
  }

// Ejercicio 3: Tablero de ajedrez

let string = '';
let size= 8;

for(let i=0;i<size;i++){
  for (let j=0;i<size;i++){
    if ( i % 2 == 0){
      string=string + ' # # # #\n';
  }else{
    string=string + '# # # # \n';
  		}
	}
}
console.log(string);


