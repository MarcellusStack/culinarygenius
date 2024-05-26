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
        notifications.show({
          title: "Default notification",
          message: "Hey there, your code is awesome! 🤥",
        });
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
