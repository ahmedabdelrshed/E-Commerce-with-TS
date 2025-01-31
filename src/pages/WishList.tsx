import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { LottieHandler } from "@components/feedback";
import Loading from "@components/feedback/Loading/Loading";
import useWishlist from "@hooks/useWishlist";

const WishList = () => {
 const {error,loading,productsWithFullInfo,productsFullInfo} = useWishlist()
  return (
    <div>
      <Heading title="Your Wishlist" />
      <Loading error={error} loading={loading} type="product">
        {productsFullInfo.length ? (
          <GridList
            records={productsWithFullInfo}
            renderItem={(record) => <Product {...record} />}
          />
        ) : (
         <LottieHandler type="empty" massage="Your Wishlist is Empty!"/>
        )}
      </Loading>
    </div>
  );
};

export default WishList;
