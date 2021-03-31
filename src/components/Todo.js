import React from "react";

const Todo = ({ content, onDelete, id }) => {
    return (
        <div className="list-item">
            {content}
            <button className="delete is-pulled-right" onClick={() => onDelete(id)}></button>
        </div>
    );
};

export default Todo;
