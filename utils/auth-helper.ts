// utils/auth-helper.ts
import fs from "fs";

export function getAuthToken() {
  try {
    const authFile = "playwright/.auth/user.json";
    const authData = JSON.parse(fs.readFileSync(authFile, "utf-8"));

    // Tìm đúng origin của restful-booker mà bạn vừa lưu
    const originData = authData.origins.find(
      (o: any) => o.origin === "https://restful-booker.herokuapp.com",
    );

    const tokenItem = originData?.localStorage.find(
      (item: any) => item.name === "token",
    );
    return tokenItem?.value || "";
  } catch (error) {
    return "";
  }
}
