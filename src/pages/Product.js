import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useEffect, useState } from "../utilities";
import Swal from "sweetalert2";

const ProductDetail = ({ id }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);
  console.log(book);

  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    const buy = document.querySelector(".buy");
    const bntAdd = document.querySelector(".up");
    const bntDown = document.querySelector(".down");
    const valueQuanlity = document.querySelector(".value_quanlity");
    console.log(buy);
    buy.addEventListener("click", () => {
      return Toast.fire({
        icon: "success",
        title: "Thêm 1 sản phẩm :)",
      });
    });
    bntAdd.addEventListener("click", function (e) {
      valueQuanlity.value++;
    });
    bntDown.addEventListener("click", function (e) {
      valueQuanlity.value--;
      if (valueQuanlity.value <= 0) valueQuanlity.value = 1;
    });
  });

  console.log(book);
  const { images } = book;

  return ` <div class="">
                  ${Nav()}
                  <div class=' tw-mx-[100px] tw-mt-52 tw-gap-x-64 tw-flex'>
                  <section class=''>
                  <img class='tw-w-[700px]' src="${
                    images ? images[0] : ""
                  }" alt="">
                   <img class='tw-mt-3 tw-border-gray-400 tw-w-[150px]' src="${
                     images ? images[1] : ""
                   }" alt="">
                  </section>

                  <section class='tw-inline-block tw-mt-12 '>
                  <h2 class=''>${book?.name}</h2>
                  <p class='tw-my-16 tw-text-2xl'> <span>★★★★★</span> <span>Xem ${
                    book.comment
                  } Đánh giá</span> |  Đã bán ${
    book?.quantity_sold ? book?.quantity_sold?.text : "0"
  }  </p> 
      <p class='tw-font-bold tw-mt-10 tw-text-3xl tw-text-red-500'>${
        book?.original_price
      } đ </p>
            <p class='tw-mt-20'>Số lượng</p>
            <div class='tw-flex tw-my-10'>
                <button class=' down tw-border tw-w-10'>-</button>
                <input class='value_quanlity tw-justify-center tw-border tw-w-20 tw-outline-none tw-pl-8' value='1'  type="text" />
                <button  class='up  tw-h-10 tw-w-10 tw-border '>+</button>

            
            </div>
            <button class='buy btn btn-danger tw-w-[162px] '>Chọn mua</button>

            

                  </section>

               
                  </div>

                  <section class='container tw-mt-32 '>
                  
                    <h1>Mô tả sản phẩm</h1>
                  ${book.description}</section>
                
                  ${Footer()}
              </div>
      `;
};

export default ProductDetail;
