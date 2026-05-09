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

  // Nếu vẫn bị 401, hãy thử log ra để xem nó có còn đòi x-api-key không
  if (response.status() !== 200) {
    console.log("📦 Body lỗi:", body);
  }

  const realToken = body.token;

  if (!realToken) {
    console.error(
      "❌ Lỗi: Server không trả về token. Kiểm tra lại Full Body ở trên!",
    );
    return;
  }

  console.log("🚀 Token thật lấy từ ReqRes:", realToken);

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
  console.log("✅ Đã ghi file thành công!");
});
