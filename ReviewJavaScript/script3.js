console.log("--LATIHAN 3--");
let angka = prompt("Masukan Perkalian");
console.log("Berikut tabel perkalian " + angka);

for (let i = 1; i <= 10; i++) {
  const jumlah = i * angka;
  console.log(i + " x " + angka + " = " + jumlah);
}
