function penjumlahan(a, b) {
  const c = a + b;
  return c;
}
const total1 = penjumlahan(9, 5) + penjumlahan(8, 7);
console.log(total1);

function penguranagan(a, b) {
  return a - b;
}
//fungsi deklarasi
function perkalian(a, b) {
  return a * b;
}

//fungsi ekspresi
const pembagian = function (a, b) {
  return a / b;
};
do {
  console.log("Aplikasi kalkulator sederhana");
  console.log("=============================");
  console.log("silahkan pilih menu di bawah");
  console.log("1. penjumlahan");
  console.log("2. penguranagan");
  console.log("3. perkalian");
  console.log("4. pembagian");
  console.log("============================");
  const menu = prompt("Pilih menu");
  let lanjut;

  switch (menu) {
    case "1":
      b = parseInt(prompt("masukan nilai b:"));
      a = parseInt(prompt("masukan nilai a:"));
      console.log(penjumlahan(a, b));
      break;
    case "2":
      a = prompt("masukan nilai a:");
      b = prompt("masukan nilai b:");
      console.log(parseInt(penguranagan(a, b)));
      break;
    case "3":
      a = prompt("masukan nilai a:");
      b = prompt("masukan nilai b:");
      console.log(parseInt(perkalian(a, b)));
      break;
    case "4":
      a = prompt("masukan nilai a:");
      b = prompt("masukan nilai b:");
      console.log(parseFloat(pembagian(a, b)));
      break;
    default:
      alert("menuh yang anda pilih tidak tersedia!");
      break;
  }
  lanjut = prompt("Mau pilih yang lain?(Y/T)");
} while (lanjut === "y" || lnajut === "y");
console.log("--PROGRAM SELESAI--");
//arrow function
// const modulus = (a,b)=>{

// }
