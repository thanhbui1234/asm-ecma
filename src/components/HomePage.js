import Nav from "../pages/nav";
import Products from "../pages/Products";
function HomePage() {
  console.log(Nav);
  return `
    ${Nav()}
    ${Products()}
  `;
}

export default HomePage;
