
import {Component} from "react";

export class Counter extends Component{
  state={
 count: this.props.initial
}
constructor(props){
super(props)

setInterval(()=>{
  this.setState((state)=>{
    return {
      count: state.count + this.props.increment,
    }
  })
},this.props.time)
}
render(){
  return(
    <div>
      <h1>Count: {this.state.count}</h1>
    </div>
  )
}
}

