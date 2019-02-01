import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "animeElement" ]

  fadeIn() {
    console.log("fadeIn");
    this.animeElementTarget.classList.toggle('-fade-in')
  }
}
