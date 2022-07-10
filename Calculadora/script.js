function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero+num
    document.getElementById('resultado').style.color = 'black'
}
function clean(){
    document.getElementById('resultado').style.color = 'black'
    document.getElementById('resultado').innerHTML = ''
}
function back(){
    document.getElementById('resultado').style.color = 'black'
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = '(Vazio)'
        document.getElementById('resultado').style.color = '#acabab'
    }
}