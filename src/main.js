import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { render, router } from "./utilities";
import HomePage from "./components/HomePage";
import NotFound from "./pages/NotFound";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.notFound(() => render(NotFound, app));
router.resolve();
