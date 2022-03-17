import React,{Component} from 'react'
class CounterState extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
            
        
    }

    increment(){
        this.setState({
            count:this.state.count+1
        })
    // this.setState(
    //     (prevState)=>({
    //     count:prevState.count+1
    //     })
    // )
 }

//  incrementfour(){
//      this.increment()
//      this.increment()
//      this.increment()
//      this.increment()
//  }
    render(){
        return(
            <div>
               <h1>count- {this.state.count}</h1>
               <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default CounterState;