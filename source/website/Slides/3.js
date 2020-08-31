import React from 'react'
import { ContentSlide, Step } from '../../modules'

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <li>
        <p><strong>Destructuring</strong></p>
      </li>
      <Step index={1}> <li><strong>Promise</strong>
      </li></Step>
    </ul>
  </ContentSlide>
)

slide.title = 'Hands on'

export default slide
