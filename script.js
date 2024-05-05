function send() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  if (height === "" || weight === "") {
    alert("Add mesurements!");
  } else if (height <= 0 || weight <= 0) {
    alert("Add valid mesurements!");
  } else {
    console.log(parseFloat(height));
    console.log(parseFloat(weight));
    let bmi = ((weight / (height * height)) * 10000).toFixed(2);
    console.log(parseFloat(bmi));

    let insert = document.getElementById("bmi");
    insert.innerHTML = bmi;
    let line;
    if (bmi <= 18.5) {
      line = document.getElementById("underweight");
      line.style.backgroundColor = "blue";
    } else if (18.5 < bmi && bmi < 24.9) {
      line = document.getElementById("normal_weight");
      line.style.backgroundColor = "green";
    } else if (24.9 < bmi && bmi < 29.9) {
      line = document.getElementById("overweight");
      line.style.backgroundColor = "orange";
    } else {
      line = document.getElementById("obesity");
      line.style.backgroundColor = "red";
    }
  }
}


