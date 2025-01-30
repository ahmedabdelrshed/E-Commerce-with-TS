import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetWishlistItems from "@store/wishlist/act/actGetWishlistItems";
import { productsWishlistCleanUp } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

const useWishlist = () => {
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
  return {productsWithFullInfo,error,loading,productsFullInfo}
}

export default useWishlist