import Logo from "@assets/svg/cart.svg?react";
import styles from "./basketStyles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantity } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
const { basketQuantity, basketContainer, pumpCartQuantity } = styles;
const HeaderBasket = () => {
  const [isAnimated, setISAnimated] = useState(false);
  const totalItemsQuantity = useAppSelector(getCartTotalQuantity);
  const basketStyles = `${basketQuantity} ${
    isAnimated ? pumpCartQuantity : ""
  }`;
  useEffect(() => {
    if (!totalItemsQuantity) return;
    setISAnimated(true);
    const debounce = setTimeout(() => {
      setISAnimated(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalItemsQuantity]);
  return (
    <div className={basketContainer}>
      <Logo title="basket-logo" />
      <div className={basketStyles}>{totalItemsQuantity} </div>
    </div>
  );
};

export default HeaderBasket;
