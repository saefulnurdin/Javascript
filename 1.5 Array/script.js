const angka = new Array([1, 3, 5, 7, 9]);
console.log(angka);

const angka2 = new Array(5);
console.log(angka2);

const angka3 = [2, 4, 6, 8, 10];
console.log(angka3);

//cara menampilkan array
console.log([0]); //1
console.log([1]); //2
console.log([2]); //3

// cara menampilkan array part2
for (let i = 0; i < angka.length; i++) {
  console.log("index ke- " + i + " = " + angka[i]);
}

//cara menambahkan isi kedalam array
angka2[0] = 5;
angka2[1] = 12;
angka2[2] = 17;
angka2[3] = 21;
angka2[4] = 28;
console.log(angka2);

//cara menghapus elemnet array
angka3[2] = undefined;
angka3[4] = undefined;
//cara kedua menghapus element array
delete angka3[0];
delete angka3[1];
delete angka3[3];
console.log(angka3);

const s1 = 8;
const s2 = 5;
const s3 = 10;
const s4 = 6;
const s5 = 7;
const s6 = 3;

const volumes1 = s1 * s1 * s1;
const volumes2 = s2 * s2 * s2;
const volumes3 = s3 * s3 * s3;
const volumes4 = s4 * s4 * s4;
const volumes5 = s5 * s5 * s5;
const volumes6 = s6 * s6 * s6;

let total = volumes1 + volumes2;
total = volumes3 + volumes4;
total = volumes5 + volumes6;
console.log(total);

function namaFungsi(a, b) {
  console.log(a + " suka " + b);
}
namaFungsi("abel", "topan");
