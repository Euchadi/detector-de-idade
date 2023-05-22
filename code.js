function ver() {
    var data_de_nascimento = window.document.getElementById("txtn1")
    var res = window.document.getElementById('resposta')
    var agora = new Date()
    var atual = agora.getFullYear()
    if (Number(data_de_nascimento.value) == 0 || Number(data_de_nascimento.value) >  atual) {
        window.alert("[ERRO]")
    } else {
        var conta = atual - Number(data_de_nascimento.value)
        var radsexo = window.document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(radsexo[0].checked) {
            genero = 'Homem'
            if(conta >= 0 && conta <= 10) {
                //Criança
                img.setAttribute('src', 'Fotos-Projeto/criança-masc.jpg')
                
            } else if (conta >= 12 && conta <= 18) {
                // Adolecente
                img.setAttribute('src', 'Fotos-Projeto/Adolecente-masc.jpg')
                
            } else if (conta < 60) {
                // Adulto
                img.setAttribute('src', 'Fotos-Projeto/Adulto-masc.jpg')
                
            } else {
                // idoso
                img.setAttribute('src', 'Fotos-Projeto/idoso.jpg')
                
            }
        } else {
            genero = 'Mulher'
            if(conta >= 0 && conta <= 10) {
                //Criança
                img.setAttribute('src', 'Fotos-Projeto/criança-fem.jpg')
                
            } else if (conta >= 12 && conta <= 18) {
                // Adolecente
                img.setAttribute('src', 'Fotos-Projeto/Adolecente-fem.jpg')
                
            } else if (conta < 60) {
                // Adulto
                img.setAttribute('src', 'Fotos-Projeto/Adulta-fem.jpg')
                
            } else {
                // idoso
                img.setAttribute('src', 'Fotos-Projeto/idosa.jpg')
                
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${conta} anos.</p>`
        res.appendChild(img)
    }

}