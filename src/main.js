import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { render, router } from "./utilities";
import Products from "./pages/Client/Products";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/Client/Product";
import Dashboard from "./pages/admin/Dashboard";
const app = document.querySelector("#app");
///////////////////////////////////

router.on("/admin", () => render(Dashboard, app));
router.on("/", () => render(Products, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));
router.notFound(() => render(NotFound, app));
router.resolve();
