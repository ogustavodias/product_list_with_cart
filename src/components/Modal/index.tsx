import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { close } from "../../redux/reducers/modal";
import { reset } from "../../redux/reducers/cart";

import { toCurrency } from "../../helper/toCurrency";

import confirmedIcon from "/assets/images/icon-order-confirmed.svg";

import * as S from "./styles";

const Modal = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.cart);
  const { openned } = useSelector((state: RootState) => state.modal);
  const totalPrice = products.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  function handleButton() {
    dispatch(close());
    dispatch(reset());
  }

  function checkOutClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) dispatch(close());
  }

  return (
    <S.Wrapper
      style={{ transform: openned ? "scale(1)" : "scale(0)" }}
      onClick={checkOutClick}
    >
      <S.Card>
        <S.Header>
          <img src={confirmedIcon} alt="Confirmed icon" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </S.Header>
        <S.Resume>
          <S.List>
            {products.map((item) => {
              return (
                <S.Item key={item.name}>
                  <S.Thumb src={item.imgs.thumbnail} alt={item.name} />
                  <div>
                    <S.Name>{item.name}</S.Name>
                    <S.Quantity>{item.quantity}x</S.Quantity>
                    <S.UnitPrice>@ {toCurrency(item.unitPrice)}</S.UnitPrice>
                  </div>
                  <S.TotalOfProduct>
                    {toCurrency(item.unitPrice * item.quantity)}
                  </S.TotalOfProduct>
                </S.Item>
              );
            })}
          </S.List>
          <S.TotalOfOrder>
            <span>Order Total</span>
            <span>{toCurrency(totalPrice)}</span>
          </S.TotalOfOrder>
        </S.Resume>
        <S.Button onClick={handleButton}>Start New Order</S.Button>
      </S.Card>
    </S.Wrapper>
  );
};

export default Modal;
