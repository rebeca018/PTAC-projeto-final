export default function Home(){
    return(
        
        <div class="home">
        <nav class="navbar navbar-expand-lg bg-body-tertiary, color">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Minhas músicas favoritas</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active, color_b" aria-current="page" href="#">Home</a>
                    </li>    

                    <li class="nav-item">
                    <a class="nav-link active, color_b" aria-current="page" href="#">Em destaque</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link active, color_b" aria-current="page" href="#">Adiocionar nova música</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>

        <h3 class="texto-home">Home</h3>
        
            

        </div>
       
     );
}