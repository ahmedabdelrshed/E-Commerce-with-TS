
import { LottieHandler } from "@components/feedback";
import { Container } from "react-bootstrap";
import { Link } from "react-router";

const Error = () => {
  return (
    <Container className="text-center d-flex flex-column align-items-center ">
      <LottieHandler type="notFound"/>
      <Link to="/" replace={true} className="text-decoration-none" >
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
