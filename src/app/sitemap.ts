import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const ROUTES = ["", "/airport-taxi", "/outstation-taxi", "/fleet", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
