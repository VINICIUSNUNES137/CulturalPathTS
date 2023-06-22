import './Home.css'

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="containerHome">
          <h1 className="title_home">
            Cultural
            <span style={{ color: "#009d78" }}>P</span><span style={{ color: "#0D9ECC" }}>a</span><span
              style={{ color: "#E99922" }}>t</span><span style={{ color: "#79132a" }}>h</span>, mudando vidas
          </h1>
          <p className="text_home">
            Um futuro onde a discriminação cultural seja mínima, fortalecendo identidades, valorizando a expressão
            cultural e promovendo a capacidade de se relacionar e respeitar o próximo
          </p>
          <a href="/" className="button_home">
            venha fazer parte
          </a>
        </div>
      </section >
      <section className="seja_voluntario">
        <div className="container-seja-voluntario">
          <div className="container_text">
            <h1 className="title_voluntario">
              Seja um voluntário Cultural Path
            </h1>
            <p className="text_voluntario">
              Você pode ajudar de várias formas
              além da doação em dinheiro. Junte-se a nós e transforme vidas.
            </p>
            <a href="/voluntario" className="button_seja_voluntario">
              quero ajudar
            </a>
          </div>
        </div>
      </section >
      <section className="empresas">
        <div className="container_empresas">
          <h1 className="title_home">
            Venha ser nosso parceiro.
          </h1>
          <p className="text_empresas">
            Você pode ajudar de várias formas além da doação em dinheiro.
            Junte-se a nós e transforme vidas.
          </p>
          <a href="/parceiro" className="button_empresa">
            quero ajudar
          </a>
        </div>
      </section>
      <section className="calendario">
        <div className="container-empresa">
          <div className="container_text">
            <h1 className="title_empresa">
              CALENDÁRIO 2023
            </h1>
            <p className="text_voluntario">
              Você pode ajudar de várias formas
              além da doação em dinheiro. Junte-se a nós e transforme vidas.
            </p>
            <a href="/calendario" className="button_calendario">
              quero ajudar
            </a>
          </div>
        </div>
      </section>
    </>
  )
}