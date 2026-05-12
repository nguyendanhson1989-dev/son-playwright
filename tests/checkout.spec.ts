import { test, expect } from "@playwright/test";

test.describe("Module Checkout - Shard 2", () => {
  test("Add to cart", async ({ page }) => {
    // Navigate to the demo site
    await page.goto("https://demo.playwright.dev/todomvc/");

    // Artificial delay to simulate processing or visual check
    await page.waitForTimeout(5000);

    expect(true).toBe(true);
  });

  test("Enter shipping address", async ({ page }) => {
    // Navigate to the demo site
    await page.goto("https://demo.playwright.dev/todomvc/");

    // Artificial delay to simulate processing or visual check
    await page.waitForTimeout(5000);

    expect(true).toBe(true);
  });

  test("Confirm order", async ({ page }) => {
    // Navigate to the demo site
    await page.goto("https://demo.playwright.dev/todomvc/");

    // Artificial delay to simulate processing or visual check
    await page.waitForTimeout(5000);

    expect(true).toBe(true);
  });
});
