import './Parceiro.css'

export const Parceiro = () => {
  return (
    <>
      <div className="page__parceiros" id="container">
        <div className="parceiro__title">SEJA PARCEIRO</div>
        <div className="parceiro__motivo">
          <h2 className="section__parceiro__title">
            Por quê ser parceiro da Cultural Path?
          </h2>
          <div className="motivo__container">
            <img
              className="image__parceiro__home"
              src="https://culturalpath.netlify.app/img/parceiro__home.png"
              alt="" />
            <div className="motivo__text">
              <span
              >Uma educação de qualidade é essencial para a formação de crianças e
                jovens que serão, num futuro próximo, seus “colaboradores”.
              </span>
              <span
              >Apoiando um de nossos programas, sua empresa participará de projetos
                de alta relevância para crianças, adolescentes, pais, professores,
                gestores escolares e comunidade, promovendo mudanças significativas no
                modo como se aprende e se ensina e nos valores essenciais para a
                socialização do ser humano como um todo.
              </span>
              <span
              >Sua empresa será reconhecida por oferecer reais oportunidades aos
                jovens da região; valorizar uma Educação de qualidade para todos;
                exercer responsabilidade social com eficácia; apoiar o desenvolvimento
                local de modo consistente e investir com ética e transparência na
                sociedade local.
              </span>
              <span
              >Ter sua marca associada aos materiais e eventos dos projetos da
                Labor, também contribuirá para as finalidades de Comunicação Social da
                empresa.
              </span>
            </div>
          </div>
        </div>
        <div className="parceiro__valores">
          <h2 className="section__parceiro__title padding">QUAIS SÃO NOSSOS VALORES?</h2>
          <span className="valores__description"
          >A Cultural Path possuí a missão de conscientizar a futura geração para
            que tenha uma redução significativa na desigualdade cultural.
          </span>
          <div className="valores__container">
            <div className="valor">
              <div className="valor__number">1</div>
              <div className="valor__content">
                <div className="valor__content__title">Integridade</div>
                <div className="valor__content__description">
                  pela capacidade de trabalhar em conjunto com empresas e fundações na
                  construção de soluções para a melhoria da Educação, articulando as
                  secretarias de educação e as instituições de ensino.
                </div>
              </div>
            </div>
            <div className="valor">
              <div className="valor__number">2</div>
              <div className="valor__content">
                <div className="valor__content__title">Diversidade</div>
                <div className="valor__content__description">
                  pela capacidade de trabalhar em conjunto com empresas e fundações na
                  construção de soluções para a melhoria da Educação, articulando as
                  secretarias de educação e as instituições de ensino.
                </div>
              </div>
            </div>
            <div className="valor">
              <div className="valor__number">3</div>
              <div className="valor__content">
                <div className="valor__content__title">Inclusão</div>
                <div className="valor__content__description">
                  pela capacidade de trabalhar em conjunto com empresas e fundações na
                  construção de soluções para a melhoria da Educação, articulando as
                  secretarias de educação e as instituições de ensino.
                </div>
              </div>
            </div>
            <div className="valor">
              <div className="valor__number">4</div>
              <div className="valor__content">
                <div className="valor__content__title">Honestidade</div>
                <div className="valor__content__description">
                  pela capacidade de trabalhar em conjunto com empresas e fundações na
                  construção de soluções para a melhoria da Educação, articulando as
                  secretarias de educação e as instituições de ensino.
                </div>
              </div>
            </div>
            <div className="valor">
              <div className="valor__number">5</div>
              <div className="valor__content">
                <div className="valor__content__title">Transparência</div>
                <div className="valor__content__description">
                  pela capacidade de trabalhar em conjunto com empresas e fundações na
                  construção de soluções para a melhoria da Educação, articulando as
                  secretarias de educação e as instituições de ensino.
                </div>
              </div>
            </div>
            <div className="valor">
              <div className="valor__number">6</div>
              <div className="valor__content">
                <div className="valor__content__title">Concisão</div>
                <div className="valor__content__description">
                  pela capacidade de trabalhar em conjunto com empresas e fundações na
                  construção de soluções para a melhoria da Educação, articulando as
                  secretarias de educação e as instituições de ensino.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parceiro__formulario">
          <h2 className="section__parceiro__title">VENHA FAZER A DIFERENÇA ;)</h2>
          <span className="section__parceiro__description">se torne um parceiro Cultural Path</span>
          <div className="parceiro__formulario__content">
            <form
              className="form__parceiro"
              id="form__parceiro"
              action="">
              <div className="form__parceiro__data">
                <label htmlFor="nome">NOME:</label>
                <input
                  type="text"
                  required
                  name="nome"
                  id="nome"
                  placeholder="Digite seu nome" />
              </div>
              <div className="form__parceiro__data">
                <label htmlFor="email">E-MAIL:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Digite seu e-mail" />
              </div>
              <div className="form__parceiro__data">
                <label htmlFor="telefone">TELEFONE:</label>
                <input
                  type="tel"
                  name="telefone"
                  id="telefone"
                  required
                  placeholder="Digite seu telefone" />
              </div>
              <div className="form__parceiro__data">
                <label htmlFor="razao">RAZÃO SOCIAL:</label>
                <input
                  type="text"
                  name="razao"
                  id="razao"
                  required
                  placeholder="Digite sua razão social" />
              </div>
              <div className="form__parceiro__data">
                <label htmlFor="cnpj">CNPJ:</label>
                <input
                  type="text"
                  name="cnpj"
                  id="cnpj"
                  required
                  placeholder="Digite seu CNPJ" />
              </div>
              <div className="form__parceiro__data">
                <label htmlFor="motivo">MOTIVO</label>
                <select name="motivo" id="motivo" required>
                  <option value="patrocinio" id="1">Quero ser parceiro</option>
                  <option value="contribuir" id="2">Quero contribuir</option>
                  <option value="conhecer" id="3">Quero conhecer</option>
                </select>
              </div>
              <div className="form__parceiro__radio">
                <p>FORMA DE CONTATO</p>
                <div className="radio">
                  <input
                    type="radio"
                    id="radio__contato"
                    required
                    name="forma-contato"
                    value="1"
                    className="forma-contato" />
                  <label htmlFor="radio__email">E-mail</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    id="radio__contato"
                    name="forma-contato"
                    required
                    value="2"
                    className="forma-contato" />
                  <label htmlFor="radio__telefone">Telefone</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    id="radio__contato"
                    name="forma-contato"
                    required
                    value="3"
                    className="forma-contato" />
                  <label htmlFor="radio__whatsapp">Whatsapp</label>
                </div>
              </div>
              <button className="parceiro__form__button" id="parceiro__form__button">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
