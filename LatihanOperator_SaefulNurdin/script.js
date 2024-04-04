//Segitiga;
let alas = prompt("Masukkan Alas : ");
console.log("Alas Segitiga : " + alas);
let tinggi = prompt("Masukkan Tinggi : ");
console.log("Tinggi Segitiga : " + tinggi);
const luasSegitiga = 0.5 * alas * tinggi;
console.log("Luas Segitiga : " + luasSegitiga);

//Persegi Panjang
let panjang = 5;
let lebar = 5;
const luasPersegiPanjang = panjang * lebar;
console.log("Luas Persegi Panjang :", luasPersegiPanjang);

//Lingkaran
const phi = 3.14;
let r = 7;
const luaslingkaran = phi * (r * r);
console.log("Luas Lingkaran: " + luaslingkaran);

//Belah ketupat
let diagonal1 = 8;
let diagonal2 = 2;
const luasbelahketupat = 0.5 * diagonal1 + diagonal2;
console.log("Luas Belah Ketupat :", luasbelahketupat);

//Trapesium
let Pbawah = 8;
let Patas = 4;
let tinggiT = 2;
const Ltrapesium = 0.5 * Pbawah + Patas * tinggiT;
console.log("Luas Trapesium", Ltrapesium);
