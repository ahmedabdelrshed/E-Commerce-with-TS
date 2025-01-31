import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";

import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";
import useProducts from "@hooks/useProducts";
import { LottieHandler } from "@components/feedback";
const Products = () => {
  const { error, loading, productsPrefix, productsWithFullInfo } =
    useProducts();

  return (
    <Container>
      <Heading title={`${productsPrefix?.toLocaleUpperCase()} Products`} />
      <Loading error={error} loading={loading} type="product">
        {productsWithFullInfo.length ? (
          <GridList
            records={productsWithFullInfo}
            renderItem={(record) => <Product {...record} />}
          />
        ) : (
          <LottieHandler type="empty" massage="There are no Products Now!" />
        )}
      </Loading>
    </Container>
  );
};

export default Products;
