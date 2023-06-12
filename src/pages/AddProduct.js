import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { v4 as uiidv4 } from "uuid";
import { useEffect, router } from "../utilities";
import Swal from "sweetalert2";

const AddProduct = () => {
  useEffect(() => {
    const my_form = document.querySelector("#my-form");
    const name = document.querySelector('input[name="name"]');
    const price = document.querySelector('input[name="price"]');
    const description = document.querySelector("#description");
    my_form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valueForm = {
        id: uiidv4(),
        name: name.value,
        list_price: price.value,
        description: description.value,
        original_price: price.value,
      };

      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valueForm),
      }).then(() => {
        alert("Thêm sản phẩm thành công");
        console.log(router.navigate("./admin/"));
      });
    });
  });

  return `
  ${Nav()}
  <div class='container'>

<form id='my-form' class='border tw-p-10 shadow roundedyi tw-mt-10' action="">
  <div class="mb-3">
  <label for="" class="tw-text-lg form-label">Name</label>
  <input name='name' type="text" class="form-control" ">
</div>
<div class="mb-3">
  <label for="" class="tw-text-lg form-label">Price</label>
  <input type="text" name='price' class="form-control" ">
</div>
<div class="mb-3">
  <label for="" class="tw-text-lg form-label">Description</label>
  <textarea  class="form-control" id="description" rows="3"></textarea>
</div>

<button class='addProduct btn btn-danger'>ADD</button>

</form>
  </div>

  
  ${Footer()}

    `;
};

export default AddProduct;
