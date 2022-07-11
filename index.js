let counter = 0;
let data = {
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
  resetBtn: document.querySelector(".resetBtn"),
};

refs.container.addEventListener("click", onContainerClick);
refs.resetBtn.addEventListener("click", onResetBtnClick);

function onContainerClick(event) {
  crossOrZerroEntryAndUpdate(event);
  checkWinner();
}

function onResetBtnClick() {
  resetHTML();
  resetData();
}

function crossOrZerroEntryAndUpdate(event) {
  if (
    counter % 2 === 0 &&
    event.target.nodeName === "DIV" &&
    event.target.firstChild.nodeName !== "svg"
  ) {
    console.log(counter);
    updateData(event, "cross");
    event.target.innerHTML =
      '<svg width="80" height="80"><use href="./symbol-defs.svg#icon-cross"></use></svg>';
    incrementCounter();
  }
  if (
    counter % 2 === 1 &&
    event.target.nodeName === "DIV" &&
    event.target.firstChild.nodeName !== "svg"
  ) {
    console.log(counter);
    updateData(event, "zero");
    event.target.innerHTML =
      '<svg width="80" height="80"><use href="./symbol-defs.svg#icon-circle"></use></svg>';
    incrementCounter();
  }
}

function incrementCounter() {
  counter += 1;
}

function updateData(event, entry) {
  data[event.target.id] = entry;
}

function resetData() {
  data = {
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
}

function resetHTML() {
  refs.container.innerHTML =
    '<div id="a1" class="item"><span class="none">a1</span></div><div id="b1" class="item"><span class="none">b1</span></div><div id="c1" class="item"><span class="none">c1</span></div><div id="a2" class="item"><span class="none">a2</span></div><div id="b2" class="item"><span class="none">b2</span></div><div id="c2" class="item"><span class="none">c2</span></div><div id="a3" class="item"><span class="none">a3</span></div><div id="b3" class="item"><span class="none">b3</span></div><div id="c3" class="item"><span class="none">c3</span></div>';
}

function checkWinner() {
  const { a1, b1, c1, a2, b2, c2, a3, b3, c3 } = data;
  if (
    (a1 === "cross" && b1 === "cross" && c1 === "cross") ||
    (a1 === "zero" && b1 === "zero" && c1 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed top"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
  if (
    (a2 === "cross" && b2 === "cross" && c2 === "cross") ||
    (a2 === "zero" && b2 === "zero" && c2 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed middle"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
  if (
    (a3 === "cross" && b3 === "cross" && c3 === "cross") ||
    (a3 === "zero" && b3 === "zero" && c3 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed bottom"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
  if (
    (a1 === "cross" && a2 === "cross" && a3 === "cross") ||
    (a1 === "zero" && a2 === "zero" && a3 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed left"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
  if (
    (b1 === "cross" && b2 === "cross" && b3 === "cross") ||
    (b1 === "zero" && b2 === "zero" && b3 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed center"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
  if (
    (c1 === "cross" && c2 === "cross" && c3 === "cross") ||
    (c1 === "zero" && c2 === "zero" && c3 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed right"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
  if (
    (a1 === "cross" && b2 === "cross" && c3 === "cross") ||
    (a1 === "zero" && b2 === "zero" && c3 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed left-to-right"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
  if (
    (c1 === "cross" && b2 === "cross" && a3 === "cross") ||
    (c1 === "zero" && b2 === "zero" && a3 === "zero")
  ) {
    refs.container.insertAdjacentHTML(
      "beforeend",
      '<div class="dashed right-to-left"></div>'
    );
    refs.container.removeEventListener("click", onContainerClick);
  }
}
