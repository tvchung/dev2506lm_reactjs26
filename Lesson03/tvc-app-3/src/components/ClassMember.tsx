import React, { Component } from 'react';
// Định nghĩa kiểu cho state
interface ClassMemberState {
  name: string;
  age: number;
}

class ClassMember extends Component<{}, ClassMemberState> {
    // state
    constructor(props:{}){
        super(props);
        this.state = {
            name:'Devmaster',
            age:10
        }
    }

    // handleChange
    handleChange = ()=>{
        this.setState({
            name:'Chung Chung',
            age:100
        })
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2>Đọc dữ liệu trong state</h2>
                <hr/>
                <p> Xin chào, {this.state.name}</p>
                <p> Tuổi, {this.state.age}</p>

                <button onClick={this.handleChange}>Change Info</button>
            </div>
        );
    }
}

export default ClassMember;