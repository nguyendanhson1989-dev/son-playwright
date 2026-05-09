// path: models/Post.ts
import { z } from "zod";

// Định nghĩa cái khuôn cho Post
export const PostSchema = z.object({
  id: z.string(), // Phải là số
  title: z.string().min(1), // Phải là chữ và không được để trống
  body: z.string(), // Phải là chữ
  userId: z.number(), // Phải là số
});

// Tự động tạo Type từ Schema (đỡ phải viết interface thủ công)
export type Post = z.infer<typeof PostSchema>;
