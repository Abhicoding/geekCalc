// @jsx h
import {render, h} from 'geekdom'

const App = () => {
  return (
    <h1>Hellow orld</h1>
  )
}

module.hot.accept()

render (<App/>, document.getElementById('root'))