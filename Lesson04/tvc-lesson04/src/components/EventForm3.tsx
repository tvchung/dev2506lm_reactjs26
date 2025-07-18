import React, { Component, ChangeEvent, FormEvent } from 'react';
interface IState{
    name:string;
    age:number;
    course:string;
}
class EventForm3 extends Component<{},IState> {
    constructor(props:any){
        super(props);
        this.state={
            name:"Chung",
            age:45,
            course:"HTML5"
        }
    }
    handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        // Nếu là tuổi thì ép kiểu number
        const val = name === "age" ? Number(value) : value;
        // Cập nhật vào state
        this.setState(prevState => ({
            ...prevState,
            [name]: val,
        }));
    };

    handleSubmit = (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        alert(" Tên: " + this.state.name +"\n Tuổi:"+ this.state.age +"\n Khóa học:" + this.state.course);
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Tên: 
                        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
                    </p>
                     <p>Tuổi: 
                        <input type="number" name='age' value={this.state.age} onChange={this.handleChange}/>
                    </p>
                     <p>Khóa học: 
                        <select name='course' value={this.state.course} onChange={this.handleChange}>
                            <option value={'HTML5'}>HTML5</option>
                            <option value={'CSS3'}>CSS3</option>
                            <option value={'JS'}>Javascript</option>
                            <option value={'BS'}>Bootstrap</option>
                        </select>
                    </p>
                    <button>handle Submit</button>
                </form>
            </div>
        );
    }
}

export default EventForm3;