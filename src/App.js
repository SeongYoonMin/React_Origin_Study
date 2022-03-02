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
`;

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  
  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  }, [todoData]);

  return (
    <Container>
      <TodoBlock>
        <div>
          <Title>할일 목록</Title>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} setTodoData={setTodoData} handleClick={handleClick} />
      </TodoBlock>

      
    </Container>
  );
}
