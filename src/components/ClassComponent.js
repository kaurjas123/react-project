import React, {Component} from 'react'
class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}! It's a class component</h1>
            </div>
        )
    }
}

export default ClassComponent;