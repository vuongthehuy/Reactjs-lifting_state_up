import React, {Component} from 'react';

class Children extends Component {
    constructor(props){
        super(props);
        this.state = {
            numb: 999
        };
        
    }
    Reduction = () => {
            this.setState({
                numb : this.state.numb - 1
            });
            this.props.numParent(this.state.numb);
        }
    render(){
        return(
            <div>
                <p>number form parent:{this.props.numChid}</p>
                <hr/>
                <button onClick={this.Reduction}>Reduction form Children</button>
            </div>
        );
    }
}
export default Children;