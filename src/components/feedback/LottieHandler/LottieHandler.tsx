import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/Not-found.json";
import error from "@assets/lottieFiles/error.json";
import loading from "@assets/lottieFiles/loading.json";
import empty from "@assets/lottieFiles/empty.json";
const lottieFiles = {
  notFound,
  error,
  loading,
  empty,
};
type LottieHandlerProps = {
  type: keyof typeof lottieFiles;
  massage?: string;
};
const LottieHandler = ({ type, massage }: LottieHandlerProps) => {
  const LottieFile = lottieFiles[type];
  return (
    <div className=" d-flex  flex-column align-items-center">
      <Lottie
        animationData={LottieFile}
        style={{ width: "400px", marginBottom: "30px" }}
      />
      {massage && <h2 style={{ fontSize: "19px" }}>{massage}</h2>}
    </div>
  );
};

export default LottieHandler;
