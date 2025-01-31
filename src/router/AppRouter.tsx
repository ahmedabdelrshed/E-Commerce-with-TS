import { LottieHandler } from "@components/feedback";
import PageSuspense from "@components/feedback/PageSuspense/PageSuspense";
import Error from "@pages/Error";
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
const Products = lazy(() => import("@pages/Products"));
const Cart = lazy(() => import("@pages/Cart"));
const WishList = lazy(() => import("@pages/WishList"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense  fallback={
            <div style={{ marginTop: "10%" }}>
              <LottieHandler type="loading" massage="Loading please wait..." />
            </div>
          }>
            <MainLayout />
          </Suspense>
        }
        errorElement={<Error />}
      >
        <Route index element={<Home />} />
        <Route
          path="categories"
          element={
            <PageSuspense>
              <Categories />
            </PageSuspense>
          }
        />
        <Route
          path="categories/products/:prefix"
          element={
            <PageSuspense>
              <Products />
            </PageSuspense>
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
            <PageSuspense>
              <AboutUs />
            </PageSuspense>
          }
        />
        <Route
          path="/cart"
          element={
            <PageSuspense>
              <Cart />
            </PageSuspense>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PageSuspense>
              <WishList />
            </PageSuspense>
          }
        />
        <Route
          path="login"
          element={
            <PageSuspense>
              <Login />
            </PageSuspense>
          }
        />
        <Route
          path="register"
          element={
            <PageSuspense>
              <Register />
            </PageSuspense>
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
