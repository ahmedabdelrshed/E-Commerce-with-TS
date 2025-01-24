import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { IProduct } from "@customTypes/index";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;
type cartItemProps = IProduct;
const CartItem = ({ img, title, price, max ,quantity}: cartItemProps) => {
  const renderOptions = Array(max).fill(0).map((_, indx) => {
    return (
      <option key={indx + 1} value={indx + 1}>
        {indx + 1}
      </option>
    );
  })
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)} EGP</h3>
          <Button
            variant="danger"
            style={{ color: "white" ,width:"100px"}}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select aria-label="Default select example" value={quantity}>
          {renderOptions}
        </Form.Select>
      </div>
    </div>
  );
};

export default CartItem;
