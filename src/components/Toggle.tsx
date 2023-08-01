"use client";

import React from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export const Toggle: React.FC<{
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}> = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "bg-violet-600" : "bg-gray-200 dark:bg-gray-600",
        "relative inline-flex h-5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">Toggle Setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-3" : "translate-x-0",
          "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};
