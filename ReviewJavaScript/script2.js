console.log("--LATIHAN 2--");
// Mengulang angka 1 hingga 100
for (let i = 1; i <= 100; i++) {
  // Jika sebuah angka habis dibagi 3 dan 5, maka akan muncul "FizzBuzz".
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    // Jika sebuah angka habis dibagi 3, maka akan muncul "Fizz".
  } else if (i % 3 === 0) {
    console.log("Fizz");
    // Jika sebuah angka habis dibagi 5, maka akan tercetak "Buzz".
  } else if (i % 5 === 0) {
    console.log("Buzz");
    // Jika tidak, ia akan mencetak angka itu sendiri.
  } else {
    console.log(i);
  }
}
