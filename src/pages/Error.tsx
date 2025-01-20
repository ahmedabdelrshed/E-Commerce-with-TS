import { Container } from "react-bootstrap";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Sorry, the page you are looking for could not be found";
    }
    
  return (
    <Container className="text-center">
      <h1 className="fs-1">{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
