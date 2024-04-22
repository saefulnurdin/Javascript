const mahasiswa = {
  //key-value pair (pansangan kunci nilai)
  nama: "Alwan Hibatullah",
  nim: "22424005",
  umur: 19,
};
// console.log(mahasiswa.nama);
// console.log(mahasiswa.nim);
// console.log(mahasiswa.umur);
//menambhakan property
mahasiswa["alamat"] = "Rawagabus Pos";
mahasiswa["tlp"] = "08577635439";
mahasiswa["sapa"] = function () {
  console.log("Hello Nama Saya Alwan");
};
console.log(mahasiswa.alamat);
console.log(mahasiswa.tlp);
//memanggil properti functio di dalam object
console.log(mahasiswa.sapa());
//menghapus properti object
delete mahasiswa["umur"];
console.log(mahasiswa);
//array of object
const siswaBLK = [
  {
    nama: "Taoupik Nurhidayat",
    alamat: "Baduy",
    umur: "35",
  },
  {
    nama: "Faisal",
    alamat: "Telagasari",
    umur: "32",
  },
  {
    nama: "Naufal Zian A.",
    alamat: "Kosambi",
    umur: "32",
  },
];
console.log(
  "Hallo, nama saya " +
    siswaBLK[1].nama +
    ", alamat di " +
    siswaBLK[1].alamat +
    ", umur saya " +
    siswaBLK[1].umur
);
