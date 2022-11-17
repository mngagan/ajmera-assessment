import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('heading', { name: 'Dashboard' }).click()
  await page.getByText('Page 1').click()
  await page.getByText('Page 1').click({
    button: 'right'
  })
  await page.getByTestId('LightModeIcon').click()
  await page.getByRole('button', { name: 'Add' }).click()
  await page.getByRole('button', { name: 'Submit' }).click()
  await page.getByLabel('First Name').click()
  await page.getByLabel('First Name').fill('test123')
  await page.getByLabel('Last Name').click()
  await page.getByLabel('Last Name').fill('test234')
  await page.getByLabel('Email Address').click()
  await page.getByLabel('Email Address').fill('test@test.com')
  await page.getByRole('button', { name: 'Submit' }).click()
  await page.getByRole('alert').click()
})
