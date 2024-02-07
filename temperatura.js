let resposta = document.getElementById('resposta')

function calcular(){
    let calc = 0
    let temperatura = Number (document.getElementById('temperatura').value)
    calc = (temperatura * 9/5) + 32
     
    resposta.innerHTML = "o valor da temperatura é: " + calc
}



