const n = prompt("Masukan nilai N");
console.log("Jumlah nilai deret:");

//inisialisasi nilai awal jumlah
let jumlah = 0;

//inisialisasi nilai awal perulangan
let i = 1;

//eksekusi perulangan
while (i <= n) {
  jumlah += i;
  i++;
}
//cetak hasil di console
console.log("Jumlah deret 1 hingga " + n + " adalah " + jumlah);
