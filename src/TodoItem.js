import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert('Ya completaste el todo ' + props.text); 
    };
    const onDelete = () => {
        alert('Eliminaste el todo ' + props.text); 
    };

    return(
        <li className='todo-item'>
            <span 
            className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
            onClick={onComplete}
            >{'->'}</span>
            <p className={`todo-item-p ${props.complete && 'todo-item-p--complete'}`}>{props.text}</p>
            <span 
            className="Icon Icon-delete"
            onClick={onDelete}
            >X</span>
        </li>
    );
}

export {TodoItem};