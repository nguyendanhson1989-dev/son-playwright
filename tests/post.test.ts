// path: tests/post.test.ts
import { test, expect } from "../api-clients/fixtures";
import { PostSchema } from "../models/Post";
import { getAuthToken } from "../utils/auth-helper";

test("GET - Verify API response structure", async ({ postClient }) => {
  console.log("Current Token:", getAuthToken());

  const response = await postClient.getPost(1);
  const body = await response.json();

  const result = PostSchema.safeParse(body);

  console.log("--- INJECTED TOKEN DETAILS ---");
  console.log(response);
  console.log("------------------------------");

  if (!result.success) {
    // Generate a "tree" structure from the list of validation issues
    const errorTree = result.error.issues
      .map((issue) => `└── Field [${issue.path.join(".")}]: ${issue.message}`)
      .join("\n");

    console.error("❌ Schema Validation Error (Tree Format):\n" + errorTree);

    // Attach to expect so errors are clearly visible in GitHub Actions/CI reports
    expect(result.success, `\nSchema Error Tree:\n${errorTree}`).toBe(true);
  } else {
    expect(result.success).toBe(true);
  }

  // Optional: Specific value assertion
  expect(body.id).toBe(1);
});
