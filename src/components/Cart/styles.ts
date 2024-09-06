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
  color: ${colors.rose500};
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

export const TotalOfOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  > span:first-child {
    color: ${colors.rose500};
    font-weight: 600;
    font-size: 14px;
  }

  > span:last-child {
    color: ${colors.rose900};
    font-weight: 700;
    font-size: 32px;
  }
`;

export const CarbonMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${colors.rose100};
  border-radius: 8px;
  padding: 15px;
  margin: 20px 0;

  font-size: 14px;
  font-weight: 600;
  color: ${colors.rose900};

  strong {
    font-size: inherit;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  color: ${colors.rose100};
  padding: 16px 8px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  background-color: ${colors.red};

  transition: filter 0.3s;
  &:hover {
    filter: brightness(80%);
  }
`;

export const EmptyBlock = styled.div`
  text-align: center;

  img {
    margin: 0 auto 20px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: ${colors.rose400};
  }
`;
