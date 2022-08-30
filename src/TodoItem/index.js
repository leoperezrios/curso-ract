import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    return(
        <li className='todo-item'>
            <span 
            className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >{'->'}</span>
            <p className={`todo-item-p ${props.complete && 'todo-item-p--complete'}`}>{props.text}</p>
            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export {TodoItem};