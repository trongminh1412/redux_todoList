const initState = [
  { id: 1, name: 'react', complete: false, priority: 'Medium' },
  { id: 2, name: 'redux', complete: true, priority: 'High' },
  { id: 3, name: 'next', complete: false, priority: 'Low' },
];

const todoListReducer = (state = initState, action) => {
  //   console.log({ state, action });
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];
    case 'todoList/todoStatusComplete':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.complete }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
/**
 * làm việc với reducer nên chia nhỏ tính năng , dễ quản lý hơn
 * ta tách các chức năng trong reducer trực tiêp vô component
 */
