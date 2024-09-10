document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuformulario');
    formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const horas = document.getElementById('horas').value;
        const origem = document.getElementById('origem').value;
        const destino = document.getElementById('destino').value;
        

        alert(` Olá, ${nome}! Sua Viagem foi Marcada para o dia ${data} às ${horas},partindo de ${origem} para ${destino} \n Agradecemos a sua preferência. BOA VIAGEM!!`);
    })}
)