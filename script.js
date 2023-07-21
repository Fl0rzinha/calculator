// cria funcao que vai adicionar os numeros clicados no espaço em branco chamado pelo id "resultado"
function insert(num) {
    // faz com que o valor que já está dentro de "resultado" como por exemplo um outro numero, seja armazenado na variável "numero"
    var numero = document.getElementById('resultado').innerHTML;

    // faz com que o numero que foi clicado (que chamou a função insert no caso) seja adicionado logo em seguida do número que já estava antes
    document.getElementById('resultado').innerHTML = numero + num;

    // esse esquema evita que um número que ja estava lá desapareça assim que clicamos em um outro número que chama a mesma função
}


// cria funcao que vai limpar todos os números e símbolos que estão dentro da área em branco assim que o botão que chama a mesma for pressionado
function limpar() {
    // aqui ele substitui o valor(caracteres) do espaço em branco por simplesmente nada (espaço vazio entre as áspas)
    document.getElementById('resultado').innerHTML = "";
}


// cria função que deleta um único caractere assim que for executada
function voltar() {
    // aqui declara a o id do html "resultado" como uma variável na função
    var resultado = document.getElementById('resultado').innerHTML;

    // "resultado.lenght -1", lenght serve para ler a quantidade de caracteres na var "resultado", e -1 serve para diminuir essa quantidade em -1
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    // aqui declara a o id do html "resultado" como uma variável na função
    var resultado = document.getElementById('resultado').innerHTML;

    // trasnforma o valor do espaço "resultado" em um calculo usando o "eval", faz isso usando a var "resultado"
    document.getElementById('resultado').innerHTML = eval(resultado);
}