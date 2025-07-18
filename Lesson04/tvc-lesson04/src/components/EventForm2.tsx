import React, { Component } from 'react';
import IStudent from './IStudent';
interface IProps {
  onSubmit: (student: IStudent) => void;
}
class EventForm2 extends Component<IProps,IStudent> {
    constructor(props:IProps){
        super(props);
        this.state = {
            id:1,
            name:"Chung",
            age:0
        }
    }
    handleChange = (event:any)=>{
        // Lấy thành phần và dữ liệu trên form
        let name = event.target.name;
        let value = event.target.value;
        const val = (name === "age" || name==="id") ? Number(value) : value;
        // Cập nhật vào state
       this.setState(prevState => ({
            ...prevState,
            [name]: val,
        }));
    }

    //handleSubmit: hàm khi submit form
    handleSubmit = (event:any)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
                <form method='post'>
                    <div>
                        Student ID:
                        <input type='number' name="id"  onChange={this.handleChange} />
                    </div>
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

export default EventForm2;