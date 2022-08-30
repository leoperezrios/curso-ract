import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  }
  return (
    <button 
    className="create-todo-button"
    onClick={() => onClickButton('Se deberia abrir el modal')}
    >+</button>
  );
}

export {CreateTodoButton};