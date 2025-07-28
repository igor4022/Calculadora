let calculo = document.getElementById('resultado')
let inp = ""



function botom(num)

    {
        inp += num         
        calculo.innerHTML = inp
    }
    

function resull(){

    try {
        res =  eval(inp)
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


