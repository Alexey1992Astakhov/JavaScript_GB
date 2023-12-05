// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

let idFrom = document.querySelector("#from");
let inputSpan = document.querySelector("span");

idFrom.addEventListener("input", () => {
  inputSpan.innerHTML = idFrom.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btn = document.querySelector(".messageBtn");
let btnElem = document.querySelector(".message");

btn.addEventListener("click", () => {
  btnElem.classList.add("animate_animated", "animate_fadeInLeftBig");
  btnElem.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const formInput = form.querySelectorAll(".form-control");
  let formIsValid = true;

  formInput.forEach(function (input) {
    if (input.value.trim() === "") {
      input.classList.add("error");
      formIsValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  if (!formIsValid) {
    e.preventDefault();
  }
});

const formInput = form.querySelectorAll(".form-control");

formInput.forEach((input) => {
  input.addEventListener("input", function () {
    if (input.value.trim() === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
});
