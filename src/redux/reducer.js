import { combineReducers } from 'redux';
import filtersReducer from '../components/Filters/FiltersSlice';
import todoListReducer from '../components/TodoList/TodoListSlice';

/**
 * split reducer
 * chia nhỏ root reducer thành nhiều reducer con để quản lý
 * chia theo chức năng của từng component
 */
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

// combineReducers

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});
export default rootReducer;
/**
 * làm việc với reducer nên chia nhỏ tính năng , dễ quản lý hơn
 * ta tách các chức năng trong reducer trực tiêp vô component
 */
