import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetProducts from "@store/products/act/actGetProductsByCat";
import { useParams } from "react-router";
import { productsCleanUp } from "@store/products/productsSlice";
import Loading from "@components/feedback/Loading/Loading";
import { GridList } from "@components/common";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.productsSlice
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  const productsWithQuantityInCart = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id] || 0,
  }));
  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params.prefix]);

  return (
    <Container>
      <Loading error={error} loading={loading}>
        <GridList
          records={productsWithQuantityInCart}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
