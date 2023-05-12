function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua shogun tem ${vel}</p>`
    if (vel >= 2000){
        res.innerHTML += `<p>está perfeito,parabéns pela sua deticação</p>`
    }else if(vel <2000 && vel >= 1500){
        res.innerHTML += '<p>Esta rasoavel,mas pode vim a trazer dificuldades no abismos,é indicado ter no minimo 2000</p>'
    }else if(vel < 1500) {
        res.innerHTML += '<p>Esta fraca,é possivel jogar normalmente mas a dificulda aumenta de modo imprevisivel,é indicado ter no minimo 2000</p>'
    }
    var rec = document.querySelector('input#recarga')
    var ener = document.querySelector('div#energia')
    var reg = Number(rec.value)
    
    if (reg >= 250) {
        ener.innerHTML = '<p>Esta divina,Parabens pelo seu esforço.</p>'
    }else if (reg <250 && reg>=200 ){
        ener.innerHTML = '<p>Esta razoavel,muitos usam nesse nivel,mas o indicado é  250 de recarga de energia.</p>'
    }else if(reg < 200){
        ener.innerHTML = '<p>Para uma personagem que depende fielmente de sua habilidade suprema, ela tem um grande demanda de recarga de energia <strong>200</strong> é o minimo de recarga de energia.</p>'
    }
    }
    /*else if(vel <2000 && vel >=1500 reg<250 && reg>=200 )*/ 