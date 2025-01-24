import { Heading } from "@components/common";
import CartItemList from "@components/eCommerce/CartItemList/CartItemList";
import Loading from "@components/feedback/Loading/Loading";
import getProductsByIds from "@store/cart/act/actGetProductsByIds";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { error, items, loading, productsInfo } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(getProductsByIds());
  }, [dispatch]);
  const products = productsInfo.map((product) => ({
    ...product,
    quantity: items[product.id],
  }));
  return (
    <>
      <Heading>Cart</Heading>
      <Loading error={error} loading={loading}>
        <CartItemList products={products} />
      </Loading>
    </>
  );
};

export default Cart;
