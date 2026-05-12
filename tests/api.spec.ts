import { test, expect } from "@playwright/test";

test.describe("Module API - Shard 3", () => {
  test("Get user list", async ({ request }) => {
    // Perform GET request to fetch users
    await request.get("https://reqres.in/api/users");

    // Simulate waiting for response or UI processing
    await test.step("Waiting for response", async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });

    expect(true).toBe(true);
  });

  test("Create new user", async ({ request }) => {
    // Perform POST request to create a user
    await request.post("https://reqres.in/api/users", {
      data: { name: "Son" },
    });

    // Simulate waiting for response or UI processing
    await test.step("Waiting for response", async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });

    expect(true).toBe(true);
  });
});
