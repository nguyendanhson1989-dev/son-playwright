import { test, expect } from "@playwright/test";

// Định nghĩa Interface để tận dụng sức mạnh của TypeScript
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

test.describe("GET operation", () => {
  const baseURL = "https://cdr.apix.anz/cds-au/v1";

  // test("GET - Kiểm tra lấy thông tin bài viết thành công", async ({
  //   request,
  // }) => {
  //   // Gửi request GET
  //   const response = await request.get(`${baseURL}/banking/products`, {
  //     headers: { "x-v": "3" },
  //   });

  //   // 1. Validate Status Code (Post-condition)
  //   expect(response.status()).toBe(200);

  //   // 2. Validate Response Body
  //   const body = await response.json();
  //   //   expect(body.id).toBe(1);
  //   // expect(body.title).toContain('sunt aut facere');
  //   console.log(body);
  //   const productIds = body.data.products.map((p: any) => p.productId);
  //   console.log(productIds);
  // });

  test("Using the same BASE_URL, perform a `GET` operation on the endpoint ", async ({
    request,
  }) => {
    // Gửi request GET
    const response = await request.get(
      `${baseURL}/banking/products/TRANSACT01`,
      {
        headers: { "x-v": "5" },
        //  accept: "application/json",
      },
    );

    // 1. Validate Status Code (Post-condition)
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.productId);

    // // 2. Validate Response Body
    // const body = await response.json();
    expect(body.data.productId).toMatch("TRANSACT01");
    expect(body.data.productCategory).toMatch("TRANS_AND_SAVINGS_ACCOUNTS");
    expect(body.data.name).toMatch("ANZ Plus Everyday");
    expect(body.data.isTailored).toBe(false);

    // // expect(body.title).toContain('sunt aut facere');
    // console.log(body);
    const features = body.data.features.map((p: any) => p.featureType);
    console.log(features);
  });
});
