var agora = new Date()
var hora = agora.getHours()                // Hora exata rodando no host do app.
        console.log(`Agora são exatamente ${hora} horas.`)

    if (hora >= 0 && hora <= 5) {
        console.log("Boa madrugada!")
}   else if (hora < 12) {
        console.log("Bom dia!")
}   else if (hora <= 18) {
        console.log("Boa tarde!")
}   else if (hora <= 23.59) {
        console.log("Boa noite!")
}