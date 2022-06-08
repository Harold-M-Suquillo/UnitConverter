function convert(){
    // reset all previous data
    document.getElementById("error").innerHTML = "Enter a number";
    document.getElementById("length").innerHTML = "";
    document.getElementById("volume").innerHTML = "";
    document.getElementById("mass").innerHTML = "";

    let num = document.getElementById("input-num").value;
    if (num === ""){
        return;
    }
    num = parseFloat(num);
    if (num <= 0){
        document.getElementById("error").innerHTML = "Number has to be greater than 0";
    }
    else{
        document.getElementById("error").innerHTML = "";
        document.getElementById("length").innerHTML = `${num} meter(s) = ${(num * 3.28084).toFixed(3)} feet | ${num} feet = ${(num * 0.3048).toFixed(3)} meter(s)`;
        document.getElementById("volume").innerHTML = `${num} liter(s) = ${(num * 0.264172).toFixed(3)} gallon(s) | ${num} gallon(s) = ${(num * 3.7854).toFixed(3)} liter(s)`;
        document.getElementById("mass").innerHTML = `${num} kilo(s) = ${(num * 2.20462).toFixed(3)} pound(s) | ${num} pound(s) = ${(num * .453592).toFixed(3)} kilo(s)`;
    }

}