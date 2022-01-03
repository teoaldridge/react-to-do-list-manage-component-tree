import React from "react";

function ToDoItem(props) {
  return (
    //we put the props.onChecked in a function instead of onclick={props.onChecked(props.id)}
    //because otherwise the props.onChecked function will be called
    // when we press Add, not when we click on an item.
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
