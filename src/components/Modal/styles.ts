import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
`;

export const Header = styled.header`
  margin-bottom: 30px;

  h1 {
    font-weight: 700;
    font-size: 32px;
    color: ${colors.rose900};
    margin: 15px 0 10px;
  }

  p {
    color: ${colors.rose500};
  }
`;

export const Resume = styled.div`
  background-color: ${colors.rose100};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  max-height: 30vh;
  overflow-y: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #fff;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const Thumb = styled.img`
  border-radius: 8px;
  width: 60px;
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 14px;
  grid-column: 1/-1;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red};
  margin-right: 16px;
`;

export const UnitPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.rose300};
`;

export const TotalOfProduct = styled.span`
  font-weight: 700;
  color: ${colors.rose900};
  margin-left: auto;
`;

export const TotalOfOrder = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  > span:first-child {
    font-size: 14px;
    font-weight: 600;
    color: ${colors.rose900};
  }

  > span:last-child {
    font-size: 26px;
    font-weight: 700;
    color: ${colors.rose900};
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
