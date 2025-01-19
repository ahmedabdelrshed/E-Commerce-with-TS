import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<h1>hhhhhhh</h1>} />
      </Route>
    </>
  )
);

export default router;
