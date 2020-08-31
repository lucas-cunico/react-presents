import React from 'react'
import { ContentSlide, Step } from '../../modules'

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <li><strong>ES6 - ECMAScript 2015</strong>
        <p> <code>import * as moduleName from "..."; export const Foo</code> </p>
        <p> <code>{`class Foo { ... }`}</code></p>
        <p> <code>{`() => {...}`}</code></p>
        <p> <code>{`new Promise()`}</code></p>
      </li>
      <Step index={1}> <li><strong>ES7 -ECMAScript 2016</strong>
        <p> <code>{`await`}</code></p>
        <p> <code>{`async`}</code></p>
      </li></Step>
      <Step index={2}><li><strong>ES8 - ECMAScript 2017</strong>
        <p> <code>{`Object.values`}</code></p>
        <p> <code>{`Object.entries`}</code></p>
        <p> <code>{`Object.getOwnPropertyDescriptors`}</code></p>
      </li></Step>
      <Step index={3}><li><strong>ES11 - ECMAScript 2020</strong>
      </li></Step>
    </ul>
  </ContentSlide>
)

slide.title = 'Marco histórico'

export default slide
