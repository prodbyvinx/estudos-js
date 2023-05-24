function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    

    if (ano.value.length == 0 || Number(ano.value) > anoatual) {
        window.alert(`[ERRO] Verifique os dados e tente novamente.`)
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = anoatual - Number(ano.value)
        var sexores = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        if (sex[0].checked) {
            sexores = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else {
            sexores = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${sexores} com ${idade} anos.</br>`
        res.appendChild(img)
    }

}

