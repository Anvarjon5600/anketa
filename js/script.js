const slider = $(".task-one-content__input");
const slider2 = $("#second-value");

$(document).ready(function () {
  status();
  calculation();
});

function status() {
  if (slider.val() >= 10) {
    $(".status-image__no--active").css("display", "block");
    $(".status-image__no").css("display", "none");
  } else {
    $(".status-image__no--active").css("display", "none");
    $(".status-image__no").css("display", "block");
  }

  if (slider.val() >= 50) {
    $(".status-image__copy--active").css("display", "block");
    $(".status-image__copy").css("display", "none");
  } else {
    $(".status-image__copy--active").css("display", "none");
    $(".status-image__copy").css("display", "block");
  }

  if (slider.val() >= 90) {
    $(".status-image__coder--active").css("display", "block");
    $(".status-image__coder").css("display", "none");
  } else {
    $(".status-image__coder--active").css("display", "none");
    $(".status-image__coder").css("display", "block");
  }

  if (slider.val() >= 130) {
    $(".status-image__senior--active").css("display", "block");
    $(".status-image__senior").css("display", "none");
  } else {
    $(".status-image__senior--active").css("display", "none");
    $(".status-image__senior").css("display", "block");
  }
}

function changeValue() {
  let inputValue = $(".block-left__value").val();
  if (inputValue) slider2.val(inputValue);

  calculation();
}

function calculation() {
  if (slider2.val()) {
    $(".block-left__value").val(slider2.val());
    let allTypeRadioInputs = $("input[name = type]");
    let allTypeRadioInputs2 = $("input[name = tarif]");
    let type = 0;
    let tariff = 0;
    let price = 0;

    allTypeRadioInputs.each(function () {
      if ($(this).is(":checked")) type = $(this).val();
    });

    allTypeRadioInputs2.each(function () {
      if ($(this).is(":checked")) tariff = $(this).val();
    });

    price = ((slider2.val() * tariff) / type).toFixed(2);
    $(".block-price__value").html(price + " руб.");
  }
}

const inputsContainer = document.getElementById("inputs-container");
let currentInput = createInputWithDefault(
  " Я ожидаю еще новые знания и новые технологии. "
);
let remainder = "";

function createInputWithDefault(defaultValue) {
  if (defaultValue.length >= 65) {
    remainder = defaultValue.slice(65);
    defaultValue = defaultValue.slice(0, 65);
  }
  const input = document.createElement("input");
  input.setAttribute("class", "customTextarea");
  input.value = defaultValue;
  inputsContainer.appendChild(input);
  input.addEventListener("input", handleInput);
  return input;
}

function createInput() {
  const input = document.createElement("input");
  input.setAttribute("class", "customTextarea");
  inputsContainer.appendChild(input);
  if (remainder !== "") {
    input.value = remainder;
    remainder = "";
  }
  input.addEventListener("input", handleInput);
  return input;
}

function handleInput() {
  if (this.value.length >= 65) {
    currentInput = createInput();
    currentInput.focus();
  }

  if (this.value.length <= 0) {
    const previousInput = this.previousElementSibling;
    if (previousInput) {
      inputsContainer.removeChild(this);
      previousInput.focus();
    }
  }
}
