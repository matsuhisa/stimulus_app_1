import { Controller } from "stimulus"

export default class extends Controller {

  static targets = [ "favorite" ]

  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }

  greet(event) {
    // const elements = document.querySelectorAll('[data-book-id]');
    // elements.forEach((element, index) => {
    //   console.log(element.getAttribute("data-book-id"));
    // })

    const element = event.currentTarget
    this.toogle(element)
  }

  toogle(element) {
    // console.log("ID:", element.getAttribute("data-book-id"));
    this.load(() => {
      element.classList.toggle("active")
    })
  }

  load(func, foo) {
    fetch("https://qiita.com/api/v2/items?page=1&per_page=10")
      .then(response => response.json())
      .then((response) => {
        response.forEach((record, index) => {
          console.log(index);
        })
        func()
      })
  }

}
