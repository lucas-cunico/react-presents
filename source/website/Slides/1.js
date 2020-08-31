import React from 'react'
import { ContentSlide, Step } from '../../modules'

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <li><strong>Popularidade</strong>  <p>Segundo o <a target="_blank" href="https://insights.stackoverflow.com/survey/2019/#technology">insights do stackoverflow</a>, o javascript está no sexto ano consecutivo como a tecnologia mais popular entre os profissionais de TI.</p></li>
      <Step index={1}><li><strong>Comunidade</strong><p> Por ser uma linguagem popular, a comunidade é muito grande e ativa. É fácil de encontrar soluções na internet.</p></li></Step>
      <Step index={2}><li><strong>Mercado de trabalho:</strong><p>Javascript é utilizado em diversos frameworks frontend, backend, hibridos e desktops.</p></li></Step>
    </ul>
  </ContentSlide>
)

slide.title = 'Motivos para aprender Javascript'

export default slide
