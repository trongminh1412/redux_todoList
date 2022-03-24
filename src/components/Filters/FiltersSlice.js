const initState = {
  search: '',
  status: 'All',
  priority: '',
};
const filtersReducer = (state = initState, action) => {
  //   console.log({ state, action });
  switch (action.type) {
    case 'filters/searchFilterChange':
      return {
        ...state,
        search: action.payload,
      };
    case 'filters/statusFilterChange':
      return {
        ...state,
        status: action.payload,
      };
    case 'filters/priorityFilterChange':
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
/**
 * làm việc với reducer nên chia nhỏ tính năng , dễ quản lý hơn
 * ta tách các chức năng trong reducer trực tiêp vô component
 */
