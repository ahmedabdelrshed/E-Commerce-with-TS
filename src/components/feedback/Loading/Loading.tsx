import { TLoading } from "@customTypes/index";

interface ILoadingProps {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
}
const Loading = ({ children, error, loading }: ILoadingProps) => {
  if (loading === "pending") {
    return "Loading...";
  }
  if (loading === "failed") {
    return <div>{error}</div>;
  }
  if (loading === "succeeded") {
    return children;
  }
};

export default Loading;
