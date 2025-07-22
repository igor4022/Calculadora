let calculo = document.getElementById('calcular')

function resull(){
let resultado = document.getElementById('resultado')
        if(resultado){

        resultado.innerHTML = eval('resultado')

}
}
function botom(num)

    {
        calculo.innerHTML = num + calculo.innerHTML
    }

function vezes(ves)

   {
    
        calculo.innerHTML = ves + calculo.innerHTML
   }

function mais(mas){
    calculo.innerHTML = mas + calculo.innerHTML
}

function menos(nos){
    calculo.innerHTML = nos + calculo.innerHTML
}

function divisao(vis){
    calculo.innerHTML = vis + calculo.innerHTML
}
