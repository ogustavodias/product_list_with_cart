import confirmedIcon from "../../assets/images/icon-order-confirmed.svg";
import thumb from "../../assets/images/image-baklava-thumbnail.jpg";

import * as S from "./styles";

const Modal = () => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Header>
          <img src={confirmedIcon} alt="Confirmed icon" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </S.Header>
        <S.Resume>
          <S.List>
            <S.Item>
              <S.Thumb src={thumb} alt="thumb" />
              <div>
                <S.Name>Classic Tiramisu</S.Name>
                <S.Quantity>1x</S.Quantity>
                <S.UnitPrice>@ $5.50</S.UnitPrice>
              </div>
              <S.TotalOfProduct>$5.50</S.TotalOfProduct>
            </S.Item>
            <S.Item>
              <S.Thumb src={thumb} alt="thumb" />
              <div>
                <S.Name>Classic Tiramisu</S.Name>
                <S.Quantity>1x</S.Quantity>
                <S.UnitPrice>@ $5.50</S.UnitPrice>
              </div>
              <S.TotalOfProduct>$5.50</S.TotalOfProduct>
            </S.Item>
            <S.Item>
              <S.Thumb src={thumb} alt="thumb" />
              <div>
                <S.Name>Classic Tiramisu</S.Name>
                <S.Quantity>1x</S.Quantity>
                <S.UnitPrice>@ $5.50</S.UnitPrice>
              </div>
              <S.TotalOfProduct>$5.50</S.TotalOfProduct>
            </S.Item>
          </S.List>
          <S.TotalOfOrder>
            <span>Order Total</span>
            <span>$46.50</span>
          </S.TotalOfOrder>
        </S.Resume>
        <S.Button>Start New Order</S.Button>
      </S.Card>
    </S.Wrapper>
  );
};

export default Modal;
