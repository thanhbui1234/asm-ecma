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
              }).then((data) => {
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
      <a href='/#/admin/addProduct' class=' btn btn-primary tw-relative tw-left-[1470px] tw-top-[95px] btn m-5 btn-primary'>Thêm mới</a>
  <table class="table shadow my-5  bg-body rounded table-condensed table-bordered  container">
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>Handle</th>
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
<img class='tw-w-10' src="${book.images ? book.images[0] : ""}" alt="">
      </td>
      <td>${book.list_price}</td>
      <td>${book?.quantity_sold ? book?.quantity_sold?.value : "0"}</td>
      <td>
        <button data-id='${
          book.id
        }'class="btnRemove  btn btn-danger" >Xóa</button>
        <button class="btn btn-success" >Update</button>
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
