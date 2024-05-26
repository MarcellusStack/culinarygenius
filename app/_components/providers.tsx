"use client";
import React from "react";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { Notifications } from "@mantine/notifications";
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

const themeOverride = createTheme({
  primaryColor: "green",
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
};
