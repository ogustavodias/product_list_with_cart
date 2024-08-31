import styled from "styled-components";
import colors from "../../../styles/colors";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  gap: 8px;
  font-weight: 700;
  padding: 8px;
  border: 1px solid ${colors.red};
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  max-width: 60%;

  transition: color 0.3s;
  &:hover {
    color: ${colors.red};
  }
`;
