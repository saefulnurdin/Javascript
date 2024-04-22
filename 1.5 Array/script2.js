// function penjumlahan(a, b) {
//   const c = a + b;
//   return c;
// }
// const total1 = penjumlahan(9, 5) + penjumlahan(8, 7);
// console.log(total1);

// function penguranagan(a, b) {
//   return a - b;
// }
// //fungsi deklarasi
// function perkalian(a, b) {
//   return a * b;
// }

// //fungsi ekspresi
// const pembagian = function (a, b) {
//   return a / b;
// };
// do {
//   console.log("Aplikasi kalkulator sederhana");
//   console.log("=============================");
//   console.log("silahkan pilih menu di bawah");
//   console.log("1. penjumlahan");
//   console.log("2. penguranagan");
//   console.log("3. perkalian");
//   console.log("4. pembagian");
//   console.log("============================");
//   const menu = prompt("Pilih menu");
//   let lanjut;

//   switch (menu) {
//     case "1":
//       b = parseInt(prompt("masukan nilai b:"));
//       a = parseInt(prompt("masukan nilai a:"));
//       console.log(penjumlahan(a, b));
//       break;
//     case "2":
//       a = prompt("masukan nilai a:");
//       b = prompt("masukan nilai b:");
//       console.log(parseInt(penguranagan(a, b)));
//       break;
//     case "3":
//       a = prompt("masukan nilai a:");
//       b = prompt("masukan nilai b:");
//       console.log(parseInt(perkalian(a, b)));
//       break;
//     case "4":
//       a = prompt("masukan nilai a:");
//       b = prompt("masukan nilai b:");
//       console.log(parseFloat(pembagian(a, b)));
//       break;
//     default:
//       alert("menuh yang anda pilih tidak tersedia!");
//       break;
//   }
//   lanjut = prompt("Mau pilih yang lain?(Y/T)");
// } while (lanjut === "y" || lnajut === "y");
// console.log("--PROGRAM SELESAI--");
// //arrow function
// // const modulus = (a,b)=>{

// // }

// const arr = [3, 5, 7, 9, 11];

// //length = menampilkan jumlah isi dari array
// console.log(arr.length);

// //join = menggabungkan isi array menjadi sebuah string
// const world = ["K", "A", "T", "A", "K"];
// const world2 = ["Selamat", "Datang", "di", "BLK"];
// console.log(world.join(""));
// console.log(world2.join(" "));

// //push = menambahkan elemen di bagian akhir
// arr.push(13, 15, 17);
// world.push("B", "E", "R", "A", "C", "U", "N");
// world2.push("Karawang");

// console.log(arr);
// console.log(world.join("") + "\n" + world2.join(" "));

// //pop = menghapus elemen terakhir array
// arr.pop()
// console.log(arr)

// //unshift = menambahkan elemen diawal array
// //[1, 3, 5, 7, 9, 11, 13, 15]
// arr.unshift(1)
// console.log(arr);

// //shift = menghapus elemen pertama di array
// world.shift()
// console.log(world)

//slice(indexAwal, idAkhir)
const siswa = ["Maulana", "Naufal", "Faisal", "Topik", "Rian"];

// //slice = akan menghasilkan array baru
// const siswa2 = siswa(2, 4);
// console.log(siswa2);

//splice = mengganti

siswa.splice = (2, 0, "yudha", "Jabar", "dani");
console.log(siswa);

const nilai = [70, 75, 82, 65, 58];
nilai.forEach(function (e, i) {
  console.log("index ke-" + i + "=" + e);
});
//sort=menurutkan array
console.log(nilai.sort());
//map
const dikalidua = nilai.map(function (e) {
  return e * 2;
});
console.log(dikalidua);
//filter&find
const bilnganbulat = [2, 3, 1, 7, 6, 9, 11, 8];
const bilbul = bilnganbulat.filter(function (e) {
  return e > 5;
});
const bilbul2 = bilnganbulat.find(function (e) {
  return e > 5;
});
console.log(bilbul);
console.log(bilbul2);
