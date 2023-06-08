import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
const Dashboard = () => {
  return `
    ${Nav()}  
  <table class="table shadow my-5 bg-body rounded table-condensed table-bordered  container">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <th scope="row">3</th>
      <td c>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    ${Footer()}

  `;
};
export default Dashboard;
