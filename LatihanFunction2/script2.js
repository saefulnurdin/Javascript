// Fungsi untuk meminta input jumlah angka yang diinginkan
function inputJumlah() {
  let jumlahAngka = parseInt(
    prompt("Berapa banyak angka yang ingin dimasukkan?")
  );
  return jumlahAngka;
}

// Fungsi untuk meminta input angka dari pengguna
function masukanAngka(jumlahAngka) {
  let nomor = [];
  for (let i = 0; i < jumlahAngka; i++) {
    let inputAngka = prompt("Masukkan angka ke-" + (i + 1) + ":");
    nomor.push(Number(inputAngka));
  }
  return nomor;
}

// Fungsi untuk menghitung jumlah dan rata-rata dari array angka
function rata_rata(nomor) {
  let jumlah = 0;
  for (let i = 0; i < nomor.length; i++) {
    jumlah += nomor[i];
  }
  let rataRata = jumlah / nomor.length;
  return { jumlah, rataRata };
}

// Dapatkan jumlah inputan yang diinginkan
let jumlahAngka = inputJumlah();

// Panggil fungsi getInput untuk mendapatkan input angka
let inputNomor = masukanAngka(jumlahAngka);

// Tampilkan input angka
console.log("Angka yang dimasukkan:");
for (let i = 0; i < inputNomor.length; i++) {
  console.log(i + 1 + " = " + inputNomor[i]);
}

// Hitung jumlah dan rata-rata angka
let { jumlah, rataRata } = rata_rata(inputNomor);
console.log("Jumlah dari angka-angka yang dimasukkan adalah: " + jumlah);
console.log("Rata-rata dari angka-angka yang dimasukkan adalah: " + rataRata);
