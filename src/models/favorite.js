export default class {
  constructor(name) {
    this.name = name;
  }

  static foo() {
    console.log("favorite");
  }

  greet() {
    return `こんにちは。 ${this.name} です`;
  }
}
