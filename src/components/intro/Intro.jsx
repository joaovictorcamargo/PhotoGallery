import './Intro.css';

const Intro = () => {
    return (
        <div className="i">
        <div className="left">
            <div className="i-left-wrapper">
                <h2>Teste Leadster-Álbum de fotos</h2>

                <h2 className="i-link">
                    <a href="https://www.pexels.com">Photos provided by Pexels</a>
                    </h2>

                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">As melhores fotos</div>
                        <div className="i-title-item">Alta resolução</div>
                        <div className="i-title-item">Tudo organizado</div>
                    </div>
                </div>

            </div>
        </div>
        <div className="right">
            <form>
                <input type="text" placeholder="Buscar Imagens"></input>
                <ion-icon name="search"></ion-icon>
            </form>
        <div className="gallery">
            <div className="i-item">
                <a href="#">
                    <img src="../assets/img.jpq" alt="..."></img>
                    <h3 className="i-name">Fotografo</h3>
                </a>
            </div>
            <div className="i-item">
                <a href="#">
                    <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="..."></img>
                    <h3 className="i-name">Fotografo</h3>
                </a>
            </div>
            <div className="i-item">
                <a href="#">
                    <img src="../assets/img.jpq" alt="..."></img>
                    <h3 className="i-name">Fotografo</h3>
                </a>
            </div><div className="i-item">
                <a href="#">
                    <img src="../assets/img.jpq" alt="..."></img>
                    <h3 className="i-name">Fotografo</h3>
                </a>
            </div>
            <div className="i-item">
                <a href="#">
                    <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="..."></img>
                    <h3 className="i-name">Fotografo</h3>
                </a>
            </div>
            <div className="i-item">
                <a href="#">
                    <img src="../assets/img.jpq" alt="..."></img>
                    <h3 className="i-name">Fotografo</h3>
                </a>
            </div>
        </div>
        </div>
        <a className="load-more">Carregue mais</a>
        </div>
        
    )
}
export default Intro