import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { render, router } from "./utilities";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
const app = document.querySelector("#app");
import ProductDetail from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProd";
///////////////////////////////////

router.on("/admin/UpdateProd/:id", ({ data }) =>
  render(() => UpdateProduct(data), app)
);
router.on("/admin", () => render(Dashboard, app));
router.on("/admin/addProduct/", render(AddProduct, app));
router.on("/", () => render(Products, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));
router.notFound(() => render(NotFound, app));
router.resolve();
