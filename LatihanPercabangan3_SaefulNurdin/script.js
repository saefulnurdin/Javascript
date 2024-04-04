const totalBelanja = prompt("Total belanja: ");
console.log("Total belanja = " + totalBelanja);
if (totalBelanja < 100000) {
  console.log("Terimakasih sudah berbelanja!");
  console.log("Total bayar = " + totalBelanja);
} else if (totalBelanja >= 100000 && totalBelanja < 500000) {
  console.log("Selamat Anda mendapatkan diskon 10%");
  console.log("Total bayar = " + (totalBelanja - totalBelanja * 0.1));
} else if (totalBelanja >= 500000 && totalBelanja < 1000000) {
  console.log("Selamat Anda mendapatkan diskon 20%");
  console.log("Total bayar = " + (totalBelanja - totalBelanja * 0.2));
} else if (totalBelanja >= 1000000) {
  console.log("Selamat Anda mendapatkan diskon 30%");
  console.log("Total bayar = " + (totalBelanja - totalBelanja * 0.3));
}
