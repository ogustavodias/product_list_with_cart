import styled from "styled-components";
import colors from "../../styles/colors";

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Card = styled.li`
  > div:first-child {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    button {
      position: absolute;
      bottom: -19.5px;
    }

    img {
      border-radius: 8px;
    }
  }
`;

export const Category = styled.span`
  color: ${colors.rose400};
  font-size: 14px;
`;

export const Name = styled.h3`
  font-weight: 700;
  margin: 5px 0;
`;

export const Price = styled.span`
  color: ${colors.red};
  font-weight: 700;
`;
