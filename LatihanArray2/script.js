// Data nilai mahasiswa
const nilaiMahasiswa = [
  36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80,
  79,
];
// Fungsi untuk menentukan indeks berdasarkan skor
function menentukanIndexs(nilai) {
  if (nilai > 80) return "A";
  if (nilai > 70 && nilai <= 80) return "B";
  if (nilai > 55 && nilai <= 70) return "C";
  if (nilai > 45 && nilai <= 55) return "D";
  return "E";
}
// Fungsi untuk menampilkan skor dan indeks nilai
function tampilkanNilaiIndexes(nilai) {
  console.log("====================================");
  console.log("No\t\tNilai Ujian\t\tIndex Nilai");
  console.log("====================================");

  nilai.forEach((nilai, index) => {
    const nilaiIndex = menentukanIndexs(nilai);
    console.log(index + 1 + "\t\t\t" + nilai + "\t\t\t\t" + nilaiIndex);
  });
}
tampilkanNilaiIndexes(nilaiMahasiswa);
console.log("===================================");
