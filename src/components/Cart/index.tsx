import RemoveSVG from "./RemoveSVG";

import carbonIcon from "../../assets/images/icon-carbon-neutral.svg";
import emptyIllustration from "../../assets/images/illustration-empty-cart.svg";

import * as S from "./styles";

const teste = 0;

const Cart = () => {
  return (
    <S.Wrapper>
      <S.Title>Your Cart (7)</S.Title>

      {teste ? (
        <>
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
          <S.TotalOfOrder>
            <span>Order Total</span>
            <span>$46.50</span>
          </S.TotalOfOrder>
          <S.CarbonMessage>
            <img src={carbonIcon} alt="tree icon" />
            This is a<strong>carbon-neutral</strong>delivery
          </S.CarbonMessage>
          <S.Button>Confirm Order</S.Button>{" "}
        </>
      ) : (
        <S.EmptyBlock>
          <img src={emptyIllustration} alt="Empty Illustration" />
          <p>Your added items will appear here</p>
        </S.EmptyBlock>
      )}
    </S.Wrapper>
  );
};

export default Cart;
