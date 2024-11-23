import { cn } from "@/utils/cn";
import { Input } from "../Input";
import { Search } from "lucide-react";
import { Typography } from "../typography";

const UpperFooter = () => {
  return (
    <div
      className={cn([
        "flex flex-col ",
        "md:flex md:flex-row md:items-center md:justify-between md:h-[100px] md:w-full md:gap-4",
        "lg:flex lg:items-center lg:justify-between lg:h-[100px] lg:w-full lg:gap-4",
      ])}
    >
      <div
        className={cn([
          "flex flex-col gap-4 w-full",
          "md:flex md:flex-col md:gap-4 md:w-2/3",
          "lg:flex lg:flex-col lg:gap-4 lg:w-2/3",
        ])}
      >
        <Typography variant={"h3"}>Our News Letter</Typography>
        <Typography
          variant={"p4"}
          className={cn(["w-full", "md:w-1/2 ", "lg:w-1/2 "])}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi
          cupiditate aliquam cumque,
        </Typography>
      </div>
      <div
        className={cn([
          "w-full flex flex-col gap-4",
          "md:w-1/3 md:flex md:flex-col md:gap-4",
          "lg:w-1/3 lg:flex lg:flex-col lg:gap-4 ",
        ])}
      >
        <div
          className={cn([
            "relative flex items-center justify-between   w-full ",
          ])}

          // "relative flex items-center max-w-[400px]"
        >
          <Search className="text-gray-200 absolute left-2" />
          <Input
            placeholder="Search"
            className={cn(["rounded-full border-none pl-10 text-text-dark"])}
            autoFocus
          />
        </div>
        <Typography variant={"p4"} className="font-semibold text-center">
          www.mywebsite.com
        </Typography>
      </div>
    </div>
  );
};
export default UpperFooter;
