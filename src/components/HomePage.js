import Nav from "../pages/nav";
import Products from "../pages/Products";
import Footer from "../pages/Footer";
function HomePage() {
  return `
    ${Nav()}
    ${Products()}
    ${Footer()}
  `;
}

export default HomePage;
