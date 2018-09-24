export default class Favorite {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `こんにちは。 ${this.name} です`;
  }
}
