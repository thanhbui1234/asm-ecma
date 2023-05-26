import data from "../../db.json" assert { type: "json" };
import { useState, useEffect } from "../utilities";

const Products = () => {
  const [products, setProduct] = useState(data || []);
  console.log(products);
  useEffect(() => {
    const saleProducts = document.querySelectorAll("#sale-product  li");

    for (let saleProduct of saleProducts) {
      saleProduct.addEventListener("click", () => {
        const saleProductActive = document.querySelector(
          "#sale-product .active"
        );

        saleProductActive.classList.remove("active");
        saleProductActive.classList.remove("tw-text-[#0D5CB6]");

        saleProduct.classList.add("tw-text-[#0D5CB6]");
        saleProduct.classList.add("active");
      });
    }
  });

  return `
     <div class='tw-flex container tw-gap-10 tw-mt-10 '>
      <div class='tw-flex tw-flex-col'>
      <p class='tw-w-40'>Danh Mục Sản Phẩm</p>
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
  <ul class='  tw-flex tw-gap-8'>
  <li class='tw-cursor-pointer tw-text-xl tw-text-[#0D5CB6] active '>Phổ biến</li>
  <li class='tw-cursor-pointer tw-text-xl'>Bán chạy</li>
  <li class='tw-cursor-pointer tw-text-xl'>Hàng mới</li>
  <li class='tw-cursor-pointer tw-text-xl'>Gía thấp</li>
  <li class='tw-cursor-pointer tw-text-xl'>Gía cao</li>
  </ul>
  </section>
  <hr>
   <div class='tw-flex tw-flex-cols-4'>
    
  ${products
    .map(
      (product) =>
        `<div>
        <a href='/cc/${product.id}'>
<img width='300' src=${product.images} alt="">
        <a>
    <div>`
    )
    .join(" ")}


      

   </div>
     </div>
    
    `;
};

export default Products;
