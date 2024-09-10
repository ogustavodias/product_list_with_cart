import { useGetProductsQuery } from "../../services/api";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducers/cart";

import { toCurrency } from "../../helper/toCurrency";

import ProductButton from "../Buttons/ProductButton";

import * as S from "./styles";

const Products = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetProductsQuery(null);

  if (!data) return null;
  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <S.Title>Desserts</S.Title>
      <S.List>
        {data.map((product) => {
          return (
            <S.Card key={product.name}>
              <div>
                <img src={product.imgs.desktop} alt={product.name} />
                <ProductButton
                  product={product}
                  onClick={() => dispatch(add(product))}
                />
              </div>
              <div>
                <S.Category>{product.category}</S.Category>
                <S.Name>{product.name}</S.Name>
                <S.Price>{toCurrency(product.unitPrice)}</S.Price>
              </div>
            </S.Card>
          );
        })}
      </S.List>
    </section>
  );
};

export default Products;
