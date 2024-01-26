function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha2.jpg'
        document.body.style.background = '#ffec42'
    } else if (hora >=12 && hora <=18) {
        //boa tarde
        img.src = 'imagens/tarde2.jpg'
        document.body.style.background = '#eb6d1a'
    } else {
        // boa noite
        img.src = 'imagens/noite2.jpg'
        document.body.style.background = '#000F2D'
    }
}



