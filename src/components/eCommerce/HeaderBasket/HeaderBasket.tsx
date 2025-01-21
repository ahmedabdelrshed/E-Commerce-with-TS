import Logo from "@assets/svg/cart.svg?react";
import styles from "./basketStyles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantity } from "@store/cart/cartSlice";
const { basketQuantity, basketContainer } = styles;
const HeaderBasket = () => {
  const totalItemsQuantity = useAppSelector(getCartTotalQuantity);
  return (
    <div className={basketContainer}>
      <Logo title="basket-logo" />
      <div className={basketQuantity}>{totalItemsQuantity} </div>
    </div>
  );
};

export default HeaderBasket;
