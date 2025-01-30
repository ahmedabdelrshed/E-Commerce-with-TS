import actGetCategories from "@store/categories/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { cleanUpCategories } from "@store/categories/categoriesSlice";

const useCategories = () => {
    const dispatch = useAppDispatch();
    const { error, loading, records } = useAppSelector(
      (state) => state.categoriesSlice
    );
    useEffect(() => {
      dispatch(actGetCategories());
      return () => {
        dispatch(cleanUpCategories());
      };
    }, [dispatch]);
  return {error,loading,records}
}

export default useCategories