function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {

        img.src = 'manha.png'
        document.body.style.background = '#d1d149'
        document.getElementById('cor').style.background = '#fafa75'

    } else if (hora >= 12 && hora < 19) {

        img.src = 'tarde.png'
        document.body.style.background = '#faac46'
        document.getElementById('cor').style.background = '#fac075'

    } else {

        img.src = 'noite.png'
        document.body.style.background = '#5f0881'
        document.getElementById('cor').style.background = '#673e77'
    }
}   