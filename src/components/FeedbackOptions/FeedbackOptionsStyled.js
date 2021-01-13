import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border-bottom: solid 1px #d6d6d6;
  min-width: 80px;
  height: 40px;
  padding: 10px;
  background-color: honeydew;
  color: black;
  font-weight: 700;
  font-size: 16px;

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(4px);
    border-bottom: none;
  }
  &:nth-child(2):active {
    background-color: springgreen;
  }
  &:nth-child(4):active {
    background-color: salmon;
  }
`;

export default Button;
