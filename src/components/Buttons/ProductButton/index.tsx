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
  const { products, confirmed } = useSelector((state: RootState) => state.cart);
  const quantity = products.find(
    (item) => item.name === product.name
  )?.quantity;

  if (!quantity)
    return (
      <S.NotInCartButton {...props} disabled={confirmed}>
        <img src={cartIcon} alt="" />
        Add to Cart
      </S.NotInCartButton>
    );

  return (
    <S.InCartButton
      style={{ justifyContent: confirmed ? "center" : "space-between" }}
    >
      <S.Option
        onClick={() => dispatch(decrease(product))}
        style={{ display: confirmed ? "none" : "flex" }}
      >
        <DecrementSVG />
      </S.Option>
      {quantity}
      <S.Option
        onClick={() => dispatch(increase(product))}
        style={{ display: confirmed ? "none" : "flex" }}
      >
        <IncrementSVG />
      </S.Option>
    </S.InCartButton>
  );
};

export default ProductButton;
