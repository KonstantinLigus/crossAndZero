let counter = 0;
const data = {
  a1: null,
  b1: null,
  c1: null,
  a2: null,
  b2: null,
  c2: null,
  a3: null,
  b3: null,
  c3: null,
};
const refs = {
  container: document.querySelector(".container"),
};

refs.container.addEventListener("click", onContainerClick);

function onContainerClick(event) {
  crossEntryAndUpdate(event);
  zeroEntryAndUpdate(event);
  checkWinner();
  counter += 1;
}
function crossEntryAndUpdate(event) {
  if (counter % 2 === 0) {
    if (event.target.classList.contains("square")) {
      updateData(event, "cross");
      event.target.innerHTML =
        '<svg width="80" height="80"><use href="./symbol-defs.svg#icon-cross"></use></svg>';
    }
  }
}

function zeroEntryAndUpdate(event) {
  if (counter % 2 === 1) {
    if (event.target.classList.contains("square")) {
      updateData(event, "zero");
      event.target.innerHTML =
        '<svg width="80" height="80"><use href="./symbol-defs.svg#icon-circle"></use></svg>';
    }
  }
}

function updateData(event, entry) {
  data[event.target.id] = entry;
  console.log(data);
}

function checkWinner() {
  const { a1, b1, c1, a2, b2, c2, a3, b3, c3 } = data;
  if (a1 === "cross" && b1 === "cross" && c1 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed top"></div>'
    );
  }
  if (a2 === "cross" && b2 === "cross" && c2 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed middle"></div>'
    );
  }
  if (a3 === "cross" && b3 === "cross" && c3 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed bottom"></div>'
    );
  }
  if (a1 === "cross" && a2 === "cross" && a3 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed left"></div>'
    );
  }
  if (b1 === "cross" && b2 === "cross" && b3 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed center"></div>'
    );
  }
  if (c1 === "cross" && c2 === "cross" && c3 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed right"></div>'
    );
  }
  if (a1 === "cross" && b2 === "cross" && c3 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed left-to-right"></div>'
    );
  }
  if (c1 === "cross" && b2 === "cross" && a3 === "cross") {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed right-to-left"></div>'
    );
  }
}
