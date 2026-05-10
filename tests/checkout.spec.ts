import { test, expect } from "@playwright/test";

test.describe("Module Checkout - Shard 2", () => {
  test("Thêm vào giỏ hàng", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");
    await page.waitForTimeout(5000);
    expect(true).toBe(true);
  });

  test("Nhập địa chỉ giao hàng", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");
    await page.waitForTimeout(5000);
    expect(true).toBe(true);
  });

  test("Xác nhận đơn hàng", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");
    await page.waitForTimeout(5000);
    expect(true).toBe(true);
  });
});
