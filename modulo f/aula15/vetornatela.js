let valores = [8,1,7,4,2,9]     //num.indexOf(7) irá exibir o valor 3, pois é a posição que se encontra o valor 7 no vetor.

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//TODOS TEM A MESMA FUNCIONALIDADE.