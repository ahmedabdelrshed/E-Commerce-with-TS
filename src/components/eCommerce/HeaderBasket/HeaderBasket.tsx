import Logo from "@assets/svg/cart.svg?react";
import styles from "./basketStyles.module.css";
const { basketQuantity, basketContainer } = styles;
const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo title="basket-logo" />
      <div className={basketQuantity}>0 </div>
    </div>
  );
};

export default HeaderBasket;
