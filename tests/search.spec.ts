import { test, expect } from "@playwright/test";

test.describe("Module Search - Shard 1", () => {
  test("Search for phone products", async ({ page }) => {
    // Navigate to the demo site
    await page.goto("https://demo.playwright.dev/todomvc/");

    // Simulate page loading time
    await page.waitForTimeout(5000);

    expect(true).toBe(true);
  });

  test("Search for computer products", async ({ page }) => {
    // Navigate to the demo site
    await page.goto("https://demo.playwright.dev/todomvc/");

    // Artificial delay for demonstration
    await page.waitForTimeout(5000);

    expect(true).toBe(true);
  });
});
