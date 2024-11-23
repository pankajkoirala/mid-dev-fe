import { cn } from "@/utils/cn";
import Link from "../link";
import { Typography } from "../typography";

const LinkList = () => {
  const links = [
    { link: "HOME", path: "" },
    { link: "PRODUCTS", path: "" },
    { link: "CATEGORY", path: "" },
    { link: "CONTACT US", path: "" },
  ];

  return (
    <div 
    className={cn([
          "hidden",
          "md:flex  md:items-center md:justify-between md:w-full px-4",
          "lg:flex lg:items-center lg:justify-between  lg:w-[60%] px-4",
        ])}
        >
      {links.map((e) => (
        <Link
          key={e?.link}
          href="/home"
        >
          <Typography variant={"s1"}>{e?.link}</Typography>
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
