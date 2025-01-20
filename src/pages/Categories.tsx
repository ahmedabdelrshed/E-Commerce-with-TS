import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetCategories from "@store/categories/act/actGetCategories";
import Loading from "@components/feedback/Loading/Loading";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categoriesSlice
  );
  useEffect(() => {
    if (!records.length) dispatch(actGetCategories());
  }, [dispatch, records]);
  const categoriesList =
    records.length > 0
      ? records.map((category) => (
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
            key={category.id}
          >
            <Category {...category} />
          </Col>
        ))
      : "There are no categories";
  return (
    <Container>
      <Loading error={error} loading={loading}>
        <Row>{categoriesList}</Row>
      </Loading>
    </Container>
  );
};

export default Categories;
