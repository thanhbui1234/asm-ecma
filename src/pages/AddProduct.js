import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { v4 as uiidv4 } from "uuid";
import { useEffect, router } from "../utilities";

const AddProduct = () => {
  useEffect(() => {
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
        price: price.value,
        description: description.value,
        short_description: short_description.value,
      };

      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valueForm),
      });
    });
  });

  return `
  ${Nav()}
<form id='my-form' class='tw-mt-10' action="">
  <div class='container'>
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
<div class="mb-3">
  <label for="" class="tw-text-lg form-label">Short Description</label>
  <textarea  class="form-control" id="short_description" rows="3"></textarea>
</div>
<button class='addProduct btn btn-danger'>ADD</button>
  </div>

</form>

  
  ${Footer()}

    `;
};

export default AddProduct;
