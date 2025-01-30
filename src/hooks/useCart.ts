import getProductsByIds from "@store/cart/act/actGetProductsByIds";
import {
    cartItemsCleanUp,
    changeQuantityOfCartItem,
    removeCartItem,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";
const useCart = () => {
    const dispatch = useAppDispatch();
    const { error, items, loading, productsInfo } = useAppSelector(
        (state) => state.cart
    );
    useEffect(() => {
        const promise = dispatch(getProductsByIds());
        return () => {
            promise.abort();
            dispatch(cartItemsCleanUp());
        };
    }, [dispatch]);
    const products = productsInfo.map((product) => ({
        ...product,
        quantity: items[product.id],
    }));
    // Handlers
    const changeQuantityHandlers = useCallback(
        (id: number, quantity: number) => {
            dispatch(changeQuantityOfCartItem({ id, quantity }));
        },
        [dispatch]
    );
    const removeProductHandler = useCallback(
        (id: number) => {
            dispatch(removeCartItem(id));
        },
        [dispatch]
    );
    return { products, error, loading, changeQuantityHandlers, removeProductHandler }
}

export default useCart