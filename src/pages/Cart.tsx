import { Heading } from "@components/common";
import CartItemList from "@components/eCommerce/CartItemList/CartItemList";
import CartSubtotalPrice from "@components/eCommerce/cartSubTotalPrice.tsx/CartSubTotal";
import Loading from "@components/feedback/Loading/Loading";
import useCart from "@hooks/useCart";

const Cart = () => {
  const {
    changeQuantityHandlers,
    error,
    loading,
    products,
    removeProductHandler,
  } = useCart();
  return (
    <>
      <Heading title="Cart" />

      <>
        <Loading error={error} loading={loading} type="cart">
          {products.length ? (
            <CartItemList
              products={products}
              changeQuantityHandlers={changeQuantityHandlers}
              removeProductHandler={removeProductHandler}
            />
          ) : (
            "Your cart is empty!!!"
          )}
        </Loading>
        <CartSubtotalPrice products={products} />
      </>
    </>
  );
};

export default Cart;
