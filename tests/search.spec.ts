import { test, expect } from "@playwright/test";

test.describe("Module Search - Shard 1", () => {
  test("Tìm kiếm sản phẩm điện thoại", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");
    await page.waitForTimeout(5000); // Giả lập load trang
    expect(true).toBe(true);
  });

  test("Tìm kiếm sản phẩm máy tính", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");
    await page.waitForTimeout(5000);
    expect(true).toBe(true);
  });
});
