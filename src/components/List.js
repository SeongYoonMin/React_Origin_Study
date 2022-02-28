import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
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
  text-decoration: ${(props) =>
  props.primary.completed ? "line-through" : "none"};
`;

const InputBox = styled.input`
  cursor: pointer;
`;

export default function List({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

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
    <>
      <DragDropContext>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
              <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                {(provided, snapshot) => (
                <ListBox primary={data} key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                  <InputBox
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => handleCompleChange(data.id)}
                  />
                  {data.title}
                  <DeleteButton onClick={() => handleClick(data.id)}>
                    X
                  </DeleteButton>
                </ListBox>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
