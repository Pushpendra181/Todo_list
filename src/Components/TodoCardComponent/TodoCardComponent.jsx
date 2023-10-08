import React from "react";
import Trans from "../../assits/trash-can.png";
import "./TodoCardComponent.css";

const TodoCardComponent = ({ id, content, date, deleteHand }) => {
  return (
    <div className="TodoCardComponent">
      <div className="content">
        <h2>{content}</h2>
        <p>{date}</p>
      </div>
      <div>
        <img src={Trans} alt="" onClick={() => deleteHand(id)} />
      </div>
    </div>
  );
};

export default TodoCardComponent;
