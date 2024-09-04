import productIcon from "../../assets/images/image-waffle-desktop.jpg";

import ProductButton from "../Buttons/ProductButton";

import * as S from "./styles";

const Products = () => {
  return (
    <section>
      <S.Title>Desserts</S.Title>
      <S.List>
        <S.Card>
          <div>
            <img src={productIcon} alt="" />
            <ProductButton count={0} />
          </div>
          <div>
            <S.Category>Waffle</S.Category>
            <S.Name>Waffle with Berries</S.Name>
            <S.Price>$ 6.50</S.Price>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <img src={productIcon} alt="" />
            <ProductButton count={0} />
          </div>
          <div>
            <S.Category>Waffle</S.Category>
            <S.Name>Waffle with Berries</S.Name>
            <S.Price>$ 6.50</S.Price>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <img src={productIcon} alt="" />
            <ProductButton count={0} />
          </div>
          <div>
            <S.Category>Waffle</S.Category>
            <S.Name>Waffle with Berries</S.Name>
            <S.Price>$ 6.50</S.Price>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <img src={productIcon} alt="" />
            <ProductButton count={0} />
          </div>
          <div>
            <S.Category>Waffle</S.Category>
            <S.Name>Waffle with Berries</S.Name>
            <S.Price>$ 6.50</S.Price>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <img src={productIcon} alt="" />
            <ProductButton count={0} />
          </div>
          <div>
            <S.Category>Waffle</S.Category>
            <S.Name>Waffle with Berries</S.Name>
            <S.Price>$ 6.50</S.Price>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <img src={productIcon} alt="" />
            <ProductButton count={0} />
          </div>
          <div>
            <S.Category>Waffle</S.Category>
            <S.Name>Waffle with Berries</S.Name>
            <S.Price>$ 6.50</S.Price>
          </div>
        </S.Card>
        <S.Card>
          <div>
            <img src={productIcon} alt="" />
            <ProductButton count={0} />
          </div>
          <div>
            <S.Category>Waffle</S.Category>
            <S.Name>Waffle with Berries</S.Name>
            <S.Price>$ 6.50</S.Price>
          </div>
        </S.Card>
      </S.List>
    </section>
  );
};

export default Products;
