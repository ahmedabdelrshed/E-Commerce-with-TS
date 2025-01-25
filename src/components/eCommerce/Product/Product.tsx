import { Button, Spinner } from "react-bootstrap";
import styles from "./productStyle.module.css";
import { IProduct } from "@customTypes/index";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
import Like from "@assets/svg/like.svg?react";
// import LikeFill from "@assets/svg/like-fill.svg?react";

const { product, productImg, maximumNotice, whishList } = styles;

const Product = ({ id, img, price, title, max, quantity }: IProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const currentRemainingQuantity = max - (quantity ?? 0);
  const isQuantityMax = currentRemainingQuantity <= 0 ? true : false;
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
      <div className={whishList}>
        <Like />
      </div>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <p className={maximumNotice}>
        {isQuantityMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={onAddToCart}
        disabled={isBtnDisabled || isQuantityMax}
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

export default memo(Product);
