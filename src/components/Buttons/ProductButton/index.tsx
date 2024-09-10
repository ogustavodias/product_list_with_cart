import { ButtonHTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../../redux/reducers/cart";
import { RootState } from "../../../redux/configureStore";

import cartIcon from "/assets/images/icon-add-to-cart.svg";

import IncrementSVG from "./IncrementSVG";
import DecrementSVG from "./DecrementSVG";

import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  product: IProduct;
}

const ProductButton = ({ product, ...props }: Props) => {
  const dispatch = useDispatch();
  const teste = useSelector((state: RootState) =>
    state.cart.products.find((item) => item.name === product.name)
  );

  if (!teste?.quantity)
    return (
      <S.NotInCartButton {...props}>
        <img src={cartIcon} alt="" />
        Add to Cart
      </S.NotInCartButton>
    );

  return (
    <S.InCartButton>
      <S.Option onClick={() => dispatch(decrease(product))}>
        <DecrementSVG />
      </S.Option>
      {teste.quantity}
      <S.Option onClick={() => dispatch(increase(product))}>
        <IncrementSVG />
      </S.Option>
    </S.InCartButton>
  );
};

export default ProductButton;
