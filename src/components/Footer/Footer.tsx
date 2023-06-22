import './Footer.css'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="container-logo-contato">
            <img className="logo-footer" src="./img/logoCulturalPath.png" alt="" />
            <div className="teste">
              <div className="fale-conosco">
                <h5>Fale Conosco</h5>
                <span >contao@culturalpath.org.br</span>
                <span >55 (11)942316789</span>
              </div>
              <div className="horario-funcionamento">
                <h5>Horário de funcionamento</h5>
                <span >De Segunda a Sexta das 09h00 às 18h00</span>
              </div>
            </div>
          </div>
          <div className="container-rede-social">
            <div className="links-button">
              <a href="/">Página inicial</a>
              <a href="/parceiro">Seja nosso Parceiro</a>
            </div>
            <div className="rede-social">
              <h5>Nossas redes:</h5>
              <div className="icones">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="barra"></div>
      </footer>
    </>
  )
}