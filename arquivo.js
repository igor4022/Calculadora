let calculo = document.getElementById('calcular')
let inp = ""

function botom(num)

    {
        numero = calculo.innerHTML         
        calculo.innerHTML = numero + num
    }

function resull(){

    try {
        calculo.innerHTML =  eval(inp)
        if(!Number.isInteger(res)){
            res = res.toFixed(2)
        }
        inp  = res
        calculo.textContent = inp
    } catch(error){
        calculo.textContent = "Erro"
        inp = ""
    }
}


