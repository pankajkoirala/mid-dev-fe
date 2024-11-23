"use client";

import { cn } from "@/utils/cn";

import { Bell } from "lucide-react";
import { Typography } from "../typography";

const Notifications = () => {
  // Example logic to consolidate notifications across pages for display

  return (
      <div className={cn([
            "relative hidden ",
            " md:flex md:cursor-pointer  md:items-center",
            " lg:flex lg:cursor-pointer lg:items-center",
          ])}>
        <Bell
          className={cn([
            "text-white dark:text-white cursor-pointer h-5 w-5 ",
            "md:w-5 md:h-5",
            "lg:w-6 lg:h-6",
          ])}
        />

        <Typography
          className={cn([
            "p-0.5 min-h-5 w-5 h-5 min-w-5 font-semibold rounded-full flex bg-[#faca00] items-center justify-center absolute top-[-10px] right-[-8px]",
          ])}
          variant="p6"
        >
          12
        </Typography>
      </div>
  );
};

export default Notifications;
