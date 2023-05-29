function gerar(){
    let numero = document.getElementById('txtn').value
    let option = document.querySelector('#restabuada')

    if (numero == "" || numero == 0){
        window.alert(`[ERRO] Escolha um número válido!`)
    } else { 
        option.innerHTML = ""

        for (let i = 1; i <= 10; i++) {
            let numi = numero*i
            let newOption = new Option(`${numero} x ${i} = ${numi}`)
            option.add(newOption)
        }
    }
}