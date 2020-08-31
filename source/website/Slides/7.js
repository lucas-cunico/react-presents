import React from 'react'
import { TitleSlide } from '../../modules'

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <p>Aceito pull requests corrigindo erros de protuguês <i className='fa fa-github' /> <a href='https://github.com/lucas-cunico/react-presents'>github.com/lucas-cunico/react-presents</a></p>
  </TitleSlide>
)

slide.title = 'Fim!'

export default slide
