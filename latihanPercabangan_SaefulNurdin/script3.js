const tahun = prompt("Masukkan Tahun : ");
if (tahun >= 1945 && tahun <= 1965) {
  console.log("Tahun Lahir : " + tahun + " Baby Boomer");
} else if (tahun >= 1966 && tahun <= 1979) {
  console.log("Generasi X");
} else if (tahun >= 1980 && tahun <= 1994) {
  console.log("Tahun Lahir : " + tahun + " Generasi Y");
} else if (tahun >= 1995 && tahun <= 2015) {
  console.log("Tahun Lahir : " + tahun + " Generasi Z");
} else {
  console.log("Tidak Diketahui!");
}
