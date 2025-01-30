import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import Loading from "@components/feedback/Loading/Loading";
import useWishlist from "@hooks/useWishlist";

const WishList = () => {
 const {error,loading,productsWithFullInfo,productsFullInfo} = useWishlist()
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
