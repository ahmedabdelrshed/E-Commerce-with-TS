import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
// Layouts
import MainLayout from "../layouts/MainLayout/MainLayout";
// Pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";
import Products from "@pages/Products";
import Cart from "@pages/Cart";
import WishList from "@pages/WishList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route
          path="categories/products/:prefix"
          element={<Products />}
          loader={({ params }) => {
            if (
              typeof params.prefix !== "string" ||
              !/^[a-z]+$/i.test(params.prefix)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category not found",
                status: 400,
              });
            }
            return true;
          }}
        />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
