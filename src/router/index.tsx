import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
// Layouts
import MainLayout from "../layouts/MainLayout/MainLayout";
// Pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import Product from "@pages/Products";
import AboutUs from "@pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="products:prefix" element={<Product/>} />
        <Route path="about-us" element={<AboutUs/>} />
      </Route>
    </>
  )
);

export default router;
