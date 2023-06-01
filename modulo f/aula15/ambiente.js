let num = [5,8,2,9,3]

num[5] = 6      //num.push(6) é a mesma coisa.
                //num.length é o atributo de comprimento do vetor.
                //num.sort() coloca em ordem.

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O nosso vetor organizado é ${num.sort()}`)

let pos = num.indexOf(8)

console.log(`O valor 8 está na posição ${pos}`)
//Se caso o valor não for encontrado, o valor exibido será -1
//if(pos == -1){console.log("O valor não foi encontrado.")}