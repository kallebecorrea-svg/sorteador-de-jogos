const times = [
    { nome: 'Al Moçar', imagem: 'img e script/imgs/al-mocar.jpg' },
    { nome: 'Apend City', imagem: 'img e script/imgs/apend-city.jpg' },
    { nome: 'Ah Tá Anta', imagem: 'img e script/imgs/atahanta.jpg' },
    { nome: 'Atlético Maneiro', imagem: 'img e script/imgs/atletico-maneiro.jpg' },
    { nome: 'Baile de Munique', imagem: 'img e script/imgs/baile-de-munique.jpg' },
    { nome: 'Barcelusa', imagem: 'img e script/imgs/barcelusa.jpg' },
    { nome: 'Bar Sem Lona', imagem: 'img e script/imgs/bar-sem-lona.jpg' },
    { nome: 'Chelsicha', imagem: 'img e script/imgs/chelsicha.jpg' },
    { nome: 'CR Flamingo', imagem: 'img e script/imgs/cr-flamingo.jpg' },
    { nome: 'Cuiabayern', imagem: 'img e script/imgs/cuiabayern.jpg' },
    { nome: 'Falso Madrid', imagem: 'img e script/imgs/falso-madrid.jpg' },
    { nome: 'Horriver Plate', imagem: 'img e script/imgs/horriver-plate.jpg' },
    { nome: 'Inter de Limão', imagem: 'img e script/imgs/inter-de-limao.jpg' },
    { nome: 'Jumentus', imagem: 'img e script/imgs/jumentus.jpg' },
    { nome: 'Lazionados', imagem: 'img e script/imgs/lazionados.jpg' },
    { nome: 'Malfica', imagem: 'img e script/imgs/malfica.jpg' },
    { nome: 'Meia Boca Junior', imagem: 'img e script/imgs/meia-boca-junior.jpg' },
    { nome: 'Paysanduba', imagem: 'img e script/imgs/paysanduba.jpg' },
    { nome: 'Real Madruga', imagem: 'img e script/imgs/real-madruga.jpg' },
    { nome: 'Real Matismo', imagem: 'img e script/imgs/real-matismo.jpg' }
];

function sortearDoisTimes(lista, aleatorio = Math.random) {
    if (lista.length < 2) return null;
    const primeiro = lista.splice(Math.floor(aleatorio() * lista.length), 1)[0];
    const segundo = lista.splice(Math.floor(aleatorio() * lista.length), 1)[0];
    return [primeiro, segundo];
}

if (typeof document !== 'undefined') {
    let disponiveis = [...times];
    let numeroJogo = 0;

    const tabela = document.getElementById('tabela');
    const mensagem = document.getElementById('mensagem');
    const botaoSortear = document.getElementById('sortear');

    function sortearJogo() {
        const sorteados = sortearDoisTimes(disponiveis);
        if (!sorteados) return;

        numeroJogo++;
        const [time1, time2] = sorteados;

        tabela.innerHTML += `
                <div class="jogo">
                    <div class="time"><img src="${time1.imagem}" alt="${time1.nome}"><span>${time1.nome}</span></div>
                    <span class="versus">Jogo ${numeroJogo} - X </span>
                    <div class="time"><img src="${time2.imagem}" alt="${time2.nome}"><span>${time2.nome}</span></div>
                </div>
        `;

        mensagem.textContent = disponiveis.length
            ? `Restam ${disponiveis.length} times.`
            : 'Todos os jogos foram sorteados.';

        botaoSortear.disabled = disponiveis.length < 2;
    }

    function reiniciar() {
        disponiveis = [...times];
        numeroJogo = 0;
        tabela.innerHTML = '';
        mensagem.textContent = `Restam ${disponiveis.length} times.`;
        botaoSortear.disabled = false;
    }

    // Listeners registrados uma única vez, fora de sortearJogo,
    // assim que a página carrega.
    botaoSortear.addEventListener('click', sortearJogo);
    document.getElementById('reiniciar').addEventListener('click', reiniciar);

    // Estado inicial da mensagem ao carregar a página
    mensagem.textContent = `Restam ${disponiveis.length} times.`;
}

if (typeof module !== 'undefined') {
    module.exports = { times, sortearDoisTimes };
}