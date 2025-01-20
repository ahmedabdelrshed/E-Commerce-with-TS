import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetCategories from "@store/categories/act/actGetCategories";

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
      <Row>
        {loading === "pending" ? "Loading..." : categoriesList}
        {error && <div>{error}</div>}
      </Row>
    </Container>
  );
};

export default Categories;
