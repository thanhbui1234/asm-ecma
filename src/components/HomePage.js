import Nav from "../pages/nav";
import Products from "../pages/Products";
function HomePage() {
  return `
    ${Nav()}
    ${Products()}
  `;
}

export default HomePage;
