let p = document.querySelector("p");
p.remove();

let div = document.querySelector(".our-element");
let start = document.createElement("div");
start.className = "start";
start.title = "Start Element";
start.setAttribute("data-value", "start");
start.textContent = "Start";
let end = document.createElement("div");
end.className = "end";
end.title = "End Element";
end.setAttribute("data-value", "end");
end.textContent = "End";
div.before(start);
div.after(end);
