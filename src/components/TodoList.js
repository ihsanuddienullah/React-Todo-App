import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, deleteList }) => {
    return (
        <div className="list-wrapper">
            <ul>
                {todoList.map((todo, index) => {
                    return <Todo content={todo} key={index} id={index} onDelete={deleteList}/>;
                })}
            </ul>
        </div>
    );
};

export default TodoList;
