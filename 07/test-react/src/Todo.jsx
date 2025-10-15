import React from 'react';

const Todo = ({ task, isDone }) => {
    if (isDone) {
        return <li>Done: {task}</li>
    }
    return (
        <h3>Do now {task}</h3>
    )
    // return (
    //     <div>
    //         To Do
    //         <ul>
    //             <li>Task: {task}</li>
    //         </ul>
    //     </div>
    // );
};

export default Todo;