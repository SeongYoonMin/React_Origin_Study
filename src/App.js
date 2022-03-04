import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import List from "./components/List";

const Container = styled.div`
  margin: auto;
  max-width: 600px;
`;
const TodoBlock = styled.div`
  padding: 30px;
  margin-top: 50px;
  background: white;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0 / 16%);
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;

const AllDeleteButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ececec;
    transform: scale(1.2);
  }
`;

export default function App() {
  const [todoData, setTodoData] = useState(JSON.parse(localStorage.getItem("todoData")));
  const [value, setValue] = useState("");
  localStorage.setItem("todoData", JSON.stringify(todoData));
  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const handleAllDelete = () => {
    localStorage.removeItem("todoData");
    setTodoData([]);
  };

  return (
    <Container>
      <TodoBlock>
        <div>
          <Title>
            할일 목록
            <AllDeleteButton onClick={handleAllDelete}>
              모두 지우기
            </AllDeleteButton>
          </Title>
        </div>

        <List
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form
          todoData={todoData}
          value={value}
          setValue={setValue}
          setTodoData={setTodoData}
          handleChange={handleChange}
        />
      </TodoBlock>
    </Container>
  );
}
