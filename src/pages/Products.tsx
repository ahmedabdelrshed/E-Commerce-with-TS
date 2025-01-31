import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";

import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";
import useProducts from "@hooks/useProducts";
const Products = () => {
  const { error, loading, productsPrefix, productsWithFullInfo } =
    useProducts();

  return (
    <Container>
      <Heading title={`${productsPrefix?.toLocaleUpperCase()} Products`} />
      <Loading error={error} loading={loading} type="product">
        <GridList
          records={productsWithFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
