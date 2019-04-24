import React, {Component} from 'react';
import Children from './children';
class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            dataChid:1000
        };
    }
    Increase(){
        this.setState({
            number: this.state.number + 1
        })
    }
    Revice=(num)=>{
        this.setState({
            dataChid: num
        })
    }
    render(){
        return(
                <div>
                    <button onClick={this.Increase.bind(this)}>Increase number</button>
                    <Children numChid={this.state.number}
                                numParent = { (num)=> this.Revice(num)}
                    />
                     <p>number form Children:{this.state.dataChid}</p>
                </div>
        );
    }
}
export default Parent;