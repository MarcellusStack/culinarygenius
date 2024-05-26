/** @type {import('next').NextConfig} */

import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
};

export default withSentryConfig(nextConfig, {
  org: "culinarygenius",
  project: "javascript-nextjs",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs
});
