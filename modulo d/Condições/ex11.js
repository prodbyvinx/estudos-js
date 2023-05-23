var idade = 17
if (idade < 16) {
    console.log("Não vota!")
} else {
    if (idade < 18 || idade > 65) {         // (< 16 && < 18 || > 65)
        console.log("Voto opcional!")
    } else {                                //(> 16 && >= 18)
        console.log("Voto obrigatório!")
    }
}