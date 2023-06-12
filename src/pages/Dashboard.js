import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useEffect, useState, router } from "../utilities";
import Swal from "sweetalert2";
const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
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

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: " mx-3 btn btn-success",
        cancelButton: "mx-3 btn btn-danger",
      },
      buttonsStyling: false,
    });

    const btnRemoves = document.querySelectorAll(".btnRemove");
    btnRemoves.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        console.log(btn);
        const btnData = btn.dataset.id;
        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText:
              "<button class='btn-btn-danger' >  Yes, delete it! </button>",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:3000/books/${btnData}`, {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json; charset=UTF-8", // Indicates the content
                },
              })
                .then(() => {
                  Toast.fire({
                    icon: "success",
                    title: "Signed in successfully",
                  });
                })
                .then((data) => {
                  router.navigate("/admin");
                });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "Your imaginary file is safe :)",
                "error"
              );
            }
          });
      })
    );
  });

  return `
    ${Nav()}  
      <a href='/#/admin/addProduct' class=' tw-relative tw-left-[1470px] tw-top-[95px] btn m-5 '>Thêm mới</a>
  <table class="table shadow my-5  bg-body rounded table-condensed table-bordered  container">
  <thead>
    <tr>
      <th>#</th>
      <th>Images</th>
      <th>Name</th>
      <th>Price</th>
      <th>Buy</th>
      <th class='w-25'>Action</th>
    </tr>
  </thead>
  <tbody>
  ${books
    .map((book, index) => {
      return `
            <tr>
      <td class=''>${index + 1}</td>
      <td> 
<img class='tw-w-10' src="${
        book.images ? book.images[0] : "/public/imgs/imgNotfound.jpg"
      }" alt="">
      </td>
      <td>${book.name}</td>
      <td>${book.list_price}</td>
      <td>${book?.quantity_sold ? book?.quantity_sold?.value : "0"}</td>
      <td>
        <button data-id='${
          book.id
        }'class="btnRemove  btn btn-danger" >Xóa</button>
        <a href='/#/admin/UpdateProd/${
          book.id
        }' class='btn btn-success'>Update</a>
      </td>
    </tr>
      
      `;
    })
    .join("")}
    
  </tbody>
</table>
    

    ${Footer()}

  `;
};
export default Dashboard;
