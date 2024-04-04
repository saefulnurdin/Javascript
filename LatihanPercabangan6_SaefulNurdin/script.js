console.log("--KALKULATOR SEDERHANA--");
const menu = prompt(
  "Silahkan pilih menu \n 1. PENJUMLAHAN \n 2. PENGURANGAN \n 3. PERKALIAN \n 4. PEMBAGIAN \n 5. KELUAR PROGRAM"
);
const pertama = parseInt(prompt("Silahkan masukan angka pertama"));
const kedua = parseInt(prompt("Silahkan masukan angka ke dua"));
console.log("Angka pertama :" + pertama);
console.log("Angka kedua :" + kedua);

let hitung;
switch (menu) {
  case "1":
    hitung = pertama + kedua;
    console.log("Hasil dari " + pertama + " + " + kedua + " = " + hitung);
    break;
  case "2":
    hitung = pertama - kedua;
    console.log("Hasil dari " + pertama + " - " + kedua + " = " + hitung);
    break;
  case "3":
    hitung = pertama * kedua;
    console.log("Hasil dari " + pertama + " * " + kedua + " = " + hitung);
    break;
  case "4":
    hitung = pertama / kedua;
    console.log("Hasil dari " + kedua + " : " + kedua + " = " + hitung);
    break;
  default:
    console.log("Terimakasih");
    break;
}
