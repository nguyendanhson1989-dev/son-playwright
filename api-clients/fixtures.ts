// path: api-clients/fixtures.ts
import { test as base } from "@playwright/test";
import { PostClient } from "./PostClient";

// 1. Định nghĩa danh sách các Fixtures bạn có
type MyFixtures = {
  postClient: PostClient;
};

// 2. Mở rộng 'test' gốc để tích hợp PostClient
export const test = base.extend<MyFixtures>({
  // Playwright sẽ tự động chạy logic này mỗi khi bạn gọi 'postClient' trong test
  postClient: async ({ request }, use) => {
    // Khởi tạo Object (Tương đương bước Arrange tập trung)
    const client = new PostClient(request);

    // 'use' đưa client vào bài test.
    // Sau lệnh 'use', bạn có thể viết code teardown (dọn dẹp) nếu muốn.
    await use(client);
  },
});

// Export thêm expect để file test chỉ cần import từ 1 chỗ duy nhất
export { expect } from "@playwright/test";
