// tests/auth.setup.ts
import { test as setup } from "@playwright/test";
import fs from "fs";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        username: "admin",
        password: "password123",
      },
    },
  );

  console.log("📊 Status Code:", response.status());
  const body = await response.json();

  // If status is not 200, log the body to check for errors (e.g., missing API keys)
  if (response.status() !== 200) {
    console.log("📦 Error Body:", body);
  }

  const realToken = body.token;

  if (!realToken) {
    console.error(
      "❌ Error: Server did not return a token. Check the Full Body log above!",
    );
    return;
  }

  console.log("🚀 Valid Token received:", realToken);

  const storageState = {
    cookies: [],
    origins: [
      {
        origin: "https://restful-booker.herokuapp.com",
        localStorage: [{ name: "token", value: realToken }],
      },
    ],
  };

  fs.writeFileSync(authFile, JSON.stringify(storageState, null, 2));
  console.log("✅ Auth file written successfully!");
});
