// @jsx h
import {render, h, Component} from 'geekdom'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      screen: '',
      errorStatus: false,
      errorValue: ''
    }
    this.enterOne=this.enterOne.bind(this)
    this.enterTwo=this.enterTwo.bind(this)
    this.enterThree=this.enterThree.bind(this)
    this.enterFour=this.enterFour.bind(this)
    this.enterFive=this.enterFive.bind(this)
    this.enterSix=this.enterSix.bind(this)
    this.enterSeven=this.enterSeven.bind(this)
    this.enterEight=this.enterEight.bind(this)
    this.enterNine=this.enterNine.bind(this)
    this.enterZero=this.enterZero.bind(this)
    this.enterPlus=this.enterPlus.bind(this)
    this.enterMinus=this.enterMinus.bind(this)
    this.enterMultiply=this.enterMultiply.bind(this)
    this.enterDivide=this.enterDivide.bind(this)
    this.enterEqual=this.enterEqual.bind(this)
    this.enterClear=this.enterClear.bind(this)
  }

  errorFunc (str) {
    this.setState({errorValue: str})
    this.errorStatusFunc(true)
    setTimeout(() => {this.errorStatusFunc(false), 3000})
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
      var x = eval (this.state.screen)
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
          <div class='item one' onClick={this.enterOne}>1</div>
          <div class='item two' onClick={this.enterTwo}>2</div>
          <div class='item three' onClick={this.enterThree}>3</div>
          <div class='item plus' onClick={this.enterPlus}>+</div>
          <div class='item four' onClick={this.enterFour}>4</div>
          <div class='item five' onClick={this.enterFive}>5</div>
          <div class='item six' onClick={this.enterSix}>6</div>
          <div class='item minus' onClick={this.enterMinus}>-</div>
          <div class='item seven' onClick={this.enterSeven}>7</div>
          <div class='item eigth' onClick={this.enterEight}>8</div>
          <div class='item nine' onClick={this.enterNine}>9</div>
          <div class='item multiply' onClick={this.enterMultiply}>*</div>
          <div class='item decimal' onClick={this.enterZero}>0</div>
          <div class='item zero' onClick={this.enterEqual}>=</div>
          <div class='item equal' onClick={this.enterDivide}>/</div>
          <div class='item divide' onClick={this.enterClear}>C</div>
        </div>
      </div>
    )
  }
}