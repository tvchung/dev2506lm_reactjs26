import React, { Component } from 'react';
interface IState {
    name:string;
    age:number
}
class EventForm1 extends Component<{},IState> {
    constructor(props:any){
        super(props);
        this.state = {
            name:"Chung",
            age:0
        }
    }
    handleChange = (event:any)=>{
        // Lấy thành phần và dữ liệu trên form
        let name = event.target.name;
        let value = event.target.value;
        const val = name === "age" ? Number(value) : value;
        // Cập nhật vào state
       this.setState(prevState => ({
            ...prevState,
            [name]: val,
        }));
    }

    //handleSubmit: hàm khi submit form
    handleSubmit = (event:any)=>{
        event.preventDefault();
        alert ('Teen: ' + this.state.name +'\n Age:' + this.state.age)
    }

    render() {
        return (
            <div>
                <div>
                    <p>Student Name: {this.state.name}</p>
                    <p>Student Age: {this.state.age}</p>
                </div>
                <form method='post'>
                    <div>
                        Student Name:
                        <input type='text' name="name"  onChange={this.handleChange} />
                    </div>
                    <div>
                        Student Age:
                        <input type='number' name="age"  onChange={this.handleChange}  />
                    </div>
                    <button onClick={this.handleSubmit}>Cập nhật thông tin</button>
                </form>
            </div>
        );
    }
}

export default EventForm1;