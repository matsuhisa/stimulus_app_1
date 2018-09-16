import { Controller } from "stimulus"

export default class extends Controller {

  static targets = [ "favorite" ]

  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }

  greet(event) {
    this.load()
    const elements = document.querySelectorAll('[data-book-id]');

    elements.forEach((element, index) => {
      console.log(element.getAttribute("data-book-id"));
    })
    // console.log("はい！", this.favoriteTargets);
    // const element = event.currentTarget.getAttribute("data-book-id")
    const element = event.currentTarget
    console.log("ID:", element.getAttribute("data-book-id"));
    element.classList.toggle("active")
    // console.log("はい！", element);
  }

  load() {
    fetch("https://qiita.com/api/v2/items?page=1&per_page=10")
      .then(response => response.json())
      .then((response) => {
        response.forEach((record, index) => {
          console.log(index);
        })
      })
  }

}
