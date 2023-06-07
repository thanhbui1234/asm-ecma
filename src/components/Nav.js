import data from "../../db" assert { type: "json" };
import { useEffect } from "../utilities";

const Nav = () => {
  useEffect(() => {
    const tab_search = document.querySelector("#tab-search");
    const search = document.querySelector("#search");

    const renderSeach = (valueSeach) => {
      console.log(tab_search);
      const uiSearch = valueSeach
        .map((product) => {
          return `<ul>
        <li><a href='/#/product/${product.id}'>${product.name}</a></li>

      </ul>`;
        })
        .join("");

      tab_search.innerHTML = uiSearch;
    };

    search.addEventListener("click", () => {
      tab_search.classList.toggle("tw-invisible");
    });
    search.oninput = (e) => {
      const dataSearch = data.filter((product) => {
        return product.name
          .toUpperCase()
          .includes(e.target.value.toUpperCase());
      });
      renderSeach(dataSearch);
    };
  });

  return `
      <div id='tab-search' class='tw-z-30 tw-invisible tw-w-[420px] tw-left-[535px]  tw-top-[70px] tw-absolute tw-bg-white tw-h-[500px]'>
      </div>
    <div class='tw-w-full tw-relative tw-h-[120px] tw-flex tw-gap-[120px] tw-justify-center  tw-bg-[#1A94FF] tw-py-5'>
    <img class='w-[45px]' src="/public/imgs/logo tiki.png" alt=""> 
    <div id='showSearch' class='tw-flex tw-mt-3'>
  <input id='search' class='tw-outline-none tw-w-[430px] tw-h-[35px]' type="text">
<button class='tw-flex tw-w-[130px] tw-h-[35px] tw-bg-[#0D5CB6] tw-pt-1 tw-pl-3 ' >  <svg class=' text-white tw-w-[24px] ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg><span class='text-white' >Tìm kiếm</span></button>
    </div>
    <div class='tw-flex  tw-flex-col '>
      <span><a class='text-white' href=''>Đăng nhập</a> <span class='text-white'>/<span> <a class='text-white' href=''>Đăng ký</a></span>
      <div class='tw-flex tw-pt-1'><img  src="/public/imgs/user.png" alt=""> <span class='tw-text-decoration-none tw-pl-1 tw-pt-1'><div class="dropdown">
  <a class=" text-white dropdown-toggle" href="#" role="" data-bs-toggle="dropdown" aria-expanded="false">
   Tài khoản
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>jjj   
  </ul>
</div></span> </div>
    </div>
    
    <div class='tw-flex'>
    <img  class='tw-w-[38px] tw-h-[34px]' src="/public/imgs/cart.png" alt="">
    <p class='text-white'> Giỏ hàng</p>
    </div>


    </div>

<div class='tw-h-7 tw-bg-[#F5F5FA] tw-w-full'></div>

  `;
};

export default Nav;
