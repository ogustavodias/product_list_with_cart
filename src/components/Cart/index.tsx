import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { remove, confirm } from "../../redux/reducers/cart";
import { open } from "../../redux/reducers/modal";

import { toCurrency } from "../../helper/toCurrency";

import RemoveSVG from "./RemoveSVG";
import carbonIcon from "/assets/images/icon-carbon-neutral.svg";
import emptyIllustration from "/assets/images/illustration-empty-cart.svg";

import * as S from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const { products, confirmed } = useSelector((state: RootState) => state.cart);
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = products.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  function handleButton() {
    if (!confirmed) dispatch(confirm());

    // else
    dispatch(open());
  }

  return (
    <S.Wrapper>
      <S.Title>Your Cart ({totalQuantity})</S.Title>

      {products.length ? (
        <>
          <ul>
            {products.map((product) => {
              return (
                <S.Item key={product.name}>
                  <div>
                    <S.Name>{product.name}</S.Name>
                    <S.Details>
                      <S.Quantity>{product.quantity}</S.Quantity>
                      <S.UnitPrice>
                        @ {toCurrency(product.unitPrice)}
                      </S.UnitPrice>
                      <S.TotalProductPrice>
                        {toCurrency(product.unitPrice * product.quantity)}
                      </S.TotalProductPrice>
                    </S.Details>
                  </div>
                  <S.Control
                    onClick={() => dispatch(remove(product))}
                    style={{ display: confirmed ? "none" : "flex" }}
                  >
                    <RemoveSVG />
                  </S.Control>
                </S.Item>
              );
            })}
          </ul>
          <S.TotalOfOrder>
            <span>Order Total</span>
            <span>{toCurrency(totalPrice)}</span>
          </S.TotalOfOrder>
          <S.CarbonMessage>
            <img src={carbonIcon} alt="tree icon" />
            This is a<strong>carbon-neutral</strong>delivery
          </S.CarbonMessage>
          <S.Button $confirmed={confirmed} onClick={handleButton}>
            {confirmed ? "See Order" : "Confirm Order"}
          </S.Button>
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
