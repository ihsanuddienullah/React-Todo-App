import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SubmitForm from "./components/SubmitForm";
import TodoList from "./components/TodoList";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: ["task1", "task2", "task3", "task4"],
        };
    }

    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({ tasks: newArr });
    };

    handleSubmit = (task) => {
      this.setState({tasks: [...this.state.tasks, task]})
    }

    render() {
        return (
            <div className="wrapper">
                <div className="card frame">
                    <Header todos={this.state.tasks.length} />
                    <TodoList todoList={this.state.tasks} deleteList={this.handleDelete}/>
                    <SubmitForm onFormSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;
