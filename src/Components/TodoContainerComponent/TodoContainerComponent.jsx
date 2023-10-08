import React from "react";
import TodoCardComponent from "../TodoCardComponent/TodoCardComponent";

const TodoContainerComponent = ({ todoList,setTodoList }) => {
  const deleteHand = (id) => {
    setTodoList(prev => prev.filter((task)=> task.id !== id))
  };
  return (
    <div>
      {todoList?.map((task, index) => (
        <TodoCardComponent
          key={index}
          content={task.task}
          date={task.date}
          id={task.id}
          deleteHand={deleteHand}
        />
      ))}
    </div>
  );
};

export default TodoContainerComponent;
