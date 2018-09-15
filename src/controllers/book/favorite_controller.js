import { Controller } from "stimulus"

export default class extends Controller {

  static targets = [ "favorite" ]

  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }

  greet(event) {
    const elements = document.querySelectorAll('[data-book-id]');
    console.log(elements);
    // elements.forEach((element, index) => {
    //   console.log(element);
    // })
    // console.log("はい！", this.favoriteTargets);
    // const element = event.currentTarget.getAttribute("data-book-id")
    const element = event.currentTarget
    element.classList.toggle("active")
    // console.log("はい！", element);
  }
}
