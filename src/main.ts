import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// app.directive("debug", (el: HTMLDivElement, binding: any) => {
// 	console.log("dim");
// 	el.style.border = `4px solid ${binding.value || "red"}`;

// 	el.addEventListener("click", () => alert("debug mode"));
// });
app.directive("dimensiondisplay", (el: HTMLDivElement) => {
	console.log("debug");
	el.dataset.dims = `{width: ${el.clientWidth}, height: ${el.clientHeight}}`;
	el.classList.add("box");
});

app.mount("#app");
