import React, { useState } from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  color: white;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;

const ListBox = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-bottom: 1px dotted #ccc;
  border-radius: 10px;
  text-decoration: ${(props) =>
    props.primary.completed ? "line-through" : "none"};
  background-color: ${(props) =>
    props.snapshot.isDragging ? "rgba(20, 20, 20, 0.5)" : "white"};
`;

const InputBox = styled.input`
  cursor: pointer;
`;

const TodoUpdate = styled.button`
  flex: 1;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
  transition: all 0.3s;
  margin-right: 7px;
  float: right;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

const UpdateInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
`
const Lists = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    data,
    handleClick
  }) => {
    const handleCompleChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
    };

  const [update, setUpdate] = useState(false);
  
  const handleUpdate = (id) => {
    if(!update) {
      setUpdate(true)
    }
    else {
      let newTodoValue = todoData.map((data) => {
        if(data.id === id) {
          data.title = newValue;
        }
        return data
      });
      setTodoData(newTodoValue);
      setUpdate(false)
    }
  }

  const [newValue, setNewValue] = useState("");

  const handleChange = (event) => {
    setNewValue(event.target.value);
  }

    return (
      <ListBox
        primary={data}
        snapshot={snapshot}
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
      >
        <InputBox
          type="checkbox"
          defaultChecked={false}
          onChange={() => handleCompleChange(id)}
        />
        {update? <UpdateInput value={newValue} onChange={handleChange} placeholder="수정할 내용을 입력해주세요" />: title}
        <DeleteButton onClick={() => handleClick(id)}>X</DeleteButton>
        <TodoUpdate onClick={() => handleUpdate(id)}>{update ? "확인" : "수정"}</TodoUpdate>
      </ListBox>
    );
  }
);

export default Lists;
