import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoRemaining } from '../../redux/selectors';
import todoListSlice from './todoListSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  /**
   * Nếu sử dụng trực tiếp fuction :(state) => state.todoList
   * khiến sử dụng lại sẽ mất thời gian xử lý gọi lại trùng lặp
   * nên tach ra một riêng để quản lý
   */
  const todoList = useSelector(todoRemaining);
  // const searchText = useSelector(searchTextSelector); filter dua vao todoRemaining
  // console.log({ todoList, searchText });

  /**
   * Để cập nhật được một state trong store chỉ cập nhật được thông qua
   * fuction dispart
   */
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName(''); //empty String
    setPriority('Medium'); //empty String
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name="Learn React" prioriy="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}

        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.complete}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
