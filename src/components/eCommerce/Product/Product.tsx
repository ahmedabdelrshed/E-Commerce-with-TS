import { Button, Spinner } from "react-bootstrap";
import styles from "./productStyle.module.css";
import { IProduct } from "@customTypes/index";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
const { product, productImg } = styles;

const Product = ({ id, img, price, title }: IProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  useEffect(() => {
    if (!isBtnDisabled) return;
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);
  // Handlers
  const onAddToCart = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={onAddToCart}
        disabled={isBtnDisabled}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
