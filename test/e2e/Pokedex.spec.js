const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5000')
  })
  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('can navigate from main page to pokemon page', async ({ page }) => {
    await page.getByRole('link', { name: 'pikachu' }).click()
    await expect(page.getByText('solar power')).toBeVisible()
  })
})
