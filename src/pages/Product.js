import { useEffect, useState } from "../utilities";
import data from "../../db.json" assert { type: "json" };
const Product = (...api) => {
  let categoryProduct;
  for (const product of Object.values(api)) {
    categoryProduct = product.category;
  }

  const checkCategorys = data.filter((product) => {
    return product.category == categoryProduct;
  });

  useEffect(() => {
    let inputQuantity = document.querySelector(".quantity");
    const btnAdd = document.querySelector(".add");
    const btnTru = document.querySelector(".tru");
    btnAdd.addEventListener("click", (e) => inputQuantity.value++);
    btnTru.addEventListener("click", (e) => {
      inputQuantity.value--;
      if (inputQuantity.value <= 0) return (inputQuantity.value = 1);
    });
  });

  return `
      <div class='container'>
    <section class='tw-grid tw-grid-cols-2'>
      ${api.map((product) => {
        return `  
        <img width='500' src="${product.images[0]}" alt="">
        <div>
        <h3 class='tw-mt-6 '>${product.name}</h3>
        <span class='tw-flex tw-gap-3 tw-my-5 tw-text-3xl'><p>★★★★★</p> <p class='tw-text-slate-400 '>(Xem ${
          product.comment
        } đánh giá )</p>   <p class='tw-text-slate-400 '>| ${
          product?.quantity_sold ? product?.quantity_sold?.text : "Đã bán 0"
        } </p> </span>

          <p class='tw-text-[#FF424E] tw-text-6xl'>${
            product.original_price
          } đ</p>

          <div class='tw-mt-[100px]'>
          <span class='d-flex tw-gap-14 tw-pb-6'>
          <p class='tw-font-bold tw-text-2xl'>Số lượng</p>
          <input class='tw-outline-none quantity' value='1'  type="text">
          </span>
          <div class='d-flex tw-gap-16'>
          <button class='btn border tru '>-</button> <button class='btn border add '>+</button>
          </div>
          <button class='tw-mt-6 tw-w-[50%] btn btn-danger'>Mua</button>

          </div>


        </div>
        `;
      })}
    </section>      
      </div>


      <div class='container tw-mt-52'>
    <h2>Sản phẩm tương tự</h2> 
      
    <div class='d-flex tw-gap-10 tw-mt-10'>
      ${checkCategorys.map((product) => {
        return `
  <div>
<img width='150' src="${product.images[0]}" alt="">
<p class='tw-h-16 tw-mt-3 tw-w-[200px]'>${product.name}</p>
 <span class='tw-flex tw-gap-3 tw-mt-5 tw-text-xl'><p>★★★★★</p> <p class='tw-text-slate-400 '></p>   <p class='tw-text-slate-400 '>| ${
   product?.quantity_sold ? product?.quantity_sold?.text : "Đã bán 0"
 } </p> </span>
    <p class='tw-text-2xl'>${product.original_price} đ</p> 

  </div>
        `;
      })}
    </div>
    <section class='tw-mt-12'>
    <h2>Mô tả sản phẩm</h2> 
      
    ${api.map((product) => {
      return `
            ${product.description}
        `;
    })}

     </section>

      </div>


  `;
};
export default Product;
