import React from "react";

class ClassComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        count : 0
    }
  }

  render() {
    return( 
        <div>
            <h3>Class Based Component</h3>
            <button onClick={()=>{this.setState({count : this.state.count - 1})}}>-</button>
            <span><b>{this.state.count}</b></span>
            <button onClick={()=>{this.setState({count : this.state.count + 1})}}>+</button>
            <hr/>
        </div>
    );
  }
}

export default ClassComponent;
