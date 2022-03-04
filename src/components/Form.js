import React from "react";
import styled from "styled-components";

const TodoForm = styled.form`
  display: flex;
  margin-top: 30px;
`;

const TodoFormInput = styled.input`
  flex: 10;
  padding: 5px;
  border: none;
  border-bottom: 1px solid black;
  margin-right: 10px;
`;

const TodoFormBtn = styled.input`
  flex: 1;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

export default function Form({ value, setValue, handleChange, setTodoData }) {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      alert("할 일을 입력해주세요!!");
      return;
    }
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <TodoForm onSubmit={handleSubmit}>
      <TodoFormInput
        type="text"
        name="value"
        placeholder="해야 할 일을 입력하시오."
        value={value}
        onChange={handleChange}
      />
      
      <TodoFormBtn
        type="submit"
        value="입력"
        className="btn"
        style={{ flex: "1" }}
      />
    </TodoForm>
  );
}
