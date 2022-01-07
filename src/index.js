import { hello, add } from "./util";
import "./style.css";
import "./header.css";
import logo from "./images/logo.png";

const text = hello("<h1>안녕안녕!</h1>");
const num = add(1, 2);
const img = `<img src="${logo}" alt="logo" />`;

document.getElementById("root").innerHTML = img + text + num;
