import React from 'react';
import { TodoContext } from '../todoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSerch } from '../TodoSerch';

function AppUi() {
  return (

    <React.Fragment>

      <TodoCounter />
      <TodoSerch />

      <TodoContext.Consumer>
        {({ 
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {error && <p>Desesperate, hay un error...</p>}
            {loading && <p>Cargando... No te desesperes</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}


            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                complete={todo.complete}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>


      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUi };