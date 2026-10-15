import { describe, it, expect } from "vitest";
import { getApiUrl } from "../lib/api";

describe("getApiUrl", () => {
  it("monta a URL do endpoint de health", () => {
    process.env.NEXT_PUBLIC_API_URL = "http://localhost:8000";
    expect(getApiUrl()).toBe("http://localhost:8000/api/health/");
  });

  it("funciona sem variável definida (URL relativa)", () => {
    delete process.env.NEXT_PUBLIC_API_URL;
    expect(getApiUrl()).toBe("/api/health/");
  });
});
