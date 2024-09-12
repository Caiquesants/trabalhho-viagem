document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuformulario');
    formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const horas = document.getElementById('horas').value;
        const origem = document.getElementById('origem').value;
        const destino = document.getElementById('destino').value;
        
const mensagem = `
        <h3>Reserva Feita!</h3>
        <p><strong>Nome</strong ${nome}</p>
        <p><strong>Data da Viagem</strong ${data}</p>
        <p><strong>Horas da Viagem</strong ${horas}</p>
        <p><strong>Origem</strong ${origem}</p>
        <p><strong>Destino</strong ${destino}</p>
    `;
    document.getElementById('mensagem').innerHTML = mensagem;

    })
});