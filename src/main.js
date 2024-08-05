document.addEventListener('DOMContentLoaded', function() {
    const linkArtefatos = document.getElementById('linkArtefatos');
    const linkAnimais = document.getElementById('linkAnimais');
    const linkMinerais = document.getElementById('linkMinerais');
    const linkLavouras = document.getElementById('linkLavouras');
    const buttonPeronsagens = document.getElementById('personagens');
    const buttonPlantacoes = document.getElementById('plantacoes');
    const buttonMinerios = document.getElementById('minerios');
    const buttonArtefatos = document.getElementById('arfetatos');
    const buttonAnimais = document.getElementById('animais');
    const buttonMenuSuspenso = document.getElementById('botaoMenu');

    buttonPeronsagens.addEventListener('click', function() {
        window.location.href = 'app/pages/personagens/personagens.html';
    });
    buttonPlantacoes.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    buttonMinerios.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    buttonArtefatos.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    buttonAnimais.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    linkArtefatos.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    linkAnimais.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    linkMinerais.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    linkLavouras.addEventListener('click', function() {
        alert('Página temporariamente indisponível!');
    });
    buttonMenuSuspenso.addEventListener('click', function(){
        alert('Página temporariamente indisponível!');
    });
});