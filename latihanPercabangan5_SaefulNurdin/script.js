const no_bulan = prompt("Masukan nomer bulan:");
let bulan;
switch (no_bulan) {
  case "1":
    bulan = "Januari";
    break;
  case "2":
    bulan = "Februari";
    break;
  case "3":
    bulan = "Maret";
    break;
  case "4":
    bulan = "April";
    break;
  case "5":
    bulan = "Mei";
    break;
  case "6":
    bulan = "Juni";
    break;
  case "7":
    bulan = "Juli";
    break;
  case "8":
    bulan = "Agustus";
    break;
  case "9":
    bulan = "September";
    break;
  case "10":
    bulan = "Oktober";
    break;
  case "11":
    bulan = "November";
    break;
  case "12":
    bulan = "Desember";
    break;
  default:
    console.log("nomer tidak tersedia");
    break;
}
console.log("Bulan ke " + no_bulan + " adalah " + bulan);
