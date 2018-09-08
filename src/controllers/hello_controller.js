import { Controller } from "stimulus"
import { Favorite } from "../models/favorite.js"

export default class extends Controller {

  connect() {
    // console.log("Hello, Stimulus!", this.element);
    const favorite = new Favorite("kamonegi")
    console.log(favorite.greet());
  }
}
