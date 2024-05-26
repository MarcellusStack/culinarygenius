/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
};

export default withSentryConfig(withNextIntl(nextConfig), {
  org: "culinarygenius",
  project: "javascript-nextjs",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs
});
