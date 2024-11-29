import React, { useState } from "react";
import MoreInfoIcon from "../assets/MoreInfoIcon.png";
import styled from "styled-components";

export default function Cards() {
  const [columns, setColumns] = useState([
    { id: 1, title: "TODO 1", tasks: [], inputValue: "" },
  ]);

  const addColumn = () => {
    const newColumn = {
      id: Date.now(),
      title: `TODO ${columns.length + 1}`,
      tasks: [],
      inputValue: "",
    };
    setColumns([...columns, newColumn]);
  };

  const handleInputChange = (event, columnId) => {
    const updatedColumns = columns.map((column) =>
      column.id === columnId
        ? { ...column, inputValue: event.target.value }
        : column
    );
    setColumns(updatedColumns);
  };

  const handleKeyPress = (event, columnId) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      const updatedColumns = columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: [...column.tasks, event.target.value],
              inputValue: "",
            }
          : column
      );
      setColumns(updatedColumns);
    }
  };

  return (
    <div>
      <Container>
        {columns.map((column) => (
          <CardContainer key={column.id}>
            <Text>{column.title}</Text>
            <MoreIcon src={MoreInfoIcon} alt="More Info Icon" />
            <CardContent>
              {column.tasks.map((task, index) => (
                <Message key={index}>{task}</Message>
              ))}
            </CardContent>
            <AddInput
              type="text"
              value={column.inputValue}
              onChange={(event) => handleInputChange(event, column.id)}
              onKeyDown={(event) => handleKeyPress(event, column.id)}
              placeholder="+ Добавить карточку"
            />
          </CardContainer>
        ))}
        <AddColumnButton onClick={addColumn}>+ Добавить список</AddColumnButton>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 10px;
`;

const CardContainer = styled.div`
  width: 250px;
  background-color: #979494;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  height: auto;
  overflow-y: auto;
  border: 2px solid gray;
  border-radius: 10px;
  margin-right: 40px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: black;
  font-weight: bold;
  font-size: larger;
  margin-left: 5px;
`;

const MoreIcon = styled.img`
  display: flex;
  width: 45px;
  margin-top: -53px;
  margin-left: 200px;
`;

const AddInput = styled.input`
  width: 180px;
  height: 35px;
  color: #617381;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  position: sticky;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const CardContent = styled.div`
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;
`;

const Message = styled.p`
  color: black;
  font-size: 20px;
  margin: 5px 0;
`;

const AddColumnButton = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #6190e7;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #516f9c;
  }
`;
