import React from "react";
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

const Lists = React.memo(({
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
      {title}
      <DeleteButton onClick={() => handleClick(id)}>X</DeleteButton>
    </ListBox>
  );
});

export default Lists;
