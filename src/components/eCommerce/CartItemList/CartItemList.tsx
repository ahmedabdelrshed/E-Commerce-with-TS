import { IProduct } from "@customTypes/index";
import CartItem from "../CartItem/CartItem";

interface IProps {
  products: IProduct[];
}
const CartItemList = ({ products: items }: IProps) => {
    const renderList = items.map((item) => <CartItem key={item.id} {...item} />);
  return <>{renderList}</>;
};

export default CartItemList;
