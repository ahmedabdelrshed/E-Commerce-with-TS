import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";

import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";
import useCategories from "@hooks/useCategories";
import { LottieHandler } from "@components/feedback";

const Categories = () => {
  const { error, loading, records } = useCategories();

  return (
    <Container>
      <Heading title="Categories" />
      <Loading error={error} loading={loading}>
       {records.length ?  <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />: <LottieHandler type="empty" massage="There are no categories Now!"/>}
      </Loading>
    </Container>
  );
};

export default Categories;
