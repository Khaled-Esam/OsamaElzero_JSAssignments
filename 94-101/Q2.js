let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let result = document.querySelector(".classes-list div");

add.onblur = function () {
  if (add.value !== "") {
    add.value = add.value.toLowerCase();
    let addition = add.value.trim().split(" ");
    for (let i = 0; i < addition.length; i++) {
      if (!add.classList.contains(addition[i])) {
        add.classList.add(addition[i]);
      }
    }

    let newArr = [];
    for (let i = 0; i < add.classList.length; i++) {
      if (add.classList.item(i) !== "classes-to-add") {
        newArr.push(add.classList.item(i));
      }
    }
    newArr.sort();
    result.textContent = newArr.join(" ") + " ";
  }
  add.value = "";
};

remove.onblur = function () {
  if (remove.value !== "") {
    remove.value = remove.value.toLowerCase();
    let removing = remove.value.trim().split(" ");
    for (let i = 0; i < removing.length; i++) {
      if (add.classList.contains(removing[i])) {
        add.classList.remove(removing[i]);
      }
    }
    let newArr = [];
    for (let j = 0; j < add.classList.length; j++) {
      if (add.classList.item(j) !== "classes-to-add") {
        newArr.push(add.classList.item(j));
      }
    }
    newArr.sort();

    result.textContent = newArr.join(" ") + " ";
  }
  remove.value = "";
};
