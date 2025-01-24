import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetCategories from "@store/categories/act/actGetCategories";
import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categoriesSlice
  );
  useEffect(() => {
    if (!records.length) dispatch(actGetCategories());
  }, [dispatch, records]);

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading error={error} loading={loading}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
