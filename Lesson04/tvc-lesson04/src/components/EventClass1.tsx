import React, { Component } from 'react';

interface IState {
  name: string;
  age: number;
}

class EventClass1 extends Component<{},IState> {
  constructor(props:any){
    super(props);
    this.state = {
      name:"Chung Chung",
      age:46
    }
  }

  handleChange = ()=>{
    this.setState({
        name:"Devmaster",
        age:10
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to, {this.state.name}; tuổi: {this.state.age}</h2>
        <button className='btn btn-success' onClick={this.handleChange}>Change infor</button>
      </div>
    );
  }
}

export default EventClass1;