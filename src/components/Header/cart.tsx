"use client";

import { cn } from "@/utils/cn";

import {  ShoppingCart } from "lucide-react";

const Cart = () => {
  // Example logic to consolidate notifications across pages for display

  return (
        <div className={cn([
            "relative hidden ",
            " md:flex md:cursor-pointer  md:items-center",
            " lg:flex lg:cursor-pointer lg:items-center",
          ])}>
        <ShoppingCart 
          className={cn([
            "text-white dark:text-white cursor-pointer h-5 w-5",
            "md:w-5 md:h-5",
            "lg:w-6 lg:h-6",
          ])}
        />
      </div>
  );
};

export default Cart;
