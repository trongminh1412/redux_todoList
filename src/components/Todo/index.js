import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { todoStatusComplete } from '../../redux/action';

import todoListSlice from '../TodoList/todoListSlice';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, completed, id }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.todoStatusComplete(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
