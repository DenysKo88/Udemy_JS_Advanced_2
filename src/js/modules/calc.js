const calc = (size, material, options, promocode, result, state) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

  let sum = 0;
  const calcFunc = () => {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );

    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent =
        "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
        state.result = resultBlock.textContent
    } else {
      resultBlock.textContent = sum;
        state.result = resultBlock.textContent
    }
  };

  sizeBlock.addEventListener("change", () => {
    calcFunc();
    state.size = sizeBlock.value;
    console.log(state);
  });

  materialBlock.addEventListener("change", () => {
    calcFunc();
    state.material = materialBlock.value;
    console.log(state);
  });
  optionsBlock.addEventListener("change", () => {
    calcFunc();
    state.options = optionsBlock.value;
    console.log(state);
  });
  promocodeBlock.addEventListener("change", () => {
    calcFunc();
    state.promocode = promocodeBlock.value;
    console.log(state);
  });
};

export default calc;
