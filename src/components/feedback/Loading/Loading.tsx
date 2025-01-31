import { TLoading } from "@customTypes/index";
import CategorySkeleton from "../skeletons/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton";
const skeletonTypes = {
  product: ProductSkeleton,
  category: CategorySkeleton,
  cart: CartSkeleton,
};
interface ILoadingProps {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
  type?: keyof typeof skeletonTypes;
}
const Loading = ({
  children,
  error,
  loading,
  type = "category",
}: ILoadingProps) => {
  const SkeletonComponent = skeletonTypes[type];
  if (loading === "pending") {
    return <SkeletonComponent />;
  }
  if (loading === "failed") {
    return <div>{error}</div>;
  }
  if (loading === "succeeded") {
    return children;
  }
};

export default Loading;
