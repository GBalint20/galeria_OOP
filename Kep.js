export default class Kep {
  #cim;
  #src;
  #leiras;
  #index;
  constructor(index, cim, src, leiras, szuloElem) {
    this.#index = index;
    this.#cim = cim;
    this.#src = src;
    this.#leiras = leiras;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemenykezelo();
  }

  esemenykezelo() {
    /*Megfogjuk az adott objektumhoz tartozó kép elemet*/
    this.kepElem = document.querySelector(".kep:last-child");
    console.log(this.kepElem);
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);
      /*A kis Kép átadja azt az információ magáról, hogy ő hányadik a sorban, meg mondja, hogy ő kicsoda!*/
      /*Létrehozunk egy saját eseményt pl:("click")*/
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }

  megjelenit() {
    let html = `<div class="kep">
                        <img src="${this.#src}" alt="">
                    </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
