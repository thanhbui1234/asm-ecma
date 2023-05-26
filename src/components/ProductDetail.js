import Product from "../pages/Product";
import Nav from "../pages/nav";
import Footer from "../pages/Footer";
import data from "../../db.json" assert { type: "json" };
const ProductDetail = ({ id }) => {
  const valueProduct = data.find((product) => {
    return product.id === +id;
    if (!product) return null;
  });
  return `
        ${Nav()}
        ${Product(valueProduct)}
        ${Footer()}
    `;
};
export default ProductDetail;
