import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import * as S from "./styles";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

const OrderButton = ({ children, ...props }: Props) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default OrderButton;
