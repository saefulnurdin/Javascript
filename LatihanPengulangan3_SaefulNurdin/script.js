/// Menginputkan jumlah ayam kedalam prompt
let jumlahAnak = prompt("Masukkan jumlah anak ayam:");
console.log("Anak ayam turun " + jumlahAnak);

// Melakukan Pengulangan
while (jumlahAnak > 0) {
  if (jumlahAnak === 1) {
    console.log("Anak ayam turun 1, mati satu tinggal induknya.");
  } else {
    console.log(
      "Anak ayam turun " +
        jumlahAnak +
        ", mati satu tinggal " +
        (jumlahAnak - 1) +
        "."
    );
  }
  jumlahAnak--;
}
