import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<div>ggg</div>}>
        <Route index element={<h1>hhhhhhh</h1>} />
      </Route>
    </>
  )
);

export default router;
