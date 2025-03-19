import NagyKep from "./NagyKep.js";

export default class LeptetesKezelo {
  #aktIndex;
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.#aktIndex = 0;
    this.szuloElem = szuloElem;
    this.jobbGombElem = document.getElementsByClassName("jobb")[0];

    this.esemenykezelo();
    this.kiskepkezeles();
    this.peldanyositas();
  }

  peldanyositas() {
    const NAGYKEP = new NagyKep(
      this.#lista[this.#aktIndex].cim,
      this.#lista[this.#aktIndex].src,
      this.#lista[this.#aktIndex].leiras,
      this.szuloElem
    );
  }

  kiskepkezeles() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      this.#aktIndex = event.detail;
      this.peldanyositas();
    });
  }

  esemenykezelo() {
    this.jobbGombElem.addEventListener("click", () => {
      this.#aktIndex++;
      this.#aktIndex = this.#aktIndex % this.#lista.length;
      this.peldanyositas();
    });
  }
}
