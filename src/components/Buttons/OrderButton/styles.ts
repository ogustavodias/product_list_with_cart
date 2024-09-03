import styled from "styled-components";
import colors from "../../../styles/colors";

export const Button = styled.button`
  font-weight: 700;
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  background-color: ${colors.red};

  transition: filter 0.3s;
  &:hover {
    filter: brightness(80%);
  }
`;
