import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import Loading from "@components/feedback/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetWishlistItems from "@store/wishlist/act/actGetWishlistItems";
import { productsWishlistCleanUp } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

const WishList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetWishlistItems());
    return () => {
      dispatch(productsWishlistCleanUp());
    };
  }, [dispatch]);
  const { productsFullInfo, error, loading } = useAppSelector(
    (state) => state.whishList
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  const productsWithFullInfo = productsFullInfo.map((record) => ({
    ...record,
    quantity: cartItems[record.id] || 0,
    isLiked: true,
  }));
  return (
    <div>
      <Heading title="Your Wishlist" />
      <Loading error={error} loading={loading}>
        {productsFullInfo.length ? (
          <GridList
            records={productsWithFullInfo}
            renderItem={(record) => <Product {...record} />}
          />
        ) : (
          "Your WishList is empty!!!"
        )}
      </Loading>
    </div>
  );
};

export default WishList;
