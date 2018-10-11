// @jsx h
import { render, h, Component } from 'geekdom'

import Button from './button.js'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
      screen: '',
      errorStatus: false,
      errorValue: ''
    }
    this.enterOne = this.enterOne.bind(this)
    this.enterTwo = this.enterTwo.bind(this)
    this.enterThree = this.enterThree.bind(this)
    this.enterFour = this.enterFour.bind(this)
    this.enterFive = this.enterFive.bind(this)
    this.enterSix = this.enterSix.bind(this)
    this.enterSeven = this.enterSeven.bind(this)
    this.enterEight = this.enterEight.bind(this)
    this.enterNine = this.enterNine.bind(this)
    this.enterZero = this.enterZero.bind(this)
    this.enterPlus = this.enterPlus.bind(this)
    this.enterMinus = this.enterMinus.bind(this)
    this.enterMultiply = this.enterMultiply.bind(this)
    this.enterDivide = this.enterDivide.bind(this)
    this.enterEqual = this.enterEqual.bind(this)
    this.enterClear = this.enterClear.bind(this)
  }

  errorFunc (str) {
    this.setState({ errorValue: str })
    this.errorStatusFunc(true)
    setTimeout(() => { this.errorStatusFunc(false), 3000 })
  }

  errorStatusFunc (boolean) {
    this.setState({
      errorStatus: boolean
    })
  }

  enterOne () {
    this.setState({
      screen: this.state.screen.concat(1)
    })
  }
  enterTwo () {
    this.setState({
      screen: this.state.screen.concat(2)
    })
  }
  enterThree () {
    this.setState({
      screen: this.state.screen.concat(3)
    })
  }

  enterFour () {
    this.setState({
      screen: this.state.screen.concat(4)
    })
  }

  enterFive () {
    this.setState({
      screen: this.state.screen.concat(5)
    })
  }

  enterSix () {
    this.setState({
      screen: this.state.screen.concat(6)
    })
  }

  enterSeven () {
    this.setState({
      screen: this.state.screen.concat(7)
    })
  }

  enterEight () {
    this.setState({
      screen: this.state.screen.concat(8)
    })
  }

  enterNine () {
    this.setState({
      screen: this.state.screen.concat(9)
    })
  }

  enterZero () {
    this.setState({
      screen: this.state.screen.concat(0)
    })
  }

  enterPlus () {
    this.setState({
      screen: this.state.screen.concat('+')
    })
  }

  enterMinus () {
    this.setState({
      screen: this.state.screen.concat('-')
    })
  }

  enterMultiply () {
    this.setState({
      screen: this.state.screen.concat('*')
    })
  }

  enterDivide () {
    this.setState({
      screen: this.state.screen.concat('/')
    })
  }

  enterEqual () {
    var x
    try {
      var x = eval(this.state.screen)
      return this.setState({
        screen: x.toString()
      })
    } catch (e) {
      return this.errorFunc(e)
    }
  }

  enterClear () {
    this.setState({
      screen: ''
    })
  }

  render () {
    return (
      <div>
        <h1 class='header'>GeekCalc</h1>
        <div class='screen'><div>{this.state.screen}</div></div>
        <div class='grid-container-50-half'>
          <Button class='item one'
            clickHandler={this.enterOne} value={1} />
          <Button class='item two'
            clickHandler={this.enterTwo} value={2} />
          <Button class='item three'
            clickHandler={this.enterThree} value={3} />
          <Button class='item plus'
            clickHandler={this.enterPlus} value={'+'} />
          <Button class='item four'
            clickHandler={this.enterFour} value={4} />
          <Button class='item five'
            clickHandler={this.enterFive} value={5} />
          <Button class='item six'
            clickHandler={this.enterSix} value={6} />
          <Button class='item minus'
            clickHandler={this.enterMinus} value={'-'} />
          <Button class='item seven'
            clickHandler={this.enterSeven} value={7} />
          <Button class='item eight'
            clickHandler={this.enterEight} value={8} />
          <Button class='item nine'
            clickHandler={this.enterNine} value={9} />
          <Button class='item multiply'
            clickHandler={this.enterMultiply} value={'*'} />
          <Button class='item zero'
            clickHandler={this.enterZero} value={0} />
          <Button class='item equal'
            clickHandler={this.enterEqual} value={'='} />
          <Button class='item clear'
            clickHandler={this.enterClear} value={'C'} />
          <Button class='item divide'
            clickHandler={this.enterDivide} value={'/'} />
        </div>
        <div class='footer'>Built using &nbsp;
          <a href='https://github.com/Abhicoding/geekDOM' 
            target='_blank'>geekdom</a>
        </div>
      </div>
    )
  }
}
