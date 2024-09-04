import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.aside`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.rose100};
  margin-bottom: 16px;
`;

export const Name = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Details = styled.div`
  display: flex;
  gap: 10px;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red};
`;

export const UnitPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.rose300};
`;

export const TotalProductPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.rose400};
`;

export const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid currentColor;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  cursor: pointer;
  color: ${colors.rose300};

  transition: color 0.3s;
  &:hover {
    color: ${colors.rose900};
  }
`;
