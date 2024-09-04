import RemoveSVG from "./RemoveSVG";

import * as S from "./styles";

const Cart = () => {
  return (
    <S.Wrapper>
      <S.Title>Your Cart (7)</S.Title>
      <li>
        <S.Item>
          <div>
            <S.Name>Classic Tiramisu</S.Name>
            <S.Details>
              <S.Quantity>1x</S.Quantity>
              <S.UnitPrice>@ $5.50</S.UnitPrice>
              <S.TotalProductPrice>$5.50</S.TotalProductPrice>
            </S.Details>
          </div>
          <S.Control>
            <RemoveSVG />
          </S.Control>
        </S.Item>
        <S.Item>
          <div>
            <S.Name>Classic Tiramisu</S.Name>
            <S.Details>
              <S.Quantity>1x</S.Quantity>
              <S.UnitPrice>@ $5.50</S.UnitPrice>
              <S.TotalProductPrice>$5.50</S.TotalProductPrice>
            </S.Details>
          </div>
          <S.Control>
            <RemoveSVG />
          </S.Control>
        </S.Item>
        <S.Item>
          <div>
            <S.Name>Classic Tiramisu</S.Name>
            <S.Details>
              <S.Quantity>1x</S.Quantity>
              <S.UnitPrice>@ $5.50</S.UnitPrice>
              <S.TotalProductPrice>$5.50</S.TotalProductPrice>
            </S.Details>
          </div>
          <S.Control>
            <RemoveSVG />
          </S.Control>
        </S.Item>
      </li>
    </S.Wrapper>
  );
};

export default Cart;
