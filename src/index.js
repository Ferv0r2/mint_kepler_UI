// import { hello, add } from "./util";
import "./style.css";
import "./header.css";
import List from "./List";
import logo from "./images/logo.png";
// import logo2 from "./images/logo2.png";

// const text = hello("<h1>안녕안녕!</h1>");
// const num = add(1, 2);
const img = `<img src="${logo}" alt="logo" />`;
// const img2 = `<img src="${logo2}" alt="logo2" />`;

const users = [
  {
    id: 1,
    name: "Keplin",
  },
  {
    id: 2,
    name: "Sera",
  },
  {
    id: 3,
    name: "Orbit",
  },
  {
    id: 4,
    name: "Goldot",
  },
];

document.getElementById("root").appendChild(List({ userList: users }));
