import Navigo from "navigo";
// NAVIGO TA PHAI KHAI BAO NHUNG THAM SO
// THAM SO THU NHAT LA 1 ROOT STRING
// THAM SO 2 LA LINK SELECTER
const router = new Navigo("/", { linksSelector: "a", hash: true });
const render = (content, target) => {
  target.innerHTML = content();
};
export { render, router };
