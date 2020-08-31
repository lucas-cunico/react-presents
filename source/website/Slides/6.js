import React from 'react'
import { Code, ContentSlide, Step } from '../../modules'
const code = require('raw!../../../examples/render-function.js')
const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <li><strong>Filtrando valores válidos</strong>
        <p> <code>{`const arr = [ 1, 2, undefined, 5, undefined];`}</code></p>
        <p> <code>{`const filteredArray = arr.filter(Boolean)`}</code></p>
        <p> <code>{`console.log(filteredArray); // [ 1, 2, 5]`}</code></p>
      </li>
      <Step index={1}><li><strong>Convertendo Json para FormData</strong>
        <p> <Code value={code}/></p>
      </li></Step>
    </ul>
  </ContentSlide>
)

slide.title = 'Tips and tricks'

export default slide
