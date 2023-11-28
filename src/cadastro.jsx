import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Cadastrar(){

    const videoLocalStorage = JSON.parse(localStorage.getItem("Video")) || [];
   const [link, setLink] = useState("")
   const [titulo, setTitulo] = useState("");
   const [artista, setArtista] = useState("");
   const [letra, setLetra] = useState("");
   const [vizualizacao, setVizualizacao] = useState(0);
   const [video, setVideo] = useState(listaLocalStorage);
   const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id +1 || 1);
   //pegando o tamanho da lista menos 1 para pegar o id e somando 1 para arrumar o id

   useEffect(() => { localStorage.setItem("Video", JSON.stringify(video)) }, [video]);


   const salvar = (e) => {
        e.preventDefault();
        setVideo([...video, {
            link: link,
            titulo: titulo,
            artista: artista,
            letra: letra,
            vizualizacao: vizualizacao,
            id: id
        }]);
        setId(id + 1);
        setLink("");
        setTitulo("");
        setArtista("");
        setLetra("");
        setvizualizacao(0);
   };

    
    return(
        
        <div class="lista">
            
            <h1 class="texto">Cadastre nova música</h1>
            <p class="texto">Voltar para <Link to="/">home</Link></p>
        
            

            <form onSubmit={salvar}>

                <p class="texto">Link</p>
                <input value={Link} type="text"
                onChange={(e)=>{ setLink(e.target.value)}} />
                
                <p class="texto">Título</p>
                <input value={titulo} type="text"
                onChange={(e)=>{ setTitulo(e.target.value)}} />

                <p class="texto">Artista</p>
                <input value={artista} type="text"
                onChange={(e)=>{ setArtista(e.target.value)}} />

                <p class="texto">Letra</p>
                <input value={letra} type="text"
                onChange={(e)=>{ setLetra(e.target.value)}} />

                <p class="texto">Vizualizacao</p>
                <input value={vizualizacao} type="number"
                onChange={(e)=>{ setVizualizacao(e.target.value)}} />
                <br/>
                <button class="btn btn-secondary botao">ADD</button>
            </form>

            {video.map((ativ)=>
            <ul key={ativ.id}>
                <div class="video-card">
                <p class="video-card-img">{ativ.imagem}</p>
               <Link to={`/detalhe/${ativ.id}`}>
                    <p class="video-card-p">{ativ.titulo}</p>
               </Link>
                <p class="video-card-p">{ativ.artista}</p>
                <p class="video-card-p">{ativ.letra}</p>
                <p class="video-card-p">{ativ.vizualizacao}</p>
                </div>
            </ul>)}
           
        </div>
       
     );
}