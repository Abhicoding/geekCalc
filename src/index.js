// @jsx h
import {render, h, Component} from 'geekdom'
import './index.scss'

import Todo from './components/todo.js'
import Done from './components/done.js'

class App extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <h1>DooDoo</h1>
        <div class='grid-container-450-one'>
          <Todo/>
          <Done/>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('root'))