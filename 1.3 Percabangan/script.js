//is statement
// const total_belanja = 120000;
// if (total_belanja > 100000) {
//   console.log("Selamat Anda Mendapatkan Hadiah!");
// }
// console.log("Terima ksih Sudah Berbelanja");

//if else statement
// const total_belanja = prompt("Masukan total belanja : ");
// if (total_belanja > 100000) {
//   console.log("Selamat Anda mendpatkan Piring Cantik!");
// } else {
//   console.log("Mohon maaf Anda belum dapat hadiah");
// }
// console.log("Terima ksih Sudah Berbelanja");

//login
// const password = "legenofaang";
// if (password === "legendofaang") {
//   console.log("Silahkan masuk, aang!");
// } else {
//   console.log("Paswword salah, silahkan coba lagi!");
// }

//if...else if..else statement
// const nilai = prompt("Masukan Nilai Anda : ");
// if (nilai >= 80) {
//   console.log("Nilai Anda berpredikat BAIK");
// } else if (nilai >= 65) {
//   console.log("Nilai Anda berpredikat CUKUP");
// } else if (nilai >= 50) {
//   console.log("Nilai Anda berpredikat SANGAT BURUK");
// }

//switch statement
const warna = "merah";
let pesan = "";
switch (warna) {
  case "merah":
    pesan = "Anda memilih warna merah";
    break;
  case "biru":
    peasn = "Anda memilih warna biru";
    break;
  case "orange":
    pesan = "Anda memilih warna orange";
    break;

  default:
    pesan = "warna yang anda pilih tidak ada!";
    break;
}
console.log(pesan);
