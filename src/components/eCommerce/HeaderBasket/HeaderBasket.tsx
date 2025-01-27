import Logo from "@assets/svg/cart.svg?react";
import styles from "./basketStyles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantity } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const { container, totalNum, pumpAnimate, iconWrapper } = styles;
const HeaderBasket = () => {
  const navigate = useNavigate();
  const [isAnimated, setISAnimated] = useState(false);
  const totalItemsQuantity = useAppSelector(getCartTotalQuantity);
  const quantityStyle = `${totalNum} ${isAnimated ? pumpAnimate : ""}`;
  useEffect(() => {
    if (!totalItemsQuantity) return;
    setISAnimated(true);
    const debounce = setTimeout(() => {
      setISAnimated(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalItemsQuantity]);
  return (
    <div className={container} onClick={() => navigate("/cart")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        {totalItemsQuantity > 0 && (
          <div className={quantityStyle}>{totalItemsQuantity}</div>
        )}
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
