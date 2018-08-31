// @jsx h

import {render, h, Component} from 'geekdom'

class Todo extends Component {
  constructor () {
    super()
  }
  render () {
    return (
    <div class='item todo'>
      <h4>To Do</h4>
    </div>)
  }
}

export default Todo