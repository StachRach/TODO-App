import React, {Component} from "react";
import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: "",
        checked: false,
        date: this.minDate,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        });
    }
    handleCheck = (e) => {
        this.setState({
            checked: e.target.checked,
        });
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        });
    }

    handleClick = () => {
        const {text, date, checked} = this.state;
        const add = this.props.add(text, date, checked);

        if(add) {
            this.setState({
                text: "",
                checked: false,
                date: this.minDate
            });
        }
    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <input type="text" placeholder="Add task" onChange={this.handleText}
                       value={this.state.text}/>
                <input type="checkbox" onChange={this.handleCheck} checked={this.state.checked}
                       id="important"/>
                <label htmlFor="important">Important</label>
                <br/>
                <label htmlFor="date">Deadline </label>
                <input type="date" onChange={this.handleDate} value={this.state.date}
                       min={this.minDate} max={maxDate}/>
                <br/>
                <button onClick={this.handleClick}>ADD</button>
                <hr/>
            </div>
        )
    }
}

export default AddTask;