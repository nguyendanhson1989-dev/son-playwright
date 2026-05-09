import { test, expect } from '@playwright/test';

// Định nghĩa Interface để tận dụng sức mạnh của TypeScript
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

test.describe('API Testing với Playwright TS', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET - Kiểm tra lấy thông tin bài viết thành công', async ({ request }) => {
    // Gửi request GET
    const response = await request.get(`${baseURL}/posts/1`);

    // 1. Validate Status Code (Post-condition)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    // 2. Validate Response Body
    const body: Post = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toContain('sunt aut facere');
  });

  test('POST - Tạo mới một bài viết và verify server-side', async ({ request }) => {
    const newPost = {
      title: 'Senior QA tại NAB',
      body: 'Lộ trình 7 mục tiêu phỏng vấn',
      userId: 75
    };

    const response = await request.post(`${baseURL}/posts`, {
      data: newPost
    });

    // Validate Post-condition
    expect(response.status()).toBe(201);
    const result = await response.json();
    expect(result.title).toBe(newPost.title);
  });
});