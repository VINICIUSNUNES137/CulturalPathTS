import './Encontros.css'
import React, { useEffect, useRef } from 'react';
import Glider from 'glider-js';
import { CardEncontros } from './Card';


export const Encontros = () => {
  return (
    <>
      <div className="page__encontros" id="container">
        <div className="encontros__title">ENCONTROS</div>
        <div className="encontros__carrossel">
          <h2 className="encontros__content__title">ALGUNS DE NOSSOS ENCONTROS:</h2>
          <div className="carousel_encontro" id="carousel_encontro">
            <div className="carousel_encontro__container" id="carousel_encontro__container">
              <CardEncontros />
              <CardEncontros />
              <CardEncontros />
              <CardEncontros />
            </div>
          </div>
          <div role="tablist" className="dots" id="dots"></div>
          <div className="buttonList__encontros">
            <button className="prev__encontros" aria-label="ANTERIOR">PREV</button>
            <button className="next__encontros" aria-label="PRÓXIMO">NEXT</button>
          </div>
        </div>

        <div className="abordagem">
          <h2 className="encontros__content__title">NÓS TAMBÉM ABORDAMOS:</h2>
          <span>Racismo: Preconceito baseado na cor da pele, etnia ou origem racial, que leva à discriminação e marginalização
            de certos grupos étnicos.

            Sexismo: Preconceito baseado no gênero, que resulta na discriminação de mulheres ou homens, limitando suas
            oportunidades e tratando-os de forma desigual.

            Homofobia: Preconceito contra pessoas com orientação sexual não heterossexual, como gays, lésbicas, bissexuais e
            transexuais, resultando em discriminação, exclusão e violência.

            Xenofobia: Preconceito contra estrangeiros ou pessoas de outras nacionalidades, manifestando-se por meio de
            hostilidade, estereótipos negativos e discriminação.

            classNameismo: Preconceito baseado na posição socioeconômica, onde pessoas são julgadas e tratadas de maneira
            diferente com base em sua classNamee social, resultando em desigualdade de oportunidades.

            Idadismo: Preconceito baseado na idade, onde pessoas são discriminadas ou tratadas de forma desigual com base em
            sua idade, seja pela juventude ou pela velhice.

            Ableísmo: Preconceito contra pessoas com deficiência, que resulta em discriminação, estigmatização e falta de
            acessibilidade para pessoas com diferentes habilidades.

            Preconceito religioso: Discriminação ou intolerância em relação às crenças religiosas de outras pessoas,
            resultando em estereótipos, exclusão e perseguição religiosa.

            Gordofobia: Preconceito contra pessoas com sobrepeso ou obesidade, manifestando-se por meio de estigmatização,
            discriminação e tratamento injusto com base no peso corporal.

            Preconceito linguístico: Discriminação ou estigmatização com base no uso de determinada língua ou sotaque, levando
            à exclusão ou tratamento injusto de pessoas com diferentes formas de comunicação.

            Esses são apenas alguns exemplos de preconceitos existentes na sociedade. É importante combater e conscientizar
            sobre essas formas de preconceito, promovendo a igualdade, o respeito e a inclusão de todas as pessoas.
          </span>
        </div>
        <div className="abordagem">
          <h2 className="encontros__content__title">FIQUE LIGADO EM NOSSA AGENDA:</h2>
          <span>Consulte nossa
            <a className="link" href="/calendario" >agenda</a> para
            verificar quais escolas e palestrantes farão parte da triagem Cultural
            Path, dessa forma você ficará sabendo com antecedência quando estaremos em
            sua escola.
          </span>
        </div>
        <div className="abordagem">
          <h2 className="encontros__content__title">PARA ESCOLAS:</h2>
          <span>Para casos onde gerou interesse na triagem Cultural Path, porém sua
            escola não apareceu na lista, você poderá solicitar que o responsável pela
            instuição de ensino faça o cadastro em nosso site na aba
            <a href="/parceiro" className="link">parceiro</a>.
          </span>
        </div>
        <div className="abordagem">
          <h2 className="encontros__content__title">PARA PROFESSORES:</h2>
          <span>Se você é ou foi professor certificado, você pode se candidatar para ser
            um Voluntário Cultural Path, dessa forma você receberá um treinamento
            exclusivo pelo nosso time, para que você se desenvolva em conjunto com a
            equipe. Ficou interessado(a)?
            <a href="/voluntario" className="link">clique aqui</a> e
            faça o cadastro.
          </span>
        </div>
      </div>
    </>
  )
}
