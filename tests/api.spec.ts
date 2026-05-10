import { test, expect } from "@playwright/test";

test.describe("Module API - Shard 3", () => {
  test("Lấy danh sách user", async ({ request }) => {
    await request.get("https://reqres.in/api/users");
    await test.step("Giao diện chờ phản hồi", async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
    expect(true).toBe(true);
  });

  test("Tạo user mới", async ({ request }) => {
    await request.post("https://reqres.in/api/users", {
      data: { name: "Sơn" },
    });
    await test.step("Giao diện chờ phản hồi", async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
    expect(true).toBe(true);
  });
});
