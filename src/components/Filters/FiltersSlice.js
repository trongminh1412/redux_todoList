// const initState = {
//   search: '',
//   status: 'All',
//   priorities: [],
// };
// const filtersReducer = (state = initState, action) => {
//   //   console.log({ state, action });
//   switch (action.type) {
//     case 'filters/searchFilterChange':
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case 'filters/statusFilterChange':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case 'filters/filterPrioritiesChange':
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;
// /**
//  * làm việc với reducer nên chia nhỏ tính năng , dễ quản lý hơn
//  * ta tách các chức năng trong reducer trực tiêp vô component
//  */

/**
 * REDUX TOOLKIT
 * createSlice tạo 1 action với một type và key tương tự như action redux core
 * mà k cần tạo file mới
 *
 * mutation: thao tác trực tiếp lên object hoặc array bất kì thông qua
 * 1 thư viện tích hợp sẵn là immmer trong redux toolkit
 */

import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    filterPrioritiesChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
