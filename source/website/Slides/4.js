import React from 'react'
import { ContentSlide, Step } from '../../modules'

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <li><strong>Convertendo para Boolean</strong>
        <p> <code>{`0`}</code>,<code>{`""`}</code>,<code>{`null`}</code>,<code>{`undefined`}</code>,<code>{`NaN`}</code>,<code>{`false`}</code></p>
        <p> <code>{`const isTrue  = !0;`}</code></p>
        <p> <code>{`const isFalse = !1;`}</code></p>
        <p> <code>{`const alsoFalse = !!0;`}</code></p>
        <p> <code>{`console.log(typeof alsoFalse); // Result: "boolean"`}</code></p>
      </li>
      <Step index={1}><li><strong>Convertendo para String</strong>
        <p> <code>{`const val = 1 + "";`}</code></p>
        <p> <code>{`console.log(typeof val); // Result: "string"`}</code></p>
      </li></Step>
      <Step index={2}><li><strong>Convertendo para Number</strong>
        <p> <code>{`let int = "15";`}</code></p>
        <p> <code>{`int = +int;`}</code></p>
        <p> <code>{`console.log(typeof int); Result: "number"`}</code></p>
      </li></Step>
    </ul>
  </ContentSlide>
)

slide.title = 'Tips and tricks'

export default slide
