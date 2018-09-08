import { Favorite } from "../src/models/favorite"

describe('#greet', () => {
  it('', () => {
    const favorite = new Favorite("foo")
    expect(favorite.greet()).toBe("こんにちは。 foo です");
  })
})
