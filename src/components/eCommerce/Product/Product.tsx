import { Button } from "react-bootstrap";
import styles from "./productStyle.module.css";
import { IProduct } from "@customTypes/index";
const { product, productImg } = styles;

const Product = ({ img, price, title }: IProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
