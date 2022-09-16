import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodos();

  return (
    <>
      <h1 className="text-center mb-4" id="titulo">
        LISTA DE TAREAS
      </h1>
      <div className="row">
        <div className="col-7">
          <h4 className="text-center" id="tareas">
            Realizar:<small id="num" className="me-5"> {todos.length}</small>
            Pendientes:
            <small id="num"> {todos.filter((todo) => !todo.done).length} </small>
          </h4>
          <hr />
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4 id="agregar" className="text-center">Agregar Nueva Tarea</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
