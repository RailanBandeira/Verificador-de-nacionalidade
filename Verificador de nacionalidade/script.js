function Verificar(){
    var txte = document.getElementById("txtano")
    var ppp = document.getElementById("ppp")
    var vel = (txte.value)
    ppp.innerHTML = `Seu país é <strong>${vel}</strong>`
    if(vel == ""){
        alert('[ERRO] Digite um nome de um país')
    }
    if(vel == 'Brasil'){
        ppp.innerHTML += `<p> Você é <strong>brasileiro</strong> <p>`
    } else{
        ppp.innerHTML +=`<p>Você é <strong>estrangeiro</strong><p>`
    }
}