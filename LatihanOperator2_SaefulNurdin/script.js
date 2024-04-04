//Balok
let panjangB = 8;
let lebarB = 6;
let tinggiB = 3;
const vbalok = panjangB * lebarB * tinggiB;
const LPbalok = 2 * (panjangB * lebarB + panjangB * tinggiB + lebarB * tinggiB);
console.log("Volume Balok Dan Luas Permukaan Balok :", vbalok, LPbalok);

//Kubus
let panjangsisi = 6;
const volumeKubus = panjangsisi * panjangsisi * panjangsisi;
console.log("Total Volume Kubus :", volumeKubus);

//Tabung
let alas = 8;
let tinggi = 10;
const phi = 3.14;
const tabung = phi * alas * alas * tinggi;
console.log("Total Volume Tabung :", tabung);

//Kerucut
let Jkerucut = 7;
let Tkerucut = 21;
let Klingkaran = 3.14159;
const Vkerucut = 0.33 * Klingkaran * Jkerucut * Jkerucut * Tkerucut;
console.log("Total kerucut adalah :", Vkerucut);

//Bola
let jariJariB = 18;
const bola = (4 / 3) * phi * (jariJariB * jariJariB * jariJariB);
console.log("Volume bola adalah : ", bola);

//operator unary (+, - , ++, --)
//incrment yaitu ++ untuk menambahkan 1 ke dalam angka sebelumnya
//decremnt yiut -- untuk mengurangi 1 dari angka sebelumnya

//logika and:
//console.log(10%2===1 && 10/5===2)
//terue true = true
//true and false = false
//false and true = false
//false and false = false

//logika or:
//true || true =true
//true || false =true
//false || true =true
//false || false =true

//operator ternary
//const password ="luwakwhitecoffe";
//const islogin = password == "luwakwhitecoffe" ? "selamat anda mendapatkan 2 juta" : "maaf kamu kurang beruntung";
//console.log(islogin);
