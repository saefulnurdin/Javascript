// Menghitung luas persegi
function hitungLuasPersegi(s, s) {
  return s * s;
}

// Menghitung luas persegi panjang
function hitungLuasPersegiPanjang(p, l) {
  return p * l;
}

// Menghitung luas lingkaran
function hitungLuasLingkaran() {
  let jariJari = parseInt(prompt("Masukkan jari-jari lingkaran: "));
  let luas = Math.PI * jariJari * jariJari;
  console.log("Luas lingkaran dengan jari-jari" + jariJari + "adalah" + luas);
}

// Menghitung luas segitiga
function hitungLuasSegitiga() {
  let alas = parseInt(prompt("Masukkan panjang alas segitiga: "));
  let tinggi = parseInt(prompt("Masukkan panjang tinggi segitiga: "));
  let luas = 0.5 * alas * tinggi;
  console.log(
    "Luas segitiga dengan alas" + alas + "dan tinggi" + tinggi + "adalah" + luas
  );
}

// Menu pilihan
function tampilkanMenu() {
  let pilihan;
  let lagi = "Y";
  while (lagi.toUpperCase() === "Y") {
    console.log("Pilih program yang ingin dijalankan:");
    console.log("1. Luas Persegi");
    console.log("2. Luas Persegi Panjang");
    console.log("3. Luas Lingkaran");
    console.log("4. Luas Segitiga");
    pilihan = parseInt(prompt("Masukkan nomor pilihan (1-4): "));

    switch (pilihan) {
      case 1:
        s = parseInt(prompt("Masukkan panjang sisi persegi: "));
        console.log(
          "Luas persegi dengan sisi " + s + " adalah " + hitungLuasPersegi(s, s)
        );
        break;
      case 2:
        p = parseInt(prompt("Masukkan panjang persegi panjang: "));
        l = parseInt(prompt("Masukkan lebar persegi panjang: "));
        console.log(
          "Luas persegi panjang dengan panjang " +
            p +
            " dan lebar " +
            l +
            " adalah " +
            hitungLuasPersegiPanjang(p, l)
        );
        break;
      case 3:
        hitungLuasLingkaran();
        break;
      case 4:
        hitungLuasSegitiga();
        break;
      default:
        console.log("Pilihan tidak valid. Silakan coba lagi.");
    }

    lagi = prompt("Mau pilih yang lain? (Y/T)");
  }

  console.log("Program selesai.");
}

// Memanggil fungsi tampilkanMenu()
tampilkanMenu();
