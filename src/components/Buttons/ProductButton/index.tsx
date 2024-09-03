import { ButtonHTMLAttributes } from "react";

import cartIcon from "../../../assets/images/icon-add-to-cart.svg";

import IncrementSVG from "./IncrementSVG";
import DecrementSVG from "./DecrementSVG";

import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  count: number;
}

const ProductButton = ({ count, ...props }: Props) => {
  if (!count)
    return (
      <S.NotInCartButton {...props}>
        <img src={cartIcon} alt="" />
        Add to Cart
      </S.NotInCartButton>
    );

  return (
    <S.InCartButton>
      <S.Option>
        <DecrementSVG />
      </S.Option>
      {count}
      <S.Option>
        <IncrementSVG />
      </S.Option>
    </S.InCartButton>
  );
};

export default ProductButton;
