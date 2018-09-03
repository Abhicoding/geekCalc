// @jsx h
import {h} from 'geekdom'

const Button = (property) => {
  return (
    <div class={property.class} onClick={property.clickHandler}>{property.value}</div>
  )
}

// console.log(Button({enterOne: 'x', value: 'one'}), '**button***')

export default Button