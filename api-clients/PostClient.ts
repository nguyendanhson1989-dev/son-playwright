// api-clients/PostClient.ts
import { APIRequestContext } from "@playwright/test";
import { Post } from "../models/Post";

export class PostClient {
  private request: APIRequestContext;
  private endpoint = "/posts";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getPost(id: number) {
    return await this.request.get(`${this.endpoint}/${id}`);
  }

  async createPost(data: Post) {
    return await this.request.post(this.endpoint, { data });
  }
}
