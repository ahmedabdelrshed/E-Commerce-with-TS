import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetCategories from "@store/categories/act/actGetCategories";
import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";
import { cleanUpCategories } from "@store/categories/categoriesSlice";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categoriesSlice
  );
  useEffect(() => {
    dispatch(actGetCategories());
    return () => {
      dispatch(cleanUpCategories());
    };
  }, [dispatch]);

  return (
    <Container>
      <Heading title="Categories"/>
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
