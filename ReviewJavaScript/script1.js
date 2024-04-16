console.log("--LATIHAN 1--");
for (let angka = 1; angka <= 100; angka++) {
  let bil_prima = true;

  if (angka > 1) {
    // pengulangan untuk memeriksa apakah angka bisa dibagi oleh bilangan lain selain 1 dan angka itu sendiri
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0) {
        bil_prima = false;
        break;
      }
    }
  } else {
    bil_prima = false;
  }

  // menampilkan nomor dan pesan apakah bilangan prima atau bukan
  if (bil_prima) {
    console.log(angka + " adalah bilangan prima");
  } else {
    console.log(angka);
  }
}
