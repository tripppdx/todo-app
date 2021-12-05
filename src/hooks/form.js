import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const useForm = callback => {
  // const [values, setValues] = useState({});
  const [itemName, setItem] = useState('');
  const [assignee, setAssignee] = useState('');
  const [difficulty, setDifficulty] = useState(3);

  function handleItem(e) {
    let { value } = e.target;
    setItem(value);
  }
  function handleAssignee(e) {
    let { value } = e.target;
    setAssignee(value);
  }
  function handleDifficulty(e) {
    let { value } = e.target;
    setDifficulty(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let item = {
      id: uuid(),
      text: itemName,
      complete: false,
      assignee: assignee,
      difficulty: difficulty,
    };
    console.log('------ item-->', item);
    callback(item);
  }

  return {
    handleSubmit,
    // values,
    handleItem,
    handleAssignee,
    handleDifficulty,
    itemName,
    assignee,
    difficulty,
  };
};

export default useForm;
