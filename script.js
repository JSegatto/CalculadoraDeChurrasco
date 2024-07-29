
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const homem = parseInt(document.getElementById('homem').value);
    const mulher = parseInt(document.getElementById('mulher').value);
    const crianca = parseInt(document.getElementById('crianca').value);
    
    const resultado = document.querySelector('#resultado')

    const carne = (homem * 500) + (mulher * 300) + (crianca *200);
    const frango = (homem * 200) + (mulher * 200) + (crianca *100);
    const linguica = (homem * 200) + (mulher * 200) + (crianca *200);
    const refrigerante = (homem * 300) + (mulher * 400) + (crianca *200);
    const cerveja = (homem * 800) + (mulher * 500);

    resultado.innerHTML =
        `<p>Quantidade de itens a serem comprados:</p>
        <ul>
            <li><span>${carne/1000}Kg</span> de carne bovina</li>
            <li><span>${frango/1000}Kg</span> de frango</li>
            <li><span>${linguica/1000}Kg</span> de linguiça</li>
            <li><span>${refrigerante/1000}L</span> de refrigerante</li>
            <li><span>${cerveja/1000}L</span> de cerveja</li>
        </ul>`
    ;
    resultado.style.display = 'flex';
});