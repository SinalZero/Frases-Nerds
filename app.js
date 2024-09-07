/*
Função pesquisar():
Busca os dados e renderiza os resultados na página,
criando elementos HTML para cada item encontrado.
*/
function pesquisarEnter(event) {
    if (event.key === 'Enter') {
      document.getElementById('buscar').click();
    }
  }

function pesquisar(){
    // Esta função busca os dados e renderiza os resultados na página.

    

// Seleciona o elemento onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
console.log(section);

let barraPesquisa = document.getElementById('barra-pesquisa').value.trim();

if (barraPesquisa === "") {
    section.innerHTML = '<p> Resultado não encontrado.</p>'
    return};

let resultados = '';
// Variável para armazenar a string HTML com todos os resultados.
let titulo = '';
let descricao = '';
let tags = '';

barraPesquisa = barraPesquisa.toLowerCase()

for(let dado of dados) {
    // Para cada item de dado, cria um elemento HTML para exibir os resultados.
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    

    if (titulo.includes(barraPesquisa) || descricao.includes(barraPesquisa) || tags.includes(barraPesquisa)) {

    resultados += ` <div class="item-resultado">
    <h2>
        ${dado.titulo}
    </h2>
    <p class="descricao-meta">
        ${dado.descricao}
    </p>
    <p>
        ${dado.frases}
    </p>
    <a href = ${dado.link} target="_blank">Mais Informações
        
    </a> 
</div>`
}
}

if(!resultados){
    resultados = '<p> Resultado não encontrado.</p>'
};

section.innerHTML = resultados;

}