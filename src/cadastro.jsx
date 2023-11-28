import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home(){

    const videoLocalStorage = JSON.parse(localStorage.getItem("Video")) || [];
   const [imagem, setImagem] = useState("")
   const [titulo, setTitulo] = useState("");
   const [autor, setAutor] = useState("");
   const [editora, setEditora] = useState("");
   const [preco, setPreco] = useState(0);
   const [video, setVideo] = useState(listaLocalStorage);
   const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id +1 || 1);
   //pegando o tamanho da lista menos 1 para pegar o id e somando 1 para arrumar o id

   useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);


   const salvar = (e) => {
        e.preventDefault();
        setVideo([...video, {
            imagem: imagem,
            titulo: titulo,
            autor: autor,
            editora: editora,
            preco: preco,
            id: id
        }]);
        setId(id + 1);
        setImagem("");
        setTitulo("");
        setAutor("");
        setEditora("");
        setPreco(0);
   };

   const apagar = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id){
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
        
   }
    
    return(
        
        <div class="lista">
            
            <h1 class="texto">Wishlist de Livros</h1>
            <p class="texto">Voltar para <Link to="/">home</Link></p>
        
            

            <form onSubmit={salvar}>

                <p class="texto">Imagem</p>
                <input value={imagem} type="text"
                onChange={(e)=>{ setImagem(e.target.value)}} />
                
                <p class="texto">Título</p>
                <input value={titulo} type="text"
                onChange={(e)=>{ setTitulo(e.target.value)}} />

                <p class="texto">Autor</p>
                <input value={autor} type="text"
                onChange={(e)=>{ setAutor(e.target.value)}} />

                <p class="texto">Editora</p>
                <input value={editora} type="text"
                onChange={(e)=>{ setEditora(e.target.value)}} />

                <p class="texto">Preço</p>
                <input value={preco} type="number"
                onChange={(e)=>{ setPreco(e.target.value)}} />
                <br/>
                <button class="btn btn-secondary botao">ADD</button>
            </form>

            {lista.map((ativ)=>
            <ul key={ativ.id}>
                <div class="book-card">
                <img src={ativ.imagem} class="book-card-img"></img>
               <Link to={`/detalhe/${ativ.id}`}>
                    <p class="book-card-p">{ativ.titulo}</p>
               </Link>
                <p class="book-card-p">Autor: {ativ.autor}</p>
                <p class="book-card-p">Editora: {ativ.editora}</p>
                <p class="book-card-p">R$ {ativ.preco}</p>
                <img src="/imagem/trash.png" alt="" class="lixinho" onClick={() => apagar(ativ.id)} />
                </div>
            </ul>)}
           
        </div>
       
     );
}