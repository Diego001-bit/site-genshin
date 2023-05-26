function zcalcular(){
    var vida = document.querySelector ('input#parede')
    var zres = document.querySelector('div#zparede')
    var vid = Number(vida.value)
    var img = document.getElementById('zhongli') 
    var me = Number (30000 - vida.value)
    var met = Number (50000 - vida.value)
    zres.innerHTML = `<h2> ${vid} Vida </h2>`
    if (vid >= 50000){
        zres.innerHTML += `<p>Ele esta sendo uma perfeita representação da muralha da china,muito bem </p>`
    } else if (vid < 50000 && vid >= 30000){
    zres.innerHTML += `<p>Esta ok para um zhongli do tipo <strong>híbrido</strong>, mas se seu foco for o escudo é indicado aumentar em ${met} de vida.</p>`
    }else{
        zres.innerHTML += `<p>Esta muito baixo sua vida mesmo que seja um híbrido é indicado pelo menos 30.000 de vida esta faltando ${me} e para um zhongli focado em escudo precisa de ${met} de vida</p>`
    }
    var ztax = document.getElementById ('ztx')
    var ztx = document.getElementById('ztaxac')
    var tax = Number(ztax.value)
    var tme = Number(50-ztax.value)
    ztx.innerHTML = `<h2>Taxa critica: ${tax}%</h2>` 
    if (tax >= 60){
        ztx.innerHTML += `<p>Esta perfeito parabéns pelo esforço</p>`
    }else if (tax < 60 && tax >= 50){
        ztx.innerHTML += `<p>Esta bom principalmente se ele tiver com 30.000 de vida ou mais.</p>`
    }else {
        ztx.innerHTML += `<p>Para um zhongli focado em seu escudo não á problema, mas para um zhongli hibrido é indicado mais ${tme} de taxa critica.</p>`
    }
    var zdnc = document.getElementById('zdnc')
    var zdanoc = document.getElementById ('zdanoc')
    var dnc = Number (zdnc.value)
    var dme = Number (100-zdnc.value)
    zdanoc.innerHTML = `<h2>Dano critico ${dnc}%</h2>`
    if(dnc >140){
        zdanoc.innerHTML += '<p>Esta otimo,vejo que é alguem esforçado</p>'
    }else if (dnc <140 && dnc>100){
        zdanoc.innerHTML += '<p>Está bom principalmente se estiver com  30.000 de vida ou mais.</p>'
    }else{
        zdanoc.innerHTML += `<p>Não é um status que seja necessario para o Zhongli focado em escudo, mas para o Hibrido é indicado ter mais ${dme}% Dano critico</p>`
    }
    var zgeo = document.getElementById ('zgeo')
    var bonusg = document.getElementById ('bonusg')
    var geo = Number(zgeo.value)
    bonusg.innerHTML = `<h2>Bônus geo ${geo}</h2>`
    if(geo >= 60){
        bonusg.innerHTML += '<p>Esta otimo um tipico Zhongli focado em seu dano geo</p>'
    }else{
        bonusg.innerHTML += '<p> Um zhongli focado em escudo não tem qualquer necessidade de Bônus Geo.</p>'
    }
    if(vid >= 50000){
        img.setAttribute('src','imagens/r_030.jpg')
    }else if (vid >= 30000 && tax >=60 && tax>50 && dnc>=140 && dnc>100 || geo > 60){
        img.setAttribute('src','imagens/zhongli-cll.jpg')
    }else{
        img.setAttribute('src','imagens/zhongli.jpg')
    }
}

function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    var img = document.getElementById ('shogun')
    var met = Number(2000-txtv.value)
    res.innerHTML = `<h2>Sua shogun tem ${vel} de Dano basico</h2>`
    if (vel >= 2000){
        res.innerHTML += `<p>está perfeita,parabéns pela sua deticação</p>`
    }else if(vel <2000 && vel >= 1600){
        res.innerHTML += `<p>Esta rasoavel,mas pode vim a trazer dificuldades no abismos,esta faltando ${met} de dano basico</p>`
    }else if(vel < 1600) {
        res.innerHTML += `<p>Esta fraca,é possivel jogar normalmente mas a dificulda aumenta de modo imprevisivel,é indicado aumentar mais ${met} de dano basico</p>`
    }
    var rec = document.querySelector('input#recarga')
    var ener = document.querySelector('div#energia')
    var reg = Number(rec.value)
    var rme = Number(200-rec.value)
        ener.innerHTML = `<h2>Sua shogun tem ${reg}% de recarga</h2>`
    if (reg >= 250) {
        ener.innerHTML += '<p>Esta divina,Parabens pelo seu esforço.</p>'
    }else if (reg <250 && reg>=200 ){
        ener.innerHTML += '<p>Esta razoavel,muitos usam nesse nivel,mas o indicado é  250% de recarga de energia.</p>'
    }else if(reg < 200){
        ener.innerHTML += `<p>Para uma personagem que depende fielmente de sua habilidade suprema, ela tem um grande demanda de recarga de energia,sendo assim é preciso aumentar mais <strong>${rme}</strong>% de sua recarga de energia.</p>`
    }
    var taxacritica = document.querySelector('input#taxac')
    var taxa = document.querySelector('div#taxacritica')
    var tax = Number (taxacritica.value)
    var tme = Number (50 - taxacritica.value)
    taxa.innerHTML = `<h2>Sua taxa criitica é de ${tax}%</h2>`
    if(tax > 60){
        taxa.innerHTML += '<p>Esta perfeita,vejo que é alguem muito esforçado</p>'
    }else if(tax <60 && tax >= 50){
        taxa.innerHTML += '<p>Esta usual,mesmo assim o recomendado é 70%</p>'
    }else if(tax < 50){
        taxa.innerHTML += `<p>Em casos aonde o personagem é focado em causar dano enquanto estiver com o supremo ativo como a shogun,eu aconselho em buscar mais <strong>${tme}</strong> de taxa critica</p>`
    var danocritico = document.querySelector ('input#danoc')
    var dano = document.querySelector('div#danocri')
    var dan = Number (danocritico.value)
    var dme = Number(100-danocritico.value)
    dano.innerHTML = `<h2>Sua shogun tem ${dan}% de Dano critico</h2>`
    if(dan >=150){
        dano.innerHTML += '<p>Esta perfeita ela esta digna de ser chamada de arconte</p>'
    }else if(dan < 150 && dan >=100){
        dano.innerHTML += '<p>Esta usual,mas causo sinta dificuldade é indicado aumentar seu dano critico</p>'
    }else if(dan <100){
        dano.innerHTML += `<p>Ela necessita de mais Dano critico, é indicado aumentar em<strong>${dme}%</strong> seu dano critico</p>`
    }
    
    if (vel >= 2000 && reg >=250 == tax > 60 && dan >= 150){
        img.setAttribute ('src','imagens/raid-pc.jpg')
    }else if (vel >= 2000 || vel < 2000 && vel >= 1600 && reg >=250 || reg <250 && reg >= 200 ||  tax > 60 || tax <60 && tax >= 50 && dan > 150 || dan <150 && dan > 100){
        img.setAttribute ('src','imagens/shogun-js-pc2.jpg')
    }else {
        img.setAttribute ('src','imagens/shogun-js-pc.jpg')
    }

    }
}
    /*else if(vel <2000 && vel >=1500  reg<250 && reg>=200 )*/ 