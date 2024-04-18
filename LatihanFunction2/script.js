// Menghitung volume kubus
function hitungVolumeKubus(s, s, s) {
  return s * s * s;
}

// Menghitung volume balok
function hitungVolumeBalok(p, l, t) {
  return p * l * t;
}

// Menghitung volume tabung
function hitungVolumeTabung(j, t) {
  let volume = (22 / 7) * j * j * t;
  return volume;
}

// Menghitung volume bola
function hitungVolumeBola(j, j, j) {
  return (4 / 3) * Math.PI * j * j * j;
}

// Menghitung volume kerucut
function hitungVolumeKerucut(jariJari, jariJari, tinggi) {
  return (1 / 3) * Math.PI * jariJari * jariJari * tinggi;
}

// Menu pilihan
function tampilkanMenu() {
  let pilihan;
  let lanjut;
  do {
    console.log("--KALKULATOR VOLUME--");
    console.log("Pilih program yang ingin dijalankan:");
    console.log("1. Volume Kubus");
    console.log("2. Volume Balok");
    console.log("3. Volume Tabung");
    console.log("4. Volume Bola");
    console.log("5. Volume Kerucut");
    pilihan = parseInt(prompt("Masukkan nomor pilihan (1-5): "));
    switch (pilihan) {
      //Hitung Volume Kubus
      case 1:
        s = parseInt(prompt("Masukkan panjang sisi kubus: "));
        console.log(
          "Volume kubus dengan sisi " +
            s +
            " adalah " +
            hitungVolumeKubus(s, s, s)
        );
        break;
      //Hirung Volume Balok
      case 2:
        p = parseInt(prompt("Masukkan panjang balok: "));
        l = parseInt(prompt("Masukkan lebar balok: "));
        t = parseInt(prompt("Masukkan tinggi balok: "));
        console.log(
          "Volume balok dengan panjang " +
            p +
            ", lebar " +
            l +
            ", dan tinggi " +
            t +
            " adalah " +
            hitungVolumeBalok(p, l, t)
        );
        break;
      //Hitung Volume Tabung
      case 3:
        j = parseFloat(prompt("Masukkan jari-jari tabung: "));
        t = parseFloat(prompt("Masukkan tinggi tabung: "));
        console.log(
          "Volume tabung dengan jari-jari " +
            j +
            " dan tinggi " +
            t +
            " adalah " +
            hitungVolumeTabung(j, t)
        );
        break;
      //Hitung Volume Bola
      case 4:
        j = parseFloat(prompt("Masukkan jari-jari bola: "));
        console.log(
          "Volume bola dengan jari-jari " +
            j +
            " adalah " +
            hitungVolumeBola(j, j, j)
        );
        break;
      //Hitung Volume Kerucut
      case 5:
        jariJari = parseInt(prompt("Masukkan jari-jari kerucut: "));
        tinggi = parseInt(prompt("Masukkan tinggi kerucut: "));
        console.log(
          "Volume kerucut dengan jari-jari " +
            jariJari +
            " dan tinggi " +
            tinggi +
            " adalah " +
            hitungVolumeKerucut(jariJari, jariJari, tinggi)
        );
        break;
      default:
        console.log("Pilihan tidak valid. Silakan coba lagi.");
    }
    lanjut = prompt("Mau pilih yang lain? (Y/T)");
  } while (lanjut === "Y" || lanjut === "y");
  console.log("--PROGRAM SELESAI--");
}

// Memanggil fungsi tampilkanMenu()
tampilkanMenu();
