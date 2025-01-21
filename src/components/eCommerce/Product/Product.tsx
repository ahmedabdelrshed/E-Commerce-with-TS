import { Button } from "react-bootstrap";
import styles from "./productStyle.module.css";
import { IProduct } from "@customTypes/index";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
const { product, productImg } = styles;

const Product = ({id, img, price, title }: IProduct) => {
    const dispatch = useAppDispatch()
    // Handlers
    const onAddToCart = () => { 
        dispatch(addToCart(id))
    }
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <Button variant="info" style={{ color: "white" }} onClick={onAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
