import photo from "./images/logo.png";
import styles from "./User.css";

export default function User({ name }) {
  const li = document.createElement("li");
  li.classList.add("user");
  li.addEventListener("click", () => {
    alert(name);
  });
  li.innerHTML = `
    <img src="${photo}" alt="${name}" />
    ${name}`;
  return li;
}
