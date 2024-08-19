const key = "84c9fdbca92e1de7975c53eea7b60845";

function colocaDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".sensacao").innerHTML = Math.floor(dados.main.feels_like) + " ºC"
    document.querySelector(".vento").innerHTML = dados.wind.speed + " km/h"
    document.querySelector(".max").innerHTML = Math.floor(dados.main.temp_max) + " ºC"
    document.querySelector(".min").innerHTML = Math.floor(dados.main.temp_min) + " ºC"

}


//Busca a cidade e cria o arquivo JSON
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocaDadosNaTela(dados)
}

// recebe o valor do input cidade
function cliqueBotao() {
    const cidade = document.querySelector("#cidade").value;

    buscarCidade(cidade)
}

