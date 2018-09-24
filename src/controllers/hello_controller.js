import { Controller } from 'stimulus';
import { Favorite } from "../models/favorite.js"

export default class extends Controller {
  connect() {
    const favorite = new Favorite('kamonegi');
    console.log(favorite.greet());
  }
}
