"use client";
import { Button, ButtonProps } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import React from "react";

type ButtonActionProps = ButtonProps & {
  values: { [key: string]: any };
};

export const ButtonAction = ({ values, ...props }: ButtonActionProps) => {
  return (
    <Button
      onClick={() => {
        throw new Error("This is a test error");
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
