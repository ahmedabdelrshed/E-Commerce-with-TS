import { IProduct } from "@customTypes/index";
import CartItem from "../CartItem/CartItem";

interface IProps {
  products: IProduct[];
  changeQuantityHandlers: (id: number, quantity: number) => void;
  removeProductHandler: (id: number) => void;
}
const CartItemList = ({
  products,
  changeQuantityHandlers,
  removeProductHandler,
}: IProps) => {
  const renderList = products.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      changeQuantityHandlers={changeQuantityHandlers}
      removeProductHandler={removeProductHandler}
    />
  ));
  return <>{renderList}</>;
};

export default CartItemList;
