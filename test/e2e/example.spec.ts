const { test, describe, expect, beforeEach, Page } = require("@playwright/test")

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }: { page: typeof Page }) => {
    await page.goto("http://localhost:5000")
    await expect(page.getByText("ivysaur")).toBeVisible()
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible()
  })
})
