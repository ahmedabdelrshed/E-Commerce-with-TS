import { IProduct } from "@customTypes/index";
import CartItem from "../CartItem/CartItem";

interface IProps {
  products: IProduct[];
  changeQuantityHandlers: (id: number, quantity: number) => void;
}
const CartItemList = ({ products, changeQuantityHandlers }: IProps) => {
  const renderList = products.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      changeQuantityHandlers={changeQuantityHandlers}
    />
  ));
  return <>{renderList}</>;
};

export default CartItemList;
