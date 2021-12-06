import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import { Button, Label, Switch, Card, Elevation } from '@blueprintjs/core';
import { SettingsContext } from '../../context/settings/context';
import { LoginContext } from '../../context/auth/context.js';

import './todo.scss';

const crypto = require('crypto');

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleAssignee, handleDifficulty, handleSubmit, handleItem } =
    useForm(addItem);

  const settings = useContext(SettingsContext);
  const auth = useContext(LoginContext);
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(settings.numItems);

  function addItem(item) {
    console.log('CAN', auth.canHandler('read'));
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  function handleShowNumItems(e) {
    let { value } = e.target;
    settings.setNumItems(value);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete);
    setIncomplete(incompleteCount);
    // document.title = `To Do List: ${incomplete.length}`;
  }, [list]);

  function handleHide() {
    settings.setHide(!settings.hide);
  }

  function pagination() {
    let data;
    if (settings.hide) {
      data = incomplete.slice(startIdx, endIdx);
    } else {
      data = list.slice(startIdx, endIdx);
    }
    console.log(incomplete);
    console.log(data, startIdx, endIdx);
    return data;
  }

  function handleNext() {
    if (endIdx <= incomplete.length) {
      setStartIdx(startIdx + settings.numItems);
      setEndIdx(endIdx + settings.numItems);
    }
  }

  function handlePrevious() {
    if (startIdx > 0) {
      setStartIdx(startIdx - settings.numItems);
      setEndIdx(endIdx - settings.numItems);
    }
  }

  useEffect(() => {
    setStartIdx(0);
    setEndIdx(settings.numItems);
  }, [settings.numItems]);

  return (
    <>
      <header>
        <h1>To Do List: {incomplete.length} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>

        <Label>
          <span>To Do Item</span>
          <input
            onChange={handleItem}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </Label>

        <Label>
          <span>Assigned To</span>
          <input
            onChange={handleAssignee}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </Label>

        <Label>
          <span>Difficulty</span>
          <input
            onChange={handleDifficulty}
            defaultValue={3}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </Label>

        <Label>
          <Button type="submit">Add Item</Button>
        </Label>

        <Label>
          <Switch onChange={handleHide}> Hide Completed Tasks </Switch>
        </Label>
        <Label>
          <span>Number of Items</span>
          <input
            onChange={handleShowNumItems}
            defaultValue={3}
            type="range"
            min={1}
            max={5}
            name="showNumItems"
          />
        </Label>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>NEXT</Button>
      </form>

      {pagination().map((item, idx) => (
        <Card
          className="cards"
          interactive={true}
          elevation={Elevation.TWO}
          key={uuid()}
        >
          {settings.hide === false || item.complete === false ? (
            <>
              <p>Item: {item.text}</p>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>
              <div onClick={() => toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </div>
              <hr />
              {auth.canHandler('delete') ? (
                <Button onClick={() => deleteItem(item.id)}>Delete</Button>
              ) : null}
            </>
          ) : null}
        </Card>
      ))}
    </>
  );
};

export default ToDo;
