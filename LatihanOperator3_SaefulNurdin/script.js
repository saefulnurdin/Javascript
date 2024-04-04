//Kalkulator BMI
let tinggi = prompt("Masukkan Tinggi Badan Anda : ");
console.log("Tinggi Badan Anda : " + tinggi + " Cm");
let berat = prompt("Masukkan Berat Badan Anda : ");
console.log("Berat Badan Anda :  " + berat + " Kg");
const index = berat / tinggi ** 2;
console.log("Index BMI Anda : " + index);
