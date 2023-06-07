import Product from "../pages/Product";
import Nav from "./Nav";
import Footer from "./Footer";
import { router, useEffect, useState } from "../utilities";

const ProductDetail = ({ id }) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((res) => setBook(res));
  }, []);

  // const { images } = book;
  // console.log(images);

  return `${Nav()}
        ${Product(book)}
      ${Footer()}
  `;
};
export default ProductDetail;
