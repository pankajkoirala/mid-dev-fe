"use client";

import { cn } from "@/shared/utils/cn";

import {  Menu } from "lucide-react";

const Hamburger = () => {
  // Example logic to consolidate notifications across pages for display

  return (
      <div className={cn([
            "flex cursor-pointer items-center ",
            "md:hidden ",
            "lg:hidden ",
          ])}>
        <Menu
          className={cn([
            "text-white dark:text-white cursor-pointer h-5 w-5 ",
            "md:w-6 md:h-6",
            "lg:w-6 lg:h-6",
          ])}
        />

       
      </div>
  );
};

export default Hamburger;
