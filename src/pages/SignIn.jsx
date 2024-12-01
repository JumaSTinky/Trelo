import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Все поля должны быть заполнены!");
    } else {
      setError("");
      navigate("/main");
    }
  };

  return (
    <div>
      <HeaderText>Вход в Trello</HeaderText>

      <form onSubmit={handleSubmit}>
        <div>
          <InputEmail
            type="email"
            placeholder="Укажите адрес электронной почты"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <InputPassword
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <ErrorText>{error}</ErrorText>}

        <div>
          <Button type="submit">Продолжить</Button>
        </div>
      </form>
    </div>
  );
}

const HeaderText = styled.p`
  display: flex;
  justify-content: center;
  color: #737b8c;
  font-size: x-large;
`;

const InputEmail = styled.input`
  display: flex;
  margin-left: 42%;
  width: 250px;
  height: 35px;
`;

const InputPassword = styled.input`
  display: flex;
  margin-left: 42%;
  width: 250px;
  height: 35px;
`;

const Button = styled.button`
  display: flex;
  margin-left: 44%;
  width: 200px;
  height: 35px;
  background-color: #5aab44;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
`;
