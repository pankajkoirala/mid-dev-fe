import { cn } from "@/utils/cn";
import Link from "../Link";
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
          "md:flex  md:items-center md:gap-4  md:w-full px-4",
          "lg:flex lg:items-center lg:gap-4 lg:w-[60%] px-4",
        ])}
        >
      {links.map((e) => (
        <Link
          key={e?.link}
          href="/home"
          
        >
          <div className="px-4">

          <Typography variant={"s1"}>{e?.link}</Typography>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
