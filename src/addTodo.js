import React,{Component} from 'react';

class AddTodo extends Component{
    state = {
        content : ''
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createTodo(this.state);
        this.setState({
            content : ''
        })
    }
    render(){
        return(
            <div className="addTodo">
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo</label>
                    <input type="text" id="todo" placeholder="input your todo" onChange={this.handleChange} value={this.state.content}></input>
                </form>   
            </div>
        )
    }
}

export default AddTodo;