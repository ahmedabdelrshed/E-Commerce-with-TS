import Logo from "@assets/svg/whishlist.svg?react";
import styles from "./wishListStyles.module.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "@store/hooks";
const { container, totalNum, pumpAnimate, iconWrapper } = styles;
const HeaderWishList = () => {
  const navigate = useNavigate();
  const [isAnimated, setISAnimated] = useState(false);
  const totalItemsQuantity = useAppSelector(
    (state) => state.whishList.itemsId.length
  );
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
    <div className={container} onClick={() => navigate("/wishlist")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        {totalItemsQuantity > 0 && (
          <div className={quantityStyle}>{totalItemsQuantity}</div>
        )}
      </div>
      <h3>WishList</h3>
    </div>
  );
};

export default HeaderWishList;
