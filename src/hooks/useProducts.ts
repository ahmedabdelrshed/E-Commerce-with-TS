import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetProducts from "@store/products/act/actGetProductsByCat";
import { useParams } from "react-router";
import { productsCleanUp } from "@store/products/productsSlice";
const useProducts = () => {
    const params = useParams();
    const productsPrefix = params.prefix
    const dispatch = useAppDispatch();
    const { error, loading, records } = useAppSelector(
        (state) => state.productsSlice
    );
    const { itemsId } = useAppSelector((state) => state.whishList);
    const cartItems = useAppSelector((state) => state.cart.items);
    const productsWithFullInfo = records.map((record) => ({
        ...record,
        quantity: cartItems[record.id] || 0,
        isLiked: itemsId.includes(record.id),
    }));
    useEffect(() => {
        const promise = dispatch(actGetProducts(params.prefix as string));
        return () => {
            promise.abort();
            dispatch(productsCleanUp());
        };
    }, [dispatch, params.prefix]);
    return {productsWithFullInfo,error,loading,productsPrefix}
}

export default useProducts