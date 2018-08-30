// @jsx h
import {render, h} from 'geekdom'

const App = () => {
  return (
    <h1>Hellow orld</h1>
  )
}

console.log(render)

render (App(), document.getElementById('root'))