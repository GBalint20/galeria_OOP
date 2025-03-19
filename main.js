import Kep from "./Kep.js";
import Kepek from "./Kepek.js";
import NagyKep from "./NagyKep.js";
import { objlista } from "./tomb.js";
import LeptetesKezelo from "./LeptetesKezelo.js";

let szuloElem = document.getElementsByClassName("galeria")[0];

const KEPEK = new Kepek(objlista, szuloElem);

let nkep = document.getElementsByClassName("kiemelt")[0];

new LeptetesKezelo(objlista, nkep);

/* let k1 = new Kep(obj[0].cim, obj[0].src, szuloElem); */

// const n1 = new Kep(objlista[0].cim, objlista[0].src,objlista[0].leiras, nkep)
