"use client";

import { cn } from "@/shared/utils/cn";
import { Button } from "../Button";
import { Avatar } from "../Avatar";

const User = () => {
  return (
    <div
      className={cn([
        "md:flex md:items-center md:gap-3",
        "lg:flex lg:items-center lg:gap-3",
      ])}
    >
      <Button className="p-0" variant={"unstyled"}>
        <Avatar src="./user.png" name="Pankaj koirala" className="h-9 w-9" />
      </Button>
    </div>
  );
};

export default User;
