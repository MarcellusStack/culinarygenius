"use client";
import React from "react";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { Notifications } from "@mantine/notifications";
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

const themeOverride = createTheme({
  primaryColor: "green",
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    debug: process.env.NODE_ENV === "development",
  });
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PostHogProvider client={posthog}>
      <MantineProvider theme={theme}>
        <Notifications />
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    </PostHogProvider>
  );
};
