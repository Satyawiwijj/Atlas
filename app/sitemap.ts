import type { MetadataRoute } from "next";

const BASE_URL = "https://nylor.tech";
const ROUTES = ["", "/work", "/services", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
