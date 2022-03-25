// c1
// export const addTodoAction = {
//   type: 'todoList/addTodo',
//   payload: { id: 4, name: 'vue', complete: false, priority: 'Low' },
// };

// c2
export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const todoStatusComplete = (todoId) => {
  return {
    type: 'todoList/todoStatusComplete',
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: 'filters/statusFilterChange',
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: 'filters/filterPrioritiesSelector',
    payload: priorities,
  };
};
