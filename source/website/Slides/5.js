import React from 'react'
import { ContentSlide, Step } from '../../modules'

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <li><strong>Circuit conditions</strong>
        <p> <code>{`isOnline && getData();`}</code></p>
        <p> <code>{`isOnline || "defaultValue"`}</code></p>
      </li>
      <Step index={1}><li><strong>Filtrando por valores únicos</strong>
        <p> <code>{`const my_array = [1, 2, 2, 3, 3, 4, 5, 5]`}</code></p>
        <p> <code>{`const unique_array = [...new Set(my_array)];`}</code></p>
        <p> <code>{`console.log(unique_array); // [1, 2, 3, 4, 5]`}</code></p>
      </li></Step>
    </ul>
  </ContentSlide>
)

slide.title = 'Tips and tricks'

export default slide
