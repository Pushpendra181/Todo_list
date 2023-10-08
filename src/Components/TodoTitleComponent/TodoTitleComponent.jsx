import React, { useState } from "react";
import "./TodoTitleComponent.css";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const TodoTitleComponent = ({ setTodoList }) => {
  const [task, setTask] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(task);

    setTodoList((prev) => [
      {
        id: uuidv4(),
        task: task,
        date: moment(new Date()).format("DD/MM/YYYY"),
      },
      ...prev,
    ]);

    setTask("");
  };
  return (
    <div className="TodoTitleComponent">
      <div>
        <h1>Todo List</h1>
      </div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="What on your mind?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoTitleComponent;
