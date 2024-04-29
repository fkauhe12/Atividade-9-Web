function calcular(){
    let tabuada = document.getElementById("tabuada").value;
    let resultado = "";

    for(let i=1;i<=10;i++){
        resultado += tabuada + "x" + i + "=" + tabuada * i + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}