function converterTemperatura() {
    let celsius = document.getElementById("celsius").value;
    let resultado = document.getElementById("resultado");

    if (celsius === "") {
        resultado.textContent = "Digite uma temperatura.";
    } else {
        let fahrenheit = (celsius * 9 / 5) + 32;

        resultado.textContent =
            celsius + "°C = " + fahrenheit.toFixed(1) + "°F";
    }
}