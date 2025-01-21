import Logo from "@assets/svg/cart.svg?react";
import styles from "./basketStyles.module.css";
import { useAppSelector } from "@store/hooks";
const { basketQuantity, basketContainer } = styles;
const HeaderBasket = () => {
  const { items } = useAppSelector((state) => state.cart);
  const totalItemsQuantity = Object.values(items).reduce(
    (acc, item) => acc + item,
    0
  );
  return (
    <div className={basketContainer}>
      <Logo title="basket-logo" />
      <div className={basketQuantity}>{totalItemsQuantity} </div>
    </div>
  );
};

export default HeaderBasket;
