import styled, { css } from "styled-components";
import colors from "../../../styles/colors";

const inCommon = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border: 1px solid ${colors.red};
  border-radius: 20px;
  width: 100%;
  max-width: 60%;
  font-size: 14px;
`;

export const NotInCartButton = styled.button`
  ${inCommon};
  justify-content: center;
  background-color: #fff;
  font-weight: 700;
  cursor: pointer;

  transition: color 0.3s;
  &:hover {
    color: ${colors.red};
  }
`;

export const InCartButton = styled.button`
  ${inCommon};
  justify-content: space-between;
  background-color: ${colors.red};
  color: ${colors.rose100};
`;

export const Option = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.rose100};
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  color: ${colors.rose100};

  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.rose100};
    color: ${colors.red};
  }
`;
