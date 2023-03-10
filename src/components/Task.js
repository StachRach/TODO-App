import React from "react";

const Task = (props) => {
    const { text, date, id, active, important, finishDate } = props.task;
    const style = {
        color: 'red'
    };

    if(active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - do
                        <span> {date} </span>
                    {active && <button onClick={() => props.change(id)}>
                        Done</button>}
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        const finish = new Date(finishDate).toLocaleString();

        return (
            <div>
                <p>
                    <strong>{text}</strong><em> (deadline: {date}) </em>
                    <button onClick={() => props.delete(id)}>X</button>
                    <br/>
                    - execution confirmation <span>{finish}</span>
                </p>
            </div>
        );
    }
}

export default Task;