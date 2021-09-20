let table = document.getElementById("table");

calcular();

function calcular() {
  table.addEventListener("click", () => {
    let value = parseInt(table.options[table.selectedIndex].text);

    if (value.value !== "selected") {
      for (let i = 1; i <= 10; i++) {
        console.log(`${value} * ${i} = ${value * i}`);
        let uList = document.getElementById("list");
        let list = document.createElement("li");
        list.classList.add("result__list__item");
        list.innerText = `${value} * ${i} = ${value * i}`;

        uList.appendChild(list);

        let text = document.getElementById("text");
        text.innerText = "Para mirar otra tabla recargar la pagina.";
      }
    }
  });
}
