import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useState } from "../utilities";

const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProduct(data));
  }, []);

  console.log(products);
  useEffect(() => {
    const categories = document.querySelector("#category");
    const onTop = document.querySelector(".onTop");
    onTop.addEventListener("click", () => {
      categories.scrollIntoView({ behavior: "smooth" });
    });

    const saleProducts = document.querySelectorAll("#sale-product  li");
    for (let saleProduct of saleProducts) {
      saleProduct.addEventListener("click", () => {
        const saleProductActive = document.querySelector(
          "#sale-product .active"
        );

        saleProductActive.classList.remove("active");
        saleProductActive.classList.remove("tw-text-[#0D5CB6]");
        saleProductActive.classList.remove("tw-font-bold");

        saleProduct.classList.add("tw-text-[#0D5CB6]");
        saleProduct.classList.add("active");
        saleProduct.classList.add("tw-font-bold");
      });
    }
  });

  return `
  ${Nav()}
     <div class='tw-flex container tw-gap-10 tw-mt-10 tw-pt-[120px]  '>
      <div class='tw-flex tw-flex-col'>
      <p  id='category' class='tw-w-40'>Danh Mục Sản Phẩm</p>
      <ul class='tw-mr-6 tw-w-40 ' >
        <li>English Books<li>
        <li>Sách tiếng Việt<li>
        <li>Văn phòng phẩm<li>
        <li>Quà lưu niệm<li>
      </ul>
      <hr >
      </div>
      <div>
      <h3 class=''>Nhà Sách Tiki</h3>
    <img src="/public/imgs/bammer.png" alt="">  
  <section  class='tw-mt-5' id='sale-product' >
  <ul class='tw-flex tw-gap-10'>
  <li class='tw-cursor-pointer tw-text-xl tw-text-[#0D5CB6] tw-font-bold active '>Phổ biến</li>
  <li class='tw-cursor-pointer tw-text-xl'>Bán chạy</li>
  <li class='tw-cursor-pointer tw-text-xl'>Hàng mới</li>
  <li class='tw-cursor-pointer tw-text-xl'>Gía thấp</li>
  <li class='tw-cursor-pointer tw-text-xl'>Gía cao</li>
  </ul>
  </section>
  <hr>
   <div class='tw-grid tw-grid-cols-4 tw-gap-5 '>
     ${products
       .map((book) => {
         return `
      <div>
      <a class='tw-text-[#242424] tw-no-underline' href='#/product/${book.id}'>
       <img class='' src=${book.images ? book.images[0] : book.images} atl='' />
        <p  class='e tw-ml-8 tw-mt-5 tw-w-[210px] tw-max-h-15 '>${book.name}</p>
      </a>
        <span class='tw-flex tw-ml-6 tw-gap-4'> 
        <div class='d-flex'>
        <p>★★★★★</p>
        </div>
        <span class='tw-text-slate-400  '> | ${
          book?.quantity_sold ? book?.quantity_sold?.text : "Đã bán 0"
        }</span>
         </span>

         <p class='tw-text-xl tw-ml-5'>
          ${book.original_price} đ
         </p>

      </div>
      `;
       })
       .join("")}

   </div>
     </div>

     </div>
      <button class='onTop btn btn-danger'>MOVE ON TOP</button>
     ${Footer()}
    `;
};

export default Products;
