import React, { PropTypes } from 'react';
import TodoItem from './todoItem';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(item => (
        <TodoItem key={item.id} text={item.text} completed={item.completed} />
      ))}
    </div>
  );
};
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
export default TodoList;
