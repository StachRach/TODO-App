import React, { Component } from 'react';
import './App.css';
import './AddTask';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
    counter = 9;

    state ={
        tasks: [
            {
                id: 0,
                text: "play The Witcher 3",
                date: '2023-02-15',
                important: true,
                active: true,
                finishDate: null
            },
            { id: 1, text: "do a good deed", date: '2020-11-12', important: false, active: true, finishDate: null },
            { id: 2, text: "paint the house", date: '2019-09-11', important: false, active: true, finishDate: null },
            { id: 3, text: "loose 30 kg", date: '2019-05-20', important: true, active: true, finishDate: null },
            { id: 4, text: "sell beer bottles (20 boxes)", date: '2020-11-12', important: false, active: true, finishDate: null },
            { id: 5, text: "paint the house... again", date: '2019-09-11', important: false, active: true, finishDate: null },
            { id: 6, text: "hairdresser!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
            { id: 7, text: "comprar una nevera nueva", date: '2020-11-12', important: false, active: true, finishDate: null },
            { id: 8, text: "buy two bottles of wine", date: '2019-09-11', important: false, active: true, finishDate: null },
        ]
    }

    deleteTask = (id) => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id);

        tasks.splice(index, 1);
        this.setState({tasks});
    }

    changeTaskStatus = (id) => {
        const tasks = [...this.state.tasks];

        tasks.forEach(task => {
            if(task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime();
            }
        });
        this.setState({tasks});
    }

    addTask = (text, date, important) => {
        const task = {
            id: this.counter,
            text,
            date,
            important,
            active: true,
            finishDate: null
        };

        this.counter++;

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }));

        return true;
    }

    render() {
        return (
            <div className="App">
                <h1>TO-DO APP</h1>
                <AddTask add={this.addTask}/>
                <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
            </div>
        );
    }
}

export default App;