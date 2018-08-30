// @jsx h
import {render, h} from 'geekdom'
import './components/initial.scss'

const App = () => {
  return (
    <h1>Hello World</h1>
  )
}

render(<App />, document.getElementById('root'))