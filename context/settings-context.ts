"use client";
import { createContext, useContext } from "react";

import { Settings } from "@/types";

export const SettingsContext = createContext<Settings | undefined>(undefined);

export const useSettingsContext = () => {
  const settings = useContext(SettingsContext);

  if (settings === undefined) {
    throw new Error("useSettings must be used with a SettingsContext");
  }

  return settings;
};
