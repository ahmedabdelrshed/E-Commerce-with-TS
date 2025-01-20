import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetProducts from "@store/products/act/actGetProductsByCat";
import { useParams } from "react-router";
import { productsCleanUp } from "@store/products/productsSlice";
import Loading from "@components/feedback/Loading/Loading";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.productsSlice
  );
  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params.prefix]);
  const productsList =
    records.length > 0
      ? records.map((product) => (
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
            key={product.id}
          >
            <Product {...product} />
          </Col>
        ))
      : "There are no products";
  return (
    <Container>
      <Loading error={error} loading={loading}>
        <Row>{productsList}</Row>
      </Loading>
    </Container>
  );
};

export default Products;
