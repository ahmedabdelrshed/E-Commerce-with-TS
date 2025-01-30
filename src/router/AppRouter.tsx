import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
// Layouts
const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));

// Pages
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Error = lazy(() => import("@pages/Error"));
const Products = lazy(() => import("@pages/Products"));
const Cart = lazy(() => import("@pages/Cart"));
const WishList = lazy(() => import("@pages/WishList"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading Please Wait ...</div>}>
            <MainLayout />
          </Suspense>
        }
        errorElement={<Error />}
      >
        <Route index element={<Home />} />
        <Route
          path="categories"
          element={
            <Suspense fallback={<div>Loading Please Wait ...</div>}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path="categories/products/:prefix"
          element={
            <Suspense fallback={<div>Loading Please Wait ...</div>}>
              <Products />
            </Suspense>
          }
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
        <Route
          path="about-us"
          element={
            <Suspense fallback={<div>Loading Please Wait ...</div>}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading Please Wait ...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Suspense fallback={<div>Loading Please Wait ...</div>}>
              <WishList />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<div>Loading Please Wait ...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>Loading Please Wait ...</div>}>
              <Register />
            </Suspense>
          }
        />
      </Route>
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
