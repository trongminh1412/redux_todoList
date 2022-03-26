// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();
// /**
//  * CreateStore nhận vào 3 tham số
//  * tham số t1: reducer: cập nhật giá trị của state trên store
//  * tham số t2: initValue: set giá trị mặc định
//  * tham số t3: enhancer: cấu hình các middleware như thunk, saga..
//  */
// const store = createStore(rootReducer, composedEnhancers);

// export default store;

/**
 * REDUX TOOLKIT
 * redux-devtools-extension đã được thêm vào configureStore trong toolkit
 */

import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import todoListSlice from '../components/TodoList/todoListSlice';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
export default store;
