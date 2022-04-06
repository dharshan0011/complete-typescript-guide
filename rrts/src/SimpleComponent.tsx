import React from 'react'

interface SimpleComponentProps{
  color?:string
}

interface SimpleComponentState{
  counter: number
}
export class SimpleComponent extends React.Component<SimpleComponentProps, SimpleComponentState>{
 // state = { counter: 0 } 
 /* this will override the state definition in the Component(parent)
  class */
  constructor(props: SimpleComponentProps) {
    super(props)
    this.state = { counter: 0 }
  }
  onIncrement = ():void => {
    this.setState({counter: this.state.counter+1})
  }

  onDecrement = ():void =>{
   this.setState({counter: this.state.counter - 1})
  }
  render() {
    return <div>
      <button onClick={this.onIncrement}>Increment</button>
      <button onClick={this.onDecrement}>Decrement</button>
      {this.state.counter}
    </div>
  }
}

// const SimpleComponent = (props:SimpleComponentProps): JSX.Element=> {
//   return <div>{props.color}</div>
// }