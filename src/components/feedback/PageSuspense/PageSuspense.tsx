import { ReactNode, Suspense } from "react";
import LottieHandler from "../LottieHandler/LottieHandler";

const PageSuspense = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <LottieHandler type="loading" massage="Loading Please Wait ..." />
      }
    >
      {children}
    </Suspense>
  );
};

export default PageSuspense;
