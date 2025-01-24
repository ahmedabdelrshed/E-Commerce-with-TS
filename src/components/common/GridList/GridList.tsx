import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => ReactNode;
};
type HasID = {
  id?: number;
};
const GridList = <T extends HasID>({
  records,
  renderItem,
}: TGridListProps<T>) => {
  const itemsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
            key={record.id}
          >
            {renderItem(record)}
          </Col>
        ))
      : "There are no categories";
  return <Row>{itemsList}</Row>;
};

export default GridList;
