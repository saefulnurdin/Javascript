//Menampilkan nama-nama Mahasiswa
let mahasiswa = [
  "Andrew",
  "Bob",
  "Clark",
  "David",
  "Ethan",
  "Fernando",
  "gabriel",
];
console.log(mahasiswa);
//Menambahkan nama mahasiswa
mahasiswa.push("Harlod", "Iglesias", "Jakson");
console.log(mahasiswa);
//menampilkan nama bob, david, dan fernando
console.log(mahasiswa[1], mahasiswa[3], mahasiswa[5]);
//Menghapus nama mahasiswa terakhir
mahasiswa.pop();
console.log(mahasiswa);
//hapus nama mahasiswa pertama
mahasiswa.shift();
console.log(mahasiswa);
mahasiswa.unshift("Andi");
console.log(mahasiswa);
