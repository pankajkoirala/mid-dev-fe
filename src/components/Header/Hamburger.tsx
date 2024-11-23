"use client";

import { cn } from "@/utils/cn";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../Drawer";
import { Button } from "../Button";
import Logo from "./logo";
import { Separator } from "../Separator";
import Link from "../Link";
import { links } from "@/constant/navList";

const Hamburger = () => {
  // Example logic to consolidate notifications across pages for display

  return (
    <>
      <Sheet>
        <SheetTrigger
          asChild
          className={cn(["flex p-0 ", "md:hidden ", "lg:hidden "])}
        >
          <Button variant="unstyled">
            <div
              className={cn([
                "flex cursor-pointer items-center ",
                "md:hidden ",
                "lg:hidden ",
              ])}
            >
              <Menu
                className={cn([
                  "text-white dark:text-white cursor-pointer h-5 w-5 ",
                  "md:w-12 md:h-12",
                  "lg:w-12 lg:h-12",
                ])}
              />
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <Separator className="bg-secondary" />

        
          </SheetHeader>
          <div className="grid  py-4">
          {links?.map((e)=>(

            <div key={e.path} className="p-2  hover:bg-secondary rounded cursor-pointer hover:underline text-text-dark">
            <Link href={e?.path}>{e.link}</Link>
            </div>
          ))}
            
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Hamburger;
