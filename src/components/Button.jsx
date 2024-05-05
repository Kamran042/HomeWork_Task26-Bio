import React from "react";
import styled from "styled-components";

const ButtonMe = styled.a`
  text-decoration: none;
  font-size: 80%;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 40px;
  background-color: #55e6a5;
  max-width: 218px;
  max-height: 64px;
  color: #02050a;
  transition: all 0.3s linear 0s;
  cursor: pointer;
  &:hover {
    color: white;
    transition: all 0.3s linear 0s;
    background-color: #141c27;
  }
`;

const Button = (props) => {
  return (
    <ButtonMe>{props.children}</ButtonMe>
  );
};

export default Button;
