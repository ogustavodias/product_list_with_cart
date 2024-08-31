import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

import cartIcon from "../../../assets/images/icon-add-to-cart.svg";

const ProductButton = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <S.Button {...props}> <img src={cartIcon} alt="" /> Add to Cart</S.Button>;
};

export default ProductButton;
