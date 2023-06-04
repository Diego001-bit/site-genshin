function ventilador(){
    var venb = document.getElementById('ventidb')
    var vtabela = document.getElementById('vp')
    var vdoc = document.getElementById ('vendb')
    var img = document.getElementById('venti')
    var venp =Number (venb.value)
    var v = Number(700-venp)
    vtabela.innerHTML= `<div>${venp}</div>`
    if (venp >= 700){
        vdoc.innerHTML =''
        vdoc.innerHTML += `<p>Esta exelente parabéns pelo esforço</p>`
    }else if (venp < 700 && venp >=500){
        vdoc.innerHTML = ``
        vdoc.innerHTML += `<p>Esta usual,apesar que o indicado seja mais ${v} de proificiencia</p>`

    }else{
        vdoc.innerHTML = ` `
        vdoc.innerHTML += `<p>Esta com pouco proificiência,visto a capacitade dele em reações elementais é necessario no minimo 500 de proificiencia</p>`
    }
    var venr = document.getElementById('ventireg')
    var vt = document.getElementById ('vr')
    var vend = document.getElementById ('venreg')
    var vrr = Number(venr.value)
    var val = Number(120-vrr) 
    vt.innerHTML =`${vrr}%`
    if (vrr>=150){
        vend.innerHTML =``
        vend.innerHTML += `<p>Esta exelente, vejo que é uma pessoa dedicada</p>`
    }else if(vrr <150 && vrr >=120){
        vend.innerHTML =``
        vend.innerHTML += `<p>${vrr}% De recarga não é ruim,mas se tiver demorando para soltar a habilidade suprema é indicado aumentar</p>`
    }else{
        vend.innerHTML =``
        vend.innerHTML +=`<p>Esta muito baixo,é indicado buscar mais ${val}% de recarga de energia</p>` 
    }

    if(vdoc>= 700 || vdoc > 500 || vrr >=150 || vrr >120){
        img.setAttribute ('src','imagens/venti-pc.jpg')
    }else{
        img.setAttribute('src','imagens/venti-pq.jpg')
    }
    
}

function zcalcular(){
    var vida = document.querySelector ('input#parede')
    var zres = document.querySelector('div#zparede')
    var vid = Number(vida.value)
    var img = document.getElementById('zhongli') 
    var zv = document.getElementById('zv')
    var me = Number (30000 - vida.value)
    var met = Number (50000 - vida.value)
    zv.innerHTML = `<div>${vid}</div>`
    if (vid >= 50000){
        zres.innerHTML = `<p>Ele esta sendo uma perfeita representação da muralha da china,muito bem </p>`
    } else if (vid < 50000 && vid >= 30000){
    zres.innerHTML = `<p>Esta ok para um zhongli do tipo <strong>híbrido</strong>, mas se seu foco for o escudo é indicado aumentar em <strong>${met}</strong> de vida.</p>`
    }else{
        zres.innerHTML = `<p>Esta muito baixo sua vida mesmo que seja um híbrido é indicado pelo menos 30.000 de vida,esta faltando <strong>${me}</strong> e para um zhongli focado em escudo é necessario aumentar em <strong>${met}</strong> de vida</p>`
    }
    var ztax = document.getElementById ('ztx')
    var ztx = document.getElementById('ztaxac')
    var zt = document.getElementById('zt')
    var tax = Number(ztax.value)
    var tme = Number(50-ztax.value)
    zt.innerHTML = `<div>${tax}%</div>` 
    if (tax >= 60){
        ztx.innerHTML = `<p>Esta perfeito parabéns pelo esforço</p>`
    }else if (tax < 60 && tax >= 50){
        ztx.innerHTML = `<p>Esta bom principalmente se ele tiver com 30.000 de vida ou mais.</p>`
    }else {
        ztx.innerHTML = `<p>Para um zhongli focado em seu escudo não á problema, mas para um zhongli hibrido é indicado mais <strong>${tme}%</strong> de taxa critica.</p>`
    }
    var zdnc = document.getElementById('zdnc')
    var zdanoc = document.getElementById ('zdanoc')
    var zd = document.getElementById('zd')
    var dnc = Number (zdnc.value)
    var dme = Number (100-zdnc.value)
    zd.innerHTML = `<div>${dnc}%</div>`
    if(dnc >140){
        zdanoc.innerHTML = '<p>Esta otimo,vejo que é alguem esforçado</p>'
    }else if (dnc <140 && dnc >=100){
        zdanoc.innerHTML = '<p>Está bom principalmente se for um hibrido.</p>'
    }else{
        zdanoc.innerHTML = `<p>Não é um status que seja necessario para o Zhongli focado em escudo, mas para o Hibrido é indicado ter mais de <strong>${dme}%</strong> Dano critico</p>`
    }
    var zgeo = document.getElementById ('zgeo')
    var bonusg = document.getElementById ('bonusg')
    var bo = document.getElementById('bo')
    var geo = Number(zgeo.value)
    bo.innerHTML = `<div>${geo}%</div>`
    if(geo >= 60){
        bonusg.innerHTML = '<p>Esta otimo um tipico Zhongli focado em seu dano geo</p>'
    }else{
        bonusg.innerHTML = '<p> Um zhongli focado em escudo não tem qualquer necessidade de Bônus Geo.</p>'
    }
    if(vid >= 50000){
        img.setAttribute('src','imagens/r_030.jpg')
    }else if (vid >= 30000 && tax>=50 && dnc>=140 || dnc>=100 && geo >= 60){
        img.setAttribute('src','imagens/zhongli-pc.jpg')
    }else {
        img.setAttribute('src','imagens/zhongli.jpg')
    }
}

function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var db = document.getElementById('db')
    var vel = Number(txtv.value)
    var img = document.getElementById ('shogun')
    var met = Number(2000-txtv.value)
    db.innerHTML = `<div>${vel}</div>`
    if (vel >= 2000){
        res.innerHTML = `<p>está perfeita,parabéns pela sua deticação</p>`
    }else if(vel <2000 && vel >= 1600){
        res.innerHTML = `<p>Esta rasoavel,mas pode vim a trazer dificuldades no abismos,esta faltando ${met} de dano basico</p>`
    }else if(vel < 1600) {
        res.innerHTML = `<p>Esta fraca,é possivel jogar normalmente mas a dificulda aumenta de modo imprevisivel,é indicado aumentar ${met} de dano basico</p>`
    }
    var rec = document.querySelector('input#recarga')
    var ener = document.querySelector('div#energia')
    var rg = document.getElementById('rg')
    var reg = Number(rec.value)
    var rme = Number(200-rec.value)
        rg.innerHTML = `<div>${reg}%</div>`
    if (reg >= 250) {
        ener.innerHTML = '<p>Esta divina,Parabens pelo seu esforço.</p>'
    }else if (reg <250 && reg>=200 ){
        ener.innerHTML = '<p>Esta razoavel,muitos usam nesse nivel,mas o indicado é  250% de recarga de energia.</p>'
    }else if(reg < 200){
        ener.innerHTML = `<p>Para uma personagem que depende fielmente de sua habilidade suprema, ela tem um grande demanda de recarga de energia,sendo assim é preciso aumentar mais <strong>${rme}</strong>% de sua recarga de energia.</p>`
    }
    var taxacritica = document.querySelector('input#taxac')
    var taxa = document.querySelector('div#taxacritica')
    var tx = document.getElementById('stx')
    var tax = Number (taxacritica.value)
    var tme = Number (50 - taxacritica.value)
    tx.innerHTML = `<div>${tax}%</div>`
    if(tax > 60){
        taxa.innerHTML = '<p>Esta perfeita,vejo que é alguem muito esforçado</p>'
    }else if(tax <60 && tax >= 50){
        taxa.innerHTML = '<p>Esta usual,mesmo assim o recomendado é 70%.</p>'
    }else if(tax < 50){
        taxa.innerHTML = `<p>Em casos aonde o personagem é focado em causar dano enquanto estiver com o supremo ativo como a shogun,eu aconselho em buscar mais <strong>${tme}%</strong> de taxa critica.</p>`
    }
    var danocritico = document.getElementById('danoc')
    var dano = document.querySelector('div#danocri')
    var dc = document.getElementById('sdn')
    var dan = Number (danocritico.value)
    var dme = Number(100-dan)
    dc.innerHTML = `<div>${dan}%</div>`
    if(dan >=150){
        dano.innerHTML = '<p>Esta perfeita ela esta digna de ser chamada de arconte.</p>'
    }else if(dan < 150 && dan >=100){
        dano.innerHTML = '<p>Esta usual,mas causo sinta dificuldade é indicado aumentar seu dano critico.</p>'
    }else if(dan <100){
        dano.innerHTML = `<p>Ela necessita de mais Dano critico, é indicado aumentar em <strong>${dme}%</strong> seu dano critico.</p>`
    }
    
    if (vel >= 2000 && reg >=250 && tax > 60 && dan >= 140){
        img.setAttribute ('src','imagens/raid-pc.jpg')
    }else if ( vel < 2000 && vel >= 1600  || reg <250 && reg >= 200 ||  tax >= 50 && dan > 100){
        img.setAttribute ('src','imagens/shogun-js-pc2.jpg')
    }else {
        img.setAttribute ('src','imagens/shogun-js-pc.jpg')
    }
    }
    /*else if(vel <2000 && vel >=1500  reg<250 && reg>=200 )*/ 
    function boran(){
        var nprof =document.getElementById('prof')
        var ndig = document.getElementById('napf')
        var img = document.getElementById('nahida')
        var profn= Number(nprof.value)
        var r = Number(700-profn)
        var np = document.getElementById('np')
        np.innerHTML = `${profn}`
        if(profn>=700){
            ndig.innerHTML =``
            ndig.innerHTML += `<p>Está exelente,parabens pelo seu esforço</p>`
        }else if(profn<700 &&profn >=600){
            ndig.innerHTML =``
            ndig.innerHTML += `<p>Está bom, mas é indicado aumentar mais ${r}  sua proificiencia</p>`
        }else{
            ndig.innerHTML = ''
            ndig.innerHTML += `<p>Está com pouca proificiencia,visto que é um atributo essencial para ela, é necessario ter no minimo 600 de proificiencia</p>`
        }
        
        var txnahida = document.getElementById('txnahida')
        var txn =Number(txnahida.value)
        var re =Number(50-txn)
        var nt = document.getElementById('nt')
        nt.innerHTML = `${txn}%`
        if(txn>=50){
            ndig.innerHTML +=`<p>Está otima,vejo que é uma pessoa esforçada</p>`
        }else if(txn <50 && txn > 40){
            ndig.innerHTML +=`<p>Está ok mas o indicado é ter no minimo 50% de taxa </p>`
        }else{
            ndig.innerHTML +=`<p>Esta muito baixo a taxa critica,aconselho buscar mais ${re}% de taxa</p>`
        }
        var dnahida = document.getElementById('dnnahida')
        var dnah = Number(dnahida.value)
        var d = Number(140-dnah)
        var nd = document.getElementById ('nd')
        nd.innerHTML =`${dnah}%`
        if(dnah >= 140){
            ndig.innerHTML += `<p>Esta digna de ser chamada de arconde.</p>`
        }else if(dnah<140 && dnah>=100){
            ndig.innerHTML += `<p>Está mediana,causo sinta alguma dificuldade é indicado aumenta mais ${d}% de dano critico.</p>`
        }else{
            ndig.innerHTML+=`<p>Esta com pouco dano critico, é indicado aumentar em para pelo menos 100% de dano critico.</p>`
        }
        if(profn > 600 && txn > 50 && dnah> 140){
            img.setAttribute ('src','imagens/nahida-dendro-character-genshin.jpg')
        }else if(profn > 600 || txn >= 50 || dnah> 100){
            img.setAttribute ('src','imagens/nahida-pc.jpg')
        }else{
            img.setAttribute('src','imagens/dendro-archons-true-name-nahida.jpg')
        }
    }