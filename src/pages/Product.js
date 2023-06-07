import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { router, useEffect, useState } from "../utilities";

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
  const { images } = book;

  return ` <div class="">
                  ${Nav()}
                  
                  <div class=' tw-mx-[150px] tw-grid tw-grid-cols-2'>


                  <section class=''>
                  <img class='tw-w-[700px]' src="${
                    images ? images[0] : ""
                  }" alt="">
                   <img class='tw-border tw-border-gray-400 tw-w-[150px]' src="${
                     images ? images[1] : "tw-hidden"
                   }" alt="">
                  </section>

                  <section class='tw-inline-block'>
                  <h2>${book?.name}</h2>
                  <p> <span>★★★★★</span> <span>Xem ${
                    book.comment
                  } Đánh giá</span> |  Đã bán ${
    book?.quantity_sold ? book?.quantity_sold?.text : "0"
  }  </p> 
      <p class='tw-font-bold tw-text-red-500'>${book?.original_price}</p>
            <p>Số lượng</p>
            <div class='tw-flex'>
                <button class=' tw-h-10 tw-w-10 tw-border '>+</button>
                <input  class='tw-justify-center tw-border tw-w-20 tw-outline-none' type="text" />
                <button class=' tw-border tw-w-10'>-</button>
            
            </div>
            <button class='btn btn-danger tw-w-[162px] '>Chọn mua</button>

                  </section>
                  </div>

                
                  ${Footer()}
              </div>
      `;
};

export default ProductDetail;
