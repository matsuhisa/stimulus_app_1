import { Controller } from "stimulus"

export default class extends Controller {

  static targets = [ "favorite" ]

  greet(event) {
    const element = event.currentTarget
    this.toogle(element)
  }

  toogle(element) {
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
