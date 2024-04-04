const nama = prompt("Masukan Nama:");
const gol = prompt("Masukan golongan keraj:");
const jam_kerja = prompt("Masukan jam kerja(per minggu):");

let gaji_per_jam;
switch (gol) {
  case "A":
    gaji_per_jam = 6000;
    break;
  case "B":
    gaji_per_jam = 7000;
    break;
  case "C":
    gaji_per_jam = 8000;
    break;
  case "D":
    gaji_per_jam = 10000;
    break;
  default:
    console.log("golongan tidak tersedia");
    break;
}
let total_gaji_per_minggu = jam_kerja * gaji_per_jam;
let uang_lembur;
if (jam_kerja > 48) {
  uang_lembur = (jam_kerja - 48) * 5000;
}

let total_gaji = total_gaji_per_minggu + uang_lembur;
console.log(
  "Nama : " + nama + " Golongan : " + gol + " Jam Kerja : " + jam_kerja
);
console.log(nama + "Menerima gaji sebesar " + total_gaji + "per minggu");
