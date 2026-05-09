// path: tests/post.test.ts
import { test, expect } from "../api-clients/fixtures";
import { PostSchema } from "../models/Post";
import { getAuthToken } from "../utils/auth-helper";

test("GET - Kiểm tra cấu trúc API trả về", async ({ postClient }) => {
  console.log("Token hiện tại:", getAuthToken());
  const response = await postClient.getPost(1);
  const body = await response.json();

  const result = PostSchema.safeParse(body);
  const a = response.headers();
  console.log("--- ĐÂY LÀ TOKEN ĐÃ INJECT ---");
  console.log(response);
  console.log("------------------------------");

  if (!result.success) {
    // Tự tạo cấu trúc "cây" từ danh sách issues
    const errorTree = result.error.issues
      .map((issue) => `└── Field [${issue.path.join(".")}]: ${issue.message}`)
      .join("\n");

    console.error("❌ Lỗi cấu trúc Schema (Dạng cây):\n" + errorTree);

    // Gắn vào expect để khi chạy CI/CD trên GitHub nhìn thấy lỗi ngay
    expect(result.success, `\nSchema Error Tree:\n${errorTree}`).toBe(true);
  } else {
    expect(result.success).toBe(true);
  }
  // Vẫn có thể check giá trị cụ thể nếu muốn
  expect(body.id).toBe(1);
});
