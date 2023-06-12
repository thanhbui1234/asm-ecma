import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { v4 as uiidv4 } from "uuid";
import Swal from "sweetalert2";
import { useEffect, router, useState } from "../utilities";

const UpdateProduct = ({ id }) => {
  const [books, setBooks] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

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
    const my_form = document.querySelector("#my-form");
    const name = document.querySelector('input[name="name"]');
    const price = document.querySelector('input[name="price"]');
    const description = document.querySelector("#description");
    const short_description = document.querySelector("#short_description");
    my_form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valueForm = {
        id: uiidv4(),
        name: name.value,
        list_price: price.value,
        description: description.value,
        short_description: short_description.value,
        original_price: price.value,
      };

      fetch(`http://localhost:3000/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valueForm),
      }).then(() => {
        router.navigate("/admin");
      });
    });
  });

  return `
  ${Nav()}
<h2 class='container mt-5'>Sản phẩm  <span class='tw-pl-3 tw-font-normal tw-text-2xl' >${
    books.name
  }</span> </h2>
<form id='my-form' class='tw-mt-10' action="">
<div class='container'>
  <div class="mb-3">
  <label for="" class="tw-text-lg form-label">Name</label>
  <input name='name' value='${books.name}' type="text" class="form-control" ">
</div>
<div class="mb-3">
  <label for="" class="tw-text-lg form-label">Price</label>
  <input type="text" name='price' value='${
    books.list_price
  }' class="form-control" ">
</div>
<div class="mb-3">
  <label for="" class="tw-text-lg form-label">Description</label>
  <textarea  class="form-control" id="description" rows="3">${
    books.description
  }</textarea>
</div>
<div class="mb-3">
  <label for="" class="tw-text-lg form-label">Short Description</label>
  <textarea  class="form-control" id="short_description" rows="3">${
    books.short_description
  }</textarea>
</div>
<button class='addProduct btn btn-danger'>ADD</button>
  </div>

</form>

  
  ${Footer()}

    `;
};

export default UpdateProduct;
