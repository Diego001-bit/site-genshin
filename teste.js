

function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    var img = document.getElementById ('shogun')
    var seletor = document.getElementById ('eletrica')
    
    res.innerHTML = `<h2>Sua shogun tem ${vel}</h2>`
    if (vel >= 2000){
        res.innerHTML += `<p>está perfeita,parabéns pela sua deticação</p>`
    }else if(vel <2000 && vel >= 1600){
        res.innerHTML += '<p>Esta rasoavel,mas pode vim a trazer dificuldades no abismos,é indicado ter no minimo 2000</p>'
    }else if(vel < 1600) {
        res.innerHTML += '<p>Esta fraca,é possivel jogar normalmente mas a dificulda aumenta de modo imprevisivel,é indicado ter no minimo 2000</p>'
    }
    var rec = document.querySelector('input#recarga')
    var ener = document.querySelector('div#energia')
    var reg = Number(rec.value)
        ener.innerHTML = `<h2>Sua shogun tem ${reg} de recarga</h2>`
    if (reg >= 250) {
        ener.innerHTML += '<p>Esta divina,Parabens pelo seu esforço.</p>'
    }else if (reg <250 && reg>=200 ){
        ener.innerHTML += '<p>Esta razoavel,muitos usam nesse nivel,mas o indicado é  250 de recarga de energia.</p>'
    }else if(reg < 200){
        ener.innerHTML += '<p>Para uma personagem que depende fielmente de sua habilidade suprema, ela tem um grande demanda de recarga de energia <strong>200</strong> é o minimo de recarga de energia.</p>'
    }
    var taxacritica = document.querySelector('input#taxac')
    var taxa = document.querySelector('div#taxacritica')
    var tax = Number (taxacritica.value)
    taxa.innerHTML = `<h2>Sua taxa criitica é de ${tax}%</h2>`
    if(tax > 60){
        taxa.innerHTML += '<p>Esta perfeita,vejo que é alguem muito esforçado</p>'
    }else if(tax <60 && tax >= 50){
        taxa.innerHTML += '<p>Esta usual,mesmo assim o recomendado é 70%</p>'
    }else if(tax < 50){
        taxa.innerHTML += '<p>Em casos aonde o personagem é focado em causar dano nquanto estiver com o supremo ativo como a shogun, o minimo de taxa critica indicado é <strong>50%</strong> de taxa critica</p>'
    }
    var danocritico = document.querySelector ('input#danoc')
    var dano = document.querySelector('div#danocri')
    var dan = Number (danocritico.value)
    dano.innerHTML = `<h2>Sua shogun tem ${dan}% de Dano critico</h2>`
    if(dan >=150){
        dano.innerHTML += '<p>Esta perfeita ela esta digna de ser chamada de arconte</p>'
    }else if(dan < 150 && dan >=100){
        dano.innerHTML += '<p>Esta usual,mas causo sinta dificuldade é indicado aumentar seu dano critico</p>'
    }else if(dan <100){
        dano.innerHTML += '<p>Ela necessita de mais Dano critico, o minimo é <strong>100%</strong></p>'
    }
    
    if (vel >= 2000 && reg >=250 == tax > 60 && dan >= 150){
        img.setAttribute ('src','imagens/raid-pc.jpg')
    }else if (vel >= 2000 || vel < 2000 && vel >= 1600 && reg >=250 || reg <250 && reg >= 200 ||  tax > 60 || tax <60 && tax >= 50 && dan > 150 || dan <150 && dan > 100){
        img.setAttribute ('src','imagens/shogun-js-pc2.jpg')
    }else {
        img.setAttribute ('src','imagens/shogun-js-pc.jpg')
    }

    }

    /*else if(vel <2000 && vel >=1500  reg<250 && reg>=200 )*/ 