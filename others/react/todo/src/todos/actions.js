import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes.js';

let nextTaskId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTaskId++,
  task: text,
  complete: false
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});
export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: id
});
