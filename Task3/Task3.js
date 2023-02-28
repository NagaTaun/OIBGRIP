function convertTemperature() {
    const temp = document.getElementById("temp-input").value;
    const unit = document.getElementById("unit-select").value;
    
    let result;
    if (unit === "celsius") {
      result = (temp * 1.8) + 32;
    } else {
      result = (temp - 32) / 1.8;
    }
    document.getElementById("result").innerHTML = result.toFixed(2) + "° " + (unit === "celsius" ? "Fahrenheit" : "Celsius");
  }
  