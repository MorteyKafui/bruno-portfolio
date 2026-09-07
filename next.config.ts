import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Instant navigation strategy (project-plan 8.9): every locale route is
  // prerendered and prefetched as static content. Cache Components stay off
  // until dynamic, personalized content exists.
};

export default withNextIntl(nextConfig);
