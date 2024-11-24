"use client"
import { cn } from "@/utils/cn";
import Link from "../Link";
import { Typography } from "../typography";
import { usePathname } from "next/navigation";
import { links } from "@/constant/navList";

const LinkList = () => {
  const pathname=usePathname()
  const currentPath=pathname.split("/").filter(e=>e)[0]
  


  return (
    <div 
    className={cn([
          "hidden",
          "md:flex  md:items-center md:gap-4  md:w-full px-4",
          "lg:flex lg:items-center lg:gap-4 lg:w-[60%] px-4",
        ])}
        >
      {links.map((e) => (
        <Link
          key={e?.link}
          href={e.path}
          
        >
          <div className={cn("px-4 pb-1 ",{"border-b-4 border-red-400":e.path===`/${currentPath}`})}>

          <Typography variant={"s1"}>{e?.link}</Typography>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
