import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemaining = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritySelector,
  (todoList, status, searchText, priority) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priority.lenght
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.complete : !todo.completed)
      );
    });
  }
);

// Sử dụng reselect tối giúp clear code dễ maintain
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todoRemaining;
// };

// export const searchTextSelector = (state) => state.filters.search;
