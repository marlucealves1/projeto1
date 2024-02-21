document .addEventListener('DOMContentLoaded'),()=>{
    const url="https://api.chucknorris.io/jokes/categories"
fetch(url)
if ((response.ok)){
    throw new Error('erro ao receber os dados')
}
return response.json()
}
then((data)=>{
    console.log(data)
})
.catch((err)=>console.log(err));

function gerarCategorias(categorias){
    const select = document.getElementById('select')

    categorias.ma ((categoria)=>{
    const option = document.createElement('option');
    option.innerHTML = '${categoria}'
    select.appendChild(option)
    });
}
const btn = document.getElementById('btn')
btn.addEventListener('click'), ()=> {
    const select = document.getElementById("select").value;

    console.ur1="https://api.chucknorris.io/jokes/random?category={}"
fetch(ur1)
.then((response))
{
    if(!response.ok){
throw new Error("Erro ao receber os dados");

    }
}
return reponse.json();
}
then((data) => { 
    criarPiada(data);
})
.catch((err) => console.log(err));

function criarPiada(data){
    const joke = document.getElementById('joke')
    joke.innerHTML = data.value
}
