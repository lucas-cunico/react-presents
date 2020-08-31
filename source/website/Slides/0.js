import React from 'react'
import { TitleSlide } from '../../modules'

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <h2><i className='fa fa-github' /> <a href='https://github.com/lucas-cunico/react-presents'>github.com/lucas-cunico/react-presents</a></h2>
  </TitleSlide>
)

slide.title = 'Javascript - tips and tricks'

export default slide
